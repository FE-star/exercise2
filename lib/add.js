// 命令式的方法
function add(a, b) {
  // 实现该函数
  a = a.split('').reverse();
  b = b.split('').reverse();
  function addMap(aArrayIns, bAyyayIns) {
  return aArrayIns.reduce((accumulator, currentValue, index) => {
    let c = ~~bAyyayIns[index] + ~~currentValue + ~~accumulator[index];
    if (c >= 10) {
    accumulator[index] = (c - 10).toString();
    accumulator.push('1');
    } else {
    accumulator[index] = c.toString();
    }
    return accumulator;
  }, []).reverse().join('');
  }
  return a.length >= b.length ? addMap(a, b) : addMap(b, a);
}

// 函数式
let compose = (f, g) => (...args) => f(g(...args));
let addUnit = a => b => b + a;
let myPop = a => a.pop();
let myNumber = a => ~~a;
let pAndN = compose(myNumber, myPop);
let remainderTen = x => x % 10;
let isGreeterNine = x => x > 9;
let replaceHeadZero = x => x.replace(/^0+/, "");
let loop = (a, b, res, c) => {
  if (!a.length && !b.length && !c) return res;
  let getC = compose(addUnit(pAndN(b)), addUnit(pAndN(a)));
  let getEes = compose(addUnit(res), remainderTen);
  return loop(a, b, getEes(getC(c)), isGreeterNine(getC(c)));
}

let add2 = (a, b) => compose(replaceHeadZero, loop)(a.split(""), b.split(""), "", 0);

module.exports = add