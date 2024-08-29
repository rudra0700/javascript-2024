// localStorage.clear()

// let key = prompt("Enter the key you want to set")
// let value = prompt("Enter the value you want to set")

// localStorage.setItem(key, value)

// console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

// if(key == "red" || key === "blue"){
//   localStorage.removeItem(key)
// }
//  if(key == 0){
//   localStorage.clear()
//  }

// //  localStorage.length

// window.onstorage = () =>{
//   alert("changed")
//   console.log(e)
// }

// console.log(document.cookie)
document.cookie = "testing";
document.cookie = "name=rudra11223344";
document.cookie = "name2=rudra112233442";
document.cookie = "name=rudra";

let key = prompt("enter your key");
let value = prompt("enter your value");
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
console.log(document.cookie);