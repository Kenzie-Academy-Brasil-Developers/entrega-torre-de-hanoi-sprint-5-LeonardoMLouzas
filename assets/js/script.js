
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
    for (let i = 0; i < maxBlocks; i++){
        const torre = document.getElementsByClassName("torre1");
        const bloco = document.createElement("div");
        bloco.classList.add("bloco");
        bloco.setAttribute("id","bloco" + i);
        torre[0].appendChild(bloco);
    }

    //esconde os botões após click
}

//controle das torres
const torre = document.querySelector(".game");


torre.addEventListener("dblclick",interceptarAcao);
const primeiraTorre = document.querySelector(".torre1")
const segundaTorre = document.querySelector(".torre2")
const terceiraTorre = document.querySelector(".torre3")




//verificar qual torre esta selecionada
function interceptarAcao(evt) {
     alvoTorre = evt.target;
     console.log(alvoTorre) 
     
    
    if(alvoTorre === primeiraTorre){
        primeiraTorre.classList.add("selectedTower")
        terceiraTorre.classList.remove("selectedTower")
        segundaTorre.classList.remove("selectedTower")   
            
    } else if(alvoTorre === segundaTorre){
        primeiraTorre.classList.remove("selectedTower")
        segundaTorre.classList.add("selectedTower")
        terceiraTorre.classList.remove("selectedTower")
        //Adicionar itens

        
        alvoTorre.appendChild(primeiraTorre.firstChild)

    } else if(alvoTorre === terceiraTorre){
        terceiraTorre.classList.add("selectedTower")
        primeiraTorre.classList.remove("selectedTower")
        segundaTorre.classList.remove("selectedTower")
    }

}

//contagem de discos nas torres
primeiraTorre.addEventListener("click", contarDiscos)
segundaTorre.addEventListener("click", contarDiscos)
terceiraTorre.addEventListener("click", contarDiscos)
function contarDiscos(evt){
    let contagemDeDiscos = evt.target.childElementCount 
    console.log(contagemDeDiscos)
} 

//ultimo disco da torre
primeiraTorre.addEventListener("click",verificarUltimoDisco)
segundaTorre.addEventListener("click",verificarUltimoDisco)
terceiraTorre.addEventListener("click",verificarUltimoDisco)

function verificarUltimoDisco(evt){
    let qualUltimoDisco = evt.target;
    let ultimoDisco = qualUltimoDisco.firstElementChild;
    return ultimoDisco
}
//adicionando disco na torre

// const bloco = evt.target.firstChild;
    // console.log(bloco)    

    // //testando mudança de torre
    // const torre2 = document.getElementsByClassName("torre2");
    // torre2[0].appendChild(bloco);




