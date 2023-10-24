//declaração/criando função tocaSomPom
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play()
}

//chamando/invocando a função tocaSomPom pelo clique do botão
document.querySelector('.tecla_pom').onclick = tocaSomPom;

//referência constante listaDeTeclas, buscando todos os botões
const listaDeTeclas = document.querySelectorAll('.tecla');

//chamando a função tocaSomPom pelo item"0" da listaDeTecla
listaDeTeclas[0].onclick= TocaSomPom;

let contador =0;
while (){

}

