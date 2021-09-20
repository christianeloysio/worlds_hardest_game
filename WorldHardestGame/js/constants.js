//definindo a width e height do canvas

const CANVAS_WIDTH = 550;
const CANVAS_HEIGHT = 400;
const CANVAS_UNIT = 25

//colors

const PLAYER_STROKE_COLOR = "#000000";
const ENEMY_COLOR = "#0001ff";
const ENEMY_STROKE_COLOR = "#000000";
const SAFE_ZONE_COLOR = "#b6feb4";
const BACKGROUND_COLOR = "#b5b5ff";
const GROUND_ONE_COLOR = "#e6e6ff";
const GROUND_TWO_COLOR = "#f7f7ff";


// Player

const PLAYER_SIZE = 14;
const PLAYER_COLOR = "red";


// System Control
let currentLevel = 1;
let player = null;

//ENEMIES

const ENEMY_RADIUS = 5.5;
const ENEMY_SPEED = 1.5;
const ENEMY_SPACE = 12.5;
