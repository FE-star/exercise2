function add(str1,str2) {
  // 实现该函数
  var array1 = str1.split('').reverse(); 
  var array2 = str2.split('').reverse();
  var result3 = [];

   
  // 实现该函数
  var len1 = array1.length;
  var len2 = array2.length;
  var max = len1 > len2 ? len1 : len2;

  
  var temp = 0;
  for(var i=0 ; i < max ; i++){
  	var add1 = array1[i] == null ? 0 : parseInt(array1[i]);
  	var add2 = array2[i] == null ? 0 : parseInt(array2[i]);
  	var sum = add1 + add2 + temp;
	var result = (sum+10)%10;
     result3.push(result)
  	temp = sum >9 ? 1 : 0 ;
  }

  if(temp == 1){
  	result3.push(temp);
  }

  return result3.reverse().join('');
}

module.exports = add