
function setup() {
    console.log("go")
    createCanvas(500, 500);

}

function draw() {

    drawRectangle(0, 0, width / 3, height, "blue");
    drawRectangle(width / 3, 0, width / 3, height, "red");
    drawRectangle(width / 1.5, 0, width / 3, height, "black");

}

function drawRectangle(x, y, w, h, color) {
    push();
    noStroke();
    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
        fill("white");
    } else {
        fill(color);
    }

    rect(x, y, w, h);
    pop();
}












/*function draw() {
    background(0);



    let startColor = color(173, 216, 230);
    let endColor = color(0, 0, 139)


    let x = 0;
    let xSize = 50;
    let rectheight = height / 3;
    let y = 0;

    for (let x = 0; x < width; x += rectheight) {
        let percent = x / width;
        let c = lerpColor(startColor, endColor, percent);
        fill(c);
        noStroke();
        rect(x, y, rectheight, width);
    }

    if (mouseX > x && mouseX < x + rectheight && mouseY > y && mouseY < y + width) {
        fill(0);
    }


}*/





