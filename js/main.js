let cards = document.getElementById("cards");
let titleForm = document.getElementById("titleForm");
let pictureForm = document.getElementById("pictureForm");
let descriptionForm = document.getElementById("descriptionForm");
let btnDeletePic = document.querySelectorAll("btnDeletePic");

let btnOpenForm = document.getElementById("btnAddCard");
let btnCloseForm = document.getElementById("btnCloseForm");
let extraDivFormImgs = document.getElementById("extraDivFormImgs");
let formImgs = document.getElementById("formImgs");

let submitForm = document.getElementById("submitFormAddCard");

document.querySelector("form").onsubmit = function () { return false };

let extraDivContact = document.getElementById("extraDivContact");
let btnOpenContact = document.getElementById("btnOpenContact");

let extraDivTeam = document.getElementById("extraDivTeam");
let btnOpenTeam = document.getElementById("btnOpenTeam");

btnOpenForm.onclick = function() {
  if (extraDivFormImgs.style.display == "none") {
    extraDivFormImgs.style.display = "block";
  } else {
    extraDivFormImgs.style.display = "none";
  }
}

btnCloseForm.onclick = function() {
  extraDivFormImgs.style.display = "none";
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

    let divBtnDeletePic = document.createElement("div");
    divBtnDeletePic.setAttribute("class", "divBtnDeletePic");
    card.appendChild(divBtnDeletePic);

    let btnDeletePic = document.createElement("img");
    btnDeletePic.setAttribute("src", "./imgs/btnDeletePic.svg");
    btnDeletePic.setAttribute("class", "btnDeletePic");
    divBtnDeletePic.appendChild(btnDeletePic);
    btnDeletePic.addEventListener("click", function () { card.remove() });

    card.addEventListener("mouseover", function() {
      divBtnDeletePic.style.display = "block";
    })
    card.addEventListener("mouseout", function() {
      divBtnDeletePic.style.display = "none";
    })

    titleForm.focus();

    titleForm.value = "Filhote de Labrador";
    pictureForm.value = "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg";
    descriptionForm.value = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident facere, iure laborum impedit rem tempore cum?";

    // document.querySelectorAll("input").forEach((item) => item.value = "");
  }
})


btnOpenContact.onclick = function() {
  if (extraDivContact.style.display == "none") {
    extraDivContact.style.display = "block";
  } else {
    extraDivContact.style.display = "none";
  }
}

btnOpenTeam.onclick = function() {
  if (extraDivTeam.style.display == "none") {
    extraDivTeam.style.display = "block";
  } else {
    extraDivTeam.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == extraDivFormImgs) {
    extraDivFormImgs.style.display = "none";
  } if (event.target == extraDivContact) {
    extraDivContact.style.display = "none";
  } if (event.target == extraDivTeam) {
    extraDivTeam.style.display = "none";
  }
}