function setup() {
    console.log("go")
    createCanvas(500, 500);
}

function draw() {
    background(0);
    drawEllipse(10, 10, 20, 20, 157, 0, 255);
    drawEllipse(40, 40, 50, 50, 160, 32, 240);
    drawEllipse(100, 100, 90, 90, 128, 0, 128);

}

function drawEllipse(x, y, w, h, r, g, b) {
    push();
    noStroke();
    fill(r, g, b);
    ellipse(x, y, w, h);
    pop();
}

