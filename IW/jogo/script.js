// Elementos do DOM
const telaInicial = document.getElementById("tela-inicial");
const telaJogo = document.getElementById("tela-jogo");
const telaFinal = document.getElementById("tela-final");

const btnIniciar = document.getElementById("btn-iniciar");
const btnReiniciar = document.getElementById("btn-reiniciar");

const alvo = document.getElementById("alvo");
const areaJogo = document.getElementById("area-jogo");

const pontosTexto = document.getElementById("pontos");
const tempoTexto = document.getElementById("tempo");
const nivelTexto = document.getElementById("nivel");
const pontuacaoFinal = document.getElementById("pontuacao-final");

// Variáveis do jogo
let pontos = 0;
let tempo = 30;
let nivel = 1;
let intervaloTempo;

// Iniciar jogo
btnIniciar.addEventListener("click", iniciarJogo);
btnReiniciar.addEventListener("click", iniciarJogo);

// Clique no alvo
alvo.addEventListener("click", clicarNoAlvo);

function iniciarJogo() {
  pontos = 0;
  tempo = 30;
  nivel = 1;

  pontosTexto.textContent = pontos;
  tempoTexto.textContent = tempo;
  nivelTexto.textContent = nivel;

  telaInicial.classList.add("oculto");
  telaFinal.classList.add("oculto");
  telaJogo.classList.remove("oculto");

  moverAlvo();

  clearInterval(intervaloTempo);

  intervaloTempo = setInterval(function() {
    tempo--;
    tempoTexto.textContent = tempo;

    if (tempo <= 0) {
      finalizarJogo();
    }
  }, 1000);
}

function clicarNoAlvo() {
  pontos++;
  pontosTexto.textContent = pontos;

  atualizarNivel();
  moverAlvo();
}

function moverAlvo() {
  const larguraArea = areaJogo.clientWidth;
  const alturaArea = areaJogo.clientHeight;

  const larguraAlvo = alvo.clientWidth;
  const alturaAlvo = alvo.clientHeight;

  const posicaoX = Math.random() * (larguraArea - larguraAlvo);
  const posicaoY = Math.random() * (alturaArea - alturaAlvo);

  alvo.style.left = posicaoX + "px";
  alvo.style.top = posicaoY + "px";
}

function atualizarNivel() {
  if (pontos >= 20) {
    nivel = 3;
    alvo.style.width = "35px";
    alvo.style.height = "35px";
  } else if (pontos >= 10) {
    nivel = 2;
    alvo.style.width = "45px";
    alvo.style.height = "45px";
  } else {
    nivel = 1;
    alvo.style.width = "60px";
    alvo.style.height = "60px";
  }

  nivelTexto.textContent = nivel;
}

function finalizarJogo() {
  clearInterval(intervaloTempo);

  telaJogo.classList.add("oculto");
  telaFinal.classList.remove("oculto");

  pontuacaoFinal.textContent = pontos;
}