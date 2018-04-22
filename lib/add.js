function add(a, b) {
  let arr1 = a.split('').reverse(), arr2 = b.split('').reverse()
  let arrSum = [], current = 0, carry = 0
  let maxlength = Math.max(a.length, b.length)
  for (let i = 0; i < maxlength; i++) {
    current = carry
    if (i < arr1.length) {
      current += Number(arr1[i])
    }
    if (i < arr2.length) {
      current += Number(arr2[i])
    }
    arrSum.push(current % 10)
    carry = Math.floor(current / 10)
  }
  if (carry > 0)
    arrSum.push(carry)
  return arrSum.reverse().join('')
}

module.exports = add