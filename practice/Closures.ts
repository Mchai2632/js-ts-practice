function createCounter() {
    let count = 0;

    return {
        increment: () => ++count,
        decrement: () => --count,
        reset: () => (count = 0),
    };
}

const counter = createCounter();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.increment()); // 3
console.log(counter.decrement()); // 2
console.log(counter.reset()); // 0
console.log(counter.increment()); // 1
