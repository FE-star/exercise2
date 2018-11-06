function add(a, b) {
    var res = '', c = 0;
    var _res = Number(a) + Number(b);
    
    if(Math.abs(_res) < Math.pow(2, 53)) return _res + '';

    a = a.split('');
    b = b.split('');
    while (a.length || b.length || c) {
        c += ~~a.pop() + ~~b.pop();
        res = c % 10 + res;
        c = c > 9;
    }
    return (_res < 0 && '-' || '') + res.replace(/^0+/, '');
}

module.exports = add