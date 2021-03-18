out(random(10))

out(random(11))

out(random(100))

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

// x can be 1, 10, 100 or pretty much any sensible integer
function random(x){
    return Math.floor(Math.random()*x)
}