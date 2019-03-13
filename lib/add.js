function add(num1, num2) {
    let sum = '',
        carry = 0;

    num1 = num1.trim();
    num2 = num2.trim();

    (num1.length < num2.length) && ([num2, num1] = [num1, num2])
    // 实现该函数
    for (let index=num1.length-1; index>=0; index--) {
        let accumulate = '',
            nextIndex = index+1,
            bit1 = num1.substring(index, nextIndex),
            bit2 = num2.substring(index, nextIndex);
        if (!bit2) {
            bit2 = carry;
            carry = 0;
        }
        let count = parseInt(bit1) + parseInt(bit2) + carry;
        carry = Math.floor(count / 10);
        accumulate = (count % 10) + '';
        sum = accumulate + sum;
    }
    sum = carry===0 ? sum : carry + sum
    return sum;
}

module.exports = add
