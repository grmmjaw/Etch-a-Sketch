const container = document.getElementById("container");

for (let i = 0; i < 16 * 16; i++) {
    const cell = document.createElement("div"); 
    cell.classList.add("cell") // make a new <div>
    container.appendChild(cell);                // add it to the container
}

function changeColor(event){
event.target.style.backgroundColor = getRandomColor()}

function getRandomColor(){
const colors = ["red","yellow","purple", "green", "orange", "blue"];

return colors [Math.floor(Math.random()* colors.length)]
}


container.addEventListener("mouseover", changeColor)
