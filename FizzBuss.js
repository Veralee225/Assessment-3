let Fizz = [ ];
let Buzz = [ ];
let FizzBuzz = [ ];
let Other  = [ ];

for (let i = 1; i <= 200; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        FizzBuzz.push(i);
     } else if (i % 5 === 0) {
        Buzz.push(i);
     } else if (i % 3 === 0) {
        Fizz.push(i);
     } else {
        Other.push(i);
    }
}

console.log("Total Number of Fizz = "      + Fizz.length);
console.log("Total Number of Buzz = "      + Buzz.length);
console.log("Total Number of FizzBuzz = "  + FizzBuzz.length);
console.log("Total Number of Other = "    + Other.length);

Total Number of Fizz = 53
Total Number of Buzz = 27
Total Number of FizzBuzz = 13
Total Number of Other = 107
