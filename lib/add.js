function add() {
  // 实现该函数
  let list = Array.prototype.slice.call(arguments);
  return list.reduce((prev, next) => Number(prev) + Number(next), '0').toString()
}
module.exports = add