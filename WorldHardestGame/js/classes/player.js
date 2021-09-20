class Player {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = PLAYER_SIZE;
        this.height = PLAYER_SIZE;
        this.color = PLAYER_COLOR;
        this.stroke = PLAYER_STROKE_COLOR;
        this.death = 0;
        this.level = 1;
        this.lastPostion = {
          x: this.x,
          y: this.y
        }
    }

    draw() {
        ctx.strokeStyle = this.stroke;
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.rect(this.x,this.y,this.width,this.height);
        ctx.fill();
        ctx.stroke();
    }

    move() {
      this.getLastPosition()
      if(isMovingLeft) {
        this.x--;
      }
      if(isMovingUp) {
        this.y--;
      }
      if(isMovingRight) {
        this.x++;
      }
      if(isMovingDown) {
        this.y++;
      }
    }

    update() {
      this.move();
      this.hitDetection();
      this.draw();
    }

    hitDetection() {
      let posx = Math.floor(this.x/25);
      let posy = Math.floor(this.y/25);

      let posx2 = Math.floor((this.x+PLAYER_SIZE)/25);
      let posy2 = Math.floor((this.y+PLAYER_SIZE)/25);

      let posx3 = Math.floor((this.x)/25);
      let posy3 = Math.floor((this.y+PLAYER_SIZE)/25);

      let posx4 = Math.floor((this.x+PLAYER_SIZE)/25);
      let posy4 = Math.floor((this.y)/25);


      if(
        levels[currentLevel][posy][posx] == 0 ||
        levels[currentLevel][posy2][posx2] == 0 ||
        levels[currentLevel][posy3][posx3] == 0 ||
        levels[currentLevel][posy4][posx4] == 0 ) {

        this.setLastPosition()
      }

      if(
        levels[currentLevel][posy][posx] == 4 ||
        levels[currentLevel][posy2][posx2] == 4 ||
        levels[currentLevel][posy3][posx3] == 4 ||
        levels[currentLevel][posy4][posx4] == 4 ) {

        this.win()
      }
    }

    getLastPosition() {
      this.lastPostion.x = this.x
      this.lastPostion.y = this.y
    }

    setLastPosition() {
      this.x = this.lastPostion.x;
      this.y = this.lastPostion.y;
    }
    increaseDeath() {
      player.death++;
      playerDeath.innerText = player.death;
    }
    win() {

        currentLevel++

      showLevel.innerText = currentLevel;
      startGame();
    }
}
