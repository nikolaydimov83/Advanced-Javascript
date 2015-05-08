function compose(f, g){
    var result;
    function takeInnerArgument(x, y){
        if (takeInnerArgument.length == 1) {
            result = g(x);
            result = f(result);
        }
        else {
            result = g(x,y);
            result = f(result);
        }
        return takeInnerArgument;
    }
    takeInnerArgument.toString = function () { return result }
    return takeInnerArgument;
}

function add(x, y) {
    return x + y;
}
function addOne(x) {
    return x + 1;
}
function square(x) {
    return x * x;
}

var a = +compose(addOne, square)(5);
console.log(a);

var b = +compose(addOne, add)(5, 6);
console.log(b);

var compositeFunction = compose(Math.sqrt, Math.cos);
console.log(+compositeFunction(0.5));
console.log(+compositeFunction(1));
console.log(+compositeFunction(-1));
