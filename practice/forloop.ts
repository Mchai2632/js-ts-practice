// function reverseArray(arr: number[]): number[] {
//   const reverseArray: number[] = [];

//   for (let i = arr.length - 1; i >= 0; i--) reverseArray.push(arr[i]);

//   return reverseArray;
// }

// const arr = [1, 2, 3, 4, 5];
// console.log(reverseArray(arr));

/** 找出最大值 */
function findMax(arr: number[]): number {
  let maxNumber: number = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
      maxNumber = arr[i];
    }
  }

  return maxNumber;
}

// const arr = [10, 23, 46, 35, 2, 47, 100, 4, 2];
// console.log(findMax(arr));

/** 加總陣列 */
const sumArray = (arr: number[]): number => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
};

// const arr = [10, 20, 6, 1, 10];
// console.log(sumArray(arr));

/** 9x9 multiply form */

function printMultiplicationTable(num: number) {
  for (let i = 1; i <= num; i++) {
    // 外層循環控制乘法表的順序
    for (let k = 1; k <= num; k++) {
      // 內層循環控制每個乘法公式
      console.log(`${k} * ${i} = ${i * k}`);
    }
    console.log("\t");
  }
}

// printMultiplicationTable(12);

/** Fibonacci */

function fibonacci(n: number): number[] {
  if (n <= 0) return []; // 如果 n <= 0，回傳空陣列
  if (n === 1) return [0]; // 如果 n = 1，只回傳 [0]
  if (n === 2) return [0, 1]; // 如果 n = 2，回傳 [0, 1]

  let fib: number[] = [0, 1]; // 初始化前兩個數
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]); // 計算新數字並加入陣列
  }
  return fib;
}

// console.log(fibonacci(20));
