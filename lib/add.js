function add(str1,str2) {
  // 实现该函数
    var arr1 = str1.split("").reverse();
    var arr2 = str2.split("").reverse();
    var max = Math.max(Number(str1),Number(str2)).toString().length;//取较大值
    var arrAdd = [];
    for(var i = 0; i<max ; i++){
        if(!arr1[i]){
            arr1[i] = 0;
        }
        if(!arr2[i]){
            arr2[i] = 0;
        }
        if(!arrAdd[i]){
            arrAdd[i] = 0;
        }
        var num = Number(arr1[i])+Number(arr2[i])+Number(arrAdd[i]);
        if(num>9){
            arrAdd[i+1] = num.toString().substring(0,1);
            arrAdd[i] = num.toString().substring(1,2);
        }else{
            arrAdd[i] = num.toString();
        }
    }
    return arrAdd.reverse().join("")
}

module.exports = add