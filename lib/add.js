function add(str1, str2) {
  var arr1=[],arr2=[];
  if(str1.length>str2.length){
      str1 = '0'+str1
      for(let i=str2.length;i < str1.length;i++){
        str2 = '0' + str2
      }
      arr1 = str1.split('')
      arr2 = str2.split('')
  }else{
      str2 = '0'+str2
      for(let i=str1.length;i < str2.length;i++){
        str1 = '0' + str1
      }
      arr1 = str1.split('')
      arr2 = str2.split('')
  }
  for (let i = arr1.length-1; i >= 0; i--) {
      let temp = parseInt(arr1[i]) + parseInt(arr2[i])
      arr1[i] = temp % 10
      // 处理得到进位的结果
      arr1[i - 1] = parseInt(arr1[i-1]) + Math.floor(temp / 10)
    }
    if(arr1[0] === 0){
      return (arr1.join('')).substring(1)
   
    } else{
      return arr1.join('')
  } 
}
module.exports = add