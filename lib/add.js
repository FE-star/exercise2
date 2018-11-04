function add(a,b) {
   //通过补零让a和b对齐  
    //若a比b短，则对a补零  
    while(a.length < b.length){  
      a = "0" + a;  
  }  
  //若b比a短，则对b补零  
  while(b.length < a.length){  
      b = "0" + b;  
  }  
  //是否有进位  
  var addOne = 0;  
  //结果数组  
  var result = [];  
  //从个位开始相加  
  for(var i=a.length-1;i>=0;i--){  
      var c1 = a.charAt(i) - 0;  
      var c2 = b.charAt(i) - 0;  
      var sum = c1 + c2 + addOne;  
      //若数字相加大于9，则进位  
      if(sum > 9){  
          result.unshift(sum - 10);  
          addOne = 1;  
      }  
      else{  
          result.unshift(sum);  
          addOne = 0;  
      }  
  }  
  //应付下面的情况：  
  //"99" + "11" => "110"  
  //它最后仍然要进位  
  if(addOne){  
      result.unshift(addOne);  
  }  
  //应付如下的情况  
  //"01" + "01" => "2"  
  //而不是"02"，所以移除第一位的"0"  
  if(!result[0]){  
      result.splice(0,1);  
  }  
  return result.join("");  
}

module.exports = add