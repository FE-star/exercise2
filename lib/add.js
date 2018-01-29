function add(x, y) {
    var n1 = x.split('').reverse(), //把数据转成数组
        n2 = y.split('').reverse(),
        len = Math.max(n1.length, n2.length), //获取最大数长度
        temp = [],
        carry = 0, //进位
        result = 0;

    for (var i = 0; i < len; i++) {
        result = Number(n1.shift()) + Number(n2.shift()) + carry;
        if (result > 10) {
            if (i != len) {
                result = result % 10;
                carry = 1;
            }
        } else {
            carry = 0;
        }

        temp.push(result);
    }
    return temp.reverse().join('');

}





module.exports = add;