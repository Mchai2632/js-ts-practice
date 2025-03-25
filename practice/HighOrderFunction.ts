function myMap<T, U>(
    arr: T[],
    callback: (value: T, index: number, array: T[]) => U
): U[] {
    const mylist: U[] = [];

    for (let index = 0; index < arr.length; index++) {
        mylist.push(callback(arr[index], index, arr));
    }

    return mylist;
}

const numbers = [1, 2, 3, 4, 5];
const doubled = myMap(numbers, (value, index, array) => value * 2);
console.log(doubled);
