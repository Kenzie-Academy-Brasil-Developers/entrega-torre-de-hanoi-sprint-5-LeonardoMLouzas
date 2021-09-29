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

function interceptarConfig(evt) {
  const button = evt.target;
  let maxBlocks = 0;

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

    botoes.classList.add("hidden")
   
  }

  //Gera os blocos
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
  if (countClick === 0 && evt.target.childElementCount !== 0) {
    bloco = evt.target.lastChild;

    countClick = 1;
  } else if (countClick === 0 && evt.target.childElementCount === 0) {
    console.log("Não há bloco");
  } else {
    const alvo = evt.target;

    if (
      alvo.childElementCount === 0 ||
      alvo.lastChild.clientWidth > bloco.clientWidth
    ) {
      alvo.appendChild(bloco);
      countClick = 0;

      countMovimentos++;
      let movimento = document.getElementById("movimentos").innerText = "Movimentos: " + countMovimentos;

      // console.log(countMovimentos)
    } else {
      console.log("Bloco superior da torre menor que o bloco selecionado.");
      countClick = 0;
    }
  }
    
}
    let countMovimentos = 0;