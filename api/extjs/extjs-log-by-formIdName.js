'use strict';
/* globals gT, gIn */

var util = require('util');

// TODO: support different range options.
// TODO: function for convertation object to its text representation (smth, like JSON).

// exports.comboBox = function (id, logAction) {
//   return gIn.wrap('Logging content of combobox ... ', logAction, function () {
//     return gT.s.browser.executeScriptWrapper(
//       `return tiaEJ.ctById.getCB('${id}');`
//     )
//       .then(function (res) {
//         gIn.logger.log('\n' + res);
//       });
//   });
// };

exports.field = function (id, name, includingStores, logAction) {
  return gIn.wrap(`Logging content of form (id: ${id}) field (name: ${name}) ... `, logAction, function () {
    return gT.s.browser.executeScriptWrapper(
      `return tiaEJ.ctById.getFormChildByFormName('${id}', '${name}', ${includingStores});`
    )
      .then(function (res) {
        gIn.logger.log('\n' + res);
      });
  });
};

exports.fields = function (id, names, includingStores, logAction) {
  id = gT.s.misc.getIdInfo(id);
  return gIn.wrap(`Logging choosen fields of form ${id.logStr} fields ... `, logAction, function () {
    let namesJson = JSON.stringify(names);
    return gT.s.browser.executeScriptWrapper(
      `return tiaEJ.ctById.getFormChildrenByFormNames('${id.id}', '${namesJson}', ${includingStores});`
    )
      .then(function (arr) {
        let str = arr.join('');
        gIn.logger.log('\n' + gT.commonConsts.content.wrap(str));
      });
  });
};

exports.fieldEnabledDisabledInfo = function (id, name, logAction) {
  return gIn.wrap(`Enabled/Disabled info of form (id: ${id}) field: name: ${name}`, logAction, function () {
    return gT.s.browser.executeScriptWrapper(
      `return tiaEJ.ctById.getFormFieldEnabledDisabledInfo('${id}', '${name}');`
    )
      .then(function (res) {
        gIn.logger.log(', ' + res + ' ... ');
      });
  });
};

exports.fieldShortInfo = function (id, name, logAction) {
  return gIn.wrap(`Info of form (id: ${id}) field: name: ${name}`, logAction, function () {
    return gT.s.browser.executeScriptWrapper(
      `return tiaEJ.ctById.getFormFieldShortInfo('${id}', '${name}');`
    )
      .then(function (res) {
        gIn.logger.log(', ' + res + ' ... ');
      });
  });
};
