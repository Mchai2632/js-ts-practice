/**基本泛型函式 */
function identity<T>(arg: T): T {
  return arg;
}

// console.log(identity<number>(1));
// console.log(identity<string>("hello"));

/** 泛型接口 */
interface Box<T> {
  value: T;
}

const box: Box<number> = {
  value: 100,
};

// console.log(box);

/** 泛型約束（Constraints） */

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = {
  name: "MC",
  age: 18,
};

// console.log(getProperty(person, "name")); // 輸出: "Alice"
// console.log(getProperty(person, "age")); // 輸出: 25

/** 泛型類別 */
class Stack<T> {
  list: T[] = [];

  push(item: T) {
    this.list.push(item);
    return this.list;
  }
  pop() {
    this.list.pop();
    return this.list;
  }
  peek() {
    return this.list[this.list.length - 1];
  }
}

function mainStack() {
  const stack = new Stack<number>();
  console.log(stack.push(10));
  console.log(stack.push(20));
  console.log(stack.push(30));
  console.log(stack.push(40));
  console.log(stack.pop());
  console.log(stack.peek());

  const stack2 = new Stack<string>();
  console.log(stack2.push("10"));
  console.log(stack2.push("20"));
  console.log(stack2.push("30"));
  console.log(stack2.push("40"));
  console.log(stack2.pop());
  console.log(stack2.peek());
}

type User = { id: number; name: string; age: number };
type PartialKeys<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

type PartialUser = PartialKeys<User, "name" | "age">;

const data = { id: 1, name: "MC", age: 18 };

const user1: PartialUser = {
  id: 1,
};
