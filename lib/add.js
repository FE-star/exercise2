function add(param1, param2) {
    let i = param1.length - 1;
    let j = param2.length - 1;
    let carry = 0;
    let sum = '';
    for (; i >= 0 || j >= 0 || carry > 0; i--, j--) {
        const c1 = i < 0 ? 0 : param1.charAt(i) - '0';
        const c2 = j < 0 ? 0 : param2.charAt(j) - '0';
        const cs = c1 + c2 + carry;
        sum = `${cs % 10}${sum}`;
        carry = Math.floor(cs / 10);
    }
    return sum;
}

module.exports = add;