function add(n1, n2) {
	n1 = n1.split('');
	n2 = n2.split('');
  // 实现该函数
	let counter = 1;
	let result = '';
	// 从最后一位加
	let digit1 = n1[n1.length - counter];
	let digit2 = n2[n2.length - counter];
	let carry = 0;
	// 当两个都走到头就跳出
	while (digit1 || digit2) {
		const temp = parseInt(digit1) + parseInt(digit2) + carry;
		carry = Math.floor(temp / 10); // js会当float除
		const stay = temp % 10;
		result = stay + result;
		digit1 = n1[n1.length - ++counter] || 0;
		digit2 = n2[n2.length - counter] || 0;
	}

	// 看最高位要不要进位
	if (carry) {
		result = carry + result;
	}

	return result;
}

module.exports = add;
