let grid = document.querySelector('.grid')
let toolSelected = Array.from(document.querySelectorAll('.brush-tool, .eraser'))
let gridSize = document.querySelector('.grid-size')
let slider = document.querySelector('#slider')
let sliderRange = document.querySelector('#slider').value
let clearButton = document.querySelector('.clear')
let colorPicker = document.querySelector('.color-picker')
let color = document.querySelector('.color-picker').value

let mouseDown = false
document.body.onmousedown = () => {mouseDown = true}
document.body.onmouseup = () => {mouseDown = false}

colorPicker.addEventListener('change', () => {
    color = document.querySelector('.color-picker').value
    console.log(color)
})

let gridMaker = () => {
    clearGrid()
    sliderRange = document.querySelector('#slider').value
    grid.style.gridTemplateColumns = `repeat(${sliderRange}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${sliderRange}, 1fr)`
    gridSize.innerText = document.querySelector('#slider').value + ' x ' +  document.querySelector('#slider').value
    for(let i=0;i<sliderRange * sliderRange;i++){
        let gridSquare = document.createElement('div')
        if(sliderRange <= 48) gridSquare.style.border = '1px solid #565656';
        gridSquare.addEventListener('mouseover', changeColor)
        gridSquare.addEventListener('mousedown', changeColor)
        gridSquare.classList.add('grid-square')
        grid.appendChild(gridSquare)
    }
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown)return
    else if (toolSelected[0].classList.contains('selected')) e.target.style.background = '#d9d9d9'
    else e.target.style.background = '#252525'
}

function clearGrid() {
    grid.innerHTML = ''
}

gridMaker();

let squares = Array.from(document.getElementsByClassName('grid-square'))

// squares.forEach((button) => {
//     button.addEventListener('mousemove', () => {
        
//         if(toolSelected[0].classList.contains('selected')) button.style.background = '#d9d9d9'  // if brush tool is selected
//         else button.style.background = '#252525'                                                // if eraser is selected
//     })
// })

slider.addEventListener('change', () => {
    gridMaker();
})

toolSelected.forEach((tool) => {
    tool.addEventListener('click', () => {
        if(tool.classList.contains('selected')) return;

        if(tool.classList.contains('brush-tool')){
            toolSelected[1].classList.remove('selected')
            toolSelected[1].style.background = '#264a70'
        } else {
            toolSelected[0].classList.remove('selected')
            toolSelected[0].style.background = '#264a70'
        }
        
        tool.classList.add('selected')
        tool.style.background = '#9DC3ED'

    })
})

clearButton.onclick = () => {
    gridMaker()
}