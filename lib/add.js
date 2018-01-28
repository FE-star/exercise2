function add(x, y) {
  if (x.length > 16 || y.length > 16) {
    var _x = x.substring(0, 16);
    var x_ = x.substring(16);
    var _y = y.substring(0, 16);
    var y_ = y.substring(16);
    return ((+_x) + (+_y) + '') + ((+x_) + (+y_) + '')
  }
  return (+x) + (+y) + ''
}

module.exports = add
