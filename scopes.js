//scopes

//Global scope

var i = 0;
const j = 0;
let t = 0;
myGlobal = 'Hey'; //On global/window object

//Function scope
var me = function moo() {
    //All out global variables are accessible in our function
    console.log(i);
    console.log(j);
    console.log(t);
    console.log(myGlobal);
    
    //Now lets declare some function scope variables
    var mine = 1;
    const his = 1;
    let hers = 1;

    //Can stilll declare a global variable on the global object
    myGlobal2 = 'Heyy';
}

//Block scope
for(var tell = 0; tell < 5; tell++) {
    //i is now gloabl as block scope is ignored
    var shewolf = 6; //global

    //const and let are block scope and won't be accessible outside this scope
    const hewolf = 7;
    let theywolf = 8;
}

shewolf;
hewolf;
theyworlf;