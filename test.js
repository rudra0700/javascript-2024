function validateNumber() {
  let x = document.getElementById("num").value;
  let inputField = document.getElementById("num");
  let text;
  if (isNaN(x) || x < 0 || x > 10) {
    text = "invalid number";
  } else {
    text = "input OK";
  }
  document.getElementById("demo").textContent = text;
  inputField.value = "";
}

var spanElement = document
  .getElementById("id01")
  .querySelector("span").innerHTML;
// var spanHTML = spanElement.outerHTML
document.getElementById("id02").innerHTML = spanElement;

function showOuterHTML() {
  var exampleDiv = document.getElementById("exampleDiv");
  var outerHTML = exampleDiv.outerHTML;
  console.log(outerHTML);
}
showOuterHTML();

// const x = document.getElementById("demo4").innerHTML = document.body.innerHTML
const x = (document.getElementById("demo4").innerHTML =
  document.documentElement.innerHTML);
console.log(x);

const para = document.createElement("p");
const node = document.createTextNode("This is new");
para.appendChild(node);
const element = document.getElementById("div1");
// const child = document.getElementById("p1")
// element.appendChild(para)
// element.insertBefore(para, child)

function removeElement() {
  // document.getElementById("p2").remove()
  const child = document.getElementById("p1");
  child.parentNode.removeChild(child);
}

const myCollection = document.getElementsByTagName("p");
const nodeList = document.querySelectorAll("p");
console.log(nodeList)
// console.log(myCollection)
// console.log(myCollection.length)
for (let i = 0; i < myCollection.length; i++) {
  myCollection[i].style.color = "red";
}

const parent = document.getElementById("parent")
const childNodes = parent.childNodes
console.log(childNodes)
for(let i = 0; i < childNodes.length; i++){
  console.log(childNodes[i])
}
