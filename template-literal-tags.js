function h1(strings, ...values) {
  const stringArray = strings.map((string, index) => {
    return string + (values[index] || "");
  }); 
  return `<h1>${stringArray.join("")}</h1>`
};
const name = "Craig";
const age = 25;

const title = h1`Hello world! I am ${name} and I am ${age} years old`;
console.log(title);