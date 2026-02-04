window.onload = setup;
function setup() {
    console.log("events")

    //for mouse click event


    /* let introSection = document.querySelector("#intro");
 
     //addEventListener is being called on an element from introsection
     //first argument("click",function(e)) click is the event
     //the section is the callback function
     introSection.addEventListener("click", function (e) {
         console.log(this);
         console.log(e)
         //to modify the intro element within the callback we use this 
         //this.style.background = `rgba(214, 110, 239, 0.5)`
         //document.querySelector(`#${this.id}p`).style.background = `rgba(214, 110, 239 ,.75)`;
 
         //to make the callback more dynamic
         //this.style.setProperty("opacity", "0.5");
         //or
         //this.style.opacity = 0.5;
         this.style.background == `rgba(214, 110, 239, 0.5)`;
         document.querySelector(`#${this.id} p`).classList.add("intro-section-p-active");
     });*/


    //to apply this on all sections
    let allSections = document.querySelectorAll(".mouseclick-active-section");
    //go throughe each section and apply the event listener
    for (let element of allSections) {
        console.log(element)
        //add click to each element
        element.addEventListener("click", function (e) {
            console.log(this);
            //check if element inactive
            if (this.getAttribute("custom-bool") === "inactive") {
                console.log("is inactive");
                console.log(this.id)

                // if inactive become active and add css
                //new access of(this)
                let class_to_add = `${this.id}-section-active`;
                this.classList.add(class_to_add)
                //nes access class of child
                let class_to_add_p = `${this.id}-section-p-active`;
                document.querySelector(`#${this.id} p`).classList.add(class_to_add_p)

            } else if (this.getAttribute("custom-bool") === "active") {
                console.log("is now active");
                //this.setAttribute("custom-bool", "inactive");
                let class_to_remove = `${this.id}-section-active`;
                this.classList.remove(class_to_remove);
                //new access class child
                let class_to_remove_p = `${this.id}-section-p-active`;
                document.querySelector(`#${this.id} p`).classList.remove(class_to_remove_p);
            }

        })


    }

    //button

    document.querySelector("#bubbleButton").addEventListener("click", function () {
        console.log("button clicked");
    })

    //button
    document.querySelector("#bubbleButton").addEventListener("click", function () {
        console.log("button clicked");
        //create new element
        let = bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.style.left = `${Math.random() * (window.innerWidth - 200)}px`;
        bubble.style.top = `${Math.random() * (window.innerHeight - 200)}px`;

        let r = Math.ceil(Math.random() * 255);
        let g = Math.ceil(Math.random() * 255);
        let b = Math.ceil(Math.random() * 255);

        bubble.style.background = `rgba(${r},${g},${b})`;
        document.getElementById("top-layer").appendChild(bubble)
    })


}
