// const Either = Left | Right

const Right = x =>
({
  chain: f => f(x),
  map: f => Right(f(x)),
  inspect: () => `Right(${x})`,
  fold: (f,g) => g(x)
})

const Left = x =>
({
  chain: f => Left(x),
  map: f => Left(x),
  inspect: () => `Left(${x})`,
  fold: (f,g) => f(x)
})

const fromNullable = x =>
x !=null ? Right(x) : Left(x)
const fs = require('fs');
const getPort = () => {
  try {
    const str = fs.readFileSync('confg.json');
    const config = JSON.parse(str)
    return config.port;
  } catch(e) {
    return 3000
  }
}

const result = getPort()
// console.log(result)

//functional way
const tryCatch = (x) => {
  try {
    return Right(x)
  } catch(e) {
    return Left(e)
  }
}
const getPortFunctional = () =>
tryCatch(() => fs.readFileSync('config.json'))
.chain(c => tryCatch(() => JSON.parse(c)))
.fold(e => 3000,
  c => c.port)

  console.log(getPortFunctional())
