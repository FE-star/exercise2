function add(n1,n2) {
  // 实现该函数
  const n1Arr = n1.split('')
  const n2Arr = n2.split('')
  const resultArr = [];
  let count = 0;
  const maxLength = n1Arr.length>n2Arr.length?n1Arr.length:n2Arr.length
  for(let i=maxLength-1;i>=0;i--){
    const sum = Number(n1Arr[i])+Number(n2Arr[i])+count;
    resultArr.unshift(sum%10)
    count = sum>9?1:0
  }
  if(count>0){
    resultArr.unshift(count)
  }
  return resultArr.join('')
}

module.exports = add