function add(a, b) {
  let res = '', c = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = c % 10 + res;
    c = c > 9
  }
  return res.replace(/^0+/, '');
}

console.log(add('10909','88888'))

module.exports = add