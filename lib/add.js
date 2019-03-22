function add(a, b) {
    // 实现该函数
    let aArr = (a.split('')).reverse(),
        bArr = (b.split('')).reverse(),
        maxLen = Math.max(aArr.length, bArr.length),
        index = 0,
        bool = 0,
        temp = [];

    while (index <= maxLen) {
        let result = Number(aArr[index] || 0) + Number(bArr[index] || 0) + bool;

        temp.unshift(result % 10);

        bool = Number(result > 9);

        index++;
    }

    // 测试 Travis CI
    return (temp.join('')).replace(/^0+/, '');

    // var res = '',
    //     temp = 0;
    // a = a.split('');
    // b = b.split('');
    // while (a.length || b.length || temp) {
    //     temp += ~~a.pop() + ~~b.pop();
    //     res = (temp % 10) + res;
    //     temp = temp > 9;
    // }
    // return res.replace(/^0+/, '');
}

console.log(add('42329', '21532'));

module.exports = add
