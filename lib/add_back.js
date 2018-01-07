//实现大数相加

//总结一下
//1.先判断两个字符串的长度那个长 
//  位数小的需要补位 从小位数的长度开始 到最大位数-1
//2.转化成数组 开始相加 定义一个新的数组 和 进位标志
//3.倒序开始相加  大于 9的话 isBit =1 x+y+bit
//4 最后 整体进位 把 bit unshift 到res 数组 
function add(x, y) {

    let num_arr1 = x.split("");
    let num_arr2 = y.split("");
    //从数组最后一个位置开始计算
    //几个需要注意的点
    //先把两个字符串弄成一样的长度
    //1. 开始补0 让 x 和 y 都成同等位数 
    let max_str_length =  Math.max(x.length, y.length)  
      
    //当 x 的长度大于 y 的长度
    if(x.length > y.length){
       let start = y.length;
       for(var i = start; i < x.length; i++){
            num_arr2.push(0)
       }  
    }else if(x.length < y.length){
       let start = x.length;
       for(var i = start; i < y.length; i++){
            num_arr1.push(0)
       }  
    }

    let res = [];  
    //2.开始相加 遇到大于9 的进位
    let isBit = 0;
     
    for(var i = max_str_length - 1; i >= 0; i--){
         
         //如果两个数相加 大于9的话 就进位
         let sum = Number(num_arr1[i]) + Number(num_arr2[i]) + isBit;
         if(sum > 9){
               res[i] = sum - 10;
               isBit = 1;   
         }else{
               res[i] = sum;
               isBit = 0;
         }
    }
     
    //3 整体进位
    if(isBit){
        res.unshift(1); 
    }
     
    //[1,2,3].toString()  '1,2,3'
    //[1,2,3].join('') '123'
    //这两个的区别
    return res.join('')  
}

module.exports = add