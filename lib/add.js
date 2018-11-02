function add(num1, num2) {
  num1 = '0' + num1;
  num2 = '0' + num2;
  // 让两个数位数相同
  while(num1.length < num2.length){
    num1 = "0" + num1;
  }
  while(num1.length > num2.length){
    num2 = "0" + num2;
  }
  //作为返回结果集
  let result = [];
  //判断相加是否大于0
  let isPlus = 0;
  for(let i = num1.length-1; i >= 0; i--){
    let sum = parseInt(num1[i]) + parseInt(num2[i]) +isPlus;
    if(sum > 9){
      sum -= 10;
      isPlus = 1;
    }else{
      isPlus = 0;
    }
    result.unshift(sum);
  }
  return result.join('').replace(/^0/, '');;
}

module.exports = add