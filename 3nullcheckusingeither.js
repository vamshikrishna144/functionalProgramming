// const Either = Left | Right

const Right = x =>
({
  map: f => Right(f(x)),
  inspect: () => `Right(${x})`,
  fold: (f,g) => g(x)
})

const Left = x =>
({
  map: f => Left(x),
  inspect: () => `Left(${x})`,
  fold: (f,g) => f(x)
})

let result =  Right(3).map(x => x+1).fold(x => `error`, x => x)
console.log(result)


 result =  Left(3).map(x => x+1).fold(x => `error`, x => x)
console.log(result)


const findColor =  name =>
({yellow: '#FF3453', blue: '#GG3233', green: '#F466'})[name]

 result = findColor('yellow').slice(1).toUpperCase()
 console.log(result)

//Functional way

const colorFinder = name => {
const found = ({yellow: '#FF3453', blue: '#GG3233', green: '#F466'})[name]
return found ? Right(found) : Left(null);
}

result = colorFinder("pink").
          map(c => c.slice(1))
          .fold(e => 'no color',
                c => c.toUpperCase())
console.log("here", result)
