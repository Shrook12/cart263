
let rectSize = 40;

//rectangle1
let rect1X = 40;
let rect1Y = 40;
let rect1C = "blue";

//rectangle2
let rectangle2X = 60;
let rectangle2Y = 60;
let rectangle2C = "purple";


//rectangle3
let square3X = 100;
let square3Y = 100;
let square3C = "red";

function setup() {
    console.log("go")
    createCanvas(500, 500);
}

function draw() {
    background(0);
    drawRectangle(rect1X, rect1Y, rectSize, rectSize, rect1C);
    drawRectangle(rectangle2X, rectangle2Y, rectSize, rectSize, rectangle2C);
    drawRectangle(square3X, square3Y, rectSize, rectSize, square3C);
    moveRect();

}

function drawRectangle(x, y, w, h, color) {
    push();
    noStroke();
    fill(color);
    rect(x, y, w, h);
    pop();
}

function mousePressed() {
    rect1X = random(rectSize, width - rectSize);
    rect1Y = random(rectSize, height - rectSize);

}

function keyPressed() {
    if (keyCode === 32)
        rectangle2X += 3;
    rectangle2Y += 3;


}

function moveRect() {
    square3Y += 2;

    if (square3Y === 500) {
        square3Y = 0;
    }
}


