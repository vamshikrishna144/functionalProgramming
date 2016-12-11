//Type 1
// const convertStringToNextNumber = (string) => {
//   let answer = string.trim();
//   plusone = parseInt(answer) + 1;
//   return String.fromCharCode(plusone);
// }

//Type 2
//const convertStringToNextNumber = (string) => String.fromCharCode(parseInt(string.trim()) + 1)

//Type 3
//Functional Programming using Box custom
const Box = x =>
({
  map: f => Box(f(x)),
  fold: f => f(x)
})
const convertStringToNextNumber = (string) =>
Box(string)
.map(x => x.trim())
.map(y => new Number(y) + 1)
.fold(z => String.fromCharCode(z))


let result = convertStringToNextNumber(" 64 ");
console.log(result);
