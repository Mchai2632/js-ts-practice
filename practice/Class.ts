// Prototype & this 綁定（Car 類別）

class Car {
    model: string;
    speed: number;
    constructor(model: string, speed: number) {
        this.model = model;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.model} 加速中，當前速度 ${this.speed}`);
    }

    brake() {
        this.speed -= 10;
        console.log(`${this.model} 減速中，當前速度 ${this.speed}`);
    }
}

const myCar = new Car("Tesla Model 3", 60);

myCar.accelerate();
myCar.accelerate();
myCar.accelerate();
myCar.brake();
myCar.brake();
myCar.brake();
myCar.brake();
myCar.brake();
