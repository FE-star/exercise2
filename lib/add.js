function add(a,b) {
	let carry = 0,//进位
		result = [],
		len = Math.max(a.length, b.length),
		i = len;
	while(i--){
		let sum = (+a[i-len+a.length]||0 )+(+b[i-len+b.length] || 0)+carry; //a,b每个对应位数相加+进位
		carry= parseInt(sum/10)//进位最大为1
		result.unshift(sum%10)
	}

	if(carry){
		result.unshift(carry)
	}
	return result.join('')
}

module.exports = add