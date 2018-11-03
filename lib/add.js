function add(a, b) {
  // 实现该函数
  a = '0' + a;
  b = '0' + b;
  
  if(a.length > b.length) {
    b=(new Array(a.length - b.length + 1).join('0'))+b;
  } else {
    a = (new Array(b.length-a.length+1).join('0'))+a;
  }

  var a = a.split('').reverse();
  var b = b.split('').reverse();
  var sumArr = [];
  var flag = 0;
  

  for(var i=0;i<a.length;i++){
    var sum = parseInt(a[i])+parseInt(b[i])+flag;
    if(sum>9){
      sum -= 10;
      flag = 1;
    } else {
      flag = 0;
    }
    sumArr.push(sum);
  }
  return sumArr.reverse().join('').replace(/^0/,'');
}

module.exports = add