//实现大数相加

//总结一下
//1.先判断两个字符串的长度那个长 
//  位数小的需要补位 从小位数的长度开始 到最大位数-1
//2.转化成数组 开始相加 定义一个新的数组 和 进位标志
//3.倒序开始相加  大于 9的话 isBit =1 x+y+bit
//4 最后 整体进位 把 bit unshift 到res 数组 
function add(x, y) {

     //1.先变成数组 并且翻转
     let x_arr = x.split("").reverse();
     let y_arr = y.split("").reverse();

     //2.找出 x_arr y_arr 中的最大值
     let max = Math.max(x_arr.length,y_arr.length)

     //定义进位 标志 
     let flag = 0;

     //定义一个数组

     let temp = [];
     
     for(var i = 0; i < max; i++){
          let sum  = (+x_arr[i]||0) + (+y_arr[i] || 0) + flag;
          flag = 0
          if(sum > 9){
             sum -= 10;
             flag = 1;
          }
          temp.push(sum);
     }

     if(flag){
        temp.push(flag)
     }   

     return temp.reverse().join("")
}

module.exports = add