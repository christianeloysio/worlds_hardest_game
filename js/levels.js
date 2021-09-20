/**
  @legenda 0 = parede
  @legenda 1 = SAFE_ZONE_COLOR
  @legenda 2 = GROUND_ONE_COLOR
  @legenda 3 = GROUND_TWO_COLOR
  @legenda 3 = SAFE_ZONE_COLOR
*/

const levels = [
  [],
  [
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 0 , 1 , 1 , 1 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 3 , 2 , 4 , 4 , 4 , 0 , 0 ],
    [ 0 , 0 , 1 , 1 , 1 , 0 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 0 , 4 , 4 , 4 , 0 , 0 ],
    [ 0 , 0 , 1 , 1 , 1 , 0 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 0 , 4 , 4 , 4 , 0 , 0 ],
    [ 0 , 0 , 1 , 1 , 1 , 0 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 0 , 4 , 4 , 4 , 0 , 0 ],
    [ 0 , 0 , 1 , 1 , 1 , 0 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 0 , 4 , 4 , 4 , 0 , 0 ],
    [ 0 , 0 , 1 , 1 , 1 , 2 , 3 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 4 , 4 , 4 , 0 , 0 ],
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ]
  ],
  [
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 0 , 0 , 0 , 0 , 0 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 0 , 0 , 0 , 0 , 0 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 0 , 0 , 1 , 1 , 0 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 0 , 4 , 4 , 0 , 0 , 0 ],
    [ 0 , 0 , 0 , 1 , 1 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 4 , 4 , 0 , 0 , 0 ],
    [ 0 , 0 , 0 , 1 , 1 , 0 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 0 , 4 , 4 , 0 , 0 , 0 ],
    [ 0 , 0 , 0 , 0 , 0 , 0 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 0 , 0 , 0 , 0 , 0 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
  ],
  [
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 0 , 1 , 1 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 0 , 1 , 1 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 3 , 2 , 3 , 2 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 2 , 3 , 2 , 3 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 3 , 2 , 3 , 2 , 0 , 0 , 0 , 0 , 3 , 2 , 3 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 2 , 3 , 2 , 3 , 0 , 0 , 0 , 0 , 2 , 3 , 2 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 3 , 2 , 3 , 2 , 0 , 0 , 0 , 0 , 0 , 2 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 4 , 4 , 0 , 0 , 0 ],
    [ 0 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 4 , 4 , 0 , 0 , 0 ],
    [ 0 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 3 , 2 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ]
  ]
]

const levelStroke = [
  [],
  [
    [2, 5],
    [5, 5],
    [5, 10],
    [6, 10],
    [6, 6],
    [15, 6],
    [15, 5],
    [20, 5],
    [20, 11],
    [17, 11],
    [17, 6],
    [16, 6],
    [16, 10],
    [7, 10],
    [7, 11],
    [2, 11]
  ],
  [
    [3, 6],
    [5, 6],
    [5, 7],
    [6, 7],
    [6, 4],
    [16, 4],
    [16, 7],
    [17, 7],
    [17, 6],
    [19, 6],
    [19, 9],
    [17, 9],
    [17, 8],
    [16, 8],
    [16, 11],
    [6, 11],
    [6, 8],
    [5, 8],
    [5, 9],
    [3, 9]
  ],[
    [2, 2],
    [4, 2],
    [4, 4],
    [5, 4],
    [5, 9],
    [10, 9],
    [10, 8],
    [9, 8],
    [9, 6],
    [12, 6],
    [12, 8],
    [11, 8],
    [11, 9],
    [17, 9],
    [17, 10],
    [19, 10],
    [19, 12],
    [17, 12],
    [17, 13],
    [1, 13],
    [1, 4],
    [2, 4]
  ]
]


const playerInitialPosition = [
  [],
  [55,130],
  [80, 170],
  [75, 75]
]
//parametros do enemy (x, y, dx, movementType, limitOne, limitTwo)
/*
  movimentType:
  0 estatico
  1 movimento Linear

*/


const veto = function () {
  let co = []
  for(let i = 0; i< 10; i++){
    co.push([112.5 + ENEMY_SPACE*i,250, 0, 1, 235, 265, -1],  [112.5 + ENEMY_SPACE*i,300, 0, 1, 285, 315, -1],)
  }
  return co
}

const veto2 = function () {
  let co = []
  for(let i = 0; i< 10; i++){
    co.push([112.5 + ENEMY_SPACE*(14+i),250, 0, 1, 235, 265, -1],  [112.5 + ENEMY_SPACE*(14+i),300, 0, 1, 285, 315, -1],)
  }
  return co
}

const totalEnemies = [
  [],
  [
   [275, 162.5, -1, 1, 162.5, 387.5, 0 ],
   [275, 187.5, 1, 1, 162.5, 387.5, 0 ],
   [275, 212.5, -1, 1, 162.5, 387.5, 0 ],
   [275, 237.5, 1, 1, 162.5, 387.5, 0 ],
 ],
 [
  [162.5, 187.5,  0 , 1, 112.5, 262.5 , -1 ],
  [187.5, 187.5,  0 , 1, 112.5, 262.5 , 1 ],
  [212.5, 187.5,  0 , 1, 112.5, 262.5 , -1 ],
  [237.5, 187.5,  0 , 1, 112.5, 262.5 , 1 ],
  [262.5, 187.5,  0 , 1, 112.5, 262.5 , -1 ],
  [287.5, 187.5,  0 , 1, 112.5, 262.5 , 1 ],
  [312.5, 187.5,  0 , 1, 112.5, 262.5 , -1 ],
  [337.5, 187.5,  0 , 1, 112.5, 262.5 , 1 ],
  [362.5, 187.5,  0 , 1, 112.5, 262.5 , -1 ],
  [387.5, 187.5,  0 , 1, 112.5, 262.5 , 1 ],
],
  [
    [50,112.5, 1, 1, 35, 65,0],
    [100,112.5, 1, 1, 85, 115,0],
    [50,112.5+ENEMY_SPACE, 1, 1, 35, 65,0],
    [100,112.5+ENEMY_SPACE, 1, 1, 85, 115,0],
    [50,112.5+ENEMY_SPACE*2, 1, 1, 35, 65,0],
    [100,112.5+ENEMY_SPACE*2, 1, 1, 85, 115,0],
    [50,112.5+ENEMY_SPACE*3, 1, 1, 35, 65,0],
    [100,112.5+ENEMY_SPACE*3, 1, 1, 85, 115,0],
    [50,112.5+ENEMY_SPACE*4, 1, 1, 35, 65,0],
    [100,112.5+ENEMY_SPACE*4, 1, 1, 85, 115,0],
    [50,112.5+ENEMY_SPACE*5, 1, 1, 35, 65,0],
    [100,112.5+ENEMY_SPACE*5, 1, 1, 85, 115,0],
    [50,112.5+ENEMY_SPACE*6, 1, 1, 35, 65,0],
    [100,112.5+ENEMY_SPACE*6, 1, 1, 85, 115,0],
    [50,112.5+ENEMY_SPACE*7, 1, 1, 35, 65,0],
    [100,112.5+ENEMY_SPACE*7, 1, 1, 85, 115,0],
    [50,112.5+ENEMY_SPACE*8, 1, 1, 35, 65,0],
    [100,112.5+ENEMY_SPACE*8, 1, 1, 85, 115,0],
    [50,112.5+ENEMY_SPACE*9, 1, 1, 35, 65,0],
    [100,112.5+ENEMY_SPACE*9, 1, 1, 85, 115,0],
    [50,112.5+ENEMY_SPACE*10, 1, 1, 35, 65,0],
    [100,112.5+ENEMY_SPACE*10, 1, 1, 85, 115,0],
    [75,275,0,2,0,0,0,0,0],
    [75,275,0,2,0,0,0,0,ENEMY_SPACE],
    [75,275,0,2,0,0,0,0,ENEMY_SPACE*2],
    [75,275,0,2,0,0,0,0,ENEMY_SPACE*3],
    [75,275,0,2,0,0,0,0,ENEMY_SPACE*4],
    [75,275,0,2,0,0,0,Math.PI,ENEMY_SPACE],
    [75,275,0,2,0,0,0,Math.PI,ENEMY_SPACE*2],
    [75,275,0,2,0,0,0,Math.PI,ENEMY_SPACE*3],
    [75,275,0,2,0,0,0,Math.PI,ENEMY_SPACE*4],
    [112.5,250, 0, 1, 235, 265, -1],
    [112.5,300, 0, 1, 285, 315, -1],
    [112.5 + ENEMY_SPACE,250, 0, 1, 235, 265, -1],
    [112.5 + ENEMY_SPACE,300, 0, 1, 285, 315, -1],
    ...veto(),
      [112.5 + ENEMY_SPACE * 10,300, 0, 1, 285, 315, -1],
      [112.5 + ENEMY_SPACE * 11,300, 0, 1, 285, 315, -1],
      [112.5 + ENEMY_SPACE * 12,300, 0, 1, 285, 315, -1],
      [112.5 + ENEMY_SPACE * 13,300, 0, 1, 285, 315, -1],
    ...veto2()

  ]
]
//criando a funcao para rendrizar o bg

function renderLevel(level){

  for(let y = 0; y < levels[level].length; y++){
    for(let x = 0; x<levels[level][y].length; x++){

      ctx.beginPath();
      ctx.fillStyle = checkBgColor(levels[level][y][x])
      ctx.fillRect(x * CANVAS_UNIT, y * CANVAS_UNIT, CANVAS_UNIT, CANVAS_UNIT);


      }
    }
  }

  //criar a funcao pra criar pros strokes

  function renderStroke(level){
    ctx.beginPath();
    ctx.lineWidth = 3;

      for(let y = 0; y < levelStroke[level].length; y++){
        if(y == 0 ){
          ctx.moveTo(levelStroke[level][y][0]*CANVAS_UNIT, levelStroke[level][y][1]*CANVAS_UNIT )
        } else {
          ctx.lineTo(levelStroke[level][y][0]*CANVAS_UNIT, levelStroke[level][y][1]*CANVAS_UNIT )
        }
      }
      ctx.closePath();
      ctx.stroke();
  }

  //funcao pra checar a cor

function checkBgColor(colorIndex){
  switch (colorIndex) {
    case 0:
      return BACKGROUND_COLOR;
      break;
    case 1:
      return SAFE_ZONE_COLOR;
      break;
    case 2:
      return GROUND_ONE_COLOR;
      break;
    case 3:
      return GROUND_TWO_COLOR;
      break;
    case 4:
      return SAFE_ZONE_COLOR;
      break;
    default:
      return BACKGROUND_COLOR;
      break;
  }
}

//criar a funcao pra criar pros strokes