function add(x){
    var sum = x;
    function inner(y){
        sum += y;
        inner.toString = function (){ return sum }
        return inner;
    }
    return inner;
}

var a = +add(2)(3)(9);
console.log(a);