var bigInt = require('big-integer');

function add(a,b) {
  // 实现该函数
  // 长度太长，精度丢失
  // bigInt(a).add(b) + ''  精度丢失
  return bigInt(a).add(b).toString()
}

module.exports = add
