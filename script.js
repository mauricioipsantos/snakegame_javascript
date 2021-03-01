let canvas = document.getElementById ("snake");
// renderiza o desenho dentro do canvas 
let context = canvas.getContext ("2d");
// 32px cada quadrado 
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box,
}
function criarBG() {

    // fillstyle trabalha com o estilo do canvas 
    context.fillStyle = "lightgreen";
    // fillrect vai desenhar o retangulo onde vai acontecer o jogo 
    // trabalha com 4 parametros, x,y, altura e largura 
    context.fillRect (0, 0, 16 * box, 16 * box);
    
}

function criarCobrinha() {
    for (i=0; i<snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect (snake[i].x, snake[i].y, box, box);
    }
}

criarBG();
criarCobrinha();
