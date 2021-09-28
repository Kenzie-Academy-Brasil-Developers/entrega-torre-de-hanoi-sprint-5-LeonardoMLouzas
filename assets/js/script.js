for (let i = 0; i < 3; i++){
    const body = document.querySelector("section");
    const torres = document.createElement("div");
    body.appendChild(torres);
    torres.classList.add("torre"+(i+1));
}

for (let i = 1; i < 4; i++){
    
    const a = document.getElementsByClassName("torre1");
    const b = document.createElement("div");
    b.classList.add("bloco");
    b.setAttribute("id","bloco"+i);
    a[0].appendChild(b);
}