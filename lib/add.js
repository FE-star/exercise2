function add1(x, y) {
  x = '0' + x;
  y = '0' + y;
  let xArray = x.split('');
  let yArray = y.split('');
  let maxLen = Math.max(xArray.length, yArray.length);
  let differ = Math.abs(xArray.length - yArray.length);
  let tmp = '';
  let carry = 0;
  let result = [];
  if (xArray - yArray > 0) {
    while (differ--) { 
      yArray.unshift('0');
    }
  } else { 
    while (differ--) { 
      xArray.unshift('0');
    }
  }
  
  for (let index = maxLen - 1 ; index >= 0; index--) {
    tmp = +xArray[index] + (+yArray[index]) + carry;
    if (tmp > 9) {
      carry = 1;
      result.push((tmp+'')[1])
    } else { 
      carry = 0;
      result.push(tmp)
    }
  }
  
  result = result.reverse().join('').replace(/^0/,'');
  console.log(result)
  return result
}

function add(a,b) {
  let result = [], 
      carry = 0,
      len = Math.max(a.length,b.length),
      index = Math.max(a.length,b.length);
  while(index--){
    var sum = (~~a[index - len + a.length]||0) + (~~b[index - len + b.length]||0) + carry;
    carry = sum > 9 ? 1 : 0;

    result.unshift(sum%10)
  }
  if(carry){ result.unshift(1) }
  return result.join('')
}
module.exports = add