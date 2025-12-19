for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

let evenCount = 0;
let oddCount = 0;

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}

console.log(
  "Summary: Even numbers: " + evenCount + " Odd numbers: " + oddCount
);

// Below are the outputs

// 1 is odd
// 2 is even
// 3 is odd
// 4 is even
// 5 is odd
// 6 is even
// 7 is odd
// 8 is even
// 9 is odd
// 10 is even
// 11 is odd
// 12 is even
// 13 is odd
// 14 is even
// 15 is odd
// 16 is even
// 17 is odd
// 18 is even
// 19 is odd
// 20 is even

// Summary: Even numbers: 10 Odd numbers: 10
