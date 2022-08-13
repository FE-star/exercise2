function add(num1, num2) {
  // 实现该函数
  let c = 0
  let result = ''
  const a = num1.split('')
  const b = num2.split('')

  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 && j >= 0) {
    const addNum = +num1[i--] + ( +num2[j--]) + c
    result = addNum % 10 + result;
    c = addNum > 9 ? 1 : 0;
  }

  while(i >= 0) {
    const addNum = +num1[i--] + c;
    result = addNum % 10 + result;
    c = addNum > 9 ? 1 : 0;
  }

  while(j >= 0) {
    const addNum = +num2[j--] + c;
    result = addNum % 10 + result;
    c = addNum > 9 ? 1 : 0;
  }

  result = c === 1 ? 1 + result : result;

  return result;
}

add('843529812342341234', '236124361425345435')
module.exports = add