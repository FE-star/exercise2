function add(a, b) {
	// 实现该函数
    //获取字符串长度
	var lenA = a.length;
	var lenB = b.length;
	//字符串补齐，短字符串高位补0
	if (lenA > lenB) {
		for (var i = 0; i < lenA - lenB; i++) {
			b += '0';
		}
	} else {
		for (var i = 0; i < lenB - lenA; i++) {
			a+= '0';
		}
	}
	var len = a.length;
	//字符串转成数组并反转，便于从低位和高位相加
 	var arrA = a.split("").reverse();
 	var arrB = b.split("").reverse();
	var arr = [];
	var carry = 0; //进位
	for (i = 0; i < len; i++) {
		carry += parseInt(arrA[i])+parseInt(arrB[i]);
		if(carry>=10) {
			arr.push(carry-10);
			carry = 1;
		}else {
			arr.push(carry);
			carry = 0;
		}
	}
	console.log(arr);
	if (carry == 1) {
		arr.push(1);
	}
	return arr.reverse().join('');
}
module.exports = add;
