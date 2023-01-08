//alert('testando');

const nomeMusica = document.getElementById('musica-nome');
nomeMusica.innerText = 'A visit from the Dead';

const play = document.getElementById('play'); // botão de play
const musica = document.getElementById('musica'); // captura da tag audio

const nomeBanda = document.getElementById('banda-nome');
nomeBanda.innerText = 'King Diamond';
//musica.play();

function playMusic() {
    musica.play();
    play.innerHTML = `<i class="bi bi-pause-circle-fill"></i>`;
}
function pauseMusic() {
    musica.pause();
}
play.addEventListener('click', playMusic);
//play.addEventListener('dblclick', pauseMusic);

const like = document.getElementById('curtir');

function curtirMusica() {
    
    like.innerHTML = `<i class="bi bi-heart-fill"></i>`;
}
like.addEventListener('click', curtirMusica);

