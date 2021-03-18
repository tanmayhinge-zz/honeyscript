var a = 5;
var b = 3;
out(add(3, 5))
out(sub(3, 5))
out(mul(3, 5))
out(div(3, 5))
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
function $if(cond,conq,alt){
    if(cond){
        return conq();
    }
    else{
        return alt();
    }
}
function eq(x,y){
    return x===y;
}