function Animal(type) {
    this.type = type;
}

function Dog() {
}

Dog.prototype = Animal;

class Animal {

    walk() {
        console.log("walks")
    }
}

class Dog extends Animal {

}

let dog = new Dog();
console.log(dog.walk());

// specify Animal as the default export for this file
module.exports = Animal;

// module.exports is an object that can contain functions to export, or a single class