
let circleColor = "blue";
let circleSquare = 150;



function setup() {

    createCanvas(500, 500);

}

function draw() {
    background("black");
    drawgrid();
}

function drawgrid() {

    for (let x = 0; x < 550; x += 52) {
        for (let y = 0; y < 550; y += 52) {
            fill(circleColor);
            noStroke();
            rect(x, y, 50, 50, circleSquare);
        }

    }
}


function keyPressed() {
    if (keyCode === 32) {
        circleColor = color(random(255), random(255), random(255));

    }
}
function mousePressed() {
    if (circleSquare === 150) {
        circleSquare = 0;
    } else
        if (circleSquare === 0) {
            circleSquare = 150;
        }
}






















