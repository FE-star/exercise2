function add(a, b) {
    var len_a1 = a.length;
    var len_b1 = b.length;
    var len_a2 = len_a1 - 4;
    var len_b2 = len_b1 - 4;
    var a1 = a.substr(-4, 4);
    var b1 = b.substr(-4, 4);
    var a2 = a.substr(0, len_a2);
    var b2 = b.substr(0, len_b2);
    var ab1 = Number(a1) + Number(b1);
    var ab2 = Number(a2) + Number(b2);
    var ab = String(ab2) + String(ab1);
    return ab;
    // 实现该函数
}

module.exports = add