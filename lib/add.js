var bigInt=require("big-integer")

function add(a ,b) {
  return `${bigInt(a).add(b)}`
}

module.exports = add
