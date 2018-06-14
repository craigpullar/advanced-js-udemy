/* 
    Mimick classical inheritence using function
    constructors and the new keyword
*/

'use strict';

function Person(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;

    this.full_name = function() {
        return `${first_name} ${last_name}`; //first_name and last_name are private
    };
}

Person.prototype.getFullName = function() {
    return `${this.first_name} ${this.last_name}`;
}   

/*
    By default prototype functions are better as you don't make
    the constructor function huge! Also then the functions only exist on
    one object and not many. Saves memory

    However for private variables you can use the construcor function & closures
*/

var dude = new Person('Craig', 'Pullar');
console.log(dude.full_name()) //Craig Pullar
//On the dude object
console.log(dude.getFullName());//Craig Pullar
//Not on the dude object but in its prototype chain

//Equivalent of
const dude2 = Object.create(Person.prototype);
Person.call(dude2, 'Craig', 'Pullar');
//Gives this context to a new object

//Inheritance

function Professional(honorific, first_name, last_name) {
    Person.call(this, first_name, last_name);
    this.honorific = honorific;
};

Professional.prototype = Object.create(Person.prototype);

Professional.prototype.professional_name = function() {
    return `${this.honorific} ${this.first_name} ${this.last_name}`;
};

const prof = new Professional('Mr', 'Craig', 'Pullar');
console.log(prof.professional_name())
console.log(prof.full_name())