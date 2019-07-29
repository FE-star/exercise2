function add(numberStr1, numberStr2) {
  /**
   * 思路：
   * 将数字反转相加，记录是否进位
   * 最后再将数字反转输出
   * 
   * 注意：
   * （1）进位数向下取整
   * （2）最后一位相加时若仍存在进位数则要另外push进入result队列
   */

   const num1 = numberStr1.split('').reverse();
   const num2 = numberStr2.split('').reverse();
   const result = [];

   const len = Math.max(num1.length, num2.length);

   let n = 0;

   for (let index = 0; index < len; index++) {
     const curNum1 = parseInt(num1[index]) || 0;
     const curNum2 = parseInt(num2[index]) || 0;
     
     const sum = n ? (curNum1 + curNum2 + n) : (curNum1 + curNum2);
     n = Math.floor(sum / 10);

     result.push(`${sum}`.slice(-1));
   }

   if (n) result.push(n);

   return result.reverse().join('');

}

module.exports = add