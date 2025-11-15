const container = document.getElementById("container");

for (let i = 0; i < 16 * 16; i++) {
    const cell = document.createElement("div"); 
    cell.classList.add("cell") // make a new <div>
    container.appendChild(cell);                // add it to the container
}


