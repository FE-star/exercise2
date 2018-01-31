function add(a, b) {
	var result = [], t = 0;

	if (a.length > b.length) {
		b = Array(a.length - b.length + 1).join('0') + b;
	} else {
		a = Array(b.length - a.length + 1).join('0') + a;
	}

	var arrA = a.split('').reverse(),
		arrB = b.split('').reverse();

	for (var i = 0; i < arrA.length; i++) {
		var itemA = arrA[i] - 0,
			itemB = arrB[i] - 0;
		var tem = itemA + itemB + t;

		if (tem > 10) {
			tem = tem % 10;
			t = 1
		} else {
			t = 0;
		}
		result.push(tem)
	}
	result = result.reverse();
	return result.join('');
}

module.exports = add