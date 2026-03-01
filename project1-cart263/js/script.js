window.onload = function () {
    console.log("let's gooo!!!");

    let canvas = document.getElementById("drawingCanvas");
    let context = canvas.getContext("2d");
    let buttonPencil = document.getElementById("drawPencil");
    let buttonErase = document.getElementById("eraser");
    let buttonPen = document.getElementById("pen");

    let state = "pencil";
    let drawing = false;

    buttonPencil.addEventListener("click", function () {
        state = "pencil";

    })
    buttonErase.addEventListener("click", function () {
        state = "eraser";
    })
    buttonPen.addEventListener("click", function () {
        state = "pen"
    })

    //mouse events
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);

    function draw(e) {
        if (!drawing) return;

        let rect = canvas.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        context.globalCompositeOperation = "source-over";
        context.strokeStyle = "black";

        /*  context.lineWidth = 4;
         context.lineCap = "round";
         context.background = "black"; */
        if (state === "eraser") {
            context.globalCompositeOperation = "destination-out";
            context.lineWidth = 20;
        } else if (state === "pen") {

            context.lineWidth = 8;
        } else {

            context.lineWidth = 4;
        }
        context.lineCap = "round";
        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
    }
    function startDrawing(e) {
        drawing = true;
        draw(e);
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