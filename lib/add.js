function add() {
  let argus = Array.from(arguments);
  argus && argus.length > 0 && argus.reduce((pre,cur) => {
      return Number(pre) + Number(cur);
  })
}

module.exports = add