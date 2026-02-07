window.onload = function () {
    console.log("keys");

    window.setTimeout(function (e) {
        let parent = document.querySelector("#parent");
        parent.innerHTML += "New text"
    }, 5000)

    window.setInterval(function (e) {
        let parent = document.querySelector("#parent");
        parent.innerHTML += "New text for interval"
    }, 2000)



    window.addEventListener("keydown", keyHandler);
    window.addEventListener("keyup", keyHandlerUp);


    function keyHandlerUp(event) {
        if (event.code === "Space") {
            document.querySelector("#boxB").style.background = "blue";
        }
    }
    let speedX = 5;
    function keyHandler(event) {
        if (event.key === "ArrowRight") {
            document.querySelector("#boxA").style.left =
                parseInt(document.querySelector("#boxA").style.left) + speedX + "px";
        }
        if (event.key === "ArrowLeft") {
            document.querySelector("#boxA").style.left =
                parseInt(document.querySelector("#boxA").style.left) - speedX + "px";
        }
        if (event.code === "Space") {
            document.querySelector("#boxB").style.background = "orange";
        }
        else {
            console.log(event);
            // document.querySelector("#textContainer").textContent += event.key;
            document.querySelector("#textContainer").textContent += `${event.key}`;
        }
    }
}