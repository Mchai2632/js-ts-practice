class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    // greet() {
    //     console.log(`Hello, my name is ${this.name}`);
    // }

    greet = () => {
        console.log(`Hello, my name is ${this.name}`);
    };
}

const obj = new Person("MC");
const greet = obj.greet;
greet();
