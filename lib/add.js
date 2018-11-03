function add(a, b) {
	// 实现该函数
	if (parseInt(a) == NaN || parseInt(b) == NaN) return
	let itemA = a.split('').reverse()
	let itemB = b.split('').reverse()
	let carry = 0 //进位标示
	let longArr = []
	let temp = 0
	let res = []
	let distance = itemA.length - itemB.length
	longArr = distance >= 0 ? itemA : itemB

	if (distance > 0) { //补0相加
		for (let i = 0; i < distance; i++) {
			itemB.push('0');
		}

	} else {
		for (let i = 0; i < Math.abs(distance); i++) {
			itemA.push('0');
		}
	}
	for (let i = 0, len = longArr.length; i < len; i++) {
		temp = parseInt(itemA[i]) + parseInt(itemB[i]) + carry
		if (temp >= 10) {
			if(i == len-1) { //如果是最后一位相加，不进位
				carry = 0
				res.push(parseInt(temp))
			}else {
				carry = 1
				res.push(parseInt(temp.toString()[1]))
			}
			
		} else {
			carry = 0
			res.push(parseInt(temp))
		}
	}
	return res.reverse().join('')

}

module.exports = add