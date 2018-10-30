// 对应的位数相加，和大于等于10的进一位，和接下来的两位数相加（大于等于10的继续进位）
function add(a, b) {
	const result = [];
  let addone = 0;
  a = a.split('').reverse();
  b = b.split('').reverse();
  const len = Math.max(a.length, b.length);  

  for (var i = 0; i < len; i++) {
  	let sum = parseInt(a[i] || 0) + parseInt(b[i] || 0) + addone
  	if (sum >= 10) {
  		// 和大于等于10的部位进位，剩余部位存储
      let twoDigits = /(\d)(\d)/.exec(sum);
      addone = 1;
      result.push(twoDigits[2]);
  	} else {
  		result.push(String(sum));
  		addone = 0;
  	}
  }
  // 循环结束后依然存在进位，则把进位存入数组
  if (addone === 1) {
  	result.push('1')
  }
  
  return result.reverse().join('');
}

module.exports = add
