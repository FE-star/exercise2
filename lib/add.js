function add(a,b) {
    // 实现该函数
    
    // 初始化
    if (a.length>=b.length) {
		var lgArr = a.split("").reverse(), smArr = b.split("").reverse();
	}else{
		var lgArr = b.split("").reverse(), smArr = a.split("").reverse();
	}
    var lgLength = lgArr.length, smLength = smArr.length;
	var sumLg = [], sumSm = [];
	var res = '';	

	
	for(var i=0;i<lgLength;i++){
		sumLg[i] = +lgArr[i];
	}
	for(var j=0;j<lgLength;j++){
		j>=smLength?sumSm[j] = 0:sumSm[j] = +smArr[j]
	}

	// 相加
	for(var k=0;k<lgLength;k++){
		sumLg[k] += sumSm[k];
		if(sumLg[k]>=10){
			sumLg[k] -= 10;
			if(k==lgLength-1){
				sumLg[k+1]=1;
			}else{
				sumLg[k+1]++;
			}
		}
	}
	res = sumLg.reverse().join("");
	return res;
}

module.exports = add