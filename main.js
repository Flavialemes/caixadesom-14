//declaração/criando função tocaSomPom
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play()
}

//chamando/invocando a função tocaSomPom pelo clique do botão
document.querySelector('.tecla_pom').onclick = tocaSomPom;

const listaDeTeclas = document.querySelectorAll('.tecla');
listaDeTeclas[1].onclick= TocaSomClap;