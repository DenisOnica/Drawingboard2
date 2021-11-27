const input = document.querySelector("#colorPicker");
const grid = document.querySelector(".color-box");
const eraser = document.querySelector("#eraser");
const clear = document.querySelector('#clear');

const DEFAULT_COLOR = '#333333'
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE



input.addEventListener('change', (e) => {
  setCurrentColor(e.target.value);
}) 
clear.addEventListener('click', () => {
  reloadGrid();
})
eraser.addEventListener('click', () => {
  setCurrentColor('#FFFFFF')
})


function setCurrentColor(newColor) {
    currentColor = newColor
  }

function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
  
    for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement('div')
      gridElement.appendChild(document.createTextNode('`'))
      gridElement.addEventListener('mouseover', ()=>{
        gridElement.style.background = currentColor;
        gridElement.style.color = currentColor;
      })
      grid.appendChild(gridElement)
      
    }
  }

  function reloadGrid() {
    clearGrid()
    setupGrid(currentSize)
  }

  function setCurrentSize(newSize) {
    currentSize = newSize
  }

  window.onload = () => {
    setupGrid(DEFAULT_SIZE)
    
  }

  function clearGrid(){
    grid.innerHTML = '';
  }

  function reloadGrid() {
    clearGrid()
    setupGrid(currentSize)
  }