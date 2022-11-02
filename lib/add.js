function add(num1,num2) {
  let len = Math.max(num1.length,num2.length);
  let sum = '';
  let temp = 0;
  let tempSum=0
 let len1= num1.padStart(len,'0').split('');
 let len2 = num2.padStart(len,'0').split('')
  for(i = len-1;i>=0;i--){
    tempSum =temp+ Number(len1[i])+Number(len2[i]);
    if(tempSum>=10){
      temp = parseInt(tempSum/10);
      tempSum=tempSum%10
    }else {
      temp = 0
    }
      sum =tempSum+sum
    if(i==0&&(Number(len1[0])+Number(len2[0])>=10)){
       sum= '1'+sum
    }
  }
return sum
}

module.exports = add
