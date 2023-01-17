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
const pause = document.getElementById('pause'); //botão de pause
const musica = document.getElementById('musica'); // captura da tag audio

play.addEventListener('click', playMusic);
pause.addEventListener('click', pauseMusic);

function playMusic() {
    musica.play();
    document.querySelector("#pause").style.display = "block";
  document.querySelector("#play").style.display = "none";
}

function pauseMusic() {
    musica.pause();
    document.querySelector("#pause").style.display = "none";
  document.querySelector("#play").style.display = "block";
}

//play.addEventListener('dblclick', pauseMusic);

const like = document.getElementById('curtir');

function curtirMusica() {
    
    like.innerHTML = `<i class="bi bi-heart-fill"></i>`
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
//aqui eu pego a varíavel musica e adiciono um evento para pegar a 
musica.addEventListener("timeupdate", atualizarBarra);


function atualizarBarra() {
    // a varíavel barra representa o progresso atual
    let barra = document.querySelector("#progresso-atual");
    //aqui eu pego o tempo da música ao decorrer que ela vai tocando que está em segundos e divido pela duração total que também está em segundos e depois divido por 100 para transformar em número real e com o Math.floor faz com que o resultado arredonde para baixo virando um valor inteiro( ex: 3.40 = 3) e concateno com % para ir no estilo da barra que é o tamanho (width)
    barra.style.width =
      Math.floor((musica.currentTime / musica.duration) * 100) + "%";

  }