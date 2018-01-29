function add(x, y) {
  let length = Math.max(x.length, y.length)
  
  let res = []
  let carry = 0
  
  while(length--) {
    let _res = Number(x[length]) + Number(y[length]) + carry
    res.push(_res%10)
    carry = parseInt(_res/10)
  }
  if (carry > 0) {
    res.push(carry)
  }
  return res.reverse().join('')
}

module.exports = add
                
