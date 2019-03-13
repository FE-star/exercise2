function add(n1, n2) {
	n1 = n1.split('');
	n2 = n2.split('');
  // 实现该函数
	let counter = 1;
	let result = '';
	let digit1 = n1[n1.length - counter];
	let digit2 = n2[n2.length - counter];
	let carry = 0;
	while (digit1 || digit2) {
		const temp = parseInt(digit1) + parseInt(digit2) + carry;
		carry = Math.floor(temp / 10);
		const stay = temp % 10;
		result = stay + result;
		digit1 = n1[n1.length - ++counter] || 0;
		digit2 = n2[n2.length - counter] || 0;
	}

	if (carry) {
		result = carry + result;
	}

	return result;
}

module.exports = add;
