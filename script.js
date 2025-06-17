const html = document.querySelector("html");
const btnFoco = document.querySelector(".app__card-button--foco");
const btnDescansoCurto = document.querySelector(".app__card-button--curto");
const btnDescansoLongo = document.querySelector(".app__card-button--longo");
const imagem = document.querySelector(".app__image");
const textoDaPagina = document.querySelector(".app__title");
const botoes = document.querySelectorAll(".app__card-button");
const checkbox = document.getElementById("alternar-musica");
const btnComecar = document.getElementById("start-pause");
const textoBtnComecarPausar = document.querySelector("#start-pause span");
const iconeBtnComecarPausar = document.querySelector(".app__card-primary-button-icon");
const temporizadorNaTela = document.getElementById("timer");

const musica = new Audio("/sons/luna-rise-part-one.mp3");
const somQuandoPausaTemporizador = new Audio("/sons/pause.mp3");
const somQuandoIniciaTemporizador = new Audio("/sons/play.wav");
const somQuandoTerminaTemporizador = new Audio("/sons/beep.mp3");

let tempoDecorridoEmSegundos = 1500;
let intervaloId = null;

musica.loop = true;

checkbox.addEventListener("change", () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();      
    }
})

btnFoco.addEventListener("click", () => {
    tempoDecorridoEmSegundos = 1500;
    alterarContexto("foco");
    btnFoco.classList.add("active");
})

btnDescansoCurto.addEventListener("click", () => {
    tempoDecorridoEmSegundos = 300;
    alterarContexto("descanso-curto");
    btnDescansoCurto.classList.add("active");
})

btnDescansoLongo.addEventListener("click", () => {
    tempoDecorridoEmSegundos = 900;
    alterarContexto("descanso-longo");
    btnDescansoLongo.classList.add("active");
})

function alterarContexto(contexto) {
    mostrarTempo();
    botoes.forEach((contexto) => {
        contexto.classList.remove("active");
    })
    html.setAttribute("data-contexto", contexto);
    imagem.setAttribute("src", `/imagens/${contexto}.png`);
    switch (contexto) {
        case "foco":
            textoDaPagina.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            
            `
            break;
        case "descanso-curto":
            textoDaPagina.innerHTML = `
            Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `   
            break;
        case "descanso-longo":
            textoDaPagina.innerHTML = `
            Hora de voltar à superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `    
        default:
            break;
    }
}

const contagemRegressiva = () => {
    if (tempoDecorridoEmSegundos <= 0) {
        somQuandoTerminaTemporizador.play();
        alert("Tempo finalizado.");
        zerar();
        return;
    }
    tempoDecorridoEmSegundos -= 1;
    mostrarTempo();
}

btnComecar.addEventListener("click", iniciarOuPausar);

function iniciarOuPausar() {
    if (intervaloId) {
        somQuandoPausaTemporizador.play();
        zerar();
        return;
    }
    somQuandoIniciaTemporizador.play();
    intervaloId = setInterval(contagemRegressiva, 1000);
    textoBtnComecarPausar.textContent = "Pausar";
    iconeBtnComecarPausar.setAttribute("src", "/imagens/pause.png");
}

function zerar() {
    clearInterval(intervaloId);
    textoBtnComecarPausar.textContent = "Começar";
    iconeBtnComecarPausar.setAttribute("src", "/imagens/play_arrow.png");
    intervaloId = null;
}

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString("pt-Br", {minute: "2-digit", second: "2-digit"});
    temporizadorNaTela.innerHTML = `${tempoFormatado}`;
}

mostrarTempo();
