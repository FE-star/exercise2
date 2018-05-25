import R from 'ramda';

var mySplit = a => a.split('');
var ifUnShift = (a, arrayIns) => {
    if (a) arrayIns.unshift(a)
};
var functionalAdd = R.compose(R.join(''), )
function add(a, b) {
  // 实现该函数
  a = a.split('');
  b = b.split('');
  function addMap(aArrayIns, bAyyayIns) {
    var c = 0;
    aArrayIns.reverse();
    bAyyayIns.reverse();
    var result = aArrayIns.map(function(ele, index) {
        var d = 0;
        if (bAyyayIns[index]) {
            d = parseFloat(ele) + parseFloat(bAyyayIns[index]) + c;
            if (d >= 10) {
                c = 1;
                return (d - 10).toString();
            } else {
                c = 0;
                return d.toString();
            }
        } else {
            d = parseFloat(ele) + c;
            if (d >= 10) {
                c = 1;
                return (d - 10).toString;
            } else {
                c = 0;
                return d.toString;
            }
        }
    }).reverse();
    if (c) {
        result.unshift(1);
    }
    return result.join('');
  }

  if (a.length >= b.length) {
    return addMap(a, b);
  } else {
    return addMap(b, a);
  }
}
add('42329', '63861');
add('843529812342341234', '236124361425345435');

module.exports = add