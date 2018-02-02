function add(x,y) {
  // 实现该函数
  let rs = [];

    while (x.length > 0 || y.length > 0) {
      rs.push(parseInt(x.substr(-14) || 0, 10) + parseInt(y.substr(-14) || 0, 10));
      x = x.substr(0, x.length - 14);
      y = y.substr(0, y.length - 14);
    }

    var u = 0, n = '';
    while (rs.length) {
      let t = (rs.shift() + u).toString();
      n = t.substr(-14) + n;
      u = parseInt(t.substr(0, t.length - 14) || 0, 10);
    }

    return n;
}

module.exports = add
