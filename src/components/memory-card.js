function createMemoryCard() {
  const $memoryCard = document.createElement("article");

  const $iconCollab = `
  <img
    src='img/icon-collabcode.png' 
    alt='Gueio mascoteda CollabCode' 
    class='icon' 
  />
`;

  $memoryCard.classList.add("memory-card");
  $root.insertBefore($memoryCard, null);
  
  $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
}
