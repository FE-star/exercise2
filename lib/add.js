function ListNode(val) {
  this.val = val;
  this.next = null;
}

function numberToList(num) {
  let result = new ListNode(0);
  let current = result;
  (`${ num }`).split('').reverse().forEach(function(item, index) {
    current.next = new ListNode(+ item);
    current = current.next;
  })
  return result.next;
}

function listToString(list) {
  let result = list.val + "";
  let current = list;
  while (current.next != null) {
    result = current.next.val + result;
    current = current.next;
  }
  return result;
}


function add(num1, num2) {
  // 实现该函数
  let result = new ListNode(0);
  let cache = 0;
  let current = result;
  let add1 = numberToList(num1), add2 = numberToList(num2);
  
  while (add1 != null && add2 != null) {
    let _result = add1.val + add2.val;
    
    current = current.next = new ListNode(0);
    current.val = (_result + cache) % 10;
    
    cache = _result + cache > 9 ? 1 : 0;
    add1 = add1.next;
    add2 = add2.next;
      
  }
  if (add1 == null && add2 == null && cache) {
    current.next = new ListNode(cache);
    return listToString(result.next)
  }
  
  let surplus = add1 == null ? add2 : add1;
  while (surplus != null) {
    current = current.next = new ListNode((surplus.val + cache) % 10);
    cache = surplus.val + cache > 9 ? 1 : 0;
    surplus = surplus.next;
  }
  if (cache) {
    current.next = new ListNode(cache);
  }
  return listToString(result.next);
}


module.exports = add