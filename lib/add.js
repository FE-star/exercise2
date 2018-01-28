function add(arg1,arg2) {
  arg1 = '0' + arg1;
  arg2 = '0' + arg2;//转化为字符串，最前面加一个0，防止最高位有进位
  let arg1A = arg1.split(""),//转化为数组
      arg2A = arg2.split("");
  let distance = arg1A.length - arg2A.length,//两个数组的长度差
      len = distance > 0 ? arg1A.length : arg2A.length;

  //将较短的数组前面都补上0使其长度和较长的数组一样
  if(distance > 0){
    for(let i=0; i < distance; i++){
      arg2A.unshift("0");
    }
  }else{
    for(let i=0; i < Math.abs(distance); i++){
      arg1A.unshift("0");
    }
  }
  let carry = 0;//表示进位
  let tmp = '';
  let result = [];//结果
  for(let i=len-1; i >=0; i--){
    tmp = +arg1A[i] + (+arg2A[i]) + carry;
    if(tmp > 10){
      carry = 1;
      result.unshift((tmp + '')[1]);
    }else{
      carry = 0;
      result.unshift(tmp);
    }
  }
  return result.join("").replace(/^0/, '');
}
module.exports = add