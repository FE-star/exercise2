function add (x,y) {
  var assertArr = [];
  var xArr = (x+'').split('').reverse();
  var yArr = (y+'').split('').reverse();
  var whileNum = x.length<y.length?y.length:x.length;
  var i = 0;
  var jinwei = 0;
  while( i <= whileNum){
    var pushValue = ~~xArr[i] + ~~yArr[i] + jinwei;
    if(pushValue > 9){
      jinwei = 1;
    }else{
      jinwei = 0;
    }
    assertArr.push(pushValue%10);
    i++;
  }
  return assertArr.reverse().join('').replace(/^0/, '');

}

module.exports = add;