function add(num1, num2) {
  // 大数相加, 如果结果是数值类型的话, 结果会丢失精度。

  /* num1 = parseInt(num1);
  num2 = parseInt(num2);
  var result = num1 + num2;
  console.log(result);
  return  result + ''; */
  let num1Arr = num1.split('').reverse(),
      num2Arr = num2.split('').reverse(),
      maxLen = Math.max(num1Arr.length, num2Arr.length),
      resultArr = [],
      carry = 0;
  for(let i = 0; i < maxLen; i++){
    let r = (+num1Arr[i]) + (+num2Arr[i]||0) + carry;
    carry = Math.floor(r / 10);
    resultArr.push(r % 10);
  }
  if(carry > 0){
    resultArr.push(carry);
  }
  return resultArr.reverse().join('');
}

module.exports = add