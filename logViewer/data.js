function getLogData() {
	//var logDataSrc = '{"path":"engine","title":"engine","passed":9,"failed":3,"diffed":0,"expDiffed":1,"time":64.58289,"skipped":2,"children":[{"path":"engine/00_sanity","title":"","passed":9,"failed":0,"diffed":0,"expDiffed":0,"time":25.541636,"skipped":0,"children":[{"path":"engine/00_sanity/00_checkForGlobals.js","title":"Checking that all global variables are exist and correct.","passed":4,"failed":0,"diffed":0,"expDiffed":0,"time":2.411385,"skipped":0},{"path":"engine/00_sanity/01_3msg3pass.js","title":"2 messages and 3 passes.","passed":3,"failed":0,"diffed":0,"expDiffed":0,"time":1.1383,"skipped":0},{"path":"engine/00_sanity/02_passFail.js","title":"Check for pass and fail work","passed":2,"failed":0,"diffed":0,"expDiffed":0,"time":2.173176,"skipped":0},{"path":"engine/00_sanity/03_testInfoInit.js","title":"Test for testInfo init","passed":0,"failed":0,"diffed":0,"expDiffed":0,"time":1.140714,"skipped":0}]},{"path":"engine/01_errors","title":"","passed":0,"failed":3,"diffed":0,"expDiffed":0,"time":23.634716,"skipped":0,"children":[{"path":"engine/01_errors/01_stdErr.js","title":"TODO (LOW PRIORITY): catch messages from stderr","passed":0,"failed":0,"diffed":0,"expDiffed":0,"time":3.941312,"skipped":0},{"path":"engine/01_errors/02_syntaxError.js","title":"","passed":0,"failed":1,"diffed":0,"expDiffed":0,"time":2.992926,"skipped":0},{"path":"engine/01_errors/03_undefined.js","title":"Exception due to undefined variable","passed":0,"failed":1,"diffed":0,"expDiffed":0,"time":1.265688,"skipped":0},{"path":"engine/01_errors/04_throwStr.js","title":"Test throws \\\"SomeErr\\\" string","passed":0,"failed":1,"diffed":0,"expDiffed":0,"time":0.76375,"skipped":0}]},{"path":"engine/02_expectedDiff","title":"","passed":0,"failed":0,"diffed":0,"expDiffed":1,"time":5.811916,"skipped":0,"children":[{"path":"engine/02_expectedDiff/00_expectedDiff.js","title":"Expected diff test","passed":0,"failed":0,"diffed":0,"expDiffed":1,"time":0.634586,"skipped":0}]},{"path":"engine/03_config","title":"Config testing","passed":0,"failed":0,"diffed":0,"expDiffed":0,"time":5.202239,"skipped":2,"children":[{"path":"engine/03_config/00_skippedTests","title":"Skipped tests","passed":0,"failed":0,"diffed":0,"expDiffed":0,"time":0.120539,"skipped":2,"children":[{"path":"engine/03_config/00_skippedTests/00_firstSkippedTest.js","title":"","passed":0,"failed":0,"diffed":0,"expDiffed":0,"time":0,"skipped":1},{"path":"engine/03_config/00_skippedTests/01_secondSkippedTest.js","title":"","passed":0,"failed":0,"diffed":0,"expDiffed":0,"time":0,"skipped":1}]},{"path":"engine/03_config/01_ignorePassFail","title":"Ignore pass and fail counters","passed":0,"failed":0,"diffed":0,"expDiffed":0,"time":4.7064,"skipped":0,"children":[{"path":"engine/03_config/01_ignorePassFail/00_ignorePassFail.js","title":"Test for ignorePassAndFailCounters config option","passed":0,"failed":0,"diffed":0,"expDiffed":0,"time":0.617397,"skipped":0}]}]},{"path":"engine/04_emptyDirEmptyTitle","title":"","passed":0,"failed":0,"diffed":0,"expDiffed":0,"time":0.001481,"skipped":0,"children":[]},{"path":"engine/05_dirWithEmptyScript","title":"","passed":0,"failed":0,"diffed":0,"expDiffed":0,"time":3.635295,"skipped":0,"children":[{"path":"engine/05_dirWithEmptyScript/0_empty.js","title":"","passed":0,"failed":0,"diffed":0,"expDiffed":0,"time":0.513465,"skipped":0}]}],"suiteLogDiff":"","os":"linux_3.16.0-4-amd64"}';
	var logDataSrc = '{"path":"engine","title":"engine","passed":9,"failed":3,"diffed":1,"expDiffed":1,"time":64.026061,"skipped":2,"children":[{"path":"engine/00_sanity","title":"","passed":9,"failed":0,"diffed":0,"expDiffed":0,"time":26.496685,"skipped":0,"children":[{"path":"engine/00_sanity/00_checkForGlobals.js","title":"Checking that all global variables are exist and correct.","passed":4,"failed":0,"diffed":0,"expDiffed":0,"time":2.385563,"skipped":0},{"path":"engine/00_sanity/01_3msg3pass.js","title":"2 messages and 3 passes.","passed":3,"failed":0,"diffed":0,"expDiffed":0,"time":1.096117,"skipped":0},{"path":"engine/00_sanity/02_passFail.js","title":"Check for pass and fail work","passed":2,"failed":0,"diffed":0,"expDiffed":0,"time":2.114569,"skipped":0},{"path":"engine/00_sanity/03_testInfoInit.js","title":"Test for testInfo init","passed":0,"failed":0,"diffed":0,"expDiffed":0,"time":1.254827,"skipped":0}]},{"path":"engine/01_errors","title":"","passed":0,"failed":3,"diffed":0,"expDiffed":0,"time":22.731859,"skipped":0,"children":[{"path":"engine/01_errors/01_stdErr.js","title":"TODO (LOW PRIORITY): catch messages from stderr","passed":0,"failed":0,"diffed":0,"expDiffed":0,"time":1.792271,"skipped":0},{"path":"engine/01_errors/02_syntaxError.js","title":"","passed":0,"failed":1,"diffed":0,"expDiffed":0,"time":2.917945,"skipped":0},{"path":"engine/01_errors/03_undefined.js","title":"Exception due to undefined variable","passed":0,"failed":1,"diffed":0,"expDiffed":0,"time":1.320728,"skipped":0},{"path":"engine/01_errors/04_throwStr.js","title":"Test throws \\\"SomeErr\\\" string","passed":0,"failed":1,"diffed":0,"expDiffed":0,"time":0.815705,"skipped":0}]},{"path":"engine/02_expectedDiff","title":"","passed":0,"failed":0,"diffed":0,"expDiffed":1,"time":5.153529,"skipped":0,"children":[{"path":"engine/02_expectedDiff/00_expectedDiff.js","title":"Expected diff test","passed":0,"failed":0,"diffed":0,"expDiffed":1,"time":0.604962,"skipped":0}]},{"path":"engine/03_config","title":"Config testing","passed":0,"failed":0,"diffed":1,"expDiffed":0,"time":5.239972,"skipped":2,"children":[{"path":"engine/03_config/00_skippedTests","title":"Skipped tests","passed":0,"failed":0,"diffed":0,"expDiffed":0,"time":0.088101,"skipped":2,"children":[{"path":"engine/03_config/00_skippedTests/00_firstSkippedTest.js","title":"","passed":0,"failed":0,"diffed":0,"expDiffed":0,"time":0,"skipped":1},{"path":"engine/03_config/00_skippedTests/01_secondSkippedTest.js","title":"","passed":0,"failed":0,"diffed":0,"expDiffed":0,"time":0,"skipped":1}]},{"path":"engine/03_config/01_ignorePassFail","title":"Ignore pass and fail counters","passed":0,"failed":0,"diffed":1,"expDiffed":0,"time":4.862075,"skipped":0,"children":[{"path":"engine/03_config/01_ignorePassFail/00_ignorePassFail.js","title":"Test for ignorePassAndFailCounters config option","passed":0,"failed":0,"diffed":1,"expDiffed":0,"time":0.58471,"skipped":0}]}]},{"path":"engine/04_emptyDirEmptyTitle","title":"","passed":0,"failed":0,"diffed":0,"expDiffed":0,"time":0.001621,"skipped":0,"children":[]},{"path":"engine/05_dirWithEmptyScript","title":"","passed":0,"failed":0,"diffed":0,"expDiffed":0,"time":3.649429,"skipped":0,"children":[{"path":"engine/05_dirWithEmptyScript/0_empty.js","title":"","passed":0,"failed":0,"diffed":0,"expDiffed":0,"time":0.615205,"skipped":0}]}],"suiteLogDiff":true,"os":"linux_3.16.0-4-amd64"}';
	var logData = JSON.parse(logDataSrc);
	return logData
}
