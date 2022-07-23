// Box width
let bw = 500;
// Box height
let bh = 500;
// Padding
let p = 0;

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
function drawBoard(){
    for (let x = 0; x <= bw; x += 16) {
        context.moveTo(0.5 + x + p, p);
        context.lineTo(0.5 + x + p, bh + p);
    }

    for (let x = 0; x <= bh; x += 16) {
        context.moveTo(p, 0.5 + x + p);
        context.lineTo(bw + p, 0.5 + x + p);
    }
    context.strokeStyle = "#575757";
    context.stroke();
}

drawBoard();