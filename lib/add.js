function add(a,b) {
  // 实现该函数
  let newArr = [],aLen = a.length
      bLen = b.length,
      aBrr = a.split(""),
      bBrr = b.split(""),
      max = Math.max(aLen,bLen),
      Dvalue = 0,carry = 0
  if(max-aLen > 0){
    Dvalue = max -aLen
    for(let k=0;k < Dvalue;k++) {
      aBrr.push("0")
    }
  }
  if(max-bLen > 0){
    Dvalue = max - bLen
    for(let k=0;k < Dvalue;k++) {
      bBrr.unshift("0")
    }
  }
  for(let i = max -1;i > 0;i--){
    let ab = (Number(aBrr[i])+Number(bBrr[i])+carry).toString()
    if(ab / 10 < 1){
      newArr[i]=ab
      carry = 0
    }else{
      newArr[i]=Number(ab%10);
      carry = 1
    }
  }
  newArr[0] = (Number(aBrr[0])+Number(bBrr[0])+carry).toString()
  return newArr.join("")
}

module.exports = add