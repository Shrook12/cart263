window.onload = function () {
    console.log("let's gooo!!!");

    let canvas = document.getElementById("drawingCanvas");
    let context = canvas.getContext("2d");
    let buttonPencil = document.getElementById("drawPencil");
    let buttonErase = document.getElementById("eraser");
    let drawing = false;
    let eraser = false;

    //mouse events
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);

    function draw(e) {
        if (!drawing) return;

        let rect = canvas.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        context.lineWidth = 4;
        context.lineCap = "round";
        context.strokeStyle = "purple";

        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
    }
    function startDrawing(e) {
        drawing = true;
        draw();
    }
    function stopDrawing(e) {
        drawing = false;
        context.beginPath();
    }


    /*  function drawPencil() {
 
     }
     function drawInk() {
 
     }
     function drawRectangle() {
 
     }
     function drawCircles() {
 
     }
 
     function textures() {
 
     } */

}