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

for (let contador =0;contador < listaDeTeclas.length;contador++){
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1];
        const idAudio = `#som_${efeito}`;
    tecla.onclick= function(){
        tocaSom(idAudio)
}
tecla.onkeyup = funtion(evento)
       if(evento.code ==='Space' ||evento.code==='Enter'){
    tecla.classList.add('ativa');
}
   }
tecla.onkeyup = funtion()
 tecla.classList.remove('ativa');

}
}
