let arr1 = [5, 6, 7, 8, 9];
let sum = 0;
arr1.forEach(function (elem) {
  sum = sum + elem;
})
console.log(sum);

let arr2 = [5, 6, 7, 8, 9];
arr2 = arr2.map(elem => elem * elem);
console.log(arr2);

let arr3 = [
  { name: 'Ivan', country: 'Ukraine' },
  { name: 'Petro', country: 'Ukraine' },
  { name: 'Miguel', country: 'Cuba' }
]


function countryU(elem) {
  return elem.country == 'Ukraine';
}
function countryC(elem) {
  return elem.country == 'Cuba';
}
console.log(arr3.every(countryU));
console.log(arr3.some(countryC));

let arr4 = [1, 'string', [3, 4], 5, [6, 7]];

arr4 = arr4.filter(function (elem) {
  return Array.isArray(elem);
})
console.log(arr4);

