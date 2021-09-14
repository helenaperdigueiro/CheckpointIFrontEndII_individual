let cards = document.getElementById("cards");
let titleForm = document.getElementById("titleForm");
let pictureForm = document.getElementById("pictureForm");
let descriptionForm = document.getElementById("descriptionForm");
let btnDeleteCard = document.querySelectorAll("btnDeleteCard");

let btnOpenForm = document.getElementById("btnAddCard");
let btnCloseForm = document.getElementById("btnCloseForm");
let extraDivFormAddCard = document.getElementById("extraDivFormAddCard");
let divFormAddCard = document.getElementById("divFormAddCard");

let submitForm = document.getElementById("submitFormAddCard");

document.querySelector("form").onsubmit = function () { return false };

let extraDivFormContact = document.getElementById("extraDivFormContact");
let btnOpenContact = document.getElementById("btnOpenContact");

let extraDivFormTeam = document.getElementById("extraDivFormTeam");
let btnOpenTeam = document.getElementById("btnOpenTeam");

btnOpenForm.onclick = function() {
  if (extraDivFormAddCard.style.display == "none") {
    extraDivFormAddCard.style.display = "block";
  } else {
    extraDivFormAddCard.style.display = "none";
  }
}

btnCloseForm.onclick = function() {
  extraDivFormAddCard.style.display = "none";
}

submitForm.addEventListener("click", function () {
  if ((titleForm.value == "") || (pictureForm.value == "") || (descriptionForm.value == "")) {
    titleForm.focus();

    // document.querySelectorAll("input").forEach((item) => item.value = "");

    // alert("Por favor, preencha os 3 campos!");

    titleForm.value = "Filhote de Labrador";
    pictureForm.value = "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg";
    descriptionForm.value = "Lorem ipsum, dolor sit amet";
  } else {
    cards.style.height = "auto";

    let card = document.createElement("div");
    card.setAttribute("class", "card");
    cards.appendChild(card);

    let cardContent = document.createElement("div");
    cardContent.setAttribute("class", "cardContent");
    card.appendChild(cardContent);

    cardContent.innerHTML += `<h2 class="cardTitle">${titleForm.value}</h2>`;
    cardContent.innerHTML += `<img src="${pictureForm.value}" class="cardPicture">`;
    cardContent.innerHTML += `<h4 class="cardDescription">${descriptionForm.value}</h4>`;

    let divBtnDeleteCard = document.createElement("div");
    divBtnDeleteCard.setAttribute("class", "divBtnDeleteCard");
    card.appendChild(divBtnDeleteCard);

    let btnDeleteCard = document.createElement("img");
    btnDeleteCard.setAttribute("src", "./imgs/btnDeleteCard.svg");
    btnDeleteCard.setAttribute("class", "btnDeleteCard");
    divBtnDeleteCard.appendChild(btnDeleteCard);
    btnDeleteCard.addEventListener("click", function () { card.remove() });

    card.addEventListener("mouseover", function() {
      divBtnDeleteCard.style.display = "block";
    })
    card.addEventListener("mouseout", function() {
      divBtnDeleteCard.style.display = "none";
    })

    titleForm.focus();

    titleForm.value = "Filhote de Labrador";
    pictureForm.value = "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg";
    descriptionForm.value = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident facere, iure laborum impedit rem tempore cum?";

    // document.querySelectorAll("input").forEach((item) => item.value = "");
  }
})


btnOpenContact.onclick = function() {
  if (extraDivFormContact.style.display == "none") {
    extraDivFormContact.style.display = "block";
  } else {
    extraDivFormContact.style.display = "none";
  }
}

btnOpenTeam.onclick = function() {
  if (extraDivFormTeam.style.display == "none") {
    extraDivFormTeam.style.display = "block";
  } else {
    extraDivFormTeam.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == extraDivFormAddCard) {
    extraDivFormAddCard.style.display = "none";
  } if (event.target == extraDivFormContact) {
    extraDivFormContact.style.display = "none";
  } if (event.target == extraDivFormTeam) {
    extraDivFormTeam.style.display = "none";
  }
}