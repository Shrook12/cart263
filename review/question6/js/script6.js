
let test = {
    string: "test",
    fill: "white",
    textSize: 28
}



function setup() {

    createCanvas(500, 700);

}

function draw() {
    background("black");
    displaynumber();
    displayTest();
}
function displayTest() {
    fill(test.fill);
    textSize(test.textSize);
    text(test.string, width / 2, height / 2);
}
function displaynumber() {
    let position = 40;
    for (let i = 0; i < 10; i++) {
        fill(test.fill);
        textSize(test.textSize);
        text(i, 20 + i * position, 40);
    }

    for (let j = 0; j < 15; j++) {
        fill(test.fill);
        textSize(test.textSize);
        text(j, 40, 70 + j * position);
    }
}





















