
class Nut {

    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.active = true;
        this.width = width;
        this.height = height;
        this.nutBody = document.createElement("div");

    }


    renderNut() {
        this.nutBody.classList.add("nut");
        this.nutBody.style.width = this.width + "px";
        this.nutBody.style.height = this.height + "px";
        this.nutBody.style.left = this.x + "px";
        this.nutBody.style.top = this.y + "px";
        this.nutBody.style.borderRadius = this.width + "px";

        //add to the DOM
        document.getElementsByClassName("grass")[0].appendChild(this.nutBody);

    }

}