function add(a,b) {
 var addArr=[]
 var alen,blen,len,tempA,tempB,temp,index=0
    var arrA=a.split('')
    var arrB=b.split('')
    arrA.reverse()
    arrB.reverse()
    alen=arrA.length
    blen=arrB.length
    len=alen>blen?alen:blen
    for(var i=0;i<len;i++){
        tempA = parseInt(arrA[i],10);
        tempB = parseInt(arrB[i],10);
        temp = tempA + tempB + index;
        if(i===len-1){
            addArr.push(temp);
            index = 0;
        }else{
            if (temp > 9) {
                addArr.push(temp - 10);
                index = 1;
            }  else {
                addArr.push(temp);
                index = 0;
            }
        }
    }
  return addArr.reverse().join('')
}

module.exports = add