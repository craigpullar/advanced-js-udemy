NaN; 
console.log(typeof(NaN)); 
console.log(NaN == false);
console.log(NaN == 1);
console.log(NaN === 1); 
console.log(NaN == 0); 
console.log(NaN == NaN);  //WHATTTTT
console.log(isNaN(1));
console.log(isNaN('1'));
console.log(isNaN('A'));
console.log(Number('A'));
console.log(isNaN(NaN));

/* Basicallt something that cannot be coerced to a numbewr has been coerced to a number and isNan */

var a = NaN;
console.log(a !== a);

const myIsNaN = param => Number(param) !== Number(param);

console.log(myIsNaN(NaN));
console.log(myIsNaN('a'));
console.log(myIsNaN('1'));
console.log(myIsNaN(1));