//elemento de tela (canvas) no HTML com um contexto 2D configurado para desenhos,
// e as constantes width e height armazenam as dimensões do canvas,
// que são definidas para ocupar toda a largura e altura da janela do navegador.
const canvas = document.getElementById('canvas'), //Obtém a referência para o elemento de tela HTML com o ID 'canvas' usando o método getElementById e armazena essa referência na constante canvas.
  context = canvas.getContext('2d'), //Obtém a referência para o contexto 2D do elemento de tela HTML com o ID 'canvas' usando o método getContext e armazena essa referência na constante context.
  width = (canvas.width = window.innerWidth), // Define a largura do canvas igual à largura da janela do navegador (window.innerWidth). Ao mesmo tempo, o valor é atribuído à constante width. Portanto, width agora contém a largura do canvas.
  height = (canvas.height = window.innerHeight); // Similar à linha anterior, isso define a altura do canvas igual à altura da janela do navegador (window.innerHeight). O valor também é atribuído à constante height.

//Função que desenha um círculo verde de raio nas coordenadas x e y.
function drawBall(x, y, radius) {
  context.beginPath(); //Inicia um novo caminho no contexto 2D. Um caminho é uma sequência de segmentos de linha ou curvas que podem ser usados para desenhar formas.
  context.fillStyle = '#66DA79'; //Define a cor de preenchimento para o círculo. No caso, a cor é definida como '#66DA79', que é uma cor verde.
  context.arc(x, y, radius, 0, 2 * Math.PI); //Cria um arco ou círculo. Os parâmetros são: x: A coordenada x do centro do círculo. y: A coordenada y do centro do círculo. radius: O raio do círculo. 0: O ângulo inicial do arco em radianos. 2 * Math.PI: O ângulo final do arco em radianos. Neste caso, é um círculo completo (360 graus).
  context.fill(); // Preenche o caminho atual (que é o círculo definido pelo context.arc) com a cor de preenchimento definida anteriormente.
}

//Animação
//Point A
let startX = 50,
  startY = 50;
//Point B
let endX = 420,
  endY = 380;

let x = startX,
  y = startY;
update();

function update() {
  context.clearRect(0, 0, width, height);
  drawBall(x, y, 30);
  requestAnimationFrame(update);
}
