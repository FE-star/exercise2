 // 实现该函数(按位相加)
 function add(a, b) {

     // 将（大数）数字转换为数组
     function normalize(number) {
         
         var result = [];
         for (var i = 0, l = number.length; i < l; i++) {
             result.push(Number(number[i]));
         }
         return result
     }

     // 1234 =>    [1,2,3,4] 
     // 56789 => [5,6,7,8,9]
     var arrA = normalize(a);
     var arrB = normalize(b);

     //console.log(arrA)
     //console.log(arrB)

     // 遍历位数较多的数
     var large = arrA.length >= arrB.length ? arrA : arrB;
     var small = large === arrA ? arrB : arrA;
     var diff = large.length - small.length

     // =>[5,7,9,11,13]
     var result = []
     for (var i = large.length - 1; i >= 0; i--) {
         if(i-diff >=0){
          result.unshift(large[i] + small[i - diff])
        }else{
          result.unshift(large[i])
        }
         
     }
     // console.log(result)


     // => [5,8,0,2,3]
     var addResult = []
     for (var i = result.length - 1; i >= 0; i--) {
         if (result[i] < 10) {
             addResult.unshift(result[i])
         } else {

             if (i > 0) {
                 addResult.unshift(result[i] % 10)
                 result[i - 1]++
             }
             else{
                addResult.unshift(10 + result[i] % 10)
             }

         }
     }

     return addResult.toString().replace(/,/g,'')

 }


 module.exports = add
