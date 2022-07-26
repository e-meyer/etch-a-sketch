let grid = document.querySelector('.grid')

/*
    >> FUNCTION START
        >> LOOP 16 TIMES TO MAKE A ROW
        >> BREAK LINE
        >> REPEAT UNTIL THERE'S 16 ROWS


*/

let gridMaker = () => {
    for(let i=0;i<16;i++){
        for(let j=0;j<16;j++){
            let newDiv = document.createElement('div')
            newDiv.style.border = '1px solid #d9d9d9'
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
        button.style.background = '#d9d9d9'
    })
})

squares.forEach((button) => {
    button.addEventListener('mousemove', () => {
        button.style.background = '#d9d9d9'
    })
})