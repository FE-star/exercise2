function add(num1,num2) {
  // 实现该函数
  var a = '0' + num1;    //加0是因为两个最大的位数相加后可能需要进位
  var b = '0' + num2;
  var n1 = a.split(''),
      n2 = b.split(''),
      res = [],
      temp = '',
      temp = '',
      carry = 0,

      distance = a.length - b.length,  //计算两个数值字符串的长度差
      len = distance > 0 ? a.length : b.length;
  
      if(distance > 0){
          for(let i = 0; i < distance; i++){
            n2.unshift('0');
          }
    
        }else{
          for(let i = 0; i < Math.abs(distance); i++){
            n1.unshift('0');
          }
      }

    for(let i = len - 1; i >= 0; i--){
      temp = +n1[i] + (+n2[i]) + carry;
      if(temp > 10){
        carry = 1;
        res.push((temp + '')[1]);

      }else{
        carry = 0;
        res.push(temp);
      }

    }
    res = res.reverse().join('').replace(/^0/,'');
    return res
  }

module.exports = add