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
    let saveImage = document.getElementById("save");
    let drawImg = new Image();

    let undo = [];
    let index = -1;
    let history = 20;

    let state = "pencil";
    let drawing = false;

    function colorCanvas() {
        context.fillStyle = "white";
        context.fillRect(0, 0, canvas.width, canvas.height);
    }
    colorCanvas();

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


        context.strokeStyle = colorChange.value;
        context.lineCap = "round";
        context.lineCap = "round";

        /*  context.lineWidth = 4;
         context.lineCap = "round";
         context.background = "black"; */
        if (state === "eraser") {
            context.globalCompositeOperation = "destination-out";
            context.lineWidth = slider.value;
            context.lineTo(x, y);
            context.stroke();
        } else if (state === "pen") {
            context.globalCompositeOperation = "source-over";
            context.lineWidth = slider.value;
            context.lineTo(x, y);
            context.stroke();
        } else if (state === "brush") {
            let radius = slider.value;

            context.globalCompositeOperation = "source-over";
            context.globalAlpha = 0.2;

            context.shadowColor = colorChange.value;
            context.fillStyle = colorChange.value;

            context.arc(x, y, radius, 0, Math.PI * 2);
            context.fill();
            context.globalAlpha = 1.0;
        } else if (state === "pencil") {

            context.globalCompositeOperation = "source-over";

            let density = slider.value / 0.5;
            for (let i = 0; i < density; ++i) {
                let offsetx = (Math.random() - 0.5) * slider.value;
                let offsety = (Math.random() - 0.5) * slider.value;
                context.fillStyle = colorChange.value + "80";
                context.fillRect(x + offsetx, y + offsety, 1, 1);
            }


        }


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

    let arrow = document.getElementById("arrow");
    let box = document.getElementById("challenge");

    arrow.addEventListener("click", function () {
        box.classList.toggle("collapsed");

        if (box.classList.contains("collapsed")) {
            arrow.innerText = "▲";
        } else {
            arrow.innerText = "▼";
        }
    })

    let challenges = [
        "Draw a dragon cat using only the color blue",
        "Today use only red",
        "Draw an imaginary city that is inversed",
        "Draw a weird face"
    ]
    function randomChallenge() {
        let text = document.getElementById("random-challenge");
        let randomIndex = Math.floor(Math.random() * challenges.length);

        text.innerText = challenges[randomIndex];
    }
    randomChallenge();

    saveImage.addEventListener("click", function () {


        let link = document.createElement("a");
        link.download = "drawing.png";
        link.href = canvas.toDataURL();
        link.click();
    })

    let exercise = [{
        title: "The Giant Stretch",
        text: "Stand up, reach for the sky on your tiptoes, then slowly drop to touch your toes. ",
        img: "images/giantstretch.png"
    },
    /*     {
            title: "The Wood Chopper",
            text: " Clasp your hands over one shoulder, then swing them down toward your opposite hip, like you are chopping wood. ",
            img: "images/giantstretch.png"
    
        }, */
    {
        title: "The Star Shape",
        text: "images/giantstretch.png"
    },
    {
        title: "The Invisible Ladder",
        text: "March in place while reaching up with your hands like you are climbing a tall ladder.  ",
        img: "images/giantstretch.png"
    },
    {
        title: "The Desk Plank",
        text: "Place your hands on your desk, step your feet back, and hold your body in a straight line. ",
        img: "images/giantstretch.png"
    }, {
        title: "Wall Push-Offs",
        text: "Stand 2 feet from a wall, lean in for a push-up, and push back firmly. ",
        img: "images/giantstretch.png"
    },
    {
        title: "Walk",
        text: "Walk to the nearest window and back for 5 minutes ",
        img: "images/pen.PNG"
    }];

    window.setInterval(addBreak, 60000);

    function addBreak() {

        let overlay = document.getElementById("overlap");
        let title = document.getElementById("title");
        let textMessage = document.getElementById("message-content");
        let imgEx = document.getElementById("exercise-img");


        let randomIndex = Math.floor(Math.random() * exercise.length);

        title.innerText = exercise[randomIndex].title;
        textMessage.innerText = exercise[randomIndex].text;
        imgEx.src = exercise[randomIndex].img;
        overlay.style.display = "flex";

        setTimeout(function () {
            overlay.style.display = "none";
        }, 2000);

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