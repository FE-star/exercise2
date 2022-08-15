function add(x, y) {
  a = '0' + x
  b = '0' + y
  let aArr = a.split('')
  let bArr = b.split('')
  let carry = 0
  let res = []
  let length = Math.max(aArr.length,bArr.length)
  let distance = aArr.length - bArr.length
  if (distance > 0) {
    for(let i = 0; i < distance; i++){
      bArr.unshift('0');
    }
  } else{
    for(let i = 0; i < Math.abs(distance); i++){
      aArr.unshift('0');
    }
  }
  for(let i = length - 1; i >= 0; i--) {
    let sum = Number(aArr[i]) + Number(bArr[i]) + Number(carry)
    carry = sum > 10 ? 1 : 0
    sum = sum > 10 ? parseInt(sum % 10) : sum
    res.unshift(sum)
  }
  return res.join('').replace(/^0/,'')
}

module.exports = add