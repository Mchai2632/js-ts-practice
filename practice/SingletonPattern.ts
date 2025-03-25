// Singleton Pattern 確保一個類別只有一個實例。
// 透過靜態方法來提供唯一的實例訪問點。
// 適合需要全局共享資料或服務的情境，例如配置管理、日誌系統等。
// 這裡，instance 默認為 null，當第一次調用 getInstance() 時，才會創建實例，並且確保該實例在系統的生命周期中唯一。

export class Counter {
    private static instance: Counter | null = null;

    private constructor() {}

    public static getInstance(): Counter {
        if (!Counter.instance) {
            Counter.instance = new Counter();
        }

        return Counter.instance;
    }

    #count: number = 0;

    increment() {
        this.#count++;
        return this.#count;
    }

    getCount() {
        return this.#count;
    }
}

const counter = Counter.getInstance();
const counter2 = Counter.getInstance();

console.log(counter.increment());
console.log(counter2.increment());
// console.log(counter === counter2);
