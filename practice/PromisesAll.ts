function delay(ms: number, b: boolean) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (b) {
        resolve("ok");
        console.log(`${ms}已經完成`);
      } else {
        reject("no ok");
      }
    }, ms);
  });
}
function getData(ms: number, b: boolean) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (b) {
        resolve("data came");
        console.log(`getData ${ms}已經完成`);
      } else {
        reject("no ok");
      }
    }, ms);
  });
}

async function main() {
  const delay1 = delay(1000, true);
  const delay2 = getData(2000, true);
  const delay3 = delay(3000, true);

  //   Promise.race([delay1, delay2, delay3])

  //   Promise.resolve(delay1).then((data) => {
  //     console.log("我是resolve的:", data);
  //   });

  Promise.all([delay1, delay2, delay3])
    .then((data) => {
      console.log(data);
    })
    .catch(console.error);
}

main();
