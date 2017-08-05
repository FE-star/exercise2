function add(x, y) {
    
    //x, y 都是字符串 并且位数相等
    //1.翻转字符串
    //先把字符串变为数组
    var temp_x_arr = x.split("");
    var temp_y_arr = y.split(""); 
    //数组调用 reverse 方法 翻转
    var temp_x = temp_x_arr.reverse();
    var temp_y = temp_y_arr.reverse();

    //定义是否进位
    var isCharryBit = 0;
    // 是否补位
    var isOverflow = 0; 
    //存放相加后的数 
    var sum_arr = [];
    // x + y 相加的数
    var sum_num = 0;
    for(var i = 0; i < temp_x_arr.length;i++){
         //可以把字符串 变为数字 方便计算 再加上进位
         sum_num = Number(temp_x_arr[i]) + Number(temp_y_arr[i])  + isCharryBit;
         //如果相加的和 大于9 则表示要进位
         if(sum_num > 9){
             //如果是最后一个数的话
             if(i == temp_x_arr.length - 1 ){
                 //补位
                 isOverflow = 1;
             }
             //进位
             isCharryBit = 1; 
             //转变为字符串
             sum_arr[i] = sum_num - 10 + ''
         }else{
           //不进位 
           sum_arr[i] = sum_num + '';
           isCharryBit = 0;  
         }                        
    }

    if(isOverflow){
       sum_arr[temp_x_arr.length] = isOverflow + '';
    }

    return sum_arr.reverse().join("");
}



module.exports = add