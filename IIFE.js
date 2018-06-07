//IIFE - Immediately invoked function expression

/* 
    Can help keep the global scope tidy between modules
    - Although not reall needed with ES6 modules system
*/
(function() {
    var thing = 'Hello';
    console.log(thing);
}());

(function() {
    var thing = 'World';
    console.log(thing);
}());

thing;