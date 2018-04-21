function add(a, b) {
  const aList = a.split('').reverse();
  const bList = b.split('').reverse();
  let result = [];
  let flag = 0;
  let length = Math.max(a.length, b.length);
  for (let i = 0; i < length; i++) {
    let aVal = +aList[i] || 0;
    let bVal = +bList[i] || 0;
    
    let num = aVal + bVal + flag;
    if (num >= 10) {
      num = num - 10;
      flag = 1;
    } else {
      flag = 0;
    }
    result.push(num);
  }
  if (flag === 1) {
    result.push('1')
  }
  return result.reverse().join('');
}

module.exports = add