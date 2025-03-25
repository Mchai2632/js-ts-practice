// 多型 (Polymorphism)

class Shape {
    getArea(): number | string {
        return "Area formula not defined";
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    override getArea(): number {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    static PI: number = Math.PI;
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    override getArea(): number {
        return Circle.PI * this.radius ** 2;
    }
}

const rectangle = new Rectangle(10, 2);
console.log(rectangle.getArea());

const circle = new Circle(30);
console.log(circle.getArea());
