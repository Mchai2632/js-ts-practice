class Person {
  #privatevar = "private";
  static species: string = "Human";

  /** 回傳字串*/
  static greetAll(): string {
    return "Hello, everyone!";
  }

  /** 回傳私有屬性*/
  getPrivateData() {
    return this.#privatevar;
  }
}

const person1 = Person.greetAll();
console.log(person1);
const person2 = Person.greetAll();
console.log(person2);

const person3 = new Person();
console.log(person3.getPrivateData());
