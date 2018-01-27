function add(string1, string2) {
  // 实现该函数
  let str1 = '', str2 = '';
  if(string1.length > string2.length) {
    str1 = string1;
    for(let i = 0; i < string1.length - string2.length; i++) {
      str2 = str2 + '0'
    }
    str2 = str2 + string2;
  } else {
    str1 = string2;
    for(let i = 0; i < string2.length - string1.length; i++) {
      str2 = str2 + '0'
    }
    str2 = str2 + string1;
  }
  let flag = false;
  let temp = 0;
  let num = [];
  for(let i = str1.length - 1; i >= str1.length - str2.length; i--) {
    if(flag) {
      temp = 1;
      flag = false;
    }
    const a = parseInt(str1[i], 10);
    const b = parseInt(str2[i], 10);
    let c = a + b + temp;
    if(c >= 10) {
      flag = true;
      c = c - 10;
    }
    num.push(c);
    temp = 0;
  }
  if(flag) {
    num.push(1);
  }
  return num.reverse().join('');
}

module.exports = add
