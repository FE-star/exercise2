function add(num1, num2) {
  // 实现该函数
  const len1 = num1.length, len2 = num2.length;
  let a = '', b = '';
  if(len1>len2){
    a = num1.split('').reverse();
    b = num2.split('').reverse();
  }else {
    a = num2.split('').reverse();
    b = num1.split('').reverse();
  }
  for (let i = 0; i < a.length; i++) {
    a[i] = ~~a[i] + ~~b[i];
    if(a[i]>=10){
      a[i] = a[i] % 10;
      a[i+1] = ~~a[i+1] +1;
    }
  }
  return a.reverse().join('');
}

module.exports = add