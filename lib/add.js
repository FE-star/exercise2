function add(a, b) {
  const sum = [];

  while(a.length > 0 || b.length > 0) {
    sum.push(Number(a.substr(-14)) + Number(b.substr(-14)));
    a = a.substr(0, a.length - 14);
    b = b.substr(0, b.length - 14);
  }

  let bit = 0;
  let result = '';
  while (sum.length > 0) {
    const temp = String((sum.shift() + bit));
    result = temp.substr(-14) + result;
    bit = Number(temp.substr(0, temp.length - 14));
  }

  return result;
}

module.exports = add