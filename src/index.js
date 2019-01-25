const $root = document.querySelector("#root");
const $memoryCardFront = document.createElement("article");
createMemoryCard();

const $iconJs = `
  <img
    src='img/-icon-js.png' 
    alt='Icone de um livro de javascrit' 
    class='icon' 
  />
`;

$memoryCardFront.classList.add("memory-card");
$memoryCardFront.classList.add("-front");
$root.insertBefore($memoryCardFront, null);

$memoryCardFront.insertAdjacentHTML("afterbegin", $iconJs);

// function createMemoryCard() {
//   const $memoryCard = document.createElement("article");

//   const $iconCollab = `
//   <img
//     src='img/icon-collabcode.png'
//     alt='Gueio mascoteda CollabCode'
//     class='icon'
//   />
// `;

//   $memoryCard.classList.add("memory-card");
//   $root.insertBefore($memoryCard, null);

//   $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
// }
