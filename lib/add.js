function add(a,b) {

    var total =[];

    //位数对齐
    if(a.length > b.length) {
      b = (Array(a.length).join('0') + b).slice(-a.length)
    } else {
      a = (Array(b.length).join('0') + a).slice(-b.length)
    }

    var next = 0;
		//从个位数起对应单个计算
    for(var i=(a.length-1); i>=0; i--) {
			//求和
			var sumInt = Number(a[i]) + Number(b[i]) + next;
			//把求和的个位数先放进数组
			total.unshift(sumInt%10);
			//把求和的十位数放进补充上一位的数字，留在下一次循环使用
			next = Math.floor(sumInt/10);
			//判断最后一次如果求和的结果为两位数则把求和的十位数加在最前面
			if(i == 0 && !(next==0)) {
				total.unshift(next);
			}
    }

    var result = total.join('');
    return  result;

}

module.exports = add
