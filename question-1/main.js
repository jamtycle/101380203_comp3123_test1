const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

const lowerCaseWords = (_arr) => new Promise((res, rej) => {
    if (!Array.isArray(_arr)) rej("Input was not an array");
    const lowers = _arr.filter((x) => typeof x === "string").map((x) => x.toLocaleLowerCase())
    res(lowers);
});

console.log(lowerCaseWords(mixedArray).then((x) => console.log(x)).catch((err) => console.log(err))); // pending
console.log(lowerCaseWords("mixedArray")); // rejected