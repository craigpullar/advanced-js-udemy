/*
    Difference between == and ===
    == equality -- Is truty ie. '' == false
    === strict equality ie. typed equality '' !== false

*/

const a = (0 === 0);
a;

const b = 0 == 0;
b;

const c = 0 == '';
c;

const d = String(0) == 0;
d; //What actually happens on ==. It infers type
const e = d == false;
e;

const f = false == 'false';
f; //String is infered to boolean, which is true so it is actually false == true

const g = false === 'false';
g;

//arrays
const h = [] == true;
h;
console.log(new Array() == true);
console.log(![]);
const i = [1] == true;
i;


const j = {} == true;
j;
const k = { a: 2 } == true;
k; 