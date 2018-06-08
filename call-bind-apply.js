'use strict';

function a(param1, param2) {
    console.log(this);
}

console.log(a.name);
console.log(a.length);
a.craig = 'Craig';
console.log(a.craig);
console.log(a.toString());

a.call(1); //Calls the function


//Can use the call function to solve our this issue in this.js
var craig = {
    checkThis: function() {
        function checkOther() {
            console.log(this);
        }

        checkOther.call(this);
    }
}
craig.checkThis();

function me(a,b,c) {
    console.log(this);
    console.log(a);
    console.log(b);
    console.log(c);
}
const thisObject = {
    hey: 'baby',
};
/*
    call - pass params as params and invoke function
    apply - pass params as array and invoke function
*/
me.call(thisObject,2,3,4);
me.apply(thisObject, [2,3,4]);

/*
    Normall use call unless function takes a variable number of parameters
*/

function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++ ) {
        total += arguments[i];
    }
    return total;
}

var x = sum.call(null,1,2,3);
x;
const someNumberArray =  [1,2,3,4,5,6,7,8,9,10];
var y = sum.apply(null, someNumberArray);
y;

/* 
    Bind - Crates a new function with the parameters passed in the bind function
*/

var ab = function() {
    console.log(this);
};
ab();
const abBound = ab.bind(thisObject);
abBound();

const craig2 = {
    func: abBound,
};
craig2.func();

/*
    Only works with function expressions

    function hey() {}.bind(1) is invalid

    Has to be assigned to a variable as it creates a function object

    const myFunction = function() {}.bind(1) Totally works
*/

//Fix issue with bind

const craig3 = {
    checkThis: function() {
        const checkOther = function() {
            console.log(this);
        }.bind(this);

        checkOther();
    }
}
craig3.checkThis();