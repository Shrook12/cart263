
window.onload = setup;
function setup() {
    console.log("events!")


    let introSection = document.querySelector("#intro");
    introSection.addEventListener("click", mouseClickCallback);

    let s1 = document.querySelector("#s1");
    s1.addEventListener("click", mouseClickCallback);

    let allSections = document.querySelectorAll(".mouseclick-active-section");
    for (let currentSection of allSections) {
        currentSection.addEventListener("click", mouseClickCallback);

    }
    function mouseClickCallback(eventObj) {
        //console.log("cliked");
        // console.log(this);
        console.log(eventObj)
        // this.style.background = "blue";
        let idOfThis = this.getAttribute("id")
        // console.log(document.querySelector("#" + idOfThis + "p"))
        //console.log(document.querySelector(`#${idOfThis}p`))
        if (this.getAttribute("custom-bool") === "inactive") {
            console.log("hello");
            let child = document.querySelector(`#${idOfThis} p`);
            let classToAdd = `${idOfThis}-section-active`
            this.classList.add(classToAdd);
            let classToAddP = `${idOfThis}-section-p-active`
            child.classList.add(classToAddP);
            console.log(this.getAttribute("custom-bool"));
            this.setAttribute("custom-bool", "active")

        }
        else {
            let child = document.querySelector(`#${idOfThis} p`);
            let classToAdd = `${idOfThis}-section-active`
            this.classList.add(classToAdd);
            let classToAddP = `${idOfThis}-section-p-active`
            child.classList.remove(classToAddP);
            this.setAttribute("custom-bool", "inactive")
        }
    }

    function mouseSecClickCallback() {
        console.log("s1 clicked");

    }
}

