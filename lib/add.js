function add(num1, num2) {
    // 强转字符串，对于输入参数值为Number类型的正整数也可以支持

    num1 = String(num1);
    num2 = String(num2);
    let lenMax = num1.length > num2.length ? num1.length : num2.length;
    num1 = num1.padStart(lenMax, '0');
    num2 = num2.padStart(lenMax, '0');
    let carry = 0;
    let result = '';
    for (let i = lenMax - 1; i >= 0; i--) {
        let sum = parseInt(num1[i]) + parseInt(num2[i]) + carry;
        result = sum % 10 + result;
        carry = sum > 9 ? 1 : 0;
    }
    if (carry === 1) {
        result = 1 + result;
    }
    return result;
}

module.exports = add