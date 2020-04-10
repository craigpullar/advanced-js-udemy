function add (a,b) {
  return a+b;
}

const add2 = (a,b) => a+b;

// Shorter obvs but thats not all
//Take the following problem

let me = {
  name: "Craig",
  sayLater: function() {
    setTimeout(function(){ // This is not called with me as the calling context
      console.log(`hi ${this.name}`);
    }, 500);
  },
  sayLaterFixed: function() {
    // this in fat arrow
    setTimeout(() => {
      console.log(`hi ${this.name}`);
    },500)
  },
  sayLaterBroken: () => {
    // this is global here
    setTimeout(() => {
      console.log(`hi ${this.name}`);
    },500)
  }
}

me.sayLater(); //hi undefined
me.sayLaterFixed(); // hi Craig
me.sayLaterBroken(); // hi undefined


// The fat arrow takes the this of wherever it was defined