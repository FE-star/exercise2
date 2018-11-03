function add(a,b) {
  // 实现该函数
  let lengtha = a.split('').length;
  let lengthb = b.split('').length;
  let flag = 0
  let minlength,result = []

  if(lengtha > lengthb){
    minlength = lengthb
  } else {
    minlength = lengtha
  }
  a = a.split('')
  b = b.split('')
  while(minlength > 0){
    let c = parseInt( a[a.length - 1]) + parseInt( b[b.length - 1]) + flag

    if(c > 10){
      c = c - 10
      flag = 1
    } else {
      flag = 0
    }
   
   
    result.unshift(c)
    a.pop()
    b.pop()

    if(minlength === 1){
      if(a.length > 0){
        result = a.join("") + result.join('')
      } else if (b.length > 0){
        result = b.join("") + result.join('')
      } else {
        result = result.join('')
      }
    }
    minlength--
  }
  console.log('和为',result)
  return result;

}

module.exports = add


