//alert('testando');
// **************
// Obtendo dados de musica e banda, através do arquivo "dados.json"
//
//const nomeMusica = document.getElementById('musica-nome');
//nomeMusica.innerText = 'A visit from the Dead';
//
//const nomeBanda = document.getElementById('banda-nome');
//nomeBanda.innerText = 'King Diamond';
//musica.play();


const play = document.getElementById('play'); // botão de play
const musica = document.getElementById('musica'); // captura da tag audio



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

//let dadosMusica = document.getElementById('info-musica');
    //fetch("../dados.json").then((Response) => {}

let dadosMusica = document.querySelector("#musica-nome");
let dadosBanda = document.querySelector("#banda-nome");
        fetch("../dados.json").then((response) => {
            response.json().then((dados) => {
                dados.musicas.map((musica) => {
                    console.log(musica.musica);
                    dadosMusica.innerHTML = musica.musica
                    dadosBanda.innerHTML = musica.banda
                })
                
            } )
        }
)