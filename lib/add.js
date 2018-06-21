function add(num1, num2) {
  // 实现该函数
  if (isNaN(num1) || Number.parseInt(num1, 10) != num1 || isNaN(num2) || Number.parseInt(num2, 10) != num2) {
    throw new Error('请传入整数');
  }
  if (num1 < 0 || num2 < 0) {
    throw new Error('请输入大于0的整数');
  }
  if (num1 > Number.MAX_VALUE || num2 > Number.MAX_VALUE) {
    throw new Error('输入超出所能表示的最大整数');
  }

  let arr1 = num1.split('').reverse();
  let arr2 = num2.split('').reverse();
  const len = Math.abs(arr1.length - arr2.length);
  const temp = Array(len + 1).join('0 ').split(' ');
  temp.pop();
  if (arr1.length < arr2.length) {
    arr1 = arr1.concat(temp);
  } else {
    arr2 = arr2.concat(temp);
  }
  let count = 0;
  const result = [];

  for(let i = 0, length = arr1.length; i < length; i++) {
    let res = Number(arr1[i]) + Number(arr2[i]) + count;
    if (res > 9) {
      count = 1;
      result.push(res % 10);
    } else {
      count = 0;
      result.push(res);
    }
  }

  result.push(count);

  const sum = result.reverse().join('').replace(/^0+/, '');
  return sum;
}

module.exports = add
