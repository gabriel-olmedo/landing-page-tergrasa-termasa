const imagensPainel = document.querySelectorAll(".imagem-painel");
const setaAvancar = document.getElementById("btn-avancar");
const setaVoltar = document.getElementById("btn-voltar");
const totalImagens = imagensPainel.length - 1;
let imagemAtual = 0;

function ocultarImagem() {
  imagensPainel.forEach((imagem) => {
    imagem.classList.remove("mostrar");
  });
}

function mostrarImagemAtual() {
  imagensPainel[imagemAtual].classList.add("mostrar");
}

setaAvancar.addEventListener("click", function () {
  imagemAtual === totalImagens ? imagemAtual : imagemAtual++;

  ocultarImagem();

  mostrarImagemAtual();
});

setaVoltar.addEventListener("click", function () {
  imagemAtual === 0 ? imagemAtual : imagemAtual--;

  ocultarImagem();

  mostrarImagemAtual();
});
