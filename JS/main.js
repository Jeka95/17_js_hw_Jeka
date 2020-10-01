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

let arr = [1, 2, 3, 0, 4, 5, 6];

let sum1 = arr.reduce((sum, current) => {
  if (current == 0)
    sum.skip = true;
  if (!sum.skip)
    sum.total += current;
  return sum;
}, { skip: false, total: 0 }).total;
console.log("Сумма до 0: " + sum1);

let Num = arr.reduce((sum, current) => {
  if (sum.total >= 10)
    sum.skip = true;
  if (!sum.skip) {
    sum.total = sum.total + current;
    sum.num = sum.num + 1;
  }
  return sum;
}, { skip: false, total: 0, num: 0 }).num;
console.log("Кількість елементів: " + Num);


let arr5 = [1, -2, 3, 0, 4, -5, 6, -11];

let resultSqrt = arr5.reduce(function (sqrt, current) {
  if (current >= 0) {
    sqrt.push(Math.sqrt(current));
  }
  return sqrt;
}, []);

console.log(resultSqrt);



