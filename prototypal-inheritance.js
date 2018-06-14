/*
    An easier and more natural inheritance model for JS.

    It also avoids the nasty prototype syntax
*/

const Person = {
    init: function(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
    },
    full_name: function() {
        return `${this.first_name} ${this.last_name}`;
    }
}

const craig = Object.create(Person, {
    first_name: {
        value: 'Craig',
    },
    last_name: {
        value: 'Pullar'
    }
});
// Or
craig.init('Craig', 'Pullar');
//or
craig.first_name = 'Craig';
craig.last_name = 'Pullar';
//or use a factory

function PersonFactory(first_name, last_name) {
    const person = Object.create(Person);
    person.first_name = first_name;
    person.last_name = last_name;
    return person;
}
//I prefer factories as it encourages composition

//But you can also just add to the prototype chain
const Professional = Object.create(Person);
const my_new_craig = Object.create(Professional);

console.log(craig.full_name());