function add(a, b) {
  // 实现该函数
   	a = '0' + a;    
    b = '0' + b;
  
    var arrA = a.split(''),//将数字转成字符串
        arrB = b.split(''),
        res = [],
        temp = '',
        carry = 0,
  
        distance = a.length - b.length,  //计算两个数值字符串的长度差
        len = distance > 0 ? a.length : b.length;
      
    if(distance > 0){
        for(let i = 0; i < distance; i++){
            arrB.unshift('0');
        }
         
    }else{
        for(let i = 0; i < Math.abs(distance); i++){
            arrA.unshift('0');
        }
    }
  
    for(let i = len - 1; i >= 0; i--){
        temp = +arrA[i] + (+arrB[i]) + carry;
        if(temp > 10){  
            carry = 1;
            res.push((temp + '')[1]);
 
        }else{
            carry = 0;
            res.push(temp);
        }
          
    }
    return res = res.reverse().join('').replace(/^0/,'');
}

module.exports = add