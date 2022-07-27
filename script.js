let grid = document.querySelector('.grid')
let toolSelected = Array.from(document.querySelectorAll('.brush-tool, .eraser'))

let gridMaker = () => {
    for(let i=0;i<16;i++){
        for(let j=0;j<16;j++){
            let gridSquare = document.createElement('div')
            gridSquare.style.border = '1px solid #565656'
            gridSquare.style.padding = '20px'
            gridSquare.style.background = '#252525'
            gridSquare.classList.add('grid-square')
            grid.appendChild(gridSquare)
        }
    }
}

gridMaker();

let squares = Array.from(document.getElementsByClassName('grid-square'))

squares.forEach((button) => {
    button.addEventListener('mousemove', () => {
        
        if(toolSelected[0].classList.contains('selected')) button.style.background = '#d9d9d9'  // if brush tool is selected
        else button.style.background = '#252525'                                                // if eraser is selected
    })
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
