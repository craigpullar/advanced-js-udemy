'use strict'; //global strict mode

function strictCode() {
    'use strict'; //function scope scrict mode
};

asim = 1; //Not defined in strict mode
    //In non strict mode it creates a variable on the window (browser)/ global (node) object

var let = 1; //Can't use the reserved word let

var foo = 1;
delete foo; // Cannot delte variables in strict mode

function moo() {}
delete moo; //cannot delete functions in strict mode

function pei(arg) {
    delete arg; //cannot delete arguements in strict mode
}

eval() //Evaulates and executes the js string passed to it
eval("var a = 1"); //In no strcit mode this creates the a variable
console.log(a); //undefined in strict mode
