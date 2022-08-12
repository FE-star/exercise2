/**
 * 
 * @param {String} first 
 * @param {String} second 
 */
function add(first, second) {
  // 实现该函数
  let firstLen = first.length - 1
  let secondLen = second.length - 1
  let bit = 0
  let ret = ''
  while(firstLen >= 0 || secondLen >= 0) {
    let f = void 0
    let s = void 0
    let sum = void 0
    if (firstLen >= 0) {
      f = parseInt(first[firstLen])
      firstLen --
    }

    if (secondLen >= 0) {
      s = parseInt(second[secondLen])
      secondLen --
    }

    sum = f + s + bit

    if (sum >= 10) {
      bit = 1
      sum -= 10
    } else {
      bit = 0
    }
    ret = sum + ret
  }

  if (bit) {
    ret = bit + ret
  }
  return ret
}

module.exports = add