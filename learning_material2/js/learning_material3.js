window.onload = setup;
function setup() {

    console.log("drag ex");

    let handleDragging = function (event) {

        console.log("on drag")
        //here event target refers to the object being dragged
        console.log(event.target.id);

        //clear the drag data cache
        event.dataTransfer.clearData();
        //dataTransfer.setData()method sets the data type and the value of the dragged data
        event.dataTransfer.setData("objDraggedID", event.target.id);
    };
    window.addEventListener("dragstart", handleDragging);

    //to drag box
    let handleDraggingStop = function (event) {
        console.log("on stop")
        //HERE :: the event target refers to the object being dragged...
        console.log(event.target.id);
        // HERE - this refers to the window
        console.log(this);

    }
    window.addEventListener("dragend", handleDraggingStop);

    /////to handle dropping
    let handleDrop = function (event) {
        event.preventDefault();
        console.log("dropped");
        console.log(event);
        if (event.target.id === "dropTarget") {
            let theObj = event.dataTransfer.getData("objDraggedID");
            console.log(theObj);
            //event.target is the div we have dropped into...
            //and so move it there
            event.target.appendChild(document.getElementById(theObj))
        }
    }
    window.addEventListener("drop", handleDrop);

    //by default, data/elements cannot be dropped
    //to allow a drop, we must prevent default handling
    window.addEventListener("dragover", function (event) {
        console.log("over");
        event.preventDefault();

    })

}
