function add() {
  // 实现该函数
  if(arguments.length !== 2){
    throw new Error('wrong argument');
  }
  let a = '' + arguments[0];
  let b = '' + arguments[1];
  if(isNaN(parseInt(a)) || isNaN(parseInt(b))){
    throw new TypeError('wrong type');
  }

  a = a.split('');
  b = b.split('');
  let lenA = a.length;
  let lenB = b.length;
  let temp = [];
  let len = lenA > lenB ? lenA : lenB;

  let tempA = 0;
  let tempB = 0;
  for(let i=1;i<=len;i++){
    tempA = a[lenA-i] || 0;
    tempB = b[lenB-i] || 0;
    temp.push(parseInt(tempA)+parseInt(tempB));
  }

  for(let j=0;j<len;j++){
    if(temp[j] > 10){
      temp[j+1] += 1;
      temp[j] -= 10;
    }
  }
  return temp.reverse().join('');
}

module.exports = add