// What is the scope chain?
function foo() {
    console.log(myVar); //MyVar is not actully defined here even though its declared in the goo function before running
}

function goo() {
    var myVar = 1;
    foo();
}

//This works

function goo() {
    var myVar = 1;
    function foo() {
        console.log(myVar); 
    }   
    foo();
}

/*
    This is because myVar is not in the function scope for foo in example one or in its outside scope.
    The outside scope in this case is the global scope not the goo scope as thats where the function is declared.

    In example 2 we move foo into goo so its outside scope is now goo which containes myVar so now it works fine

    SCOPE CHAIN IS DETERMINED HOW CODE IS WRITTEN NOT HOW IT IS CALLED! DECLARATIVE!
*/