/**
 * js 实现大数相加：
 * 思路：
 * 1. 用字符串的形式保存大数，保证其在数学表示上不会发生变化
 * 2. 初始化 res, temp 变量来保存中间计算的结果，在将两个字符串 split 为数组，以便进行每一位的计算
 * 3. 循环的第一次就是进行“个位”的运算，将二者最末尾的两个数相加，由于每一位数字是 0-9，所以需要进行进位，在经过取余数操作后，将结果保留在个位
 * 4. 判断 temp 是否大于 10, 若是则将 temp 赋值为 true
 * 5. 在两个大数中的一个还有数字没有参与运算，或者前一次运算发生进位后，进行下一次循环
 * 6. 接着除了对新的两个数字相加还要加上 temp, 若上次发生了进位，则此时 temp 为 true, Js 因为存在隐式转换，所以 true 转换为 1，借用Js的类型转黄，完成了逻辑上的逢10进1操作。
 * 7. 重复以上步骤，直到计算结束
 */
function add(a, b) {
    // 实现该函数
    var res = '';
    var temp = 0;
    a = a.split('');
    b = b.split('');

    while(a.length || b.length || temp) {
        temp += ~~a.pop() + ~~b.pop();
        res = (temp % 10) + res;
        temp = temp > 9;
    }

    return res.replace(/^0+/, '');
}

module.exports = add