const BigNumber = require('../node_modules/bignumber.js/bignumber.js');
function add(a, b) {
  // 实现该函数
   return (new BigNumber(a).plus(b)).toString();
}

module.exports = add