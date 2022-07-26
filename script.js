let grid = document.querySelector('.grid')

let gridMaker = () => {
    for(let i=0;i<16;i++){
        for(let j=0;j<16;j++){
            let newDiv = document.createElement('div')
            newDiv.style.padding = '16px'
            newDiv.classList.add('grid-square')
            grid.appendChild(newDiv)
        }
    }
}

gridMaker();
