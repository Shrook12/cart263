window.onload = function () {
    console.log("keys");

    let speedX = 50;

    //keydown
    window.addEventListener("keydown", function (event) {
        console.log(event);

        //to output the key pressed
        document.querySelector("#textContainer").textContent += `${event.key}`;
        document.querySelector("#textContainer").textContent += `${event.code}`;

        if (event.key === "ArrowRight") {
            document.getElementById("boxA").style.left =
                //parseInt looks for whole numbers
                parseInt(document.getElementById("boxA").style.left) + speedX + "px";

        } else if (event.key === "ArrowLeft") {
            document.getElementById("boxA").style.left =
                parseInt(document.getElementById("boxA").style.left) - speedX + "px";
        }
        //else if (event.code === "Space") {
        // document.getElementById("boxB").style.background = "orange";

        //}
        else if (event.code === "Space") {
            //access custom-bool
            let bool = document.getElementById("boxB").getAttribute("custom-bool");
            //condition
            if (bool === "off") {
                //make it orange
                document.getElementById("boxB").style.background = "orange";
                document.getElementById("boxB").setAttribute("custom-bool", "on");
            } else {
                //make it blue
                document.getElementById("boxB").style.background = "rgb(112,184,226)";
                document.getElementById("boxB").setAttribute("custom-bool", "off");
            }

        }
        else if (event.key === "Shift") {
            document.getElementById("boxA").style.background = "rgb(226,112,177)";

        }


    });
    //cool so this is to make the color go back when the button in not pressed
    window.addEventListener("keyup", function (event) {
        console.log("keyup");
        //change color when space is down
        if (event.key === "Shift") {
            document.getElementById("boxA").style.background = "rgb(112,184,226)";

        }
        else {
            console.log(`key up not shift:`);
            console.log(event);
        }
    })

}

