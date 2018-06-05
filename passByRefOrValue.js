'use scrict';

var a = 1;
function passVariable(variable) {
    a = 2;    
}
console.log(a); // 
/*
    Primative types (number/string/booleans) are passed by value
    Passed by value means the variable is copied on passing to function
    so manipulating it in the fucntion will not affact the variable in the outer scope
*/

var myObj = {
    foo: true
};

function passMyObject(objectToChange) {
    objectToChange.foo = true;
}

console.log(myObj.foo)
/* 
    Objects are passed reference. Ie changing a proeprty will
    update the value in the outer scope
*/

function tryReassignObject(a) {
    a = { a: false };
};

tryReassignObject(myObj);

console.log(myObj)
/*
    only object properies are passed by referenced,
    the object reference itself is passed by value
*/