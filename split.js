const msg = "yes, you can do it"
let arr1 = msg.split() // it will return an array with the same string value that msg variable hold
let arr2 = msg.split('')
let arr3 = msg.split(' ')
let arr4 = msg.split(' ', 2) // print only first two string element
// console.log(arr4)
// console.log(''.split())
// console.log(''.split(""))
// console.log(''.split(" "))

{
    let message = "The sky is blue. Grass is green! what is the color of the cloud"
    let arr1 = message.split(/[.,!,?]/)
    // console.log(arr1)
}

{
    let name = "Rudra Barua"
    let subs = name.split(' ')
    let joined = subs.join('-')
    // console.log(joined)
}

{
    let name = "Rudra Barua"
    let[firstName, lastName] = name.split(' ')
    // console.log(firstName, lastName)
}