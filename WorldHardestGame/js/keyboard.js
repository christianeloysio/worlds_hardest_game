document.addEventListener('keydown', startMoving);
document.addEventListener('keyup', stopMoving);

//definindo as consantes de movimento
let isMovingLeft = false;
let isMovingUp = false;
let isMovingRight = false;
let isMovingDown = false;


//defininfo as funcoes de movimento
function startMoving (e) {
    switch(e.keyCode) {
        case(37):
            isMovingLeft = true;
        break;
        case(38):
            isMovingUp = true;
        break;
        case(39):
            isMovingRight = true;
        break;
        case(40):
            isMovingDown = true;
        break;
    }
}

function stopMoving (e) {

    switch(e.keyCode) {
        case(37):
            isMovingLeft = false;
        break;
        case(38):
            isMovingUp = false;
        break;
        case(39):
            isMovingRight = false;
        break;
        case(40):
            isMovingDown = false;
        break;
    }
}
