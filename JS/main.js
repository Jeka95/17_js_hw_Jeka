let arr1 = [5, 6, 7, 8, 9];
let sum = 0;
arr1.forEach(function (elem) {
  sum = sum + elem;
})
console.log(sum);

let arr2 = [5, 6, 7, 8, 9];
arr2 = arr2.map(elem => elem * elem);
console.log(arr2);