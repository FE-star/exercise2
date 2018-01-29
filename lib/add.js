function calcucate( _num1 , _num2 ){
	// console.time("go");
	var num1 = '0' + _num1 ;
	var num2 = '0' + _num2 ;
	var num1Arr = num1.split('.')[0] ;
	var num2Arr = num2.split('.')[0] ;
	var pointNum1 = num1.split('.')[1];
	var pointNum2 = num2.split('.')[1];

	var num1ArrPointLength = pointNum1 && pointNum1.length || 0;//小数点后面的长度
	var lenght1 = num1Arr.length;
	var num2ArrPointLength = pointNum2 && pointNum2.length || 0;//小数点后面的长度
	var lenght2 = num2Arr.length;

	var len = lenght1 > lenght2 ? lenght1 : lenght2 ;
	var carry = 0;

	//补全小数点后面缺的数
	var pointLength = Math.abs( num1ArrPointLength - num2ArrPointLength );
	//补全前面缺的
	var shiftLength = Math.abs( lenght1 - lenght2 );

	var addNum = add( pointLength );
	var shiftNum = add( shiftLength );

	//补全小数点后面缺的位置
	if( num1ArrPointLength > num2ArrPointLength ) {
		num2 += addNum;
	} else {
		num1 += addNum;
	}

	//补全前面缺的位置
	if( lenght1 > lenght2 ) {
		num2 = (shiftNum + num2);

	} else {
		num1 = (shiftNum + num1);
	}

		num1Arr = num1.split('') ;
		num2Arr = num2.split('') ;
		
	var result = [];

	for( var i = len - 1;i >= 0;i-- ){
		var n1 = num1Arr[i];
		var n2 = num2Arr[i];


		//小数点不要忘记了
		if( "." == n1 ){
			result.push('.');
			continue;
		}

		var total = (+n1) + (+n2) + carry;

		if( total > 9 ){
			result.push( total - 10 );
			carry = 1;
		} else {
			carry = 0;
			result.push(total);
		}
	
	}

	result = result.reverse().join('').replace(/^0/,'');

	// console.timeEnd("go");
	return result;
}

function add( _length ) {
	var str = '';
	for( var i = 0; i < _length;i++ ){
		str += 0;
	}

	return str;
}

module.exports = calcucate