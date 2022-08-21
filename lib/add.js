function add(a, b) {
  let maxLength = Math.max(a.length, b.length);
  a = String(a).padStart(maxLength, 0);
  b = String(b).padStart(maxLength, 0);

  let sum = '';
  let f = 0;
  for (let i = maxLength - 1; i >= 0; i--) {
    f = parseInt(a[i]) + parseInt(b[i]) + f;
    sum = (f % 10) + sum;
    f = Math.floor(f / 10);
  }
  return f === 1 ? '1' + sum : sum
}

module.exports = add
