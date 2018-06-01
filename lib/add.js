function add(a,b) {

    while(a.length < b.length) {
        a = "0" + a;
    }
    while(b.length < a.length) {
        b = "0" + b;
    }

    var addOne = 0;

    var result = [];

    for(var i = a.length-1; i >= 0; i--) {
        var c1 = parseInt(a.charAt(i));
        var c2 = parseInt(b.charAt(i));
        var sum = c1 + c2 + addOne;

        if(sum > 9) {
            result.unshift(sum -10);
            addOne = 1;
        } else {
            result.unshift(sum);
            addOne = 0;
        }
    }

    if(addOne) {
        result.unshift(addOne);
    }

    return result.join('');
}

module.exports = add