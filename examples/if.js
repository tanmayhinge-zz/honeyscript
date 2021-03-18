var a = 3;
var b = 4;
$if(eq(a, b), function () {
    return out("a equals b")
}, function () {
    return out("a not equal to b")
})
function out(...args){
    console.log(...args)
}

function add(x, y){
    return x+y;
}
function sub(x, y){
    return x-y;
}
function mul(x, y){
    return x*y;
}
function div(x, y){
    return x/y;
}

function sqrt(x){
    return Math.sqrt(x);
}
function pow(x,y){
    return Math.pow(x,y);
}
function $if(cond, consequent, alternate) {
    if (cond) {
        return consequent();
    } else {
        return alternate();
    }
}
function eq(x,y){
    return x===y;
}