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
 
      if (container.hasChildNodes()){
deleteChild()
        return

}
    const size = changeGridSize();

     for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div"); 
    cell.classList.add("cell") // make a new <div>
   
  cell.style.flex = `0 0 calc(100% / ${size})`;
  
 container.appendChild(cell);}  
     })
   

function changeGridSize(){
   const input = prompt("Set Grid Size (10-100)");
    const result = parseInt(input);
if (parseInt(input) < 10){

alert("Choose number above 10")
return}

if (parseInt(input) > 100){
alert("Choose number below 100")
return}

return result}

function deleteChild(){
    while (container.firstChild){
        container.removeChild(container.firstChild)
    }
}

