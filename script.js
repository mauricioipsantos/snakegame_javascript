let canvas = document.getElementById ("snake");
// renderiza o desenho dentro do canvas 
let context = canvas.getContext ("2d");
// 32px cada quadrado 
let box = 32;

function criarBG() {

    // fillstyle trabalha com o estilo do canvas 
    context.fillStyle = "lightgreen";
    // fillrect vai desenhar o retangulo onde vai acontecer o jogo 
    // trabalha com 4 parametros, x,y, altura e largura 
    context.fillRect (0, 0, 16 * box, 16 * box);
    
}

criarBG();

