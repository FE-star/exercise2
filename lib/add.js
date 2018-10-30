function add(x,y) {
  // 实现该函数
  let xArr = x.split('').reverse().map(Number);
  let yArr = y.split('').reverse().map(Number);
  let maxLen = xArr.length > yArr.length ? xArr.length : yArr.length;
  let addnum = 0;//进位
  let result = [];
  for(let i = 0; i < maxLen;i++){
    let thisNum = (xArr[i]||0) + (yArr[i]||0) + addnum;

    thisNum>=10? addnum=1 : addnum=0;
    result.push(thisNum % 10);
    if(i === maxLen - 1 && addnum){
      result.push(addnum);
    }
  }
  return result.reverse().join('');
}

module.exports = add