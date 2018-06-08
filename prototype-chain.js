const animal = {
    kind: 'human',
};
console.log(animal.__proto__); //Points to Object.prototype

const craig = {};
craig.__proto__ = animal;
craig;
console.log(craig.kind);
console.log(animal.isPrototypeOf(craig));
animal.kind = 'igloo';
console.log(craig.kind);
craig.kind = 'human';
console.log(craig.kind);
console.log(animal.kind);

animal.kind = 'human';
const carol = Object.create(animal);
console.log(carol.__proto__);

const kevin = Object.create(animal, {
    food: {
        value: 'mango',
    },
});

console.log(kevin);
console.log(animal);
console.log(kevin.__proto__);
console.log(kevin.food); //WHAT! OMG!
console.log(animal.isPrototypeOf(kevin));


