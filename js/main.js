// elementos do html
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
let extraDivFormContact = document.getElementById("extraDivFormContact");
let btnOpenContact = document.getElementById("btnOpenContact");
let extraDivFormTeam = document.getElementById("extraDivFormTeam");
let btnOpenTeam = document.getElementById("btnOpenTeam");

// impede que o form recarregue a página (para não perder os cards adicionados)
document.querySelector("form").onsubmit = function () { return false };

// botão que abre e fecha o formulário para adicionar cards
btnOpenForm.onclick = function() {
  if (extraDivFormAddCard.style.display == "none") {
    extraDivFormAddCard.style.display = "block";
  } else {
    extraDivFormAddCard.style.display = "none";
  }
}

// botão dentro do formulário que fecha o formulário para adicionar cards
btnCloseForm.onclick = function() {
  extraDivFormAddCard.style.display = "none";
}

// botão que abre o formulário de contato
btnOpenContact.onclick = function() {
  if (extraDivFormContact.style.display == "none") {
    extraDivFormContact.style.display = "block";
  } else {
    extraDivFormContact.style.display = "none";
  }
}

// botão que abre equipe
btnOpenTeam.onclick = function() {
  if (extraDivFormTeam.style.display == "none") {
    extraDivFormTeam.style.display = "block";
  } else {
    extraDivFormTeam.style.display = "none";
  }
}

// função que permite fechar os formulários clicando fora deles
window.onclick = function(event) {
  if (event.target == extraDivFormAddCard) {
    extraDivFormAddCard.style.display = "none";
  } if (event.target == extraDivFormContact) {
    extraDivFormContact.style.display = "none";
  } if (event.target == extraDivFormTeam) {
    extraDivFormTeam.style.display = "none";
  }
}

// função principal que ao clicar no botão adicionar cria os cards com as informações inseridas nos inputs
submitForm.addEventListener("click", function () {
  if ((titleForm.value == "") || (pictureForm.value == "") || (descriptionForm.value == "")) {
    titleForm.focus();

    document.querySelectorAll("input").forEach((item) => item.value = "");

    alert("Por favor, preencha os 3 campos!");

  // Esse pedaco comentado foi soh para facilitar testes:
  // titleForm.value = "Filhote de Labrador";
  // pictureForm.value = "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg";
  // descriptionForm.value = "Lorem ipsum, dolor sit amet";

  } else {
    cards.style.height = "auto";

    // cria a div onde o card vai ser inserido
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    cards.appendChild(card);

    // cria a div onde o conteúdo do card vai ser inserido
    let cardContent = document.createElement("div");
    cardContent.setAttribute("class", "cardContent");
    card.appendChild(cardContent);

    // conteúdo do card
    cardContent.innerHTML += `<h2 class="cardTitle">${titleForm.value}</h2>`;
    cardContent.innerHTML += `<img src="${pictureForm.value}" class="cardPicture">`;
    cardContent.innerHTML += `<h4 class="cardDescription">${descriptionForm.value}</h4>`;

    // div do botão que deleta o card criado
    let divBtnDeleteCard = document.createElement("div");
    divBtnDeleteCard.setAttribute("class", "divBtnDeleteCard");
    card.appendChild(divBtnDeleteCard);

    // botão que deleta o card criado
    let btnDeleteCard = document.createElement("img");
    btnDeleteCard.setAttribute("src", "./imgs/btnDeleteCard.svg");
    btnDeleteCard.setAttribute("class", "btnDeleteCard");
    divBtnDeleteCard.appendChild(btnDeleteCard);
    btnDeleteCard.addEventListener("click", function () { card.remove() });

    // faz aparecer o botão de deletar card quando passa o mouse em cima do card
    card.addEventListener("mouseover", function() {
      divBtnDeleteCard.style.display = "block";
    })
    card.addEventListener("mouseout", function() {
      divBtnDeleteCard.style.display = "none";
    })

    // faz ficar clicado no primeiro input do formulário de adicionar card quando cria cada card
    titleForm.focus();

    // Esse pedaco comentado foi soh para facilitar testes:
    // titleForm.value = "Filhote de Labrador";
    // pictureForm.value = "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg";
    // descriptionForm.value = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident facere, iure laborum impedit rem tempore cum?";

    // faz limpar todos os inputs do formulário de adicionar card quando cria cada card
    document.querySelectorAll("input").forEach((item) => item.value = "");
  }
})