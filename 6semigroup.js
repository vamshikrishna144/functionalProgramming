//Semi groups in math are from abstract algebra
//Semi groups in programming are the data types with concat method
let arraySg = [1,3].concat([3,4]).concat([4,3]);
console.log(arraySg)

// In this example, the inner concat is done first, then the outer part
//This is called associativity
 arraySg = [1,3].concat([3,4].concat([4,3]));
console.log(arraySg)

const All = x =>
({
  x,
  concat: ({x: y}) =>
    All(x && y)
})
console.log(All(true).concat(All(false)))
