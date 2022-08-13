function add(str1,str2) {
  // 实现该函数
  var temp=0//进位数;
  var result='';
 
  for(var i=str1.length-1,j=str2.length-1;i>=0||j>=0;i--,j--){
    
    var sum=Number(getChar(str1,i))+Number(getChar(str2,j))+temp;
    if(sum>=10){
          temp=1;
          sum-=10;
        }else{
          temp=0;
        }
        result=sum+result;
      }
      //当存在进位
      if(temp){
result=temp+result;
      }
  return result;
}

function getChar(str,i){
  return str[i]?str[i]:0;
}

module.exports = add