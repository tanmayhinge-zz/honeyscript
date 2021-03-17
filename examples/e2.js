var name = "Tanmay";
out("Hello", name)
var pet = "Cat";
var sum = add(1, mul(2, sub(2, div(1, 1))));
out(pow(2, sqrt(4)))
out("Sum is ", sum)
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