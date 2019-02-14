'use strict';

const { queryCmpId } = require('../tia-extjs-query');

const cmpName = 'TextField';

const actions = {
  async click(tEQ, elNameForLog, logAction) {
    return gIn.wrap({
      msg: `${cmpName} "${tEQ}": click ... `,
      logAction,
      act: async () => {
        const id = await queryCmpId(
          tEQ,
          undefined,
          false
        );
        await gT.s.uA.clickById(id, false);
      },
    });
  },
  async sendKeys(tEQ, keys, elNameForLog, logAction) {
    return gIn.wrap({
      msg: `${cmpName}  "${tEQ}": send keys ${JSON.stringify(keys)} ... `,
      logAction,
      act: async () => {
        const id = await queryCmpId(
          tEQ,
          undefined,
          false
        );
        await gT.s.uA.sendKeysById(id, keys, false);
      },
    });
  },
};

const checks = {};

const logs = {};

module.exports = {
  actions,
  checks,
  logs,
};
