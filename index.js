const container = document.getElementById("container");
const btn = document.getElementById("btn");



function changeColor(event){
    if (event.target.classList.contains("cell")){
event.target.style.backgroundColor = getRandomColor()}}

function getRandomColor(){
const colors = ["red","yellow","purple", "green", "orange", "blue"];

return colors [Math.floor(Math.random()* colors.length)]
}


container.addEventListener("mouseover", changeColor);



btn.addEventListener(
    "click", 
    () => {
 
      if (container.hasChildNodes){
deleteChild()
}
    const size = changeGridSize();

     for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div"); 
    cell.classList.add("cell") // make a new <div>
    container.appendChild(cell);}  
     })


function changeGridSize(){
   const input = prompt("Set Grid Size (limit 100x100)");
    const result = parseInt(input) 
console.log(result)
    return result
}
     

function deleteChild(){
    while (container.firstChild){
        container.removeChild(container.firstChild)
    }
}
function addNewGridSize(){

}

