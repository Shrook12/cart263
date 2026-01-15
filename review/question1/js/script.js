"use strict";

function setup() {
    console.log("go")
    createCanvas(500, 500);
}



function draw() {
    background(0);

    push();
    noStroke();
    fill(157, 0, 255);
    ellipse(10, 10, 20, 20);
    pop();

    push();
    noStroke();
    fill(160, 32, 240);
    ellipse(40, 40, 50, 50);
    pop();

    push();
    noStroke();
    fill(128, 0, 128);
    ellipse(100, 100, 90, 90);
    pop();
}