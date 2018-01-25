function add(a,b) {
  // 实现该函数
  const max = Math.pow(2,53)-1;
  if(Number(a)+Number(b)<max){
  	return String(Number(a)+Number(b))
  }
  const al = a.length
  const bl = b.length
  let tempNum1=0;
  let tempNum2=0;
  let arr =''
  for(let i=1;i<=al||i<=bl;i++){
  	if(i>al){
  		tempNum1 = tempNum2+Number(b[bl-i])
  	}else if(i>bl){
  		tempNum1 = tempNum2+Number(a[al-i])
  	}
  	else{
  		tempNum1 = Number(a[al-i]) + Number(b[bl-i]) + tempNum2
  	}
  	if(tempNum1>=10){
  		arr = String(tempNum1)[1]+arr
  		tempNum2=1
  	}else{
  		arr = String(tempNum1)+arr
  		tempNum2=0
  	}
  }
  if(tempNum2==1){
  	return '1'+arr;
  }else{
  	return arr;
  }

}

module.exports = add