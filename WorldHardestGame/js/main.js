const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;



function animation () {
  renderLevel(currentLevel);
  renderStroke(currentLevel);
  player.update()
  for(let enemy of enemies){
    enemy.update();
  }
}

function loop(){
  animation()
  requestAnimationFrame(loop);
}

function startGame() {
  player = new Player(playerInitialPosition[currentLevel][0],playerInitialPosition[currentLevel][1])
  renderLinearEnemies();
}

function restart() {
  player.x = playerInitialPosition[currentLevel][0];
  player.y = playerInitialPosition[currentLevel][1];
}

startGame();
loop();
