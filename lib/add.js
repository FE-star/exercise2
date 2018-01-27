function add(num1, num2) {
        // 实现该函数

        // 这里不考虑科学计数法问题，所以以string形式体现 大数
        var isNumberic = /^\d+\.?\d*$/;
        function isString(obj) {
          if(Object.prototype.toString.call(obj).slice(8, -1) === "String") {
            return true;
          }
          return false;
        }

        if(!isNumberic.test(num1) || !isNumberic.test(num2)) return; // 判断是不是数字组成的
        if(!isString(num1) || !isString(num2)) return; // 判断是不是字符串

        var num1Arr = num1.split("."),
            num2Arr = num2.split("."),
            carry = 0; // 表示进位

        if(!num1Arr[1] && !num2Arr[1]) { // 小数位都不存在情况
          return stringAdd(num1Arr[0], num2Arr[0]);
        } else {
          var smallNum = stringAdd(num1Arr[1] || 0, num2Arr[1] || 0, {carry: 0, sNum: true});

          if(carry) { // 判断小数位相加是否产生进位
             var intNum = stringAdd(num1Arr[0], num2Arr[0], {carry: carry, sNum: false});
             var smallNumArr =  smallNum.split("");
             smallNumArr.shift();

             return intNum + "." + smallNumArr.join("");
          } else {
            var intNum = stringAdd(num1Arr[0], num2Arr[0]);
            return intNum + "." + smallNum;
          }

        }

        function stringAdd(a, b, option) {
          if(a == 0) return b;
          if(b == 0) return a;
          var config = {
            carry : 0,
            sNum : false
          }

          if(option) {
            config.carry = option.carry;
            config.sNum = option.sNum;
          }

          var arrA = a.split(""),
              arrB = b.split(""),
              result = [];

          // 把相差的位数补全，小数位和整数位分别是在后面和前面补零
          var distance = arrA.length - arrB.length;
          if (distance > 0) {
              for(var i = 0; i < distance; i++) {
                if(config.sNum) {arrB.push("0")}
                else {arrB.unshift("0")}
              }
          } else {
              for(var i = 0; i < Math.abs(distance); i++) {
                if(config.sNum){ arrA.push("0")}
                else {arrA.unshift("0");}
              }
          }

          // 采用手工计算原理，把每一位相加，进位+1
          var len = arrA.length;
          for(len = len - 1; len >= 0 ; len--) {
            var sum = (+arrA[len]) + (+arrB[len]) + config.carry;
            config.carry = parseInt(sum / 10);
            result.unshift(parseInt(sum % 10));
          }

          if(config.carry) result.unshift(config.carry);
          carry = config.carry;
          return result.join("");
        }

      }

module.exports = add
