let a = [2, 3, 5, 7, 9];
let b = null;

b = Array(a.length);

b = Array.from(b, i => a[a.length - (i + 1)]);  

console.log(b)