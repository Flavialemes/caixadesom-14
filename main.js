//declaração/criando função tocaSomPom
function tocaSom(idElementoAudio){
    document.querySelector('#som_tecla_pom').play()
}

//chamando/invocando a função tocaSomPom pelo clique do botão
document.querySelector('.tecla_pom').onclick = tocaSom;

//referência constante listaDeTeclas, buscando todos os botões
const listaDeTeclas = document.querySelectorAll('.tecla');

//chamando a função tocaSomPom pelo item"0" da listaDeTecla
listaDeTeclas[0].onclick= tocaSom;

let contador =0;
while (contador < listaDeTeclas.length){
listaDeTeclas[contador].onclick= tocaSomPom;
contador = contador + 1;
console.log(contador);
}

