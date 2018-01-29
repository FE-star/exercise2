function add(a, b) {
  return sumStrings(a,b);
}
/**
 * 大数相加方法1
 * 参考：https://www.cnblogs.com/kindofblue/p/4672129.html
 * 思路：
 * 1、将a、b补齐一样长
 * 2、将各自最后位pop,并记录相加结果
 * 3、反转拼接数组
 * @param {int} a 
 * @param {int} b 
 */
/* function sumStrings(a,b){
    var result = [], count=0;

    if(a.length<b.length) b=[a, a=b][0];
    b=Array(a.length-b.length+1).join('0')+b;
    var arrA = a.split("");
    var arrB = b.split("");
    for(var j=0; j<a.length; j++){
      var temp = (Number(arrA.pop())+Number(arrB.pop()))+count;
      temp >= 10 ? [temp, count] = [temp-10, 1]:count=0;
      result.push(temp);
    }
    result.push(count);

    return result.reverse().join("").replace(/^0+/, "");
} */

function sumStrings(a, b){
  var res = "", c=0;
  a = a.split("");
  b=b.split("");
  while(a.length || b.length || c){
    c+= ~~a.pop() + ~~b.pop();
    res = c%10+res;
    c=c>9;
  }
  return res.replace(/^0+/, "");
}

module.exports = add