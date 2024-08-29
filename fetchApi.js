// we cannot direct connect javascript with database. we need server side scripting language such as Php , nodejs. But javascript is client side scripting language

async function callApi() {
  let result = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(result);
  
  result = await result.json();
  console.log(result);
  document.getElementById("user-data").innerHTML = result
    .map(
      (user) =>
        `<tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.username}</td>
        <td>${user.website}</td>
        <td>${user.phone}</td>
        </tr>`
    )
    .join("")
}
callApi();
