'use strict';

// const { inspect } = require('util');
// const wrap = require('./new-api/components/wrap');
//
// // These methods I think would be most often used.
//
// // TODO: тут нужно описать все компоненты ExtJs и заодно чекать, что нашелся именно ожидаемый компонент.
// exports.textbox = function textbox() {
// };
//
// exports.combobox = function combobox() {
// };
//
// /**
//  * Set current parent before using this function.
//  * @param compQuery
//  * @param enableLog
//  * @return {*}
//  */
// exports.any = function any(compQuery, enableLog) {
//   return gIn.wrap(
//     `Searching id by preseted parent container, compQuery: ${compQuery} ... `,
//     enableLog,
//     () => gT.s.browser.executeScriptWrapper(
//       `return tiaEJ.search.byParentAndCompQuery('${compQuery}')`
//     )
//       .then(wrap)
//   );
// };
