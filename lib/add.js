function add(a,b) {
  // 实现该函数
  // 将字符串转化为数组
  var a=a.split("");
  var b=b.split("");
  // 最大位数
  var len=a.length>=b.length?a.length:b.length;
  // 可能会进位，所以结果数组加1
  var result=new Array(len+1);
  // 颠倒数组方便循环
      a.reverse();
      b.reverse();
      var carry=0;
  for(var i=0;i<len;i++){
    var num1=Number(a[i])?Number(a[i]):0;
    var num2=Number(b[i])?Number(b[i]):0;
    // 上一个进位数，加上本位数之和
    var sum=num1+num2+carry;
    result[i]=sum%10;
    // 大于10，十位数进位；
    carry=parseInt(sum/10);
    if(i===len-1&&carry>0){
      result[i+1]=carry
    }
  }
  result.reverse();
  result=result.join("")
  return result
}
module.exports = add