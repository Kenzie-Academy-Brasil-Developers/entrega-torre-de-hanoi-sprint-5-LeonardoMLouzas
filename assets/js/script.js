for (let i = 0; i < 3; i++){
    const body = document.querySelector("section");
    const torres = document.createElement("div");
    body.appendChild(torres);
    torres.classList.add("torre"+(i+1));
}