const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
// Updated target dates for new goals (adjust as needed for 2025)
const tempoObjetivo1 = new Date("2025-06-30T23:59:59"); // Learn React by end of June 2025
const tempoObjetivo2 = new Date("2025-09-15T23:59:59"); // Develop mobile app by mid-September 2025
const tempoObjetivo3 = new Date("2025-11-01T23:59:59"); // Contribute to Open Source by November 2025
const tempoObjetivo4 = new Date("2025-12-31T23:59:59"); // Participate in hackathon by end of 2025

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    if (tempoFinal > 0) {
        return [dias, horas, minutos, segundos];
    } else {
        return [0, 0, 0, 0]; // Return all zeros if the time has passed
    }
}

function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        const [dias, horas, minutos, segundos] = calculaTempo(tempos[i]);
        document.getElementById("dias" + i).textContent = dias;
        document.getElementById("horas" + i).textContent = horas;
        document.getElementById("min" + i).textContent = minutos;
        document.getElementById("seg" + i).textContent = segundos;
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000); // Update every second
}

comecaCronometro();