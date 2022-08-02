let grid = document.querySelector('.grid')
let toolSelected = Array.from(document.querySelectorAll('.brush-tool, .eraser'))
let gridSize = document.querySelector('.grid-size')
let sliderGrid = document.querySelector('#slider')
let sliderValue = document.querySelector('#slider').value
let clearButton = document.querySelector('.clear')
let colorPicker = document.querySelector('.color-picker')
let colorValue = document.querySelector('.color-picker').value

let mouseDown = false
document.body.onmousedown = () => {mouseDown = true}
document.body.onmouseup = () => {mouseDown = false}

function gridMaker() {
    clearGrid()
    sliderValue = document.querySelector('#slider').value
    grid.style.gridTemplateColumns = `repeat(${sliderValue}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${sliderValue}, 1fr)`
    gridSize.innerText = `${sliderValue} x ${sliderValue}`

    for(let i = 0; i < (sliderValue * sliderValue); i++){
        let gridSquare = document.createElement('div')
        if(sliderValue <= 48) gridSquare.style.border = '1px solid #9d9d9d';
        else grid.style.border = '1px solid #9d9d9d'
        gridSquare.addEventListener('mouseover', changeColor)
        gridSquare.addEventListener('mousedown', changeColor)
        gridSquare.classList.add('grid-square')
        grid.appendChild(gridSquare)
    }
}

window.onload = () => gridMaker();

colorPicker.onchange = () => colorValue = document.querySelector('.color-picker').value
sliderGrid.onchange = () => gridMaker()
clearButton.onclick = () => gridMaker()

toolSelected.forEach((newSelectedTool) => {
    newSelectedTool.addEventListener('click', () => {
        if(newSelectedTool.classList.contains('selected')) return;

        let previousSelectedTool = document.querySelector('.selected')
        previousSelectedTool.classList.remove('selected')
        
        newSelectedTool.classList.add('selected')

    })
})

function returnsToolSelected() {
    let toolSelected = document.querySelector('.selected')
    if(toolSelected.classList.contains('brush-tool')) return 'brush-tool'
    else return 'eraser'
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    else if (returnsToolSelected() == 'brush-tool') e.target.style.background = colorValue
    else e.target.style.background = 'none'
}

function clearGrid() {
    grid.innerHTML = ''
}