console.log("01: NaN means: Not a Number.");

console.log("----------------------------------");

const greet = "hello";
console.log(`1.1: is ${greet}` === NaN);
console.log(`1.2: is 3` === NaN);
console.log(typeof NaN);

console.log("----------------------------------");

const calc = (0.1 * 0.2).toFixed(2);
console.log("02: total is:", calc);

console.log("----------------------------------");
const divide = 0 / Infinity;
console.log(`03: ${divide}`);
console.log("03a", Infinity / Infinity);
console.log("03b", 1 / 0);
