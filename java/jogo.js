
const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const tempo = document.querySelector('.tempo');

//Uma ray com todos os nomes dos personagem 
const personagens = [ 
  'frieren',
  'fern',
  'himmel',
  'mestra',
  'shisui',
  'heiter',
  'casal1',
  'grupo',
  'os_tres',
  'stark',
];

const createElement =(tag, className) => {    //Essa funçao coloca a imagem dentro da carta 
   const element = document.createElement(tag);
   element.className = className;
   return element;
}

let mostrarCarta = '';
let esconderCarta = '';

const conferiJogo = () => {

const desabilitarCartas = document.querySelectorAll('.desabilitar-carta');

    if (desabilitarCartas.length == 20) {
        clearInterval(this.loop);
        alert(`Parabéns, ${spanPlayer.innerHTML}!`);
    }
}

const conferirCarta = () => {

 const mostrarCaracter = mostrarCarta.getAttribute('data-caracter');
 const esconderCaracter = esconderCarta.getAttribute('data-caracter');

 if (mostrarCaracter == esconderCaracter){

  mostrarCarta.firstChild.classList.add('desabilitar-carta');
  esconderCarta.firstChild.classList.add('desabilitar-carta');

   //Reseta as cartas 
   mostrarCarta ='';
   esconderCarta = '';

   conferiJogo();

 }else{
    setTimeout(() => {

    mostrarCarta.classList.remove('revelar-carta');
    esconderCarta.classList.remove('revelar-carta');

    //Reseta as caratas
    mostrarCarta ='';
    esconderCarta = '';

    }, 500);
   
 }
}



// Essa funçao  tem o dever de quando clicar na carta ela virar
const revelarCarta = ({target}) => {

if (target.parentNode.className.includes('revelar-carta')) {
    return;
}

//A primeira carta esta vazia?
if (mostrarCarta == ''){
  target.parentNode.classList.add('revelar-carta');  
  mostrarCarta = target.parentNode; // armazena a carata aeta em mostrar carta
}

 else if (esconderCarta == ''){
  target.parentNode.classList.add('revelar-carta');  
  esconderCarta = target.parentNode; // armazena a carta mostrada em mostrar carta

  conferirCarta();
}
    

}

// essa funçao cria a carta 
const createCard = (personagem) =>{ 

 const card = createElement('div', 'card'); // Cria um elemento
 const frente = createElement('div', 'face frente');
 const tras = createElement('div', 'face tras');

frente.style.backgroundImage = `url('./imagens/${personagem}.jfif')`;


 card.appendChild(frente);
 card.appendChild(tras);

 card.addEventListener('click', revelarCarta);

 card.setAttribute('data-caracter', personagem)// mostra o nome da carta 

 return card;
}

const loadGame  = () => {

   const duplicatePersonagens = [... personagens, ...personagens]
     
   const embaralharArray = duplicatePersonagens.sort( () => Math.random() - 0.5);
   

  embaralharArray.forEach((personagem) => { // isso cria vairias carta 

       const card = createCard(personagem);
       grid.appendChild(card);

    });
}

// Tem a funçao de fazer o tempo correr enquanto joga//
const startTimer = () => {

this.loop = setInterval(() => {
 const tempoAtual = Number(tempo.innerHTML);
 tempo.innerHTML = tempoAtual + 1;
  }, 1000);

}
 
// Tem a funçao de mostrar o nome do usuario na tela //
window.onload = () => {
  const nomeJogador = localStorage.getItem('player');

  spanPlayer.textContent = nomeJogador || 'Convidado';

  startTimer()
  loadGame();
};


