function add(...res) {
  // 实现该函数
  return res.reduce(bigNumSum);
}

function bigNumSum(a, b) {
  let temp = 0;
  let all = '';
  const arrA = a.split('');
  const arrB = b.split('');
  while (arrA.length || arrB.length || temp) {
    temp += ~~arrA.pop() + ~~arrB.pop();
    all = (temp % 10) + all;
    temp = temp > 9;
  }
  return all.replace(/^0+/, '');
}

module.exports = add;
