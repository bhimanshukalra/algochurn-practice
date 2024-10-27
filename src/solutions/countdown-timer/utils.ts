export function getFormattedNumber(input: number) {
  return input.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
}
