let canvas = document.getElementById("snake");
// renderiza o desenho dentro do canvas 
let context = canvas.getContext("2d");
// 32px cada quadrado 
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box,
}
let direction = "right";




function criarBG() {

    // fillstyle trabalha com o estilo do canvas 
    context.fillStyle = "lightgreen";
    // fillrect vai desenhar o retangulo onde vai acontecer o jogo 
    // trabalha com 4 parametros, x,y, altura e largura 
    context.fillRect(0, 0, 16 * box, 16 * box);

}

function criarCobrinha() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

document.addEventListener ('keydown', update);

function update (event) {
    if (event.keyCode == 37 && direction != "right") direction ="left"; 
    if (event.keyCode == 38 && direction != "down") direction ="up"; 
    if (event.keyCode == 39 && direction != "left") direction ="right"; 
    if (event.keyCode == 40 && direction != "up") direction ="down"; 
}

function iniciarJogo() {

    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;


    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // direção da cobra 
    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    // adicionar a ponta da cobra 
    snake.unshift(newHead);

}

let jogo = setInterval(iniciarJogo, 100);
