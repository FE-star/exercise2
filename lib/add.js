let R = require('ramda');
R.trace = tag => x => {
  console.log(tag, x);
  return x;
}
// 不依赖库的函数式版本

// composeAll的第一种思路，利用可以组合两个函数的compose
let compose = (f, g) => (...args) => f(g(...args));
let composeAll = (...funcArgs) => (...args) => {
  let i = funcArgs.length - 2;
  let aaa = func => {
  if (i === 0) {
    return compose(funcArgs[i], func);
  }
  let funced = compose(funcArgs[i], func);
  i--;
  return aaa(funced);
  }
  return aaa(funcArgs[funcArgs.length - 1])(...args);
}
let composeAll6 = (...funcArgs) => (...args) => {
  let [...funcArgsCopy] = funcArgs;
  let callSelf = func => {
  if (funcArgsCopy.length === 0) return func;
  let funced = compose(funcArgsCopy.pop(), func);
  return callSelf(funced);
  }
  return callSelf(funcArgsCopy.pop())(...args);
}
let composeAll2 = (...funcArgs) => (...args) => {
  let funced = funcArgs[funcArgs.length - 1];
  for (let i = funcArgs.length - 2; i >= 0; i--) {
  if (i === 0) {
    return compose(funcArgs[i], funced)(...args);
  }
  funced = compose(funcArgs[i], funced);
  }
}

// 第二种思路，直接开始处理数据，把返回值传给下一个函数
// 循环
let composeAll3 = (...funcArgs) => (...args) => {
  for (let i = funcArgs.length - 1; i >= 0; i--) {
  args = i === funcArgs.length - 1 ? funcArgs[i](...args) : funcArgs[i](args);
  }
  return args;
}

// 带i的递归
let composeAll4 = (...funcArgs) => (...args) => {
  let i = funcArgs.length - 1;
  let funced = (...func) => {
  if (i === -1) return func[0];
  func = funcArgs[i](...func);
  i--;
  return funced(func);
  }
  return funced(...args);
}

// 不带i的递归
// 这个坑被坑的太久了，终于想明白了，因为这个是闭包，所以是留在内存里面的，而我用了pop，就蛋疼了，在第一次使用之后，funcArgs里面的方程都被弹出去了。。。。。
let composeAll5 = (...funcArgs) => (...args) => {
  let [...funcArgsCopy] = funcArgs;
  let funced = (...func) => {
  if (funcArgsCopy.length === 0) return func[0];
  func = funcArgsCopy.pop()(...func);
  return funced(func);
  }
  return funced(...args);
}

// 大pipe函数
let pipe = (...args) => composeAll5(...args.reverse());
let myReverse = x => {
  let [...y] = x;
  return y.reverse();
};
let mySplit = x => x.split("");
let myToString = x => x.toString();
let myPushOne = x => {
  let [...y] = x;
  y.push("1");
  return y;
}
let setValue = index => value => targetArray => {
    let [...y] = targetArray;
  y[index] = value;
  return y;
}
let splitAndReverse = composeAll6(myReverse, mySplit);
let myReduce = x => y => {
  return y.reduce(fnHandleAdd(splitAndReverse(x)), [])
};
let fnHandleAdd = a => (accumulator, currentValue, index) => {
  let c = ~~a[index] + ~~currentValue + ~~accumulator[index];
  return c >= 10
  ? composeAll4(myPushOne, setValue(index)(myToString(c - 10)))(accumulator)
  : setValue(index)(myToString(c))(accumulator);
};

let addMap2 = (a, b) => composeAll6(R.join(""), myReverse, myReduce(b), splitAndReverse)(a);
let addMap3 = (a, b) => pipe(splitAndReverse, myReduce(b), myReverse, R.join(''))(a);
let add = (a, b) => a.length >= b.length ? addMap3(a, b) : addMap3(b, a);

// ramda版本
// a是较短的数组，b是较长的数组的元素
let fnHandleAddWithRamda = a => (accumulator, currentValue, index) => {
  let c = ~~a[index] + ~~currentValue + ~~accumulator[index];
  let greaterThan = () => c >= 10;
  let setValue = R.curry((index, value, targetArray) => {
  targetArray[index] = value;
  return targetArray;
  })
  return R.ifElse(
  greaterThan,
  R.compose(R.append("1"), setValue(index, R.toString(c - 10))),
  setValue(index, R.toString(c))
  )(accumulator);
};
let splitAndReverseWithRamda = R.compose(R.reverse, R.split(""));
let addRamdaMap = (a, b) => R.compose(R.join(""), R.reverse, R.addIndex(R.reduce)(fnHandleAddWithRamda(splitAndReverseWithRamda(b)), []), splitAndReverseWithRamda)(a);
let add2 = (a, b) => a.length >= b.length ? addRamdaMap(a, b) : addRamdaMap(b, a);

// 命令式的方法
function add1(a, b) {
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

function add5(a, b) {
  let res = '', c = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || c) {
  c += ~~a.pop() + ~~b.pop();
  res = c % 10 + res;
  c = c > 9;
  }
  return res.replace(/^0+/, '');
}


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

let add4 = (a, b) => compose(replaceHeadZero, loop)(a.split(""), b.split(""), "", 0);


console.log(add('42329', '21532'));
// console.log(add('843529812342341234', '236124361425345435'));

module.exports = add