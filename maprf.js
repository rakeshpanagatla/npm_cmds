// MAP
const arr = [1, 5, 3, 7, 9, 8];
result = arr.map(sum);

function sum(x) {
  return x * 2;
}
console.log(result);

// arrow

result = arr.map(
  (sum = (x) => {
    return x * 2;
  })
);
console.log(result);

// FILTER
result = arr.filter(
  (sum = (x) => {
    return x > 6;
  })
);
console.log(result);

// REDUCE
result = arr.reduce(
  (sum = (acc, curr) => {
    acc = acc + curr;
    return acc;
  }),
  0
);
console.log(result);

// Chaining of MRF using json data

var a = [
  { name: "person1", age: 9 },
  { name: "person2", age: 2 },
  { name: "person3", age: 6 },
  { name: "person4", age: 12 },
];

x = a
  .filter(
    (agelessthan7 = (ele) => {
      return ele.age < 7;
    })
  )
  .map(
    (arrwithjustages = (ele) => {
      return ele.age;
    })
  )
  .reduce(
    (sumofages = (i, ele) => {
      return i + ele;
    }),
    0
  );
console.log(x);
