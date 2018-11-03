function add(fir,sec) {
  // 将参数转为数组
    var firArr = fir.split('');
    var secArr = sec.split('');

    var sum = [];// 总数
    var maxLen = firArr.length;
    var minLen = secArr.length;
    var max= firArr ;
    var min = secArr;

    if(firArr.length<secArr.length){
        maxLen = secArr.length;
        minLen = firArr.length;
        max = secArr;
        min = firArr;
    }

    var flag = 0;//加的进位
    var current = 0;//当前位相加的和
    for(var i=maxLen-1,j=minLen-1;i>=0;i--,j--){
        if(j<0){
            current = parseInt(max[i])+flag;
        }else{
            current = parseInt(max[i])+parseInt(min[j])+flag;
        }
        if(current>9){
            flag = 1;
            current = current-10;
            if(i==0){//如果是最后一位，则将最后一位添加1
                sum.unshift(current);
                sum.unshift(1);
                break;
            }
        }else{
            flag = 0;
        }
        sum.unshift(current);
    }
    return sum.join('');
}

module.exports = add