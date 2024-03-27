//!#1
let num = +prompt("Введите число");
if (num % 2 == 0) {
  console.log(`Число ${num} четное`);
} else {
  console.log(`число ${num} не четное`);
}

//!#2

let arr = ["js", "css", "jq", "python", "c++", "React"];
let arr1 = arr.slice(0, 1);
console.log(arr1);
let arr2 = ["js", "css", "jq", "python", "c++", "React"];
let arr3 = arr2.slice(-1);
console.log(arr3);

//!#3

const w2 = ["Apple", "Orange", "Banana", "Pineapple", "Cherry"];
let w3 = w2.sort((a, b) => b.length - a.length);
let w4 = w2.shift();
console.log(w4);

//!#4

let a = [1, 2, 3, 4, 5];
a.splice(5, 0, 2, 3, 4);
console.log(a);

//!#5

let r = ["один", "два", "три", "четыре"];
let e = r.splice(0, 1)[0];
r.push(e);
console.log(r);
