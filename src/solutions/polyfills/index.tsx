import { useEffect, useState } from "react";

const Polyfills = () => {
  const data = [1, 2, 3, 4, 5];

  const mapLog = data.myMap((el) => el * 2);
  const filterLog = data.myFilter((el) => el < 4);
  const reduceLog = data.myReduce((el) => el + 4);
  const [myPromiseData, setMyPromiseData] = useState();

  useEffect(() => {
    const init = async () => {
      const data = await myPromiseAll([
        Promise.resolve("hi"),
        Promise.resolve("bye"),
        Promise.resolve("exit"),
      ]);
      setMyPromiseData(data);
    };
    init();
  }, []);

  return (
    <div className="m-4">
      <p>Polyfills</p>
      <p>{JSON.stringify(mapLog)}</p>
      <p>{JSON.stringify(filterLog)}</p>
      <p>{reduceLog}</p>
      <p>{JSON.stringify(myPromiseData)}</p>
    </div>
  );
};

export default Polyfills;

Array.prototype.myMap = function (callback) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
};

Array.prototype.myFilter = function (callback) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const myPromiseAll = (promises) => {
  const result = [];
  return new Promise((resolve, reject) => {
    promises.forEach(async (promiseItem) => {
      try {
        const data = await promiseItem;
        console.log("promiseItem", promiseItem, data);
        result.push(data);
      } catch (e) {
        console.error(e);
        reject(e);
      }
    });
    resolve(result);
  });
};
