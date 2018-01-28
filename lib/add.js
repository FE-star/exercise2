function add(num1, num2) {
  // 实现该函数
  let ret='', tmp = 0
  num1 = num1.split('')
  num2 = num2.split('')
  while(num1.length || num2.length) {
   tmp = ~~num1.pop() + ~~num2.pop() + tmp
   ret = `${tmp%10}${ret}`
   tmp = Math.floor(tmp/10)
  }
  if(tmp) {
    ret = `${tmp}${ret}`
  }
  return ret
}

module.exports = add