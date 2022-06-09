const Animal = require(`./Animal`); // use the `require` keyword to import a module that
const { isEven } = require(`./helpers`);
const helpers = require(`./helpers`);
// if only importing a function from a module, we must specify curly brackets around it

const animal = new Animal("Duck");
console.log(animal);

console.log(isEven(30));

// CommonJS modules are part of the Node js. they are for modularising our code
// - i.e., separating it into separate files