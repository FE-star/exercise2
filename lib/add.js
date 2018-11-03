function add(num1, num2) {
  let str1 = num1.split(''),
      str2 = num2.split(''),
      count = 0,
      result = '';
  
  while(str1.length || str2.length || count){
    count += ~~str1.pop() + ~~str2.pop();
    result = count % 10 + result;
    count = count > 9;
  }

  return result;
}

module.exports = add