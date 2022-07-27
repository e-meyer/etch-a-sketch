let grid = document.querySelector('.grid')
let toolSelected = Array.from(document.querySelectorAll('.brush-tool, .eraser'))

console.log(toolSelected[0].className)
console.log(toolSelected[1].className)

let gridMaker = () => {
    for(let i=0;i<16;i++){
        for(let j=0;j<16;j++){
            let newDiv = document.createElement('div')
            newDiv.style.border = '1px solid #565656'
            newDiv.style.padding = '20px'
            newDiv.style.background = '#252525'
            newDiv.classList.add('grid-square')
            grid.appendChild(newDiv)
        }
    }
    
    
}

gridMaker();

let squares = Array.from(document.getElementsByClassName('grid-square'))

squares.forEach((button) => {
    button.addEventListener('click', () => {
        
        if(toolSelected[0].classList.contains('selected')) button.style.background = '#d9d9d9'
        else button.style.background = '#252525'
    })
})

toolSelected.forEach((tool) => {
    tool.addEventListener('click', () => {
        if(tool.classList.contains('selected')) return;

        if(tool.classList.contains('brush-tool')){
            toolSelected[1].classList.remove('selected')
            tool.classList.add('selected')
        } else {
            toolSelected[0].classList.remove('selected')
            tool.classList.add('selected')
        }
        
    })
})
