

let counter = 0;

let square = {
    x: 30,
    y: 30,
    w: 50,
    h: 50,
    color: "orange"
}
let square2 = {
    x: 100,
    y: 30,
    w: 50,
    h: 50,
    color: "orange"
}
let circle = {
    radius: 100,
    color: "white"
}

let ellipseAlpha = false;

function setup() {

    createCanvas(500, 500);

}

function draw() {
    background("black");
    displaySquare();
    displaySquare2();


    let x = 0;
    let size = 100;
    let ellipseAlpha = 20;
    while (x < counter) {
        fill(255, 255, 255, ellipseAlpha);
        noStroke();
        ellipse(width / 2, height / 2, size, size);
        size += 100;
        ellipseAlpha + 25;
        x++;
    }


}

function displaySquare() {

    push();
    noStroke();
    fill(square.color);
    rect(square.x, square.y, square.w, square.h, 5);
    pop();

}


function displaySquare2() {

    push();
    noStroke();
    fill(square.color);
    rect(square.x, square.y, square.w, square.h, 5);
    pop();

}
function displayCircle() {
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
        if (counter < 10) {
            counter++;
        }

        console.log(counter);
    }
}

function mousePressed() {
    checkCollision();
}
















