function add(a,b) {
  // 加0为了补进位
  var arrA = ('0' + a).split(''),
      arrB = ('0' + b).split(''),
      resArr = [],  
      carry = false,  //同位数相加结果大于等于10时为1，否则为0
      distance = arrA.length - arrB.length,  //计算两个数字字符串的长度差
      len = distance > 0 ? arrA.length : arrB.length;  //和的长度
      if(distance > 0){
        for(let i = 0 ; i< distance;i++){
          arrB.unshift('0')
        }
      }
      if(distance < 0){
        for(let i = 0 ; i< Math.abs(distance);i++){
          arrA.unshift('0')
        }
      }
      for(let i = len - 1;i > 0; i --){
        const Num = Number(arrA[i]) +  Number(arrB[i])
        if(carry){
          const CarryNum = Num + 1
          carry = CarryNum > 10 
          resArr.unshift(CarryNum > 10 ? CarryNum - 10 : CarryNum)
        }else{
          if(Num  > 10 ) carry = true;
          resArr.unshift(Num  > 10 ? Num - 10 : Num)
        }
      }
      if(resArr[0] === '0'){
        resArr.shift()
      }
      return resArr.join('')
}

function addNum(a,b){
  return Number(a) + Number(b)
}

module.exports = add