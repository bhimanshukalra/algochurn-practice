export const ImplementCurrying = () => {
  // Initial
  function sum(a: number) {
    return function (b: number) {
      return function (c: number) {
        return function () {
          return a + b + c;
        };
      };
    };
  }

  // Improved
  const sumImproved = (a) => (b) => b ? sumImproved(a + b) : a;

  console.log("sum", sum(1)(2)(3)());
  console.log("sumImproved", sumImproved(1)(2)(3)());
  return <></>;
};
