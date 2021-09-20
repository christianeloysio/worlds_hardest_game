class Enemy {
    constructor (x, y, dx, movementType, limitOne, limitTwo, dy,w,r ){
        this.x = x;
        this.y = y;
        this.radius = ENEMY_RADIUS;
        this.dx = dx;
        this.dy = dy;
        this.movementType = movementType;
        this.limitOne = limitOne;
        this.limitTwo = limitTwo;
        this.w = w - Math.PI/4;
        this.dw = 0.025;
        this.r = r;
        this.center = {
          x: x,
          y: y
        }
    }

    draw() {
        ctx.strokeStyle = ENEMY_STROKE_COLOR;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
        ctx.fillStyle = ENEMY_COLOR;
        ctx.fill();
        ctx.stroke();
    }

    update() {
      this.draw();
      if(this.movementType == 2) {
        this.x = this.center.x + this.r* Math.cos(this.w);
        this.y = this.center.y + this.r* Math.sin(this.w);
        this.w +=this.dw
      }
      if(this.movementType == 1) {
        if (this.x < this.limitOne || this.x > this.limitTwo ){
          this.dx = -this.dx;
        }
        this.x += this.dx;
        if (this.y < this.limitOne || this.y > this.limitTwo ){
          this.dy = -this.dy;
        }
        this.y += this.dy;

        }
        if(this.collision()){
          player.increaseDeath()
          restart()
      }

    }

    collision(){

       var dx=Math.abs(this.x-(player.x+PLAYER_SIZE/2));
       var dy=Math.abs(this.y-(player.y+PLAYER_SIZE/2));
       if( dx > this.radius+PLAYER_SIZE/2 ){ return(false); }
       if( dy > this.radius+PLAYER_SIZE/2 ){ return(false); }
       if( dx <= PLAYER_SIZE ){ return(true); }
       if( dy <= PLAYER_SIZE ){ return(true); }
       var dx= dx - PLAYER_SIZE;
       var dy= dy - PLAYER_SIZE
       return(dx*dx+dy*dy<=this.radius*this.radius);
    }


}

//array dos inimigos
let enemies = [

];


function renderLinearEnemies(){

  enemies = [];

  for(let i = 0; i < totalEnemies[currentLevel].length; i++){
    let x = totalEnemies[currentLevel][i][0];
    let y = totalEnemies[currentLevel][i][1];
    let dx = totalEnemies[currentLevel][i][2] * ENEMY_SPEED;
    let dy = totalEnemies[currentLevel][i][6] * ENEMY_SPEED;
    let movementType = totalEnemies[currentLevel][i][3];
    let limitOne = totalEnemies[currentLevel][i][4];
    let limitTwo = totalEnemies[currentLevel][i][5];
    let w = totalEnemies[currentLevel][i][7];
    let r = totalEnemies[currentLevel][i][8];

    enemies.push(new Enemy( x, y, dx, movementType, limitOne, limitTwo,dy,w,r));
  }

}
