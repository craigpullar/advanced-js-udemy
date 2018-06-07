'use strict';

/*
    Notice it has a undefined value but does not
    throw an error as undefined variavle should in strict mode
*/
console.log(a); 
var a = 2;

/* js engine does this */
var ab;
console.log(ab);
ab = 2;

/* 
    function hositing

    Unassigned functions are automatically hosited to the top of the file
*/
console.log(speak());

function speak() { 
    return 'Hello World';
}

/* variable function */
meSpeak(); //meSpeak is equal to undefined at this point
var meSpeak = function() {
    return 'Hello World';
}