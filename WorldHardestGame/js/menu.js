const menuButton = document.querySelector(".menu");
const bannerMenu = document.querySelector(".bannerMenu");
const resumeGame = document.querySelector(".resumeGame");
const playerColor = document.querySelector(".playerColor");
const playerDeath = document.querySelector(".death");
const playerWin = document.querySelector(".win");
const nextLevel = document.querySelector(".nextLevel");
const showLevel = document.querySelector(".level");


menuButton.addEventListener("click", () => {
  bannerMenu.classList.toggle("hidden");
});

resumeGame.addEventListener("click", () => {
  bannerMenu.classList.toggle("hidden");
});

nextLevel.addEventListener("click", () => {
  player.win();
  bannerMenu.classList.toggle("hidden");
});

//funcao pra mudar a cor

playerColor.addEventListener("click", () => {
  const color = '#'+Math.floor(Math.random()*16777215).toString(16);
  playerColor.style.color = color;
  player.color = color;
});
