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

    let history = [];
    let index = -1;


    let state = "pencil";
    let drawing = false;

    /* making background white so that when saving it will have a white background*/
    function colorCanvas() {
        context.fillStyle = "white";
        context.fillRect(0, 0, canvas.width, canvas.height);
    }
    colorCanvas();

    /**activate tool when click on it's button */
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

    /**function for draw event with the different condition for different tools. */
    function draw(e) {
        if (!drawing) return;

        //canva limit
        let rect = canvas.getBoundingClientRect();
        //mouse coordinates inside canvas
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;


        context.strokeStyle = colorChange.value;
        context.lineCap = "round";
        context.lineJoin = "round";

        /*  context.lineWidth = 4;
         context.lineCap = "round";
         context.background = "black"; */

        //if eraser tool is clicked
        if (state === "eraser") {
            //make the pixels transparent
            context.globalCompositeOperation = "destination-out";
            //line size
            context.lineWidth = slider.value;

            context.lineTo(x, y);
            context.stroke();

            //if dip pen clicked it will be this
        } else if (state === "pen") {

            context.globalCompositeOperation = "source-over";
            context.lineWidth = slider.value;
            context.lineTo(x, y);
            context.stroke();

            //if brush tool is clicked
        } else if (state === "brush") {

            let radius = slider.value;

            context.globalCompositeOperation = "source-over";
            //make the circles semi-transparent
            context.globalAlpha = 0.2;
            context.fillStyle = colorChange.value;
            context.arc(x, y, radius, 0, Math.PI * 2);
            context.fill();
            //make the opacity back to 100%
            context.globalAlpha = 1.0;

            //if pencil clicked
        } else if (state === "pencil") {

            context.globalCompositeOperation = "source-over";

            //the density the number of points
            let density = slider.value / 0.5;
            //creating multiple points at the same time
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
    /**start drawing function where drawing become true and call the draw function */
    function startDrawing(e) {
        drawing = true;
        draw(e);
    }
    /**here is when finshing drawing a line and drawing become false */
    function stopDrawing(e) {
        drawing = false;
        context.beginPath();
        save();


    }
    /**handle dragging event for the images/textures */
    let handleDragging = function (event) {
        //find closest element with draggable=true
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

        //verify that the drop is inside the canvas
        if (event.target.id === "drawingCanvas") {

            let draggedId = event.dataTransfer.getData("objDraggedID")
            let draggedDiv = document.getElementById(draggedId);

            let img = draggedDiv.querySelector("img");

            if (img) {
                let rect = canvas.getBoundingClientRect();
                let x = event.clientX - rect.left;
                let y = event.clientY - rect.top;

                //draw image on canvas with the size of 400x400
                context.globalCompositeOperation = "source-over";
                context.drawImage(img, x, y, 400, 400);

                context.beginPath();
            }

        }
    }
    window.addEventListener("drop", handleDrop);

    window.addEventListener("dragover", function (event) {
        event.preventDefault();
    })

    //eventlistner for button clear
    buttonClear.addEventListener("click", function () {

        drawImg.src = canvas.toDataURL();

        let y = 0;

        //make an animation on click where the drawing will fall
        function animate() {
            //this is to earse pixels within the canvas
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(drawImg, 0, y);
            //going down
            y += 5;


            if (y <= canvas.height) {
                requestAnimationFrame(animate);
            }
        }
        requestAnimationFrame(animate);
    })
    /**part for the challenge box */
    let arrow = document.getElementById("arrow");
    let box = document.getElementById("challenge");

    //when click on arrow either open or collapse
    arrow.addEventListener("click", function () {
        box.classList.toggle("collapsed");

        if (box.classList.contains("collapsed")) {
            arrow.innerText = "▲";
        } else {
            arrow.innerText = "▼";
        }
    })

    /*different challenge*/
    let challenges = [
        "Draw a dragon cat using only the color blue",
        "Today use only red",
        "Draw an imaginary city that is inversed",
        "Draw a weird face"
    ]
    /**to chose random challenge from the challenge array and display it  */
    function randomChallenge() {
        let text = document.getElementById("random-challenge");
        let randomIndex = Math.floor(Math.random() * challenges.length);

        text.innerText = challenges[randomIndex];
    }
    randomChallenge();

    /**to save and download the image on save button */
    saveImage.addEventListener("click", function () {

        //create a link
        let link = document.createElement("a");
        //name for the downloaded image
        link.download = "drawing.png";
        link.href = canvas.toDataURL();
        link.click();
    })

    /** different break exercice */
    let exercise = [{
        title: "The Giant Stretch",
        text: "Stand up, reach for the sky on your tiptoes, then slowly drop to touch your toes. ",
        img: "images/giantstretch.png"
    },
    {
        title: "The Star Shape",
        text: "Jump from a squat make an X shape in the air, and land.",
        img: "images/starjump.png"
    },
    {
        title: "The Desk Plank",
        text: "Place your hands on your desk, step your feet back, and hold your body in a straight line. ",
        img: "images/plank.png"
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

    //I added a 1 minute drawing and one minutre break just for the trying but it's
    //supposed to be 25 minute drawing and 5 minutes break
    window.setInterval(addBreak, 60000);

    function addBreak() {

        let overlay = document.getElementById("overlap");
        let title = document.getElementById("title");
        let textMessage = document.getElementById("message-content");
        let imgEx = document.getElementById("exercise-img");

        //choose random index from the array
        let randomIndex = Math.floor(Math.random() * exercise.length);


        title.innerText = exercise[randomIndex].title;
        textMessage.innerText = exercise[randomIndex].text;
        imgEx.src = exercise[randomIndex].img;

        overlay.style.display = "flex";

        setTimeout(function () {
            overlay.style.display = "none";
        }, 60000);

    }

    /**save every steps */
    function save() {
        if (index < history.length - 1) {
            history = history.slice(0, index + 1);
        }
        history.push(canvas.toDataURL());
        index++;

    }
    /**when clicked on the undo button  */
    buttonUndo.addEventListener("click", function () {
        //if there something to undo
        if (index > 0) {
            //going back one step
            index--;
            render(history[index]);
        }
    });
    /**when clicked on the redo button */
    buttonRedo.addEventListener("click", function () {
        //if there is steps that have been undone
        if (index < history.length - 1) {
            //going to next step
            index++;
            render(history[index]);
        }
    });
    function render(action) {
        let drawImg = new Image();
        drawImg.src = action;
        drawImg.onload = function () {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(drawImg, 0, 0);
        }
    }
}