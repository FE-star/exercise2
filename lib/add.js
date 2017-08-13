function add(a,b) {
  // 实现该函数
  var aArr = a.split('').reverse();
  var bArr = b.split('').reverse();
  var length = aArr.length > bArr.length ? aArr.length : bArr.length;
  var flag = 0; //进位标志
  var res = [];
  for(var i = 0; i < length; i++){
    var sum = (+aArr[i] || 0) + (+bArr[i] || 0) + flag;
    flag = 0;
    if( sum > 9 ){
      flag = 1;
      sum -= 10;
    }
    res.push(sum);
  }
  if(flag == 1){
    res.push(1);
  }
  return res.reverse().join('');
}

module.exports = add