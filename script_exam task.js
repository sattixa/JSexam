/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

let button = document.getElementById("btn");
button.addEventListener("click", function (e) {
  e.preventDefault();
  fetch(ENDPOINT)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    })
    // .then((result) => console.log(result))
    .then((result) => result.forEach(renderUserCard))
    .catch(function (response) {
      console.log("Error! Please try again");
    });
});
button.addEventListener("click", () => {
  button.style.display = "none";
});

const renderUserCard = (user) => {
  const img = document.createElement("img");
  img.src = user.avatar_url;

  const login = document.createElement("h4");
  login.innerText = `${user.login}`;

  const card = document.createElement("div");
  card.append(img, login);
  document.getElementById("output").append(card);
};

let sheet = document.createElement("style");
sheet.innerHTML = "img {border: 5px solid green; height: 400px;}";

document.body.appendChild(sheet);
