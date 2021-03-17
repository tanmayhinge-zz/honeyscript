var name = "Tanmay";
out("Hey", name)
var a = add(0, add(3, 4));
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