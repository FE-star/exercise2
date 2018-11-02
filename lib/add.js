function add(lhs, rhs) {
  let resultArray = []; // store sum, in reverse order
  let lhsCursor = lhs.length-1;
  let rhsCursor = rhs.length-1;
  let arrayCursor = 0;
  let optIn = 0;
  while (lhsCursor >= 0 && rhsCursor >= 0) {
    let result = Number(lhs[lhsCursor]) + Number(rhs[rhsCursor]);
    resultArray[arrayCursor] = result % 10 + optIn;
    optIn = parseInt(result / 10);
    lhsCursor--;
    rhsCursor--;
    arrayCursor++;
  }	
  while (lhsCursor >= 0) {
    let result = Number(lhs[lhsCursor]) + optIn;
    resultArray[arrayCursor] = result % 10 + optIn;
    optIn = parseInt(result / 10);
    lhsCursor--;
    arrayCursor++;
  }
  while (rhsCursor >= 0) {
    let result = Number(rhs[rhsCursor]) + optIn;
    resultArray[arrayCursor] = result % 10 + optIn;
    optIn = parseInt(result / 10);
    rhsCursor--;
    arrayCursor++;
  }
  if (optIn === 1) {
    resultArray[arrayCursor] = 1; 
  }

  return resultArray.reverse().join('');
}

module.exports = add
