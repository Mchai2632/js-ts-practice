class Animal {
    speak() {
        console.log("Animal makes a sound");
    }
}
class Dog extends Animal {
    override speak() {
        console.log("Woof!");
    }
}
class Cat extends Animal {
    override speak() {
        console.log("Meow!");
    }
}

const main = () => {
    const dog = new Dog();
    const cat = new Cat();
    dog.speak();
    cat.speak();
};

main();
