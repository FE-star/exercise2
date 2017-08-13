function add(a,b) {
  // 实现该函数,大数相加
  //拆开，倒序（因为a,b位数不一定一样），然后每个相加，超过10 立一个flag
  var aList = a.split('').reverse();
  var bList = b.split('').reverse();

  var max = Math.max(aList.length, bList.length);
  var resultList = [];
  var flag = 0;//进位，一开始没有进位，为0
  console.log(aList);
  console.log(bList);
  for(var i=0; i<max; i++){
    var tmp = (+aList[i] || 0) + (+bList[i] || 0) + flag//没有的话就是0,加个 + 号，就字符串变成数字了
    flag = 0;//上面加了，下面清零。
    console.log(tmp);
    if(tmp>9){
      console.log('0999');
      tmp = tmp - 10;
      flag = 1;
    }

    resultList.push(tmp);
  }

  //但是那个循环完还有第一位没有加上去，还要做一次判断：
  if(flag === 1){
    resultList.push(flag);
  }

  resultList = resultList.reverse().join('');
  return resultList;

}

module.exports = add