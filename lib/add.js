function add(a, b) {
    // 实现该函数
    var carry = 0, result = [],
        len = Math.max(a.length, b.length), i = len;
    while (i--) {
        var sum = (+a[i - len + a.length] || 0) + (+b[i - len + b.length] || 0) + carry;
        carry = parseInt(sum / 10);
        result.unshift(sum % 10);
    }
    if (carry) result.unshift(carry);
    console.log(result.join(''))
    return result.join('');

    // var res='', c=0;
    // a = a.split('');
    // b = b.split('');
    // while (a.length || b.length || c){
    //     c += ~~a.pop() + ~~b.pop();
    //     res = c % 10 + res;
    //     c = c>9;
    // }
    // return res.replace(/^0+/,'');
}

module.exports = add