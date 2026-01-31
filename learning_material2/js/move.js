window.onload = function () {
    console.log("move")

    this.document.querySelector("#draw-box-a").
        addEventListener("mousemove", mouseMoveFunction);

    let pointDiv = this.document.createElement("div");
    pointDiv.classList.add("point");
    document.querySelector("#draw-box-a").appendChild(pointDiv)


    let rect = document.querySelector("#draw-box-a").getBoundingClientRect();
    console.log(document.querySelector("#draw-box-a").getBoundingClientRect().y)

    function mouseMoveFunction(eventObj) {
        console.log("moving");
        console.log(eventObj)
        this.innerHTML = `x:${eventObj.clientX},y:${eventObj.clientY}`;




        //DIFFERENCE TO ENSURE COORDS ARE RELATIVE
        let offsetX = eventObj.clientX - rect.x;
        let offsetY = eventObj.clientY - rect.y;
        // this.innerHTML =

        //  `x: ${offsetX}, y:${offsetY}`;
        pointDiv.style.top = `${offsetY}px`;
        pointDiv.style.left = `${offsetX}px`
    }
}