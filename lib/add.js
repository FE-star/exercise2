function add(a,b) {
  // 实现该函数
  var result = [], count = 0;

  if(a.length < b.length)  b=[a, a=b][0];
  b=Array(a.length-b.length+1).join('0')+b;

  var arrA = a.split('');
  var arrB = b.split('');
  for(var j=0; j<a.length; j++) {
    var temp = (Number(arrA.pop()) + Number(arrB.pop())) +count;
    temp>=10?[temp,count]=[temp-10,1]:count=0;
    result.push(temp);
  }
  result.push(count);

  return result.reverse().join('').replace(/^0+/,'');
 }

 module.exports = add