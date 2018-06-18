function add(a, b) {
	let arrA = a.split('').reverse(),
		arrB = b.split('').reverse(), //个位数对齐
		lenA = arrA.length,
		lenB = arrB.length,
		maxLen = lenA > lenB ? lenA + 1 : lenB + 1, //+1为了能够存入最高位数相加的进位
		flag = 0,
		arr = [];

	for (let i = 0; i < maxLen; i++) {
		let numA = arrA[i] ? parseInt(arrA[i]) : 0,
			numB = arrB[i] ? parseInt(arrB[i]) : 0,
			num = (numA + numB + flag) % 10;
		flag = numA + numB > 9 ? 1 : 0;
		arr.push(num);
	}

	return arr.reverse().join('').replace(/^0/, '');
}


module.exports = add