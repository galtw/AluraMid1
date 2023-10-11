function tocaSom(){
    document.querySelector (idElementoAudio) .play('');
    document.querySelector (idElementoAudio).onclick = tocaSomPom ();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;

while(contador < 9){
    listaDeTeclas[contador].onclick = tocaSomPom;

    contador = contador + 1;
}

listaDeTeclas[1].onclick = tocaSomClap;
listaDeTeclas[2].onclick = tocaSomTim;
listaDeTeclas[3].onclick = tocaSomPuff;



