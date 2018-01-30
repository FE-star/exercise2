/**
 * 简单做法，不需要多个循环，不过依然比较蠢
 */

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
/**
 * 方法二，用了一些奇淫技巧
 */
function add1(a,b){
	// ~取反操作符，~0 === -1，~~0 === 0，~~null === 0，~~'0' === 0
	// 用+也能实现字符转成数字，不过~~能处理null的情况
	// c>0会返回一个布尔值，布尔值转换成数字的时候true为1，false为0
	var res = '',
		c = 0;
	a = a.split('');
	b = b.split('');
	while(a.length||b.length||c){
		c = c + ~~a.pop() + ~~b.pop();
		res = c % 10 + res;
		c = c > 9;
	}
	return res.replace(/^0+/,'');
}
/**
 * 方法三，用了一些优化速度的方法
 * 
 */
function add2(a,b){
	// 主要思想是分开一段段加，这样既能保证精度且不溢出，也能提高速度
	// 使用到了substr这个方法，String.substr(idx,length)接收两个参数，第一个参数是索引，第二个参数是长度，第二个参数可省略
	// 如果索引超范围，或者长度小于1那么返回空字符串
	var res = [];
	while(a.length||b.length){
		res.push(parseInt(a.substr(-14)||0,10)+parseInt(b.substr(-14)||0,10));
		a = a.substr(0,a.length-14);
		b = b.substr(0,b.length-14);
	}

	var c = 0, o = '';
	console.log(res)
	while(res.length){
		let temp = (res.shift() + c).toString();
		o = temp.substr(-14) + o;
		c = parseInt(temp.substr(0,temp.length-14) || 0,10);
	}
	return o;
}
/**
 * 方法四，对方法三进行优化，只需要一个循环
 */
function add3(a,b){
	var res = '', c = 0;
	while(a.length||b.length){
		let temp = (parseInt(a.substr(-14)||0,10)+parseInt(b.substr(-14)||0,10) + c).toString();
		res = temp.substr(-14) + res;
		c = parseInt(temp.substr(0,temp.length-14,10)||0,10);
		a = a.substr(0,a.length-14);
		b = b.substr(0,b.length-14);
	}
	return res;
}
module.exports = add3