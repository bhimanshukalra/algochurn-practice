import { useEffect } from "react";

const MemoizationPage = () => {
  useEffect(() => {
    const product = (num1: number, num2: number) => {
      // Expensive function.
      for (let i = 0; i < 40000000; i++);
      return num1 * num2;
    };

    const memoizeProduct = () => {
      // write your code here.
      const cache: { [key: string]: number } = {};
      return (num1: number, num2: number) => {
        const key = JSON.stringify([num1, num2]);
        if (cache[key]) {
          return cache[key];
        } else {
          const result = product(num1, num2);
          cache[key] = result;
          return result;
        }
      };
    };

    const memoProduct = memoizeProduct();

    const first = performance.now();
    console.log(`Result: `, memoProduct(123893, 1299123));
    console.log("Time: ", performance.now() - first);

    const second = performance.now();
    console.log(`Result:`, memoProduct(123893, 1299123));
    console.log("Time: ", performance.now() - second);
  }, []);
  return <div>MemoizationPage</div>;
};

export default MemoizationPage;
