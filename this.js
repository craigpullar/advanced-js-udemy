/* 

    If this is not defined it defaults to global/window object

    using strict stops it from happeneing and this will come back undefined

*/

console.log(this); //empty object node/window object in browser

this.me = 'hey';
console.log(this);

function checkThis() {
    //Global/window object
    console.log(this);
}

checkThis();

var craig = {
    checkThis: function() {
        'use strict'
        console.log(this);
        
        function checkOther() {
            //this defaults to the global/window object here
            console.log(this);
        }

        checkOther();
    }
}
craig.checkThis();

//Solution to craig binding issue
var fixedCraig = {
    checkThis: function() {
        'use strict';
        const self = this;

        function checkOther() {
            console.log(self);
            self.moo = 1;
        }

        console.log(self.moo);
    }
}

//Binds this to global/window object
// var func = craig.checkThis;
// func();

/* 
    this = the calling context of the function
*/