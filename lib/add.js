function add(a,b) {
    // 实现该函数
    
    // 初始化
    if (a.length>=b.length) {
		var lgArr = a.split("").reverse(), smArr = b.split("").reverse();
	}else{
		var lgArr = b.split("").reverse(), smArr = a.split("").reverse();
	}
    var lgLength = lgArr.length,
		res = '';	

	for(var i=0; i<lgLength; i++){
		lgArr[i] = +lgArr[i] + +smArr[i];
		if(lgArr[i]>10){
			lgArr[i] -= 10;
			if(i==lgLength-1){
				lgArr[i+1] = 1;
			}else{
				lgArr[i+1] = +lgArr[i+1] + 1;
			}
		}
	}
	res = lgArr.reverse().join("");
	return res;
}

module.exports = add