//Gera as torres
for (let i = 0; i < 3; i++){
    const body = document.querySelector("section");
    const torres = document.createElement("div");
    body.appendChild(torres);
    torres.classList.add("torre","torre"+(i+1));
}


//Controle dos botões para gerar os Blocos
const botoes = document.querySelector(".controls");
botoes.addEventListener("click", interceptarConfig);

function interceptarConfig(evt){
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

        botoes.classList.add("hidden");
    }

    //Gera os blocos
    for (maxBlocks; maxBlocks > 0; maxBlocks--){
        const torre = document.getElementsByClassName("torre1");
        const bloco = document.createElement("div");
        bloco.classList.add("bloco");
        bloco.setAttribute("id","bloco"+ maxBlocks);
        torre[0].appendChild(bloco);
    }

    //esconde os botões após click
}

//controle dos blocos
const torres = document.querySelector(".game");
console.log(torres)

torres.addEventListener("click",interceptarAcao);

function interceptarAcao(evt) {

    const bloco = evt.target.firstChild;
    console.log(bloco)

    //testando mudança de torre
    const torre2 = document.getElementsByClassName("torre2");
    torre2[0].appendChild(bloco);
}
