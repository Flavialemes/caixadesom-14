//declaração/criando função tocaSomPom
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play()
}

//chamando/invocando a função tocaSomPom pelo clique do botão
document.querySelector('.tecla_pom').onclick = tocaSom;

//referência constante listaDeTeclas, buscando todos os botões
const listaDeTeclas = document.querySelectorAll('.tecla');

//chamando a função tocaSomPom pelo item"0" da listaDeTecla
listaDeTeclas[0].onclick= tocaSom;

let contador =0;
while (contador < listaDeTeclas.length){
    const efeito = listaDeTeclas[contador].classList[1];
    const idAudio ="#som_"+ efeito;
listaDeTeclas[contador].onclick= function(){

}
contador = contador + 1;
console.log(contador);
}

