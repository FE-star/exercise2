  function add(a, b) {
    // 实现该函数
    if (typeof a === 'number') a = String(a)
    if (typeof b === 'number') b = String(b)

    //取两个数字的最大长度
    const maxLength = Math.max(a.length, b.length)

    //用0去补齐长度
    a = a.padStart(maxLength, 0)
    b = b.padStart(maxLength, 0)

    let temp = 0
    // 进位的标志
    let carry = 0 
    let sum = ''

    for(let i = maxLength - 1; i >=0; i--) {
      temp = parseInt(a[i]) + parseInt(b[i]) + carry
      carry = Math.floor(temp / 10)
      sum = temp % 10 + sum
    }

    if (carry === 1) {
        sum = '1' + sum
    }
    return sum
}

module.exports = add