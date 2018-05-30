let R = require('ramda');
R.trace = tag => x => {
    console.log(tag, x);
    return x;
}
// 不依赖库的函数式版本
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
    return aaa(funcArgs[funcArgs.length -1])(...args);
}
let composeAll2 = (...funcArgs) => (...args) => {
    for (let i = funcArgs.length - 2; i >= 0; i--) {
        if (i === 0) {
            let args = funcArgs[i](...args);
        }
        return args;
    }
}
let myReverse = x => x.reverse();
let mySplit = x => x.split("");
let myToString = x => x.toString();
let myPushOne = x => {
    x.push("1");
    return x;
}
let setValue = index => value => targetArray => {
    targetArray[index] = value;
    return targetArray;
}
let splitAndReverse = composeAll(myReverse, mySplit);
let myReduce = x => y => y.reduce(fnHandleAdd(splitAndReverse(x)), []);
let fnHandleAdd = a => (accumulator, currentValue, index) => {
    let c = ~~a[index] + ~~currentValue + ~~accumulator[index];
    return c >= 10
        ? compose(myPushOne, setValue(index)(myToString(c - 10)))(accumulator)
        : setValue(index)(myToString(c))(accumulator);
};

let addMap2 = (a, b) => composeAll2(R.join(""), myReverse, myReduce(b), splitAndReverse)(a);
let add = (a, b) => a.length >= b.length ? addMap2(a, b) : addMap2(b, a);

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

function add5(a,b){
    let res='', c=0;
    a = a.split('');
    b = b.split('');
    while (a.length || b.length || c){
        c += ~~a.pop() + ~~b.pop();
        res = c % 10 + res;
        c = c>9;
    }
    return res.replace(/^0+/,'');
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

add('42329', '63861');
add('843529812342341234', '236124361425345435');

module.exports = add