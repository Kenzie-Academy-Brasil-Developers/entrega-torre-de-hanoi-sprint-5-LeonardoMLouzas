//Gera as torres
for (let i = 0; i < 3; i++) {
  const body = document.querySelector("section");
  const torres = document.createElement("div");
  body.appendChild(torres);
  torres.classList.add("torre", "torre" + (i + 1));
}

//Controle dos botões para gerar os Blocos
const botoes = document.querySelector(".controls");
botoes.addEventListener("click", interceptarConfig);

let maxBlocks = 0;
function interceptarConfig(evt) {
  const button = evt.target;

  if (button.id == "playwith3") {
    maxBlocks = 3;
    botoes.classList.add("hidden");
  }
  if (button.id == "playwith4") {
    maxBlocks = 4;

    botoes.classList.add("hidden");
  }
  if (button.id == "playwith5") {
    maxBlocks = 5;

    botoes.classList.add("hidden");
  }

  //Reseta e gera os blocos
  for (i = 0; i < maxBlocks; i++) {

    const torre = document.getElementsByClassName("torre1");
    const bloco = document.createElement("div");
    bloco.classList.add("bloco");
    bloco.setAttribute("id", "bloco" + i);
    torre[0].appendChild(bloco);
  }

  //esconde os botões após click
}

let countClick = 0;
let bloco;
//controle dos blocos
const torres = document.querySelector(".game");

torres.addEventListener("click", interceptarAcao);

function interceptarAcao(evt) {
  if (countClick === 0 && evt.target.childElementCount !== 0 && evt.target.classList.contains("torre")) {
    bloco = evt.target.lastChild;

    countClick = 1;
  } else if (countClick === 0 && evt.target.childElementCount === 0) {
    console.log("Não há bloco");
  } else {
    const alvo = evt.target;
    if (alvo.classList.contains("torre")) {

      if (
        alvo.childElementCount === 0 ||
        alvo.lastChild.clientWidth > bloco.clientWidth
      ) {
        alvo.appendChild(bloco);
        countClick = 0;

        countMovimentos++;
        let movimento = (document.getElementById("movimentos").innerText =
          "Movimentos: " + countMovimentos);

        vitoria();
        // console.log(countMovimentos)
      } else {
        console.log("Bloco superior da torre menor que o bloco selecionado.");
        countClick = 0;
      }
    }
  }
}

function venceu() {
  const elemento = document.querySelector("#modal");

  elemento.classList.add("mostrar-modal");

  const fechar = document.querySelector("#fechar-botao");
  fechar.addEventListener("click", () => {
    elemento.classList.remove("mostrar-modal");
    reset();
    botoes.classList.remove("hidden");

  })
}

let countMovimentos = 0;
let countVitorias = 0;

const torre2 = document.getElementsByClassName("torre2");
const torre3 = document.getElementsByClassName("torre3");

function vitoria() {
  if (
    maxBlocks === 3 &&
    (torre2[0].childElementCount === 3 || torre3[0].childElementCount === 3)
  ) {
    venceu();
    countVitorias++;
    let vitoria = (document.getElementById("vitorias").innerText =
      "Vitórias: " + countVitorias);
  } else if (
    maxBlocks === 4 &&
    (torre2[0].childElementCount === 4 || torre3[0].childElementCount === 4)
  ) {
    venceu();
    countVitorias++;
    let vitoria = (document.getElementById("vitorias").innerText =
      "Vitórias: " + countVitorias);
  } else if (
    maxBlocks === 5 &&
    (torre2[0].childElementCount === 5 || torre3[0].childElementCount === 5)
  ) {
    venceu();
    countVitorias++;
    let vitoria = (document.getElementById("vitorias").innerText =
      "Vitórias: " + countVitorias);
  }
}

function reset() {

  countMovimentos = 0;
  for (let i = 1; i <= 3; i++) {
    let torre = document.getElementsByClassName(`torre${i}`);

    for (let j = 0; j < maxBlocks; j++) {
      if (torre[0].childElementCount > 0) {
        torre[0].removeChild(torre[0].childNodes[0]);
      }
    }
  }
}