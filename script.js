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

toolSelected.forEach((tool) => {
    tool.addEventListener('click', () => {
        if(tool.classList.contains('selected')) return;

        if(tool.classList.contains('brush-tool')){
            toolSelected[1].classList.remove('selected')
            toolSelected[1].style.background = '#414141'
        } else {
            toolSelected[0].classList.remove('selected')
            toolSelected[0].style.background = '#414141'
        }
        
        tool.classList.add('selected')
        tool.style.background = '#202020'

    })
})

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    else if (toolSelected[0].classList.contains('selected')) e.target.style.background = colorValue
    else e.target.style.background = 'none'
}

function clearGrid() {
    grid.innerHTML = ''
}