
let color = "blue"



function setup() {

    createCanvas(500, 500);

}

function draw() {
    background("black");
    drawgrid();
}

function drawgrid() {

    for (let x = 0; x < 550; x += 50) {
        for (let y = 0; y < 550; y += 50) {
            fill(color);
            noStroke();
            ellipse(x, y, 50, 50);
        }

    }
}

color = "blue";
function keyPressed() {
    if (keyCode === 32) {
        let changeColor = color(random(255), random(255), random(255));
        let color = changeColor;
    }
}




















