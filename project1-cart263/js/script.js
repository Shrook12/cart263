window.onload = function () {
    console.log("let's gooo!!!");

    let canvas = document.getElementById("drawingCanvas");
    let context = canvas.getContext("2d");
    let buttonPencil = document.getElementById("drawPencil");
    let buttonErase = document.getElementById("eraser");
    let buttonPen = document.getElementById("pen");
    let buttonBrush = document.getElementById("brush");
    let colorChange = document.getElementById("colorChange");
    let buttonClear = document.getElementById("clear");
    let buttonUndo = document.getElementById("undo");
    let buttonRedo = document.getElementById("redo");
    let sizeChange = document.getElementById("slider");
    let drawImg = new Image();

    let undo = [];
    let index = -1;
    let history = 20;

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
    buttonBrush.addEventListener("click", function () {
        state = "brush";
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
        context.strokeStyle = colorChange.value;

        /*  context.lineWidth = 4;
         context.lineCap = "round";
         context.background = "black"; */
        if (state === "eraser") {
            context.globalCompositeOperation = "destination-out";
            context.lineWidth = slider.value;
        } else if (state === "pen") {

            context.lineWidth = slider.value;
        } else if (state === "brush") {

            context.lineWidth = slider.value;
        } else if (state === "pencil") {
            context.lineWidth = slider.value;
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

    let handleDragging = function (event) {
        let targetId = event.target.closest('[draggable="true"]').id;
        event.dataTransfer.setData("objDraggedID", targetId);
        // event.dataTransfer.clearData();
        //event.dataTransfer.setData("objDraggedID", event.target.id);

    };
    window.addEventListener("dragstart", handleDragging);

    //to drag
    let handleDraggingStop = function (event) {

    }
    window.addEventListener("dragend", handleDraggingStop);

    let handleDrop = function (event) {
        event.preventDefault();

        if (event.target.id === "drawingCanvas") {

            let draggedId = event.dataTransfer.getData("objDraggedID")
            let draggedDiv = document.getElementById(draggedId);

            let img = draggedDiv.querySelector("img");

            if (img) {
                let rect = canvas.getBoundingClientRect();
                let x = event.clientX - rect.left;
                let y = event.clientY - rect.top;

                context.globalCompositeOperation = "source-over";
                context.drawImage(img, x, y, 100, 100);

                context.beginPath();
            }

        }
    }
    window.addEventListener("drop", handleDrop);

    window.addEventListener("dragover", function (event) {
        event.preventDefault();
    })

    buttonClear.addEventListener("click", function () {

        drawImg.src = canvas.toDataURL();

        let y = 0;

        function animate() {
            //this is to earse pixels within the canvas
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(drawImg, 0, y);
            y += 5;

            if (y <= canvas.height) {
                requestAnimationFrame(animate);
            }
        }
        requestAnimationFrame(animate);
    })


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