/* What are the different types in javascript

    ----- Primative -----
    Boolean
    Number
    String
    Null
    Undefined

    Object

    B NUNS and object
*/

const x = typeof(1); //gets typeof value

const y = typeof(null); //returns Object but is actually Null (JS issue)

/* STATICLY TYPED LANGUAGES EG. JAVA/C++
    String a = 'moo';
    a = 3 //Gives error
*/

/* DYNAMICLY TYPED LANGUAGE EG. JS/Python/Ruby
    let a = 'HEYY';
    a = 7; //is allowed
*/

//Difference between null and a

const a; //undefined - Informs it has not been intialised. Set mostly by engine but can be set by programmers
const b = null; //Indicated no value. Only set by programmers/the engine won't do this

var c = null == undefined; 