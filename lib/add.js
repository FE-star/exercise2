function add(a, b) {
  // 实现该函数
  if(/[^\d+]/.test(a) || /[^\d+]/.test(b)) return NaN;
  a = a + ''
  b = b + ''
  const arr1 = a.split('')
  const arr2 = b.split('')

  let minLengerArr = arr1
  let maxLengthArr = arr2
  if(arr1.length >= arr2.length) {
  	maxLengthArr = arr1;
  	minLengerArr = arr2;
  }

  let ret = []
  let flag = 0;
  for(let i = maxLengthArr.length - 1; i>= 0; i--){
  	let temp = 0;
  	if(minLengerArr.length > i) {
  		temp = parseInt(minLengerArr[i]) + parseInt(maxLengthArr[i]) + flag;
  	}else {
  		temp = parseInt(maxLengthArr[i]) + flag
  	}
  	if(temp > 9) {
  		flag = 1;
  		temp = temp - 10;
  		ret.unshift(temp)
  		if(i === 0) {
  			ret.unshift(1)
  		}
  	}else {
  		flag = 0;
  		ret.unshift(temp)
  	}
  }
  return ret.join('')
}

module.exports = add