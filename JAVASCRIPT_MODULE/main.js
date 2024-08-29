console.log("learning module....")

// console.log(sum1(2, 3)) // this line throw an error because there is no sum1 in calc.js file.its call name export. Have to be the same name while using name export

// import { sum as add, sub } from "./calc.js" // because of name conflict you can use alieses but you gotta use the alieses name to print the result.

// import * as calc from './calc.js' //this will import all the stuff from calc.js function. its called namespaces

// import { sum, sub } from "./calc.js"
// import { default as myChannelName } from './whoAmI.js'


// console.log(add(2, 4))
// console.log(sub(10, 5))

// console.log(calc.sum(2, 5))
// console.log(calc.sub(10, 5))

// console.log(myChannelName())



// combine module
import * as combine from './combine.js'
 
console.log(combine.calc.sum(2,3))

console.log(combine.myChannelName())

const name = "rudra"
 
console.log(name[0])