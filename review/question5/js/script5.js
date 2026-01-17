

let counter = 0;

let square = {
    x: 30,
    y: 30,
    w: 25,
    h: 25,
    color: "orange"
}

let circle = {
    radius: 100,
    color: "white"
}

let ellipseAlpha;

function setup() {

    createCanvas(500, 500);

}

function draw() {
    background("black");
    diplaySquare();
    diplayCircle();

}

function diplaySquare() {

    push();
    noStroke();
    fill(square.color);
    rect(square.x, square.y, square.w, square.h, 5);
    pop();

}

function diplayCircle() {
    push();
    noStroke();
    fill(circle.color);

    ellipse(width / 2, height / 2, circle.radius, circle.radius);
    pop();
}
function checkCollision() {
    if (mouseX > square.x &&
        mouseX < square.x + square.w &&
        mouseY > square.y &&
        mouseY < square.y + square.h
    ) {
        counter++;
        console.log(counter);
    }
}
function mousePressed() {
    checkCollision();
}
















