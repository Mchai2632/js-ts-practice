class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound() {
        return "Some generic sound";
    }
}

class Dog extends Animal {
    override makeSound(): string {
        return "Woof woof!";
    }

    fetch() {
        return "Fetching the ball!";
    }
}

const dog = new Dog("Khaki");
console.log(dog.name);
console.log(dog.makeSound());
console.log(dog.fetch());
