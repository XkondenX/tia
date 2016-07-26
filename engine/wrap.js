'use strict';

/* globals gIn: true */
/* globals gT: true */

var promise = gT.sOrig.promise;
var flow = gT.sOrig.flow;

/**
 * Starts the timer to track action time.
 *
 * @returns {*|Array}
 */
function startTimer() {
  if (gIn.config.enableTimings) {
    return process.hrtime();
  }
}

/**
 * Stops the timer which tracks action time.
 *
 * @param startTime
 * @returns {*} - time diff in milliseconds
 * @private
 */
function stopTimer(startTime) {
  if (gIn.config.enableTimings) {
    var diff = process.hrtime(startTime);
    return ' (' + (diff[0] * 1000 + diff[1] / 1e6) + ' ms)';
  }
  return '';
}

/**
 * Pauses execution flow. Time interval is specified in config.
 */
function *pause() {
  if (gIn.config.selActionsDelay !== 0) {
    yield flow.timeout(gIn.config.selActionsDelay);
  }
}

/**
 * Measures time from action start, pauses (if needed) execution, then prints 'OK'.
 * @param logAction
 * @param startTime
 * @param noConsoleAndExceptions
 */
function *pauseAndLogOk(logAction, startTime, noConsoleAndExceptions) {
  var timeDiff = stopTimer(startTime);
  yield *pause();
  yield gIn.logger.logIfNotDisabled('OK' + timeDiff + '\n', logAction);

  if (noConsoleAndExceptions) {
    return;
  }
  if (gIn.config.selPrintClExcAfterEachCommand) {
    yield gT.s.browser.logExceptions();
  }

  if (gIn.config.selPrintClConsoleAfterEachCommand) {
    yield gT.s.browser.logConsoleContent();
  }
}

/**
 * Wraps Selenium actions for:
 * logging
 * time measurement purposes.
 * inserts pauses between actions for testing purpose.
 *
 * @param msg - a message to log.
 * @param logAction - is logging enabled.
 * @param act - function - generator.
 * @param noConsoleAndExceptions
 * @returns {*} - Promise will be resolved to value or to exception.
 * @private
 */
module.exports = function (msg, logAction, act, noConsoleAndExceptions) {
  gIn.tracer.trace3('Inside wrapper, before start timer,  msg: ' + msg);
  var startTime;
  flow.execute(function () {
    gIn.logger.logIfNotDisabled(msg, logAction);
    startTime = startTimer();
    gIn.tracer.trace3('Inside wrapper, after start timer, msg: ' + msg);
  });
  return flow.execute(function () {
    var actResult = act();
    if (!actResult || !actResult.then) { // If result is not promise.
      return actResult;
    }
    var tId = setTimeout(function () {
      gIn.logger.error('\nControlFlow state: \n' + flow.getSchedule(true) + '\n');
      // flow.reset();
      gT.s.browser.screenshot(); // If screenshot will hang - will be recursion until max screenshots count.
      // gT.s.browser.screenshot(); // If screenshot will hang - will be recursion until max screenshots count.
      // flow = gT.sOrig.promise.controlFlow();
      // gIn.logger.error('\nControlFlow state (after reset): ' + flow.getSchedule(true) + '\n');
      actResult.cancel('Timeout expired, your action is considered as hanged.');
    }, gIn.params.hangTimeout);
    // http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/promise_exports_Promise.html
    // since thenFinally documentation says that it returns result of callback and not original promise,
    // I am really don't know what this function is needed for.
    return actResult
      .then(function (res) {
        clearTimeout(tId);
        return res;
      })
      .catch(function (err) {
        clearTimeout(tId);
        throw err; // TODO: Check that selenium-webdriver implementation indeed complain to the PromiseA+ standard.
      });

    // return new gT.sOrig.promise.Promise(function (resolve, reject) {
    //   // Engine constant, reset by cmd line options.
    //   var tId = setTimeout(function () {
    //     gT.s.browser.screenshot(); // If screenshot will hang - will be recursion until max screenshots count.
    //     reject('Timeout expired, your action is considered as hanged.');
    //   }, gIn.params.hangTimeout);
    //   actResult
    //     .then(function (value) {
    //       clearTimeout(tId);
    //       resolve(value)
    //     })
    //     .catch(function (err) {
    //       clearTimeout(tId);
    //       reject(err);
    //     });
    // });
  })
    .then(
      function (val) {
        gIn.tracer.trace3('Wrapper: after action execute, msg: ' + msg);
        flow.execute(function *() {
          gIn.tInfo.addPass(); // will be taken from global sandbox.
          yield *pauseAndLogOk(logAction, startTime, noConsoleAndExceptions);
        });
        return val; // This value will be returned from yield.
      },
      function (err) {
        gIn.tInfo.addFail();
        gIn.logger.errorln('Act.Wrapper.FAIL' + stopTimer(startTime));
        gIn.logger.errorln('========== Err Info Begin ==========');
        gIn.logger.exception('Exception in wrapper: ', err);
        gIn.logger.exception('Exception stack: ', err.stack);
        if (typeof gT.sOrig.driver !== 'undefined' && !gIn.errFlag) {
          gIn.errFlag = true; // To prevent recursive error report on error report.
          /* Here we use selenium GUI stuff when there was gT.s.driver.init call  */
          gIn.tracer.trace1('Act.Wrapper: scheduling screenshot, browser exceptions and browser console logs.');
          gT.s.browser.screenshot()
            .then(function (res) {
              if (!gIn.brHelpersInitiated) {
                return gT.s.browser.initTiaBrHelpers();
              }
            })
            .then(function (res) {
              return gT.s.browser.logExceptions(true);
            })
            .then(function (res) {
              return gT.s.browser.logConsoleContent();
            })
            .then(function (res) {
              if (!gIn.params.keepBrowserAtError) {
                return gT.s.driver.quit();
              }
            })
            .then(function () {
              gIn.logger.errorln('========== Err Info End ==========');
              gIn.tracer.trace2('sOrig.driver deletion');
              delete gT.sOrig.driver;
              return promise.rejected('Error in action (sel. driver was existed)'); // yield will generate exception with this object.
            });
        } else {
          //gIn.logger.errorln('Info: No selenium driver');
          gIn.logger.errorln('========== Err Info End ==========');
          return promise.rejected('Error in action (sel. driver was absent)'); // yield will generate exception with this object.
        }

        // return; // If we will return smth here, it will be returned from yield.
        // It can be used for continue testing after fail. It is quite an exotic situation and logs will be undetermined.

        // Unsafe tests will break test engine.
        // Safe tests silently catch this object. See execGen implementation below for safe tests example.
      });

  // In principle we can do so:
  // var result = flow.execute(); result.then(bla bla bla); return result;
  // But variant above is more flexible.
};
