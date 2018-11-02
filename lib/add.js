function add(a, b) {
  const arr1 = (a + '').split('').map(i => +i);
  const arr2 = (b + '').split('').map(i => +i);
  
  let res = '';
  let m = 0;
  const sum = (a = 0, b = 0) => a + b;
  while(arr1.length || arr2.length || m) {
    const step = m + sum(arr1.pop(), arr2.pop());
    res = step % 10 + res;
    m = step > 9;  // m = parseInt(step / 10)
  }
  return res;
}

module.exports = add