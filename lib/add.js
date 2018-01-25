var bigInt = require('big-integer');

// 方法一（直接使用第三方）
// function add(a,b) {
//   // bigInt(a).add(b) + ''  精度丢失
//   return bigInt(a).add(b).toString()
// }

/**
 * 方法二：参考网上以字符串方式相加
 */
function add(a,b){
    var aArr = (a+'').split(''),
        bArr = (b+'').split(''),
        temp = '',
        forward = 0,
        result = [];

    // 确保a b长度相等
    var len = aArr.length - bArr.length;
    var maxLength = len > 0 ? aArr.length : bArr.length;

    if(len !== 0){
        // 需要在前补0
        var len1 = Math.abs(len);
        if(len < 0){
            for (var i = 0; i < len1; i++) {
                aArr.unshift('0');
            }
        }else{
            for (var i = 0; i < len1; i++) {
                bArr.unshift('0');
            }
        }
    }

    // 相加
    for(var i = maxLength - 1; i >= 0; i--){
        temp = (+aArr[i]) + (+bArr[i]) + forward;
        if(temp >= 10){
            forward = 1;
            result.unshift((temp + '')[1]);
        }else{
            forward = 0;
            result.unshift(temp);
        }
    }

    if(forward === 1){
        result.unshift(forward);
    }

    return result.join('').toString();

}

module.exports = add
