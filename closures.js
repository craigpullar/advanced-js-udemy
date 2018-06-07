
/*
    closures are functions that have a cached reference
    of any variables it needs to execute.

   
*/
function sayHello(name) {
    const text = `Hello ${name}`;
    return function() {
        console.log(text);
    }
}

sayHello('Craig')();

//Written none clusrely it will fail
function Speak() {
    text; //Here it does nto have access to text
    console.log(text);
};

function sayHello2(name) {
    const text = `Hello ${name}`;
    speak();
}

// A closure gets the value of i at runtime, it does not clone a copy at declaration
var foo = []
for( var i = 0; i < 10; i++) {
    foo[i] = function() { return i; };
}
console.log(foo[0]());
console.log(foo[1]());
console.log(foo[2]());

//We can fix this with IIFE
var boo = [];
for(var j = 0; j < 10; j++) {
    (function(y){
        boo[j] = function() {return y };
    }(j))
}
console.log(boo[0]());
console.log(boo[1]());
console.log(boo[2]());

//Also solved with block scope variables
var foobar = [];
for(let k = 0; k < 10; k++) {
    foobar[k] = function() {return k };
}
console.log(foobar[0]());
console.log(foobar[1]());
console.log(foobar[2]());