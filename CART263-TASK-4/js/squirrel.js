
class Squirrel {

    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.vx = Math.random() * 5 + 1;
        this.vy = Math.random() * 5 + 1;
        this.squirrelBody = document.createElement("div");
        this.parent = document.querySelector(".grass");
    }

    /*     move() {
            this.x += this.vx;
            this.y += this.vy;
            //update the actual div...
            this.squirrelBody.style.left = this.x + "px";
            this.squirrelBody.style.top = this.y + "px";
        } */

    animateSquirrel(parent) {
        // Move position
        this.x += this.vx;
        this.y += this.vy;

        // Get parent bounds
        let bounds = this.parent.getBoundingClientRect();


        if (this.x + this.width > bounds.width) {
            this.x = bounds.width - this.width;
            this.vx *= -1;
        }


        if (this.x < 0) {
            this.x = 0;
            this.vx *= -1;
        }

        if (this.y + this.height > bounds.height) {
            this.y = bounds.height - this.height;
            this.vy *= -1;
        }


        if (this.y < 0) {
            this.y = 0;
            this.vy *= -1;
        }

        // Update actual div position
        this.squirrelBody.style.left = this.x + "px";
        this.squirrelBody.style.top = this.y + "px";
    }


    catchNut(nut) {
        if (!nut || nut.active === false) return false;

        let nutEl = nut.nutBody.getBoundingClientRect();
        let squirrelEl = this.squirrelBody.getBoundingClientRect();
        let d = distance(nutEl.x, nutEl.y, squirrelEl.x, squirrelEl.y)

        if (d < 50) {
            console.log("collision")

            return true;

        }
        return false;
    }


    wrap() {
        if (this.x > window.innerWidth) {
            this.x -= window.innerWidth;
        }
    }



    renderAnimal() {
        this.squirrelBody.classList.add("animal");
        this.squirrelBody.style.width = this.width + "px";
        this.squirrelBody.style.height = this.height + "px";
        this.squirrelBody.style.left = this.x + "px";
        this.squirrelBody.style.top = this.y + "px";
        this.squirrelBody.style.borderRadius = this.width + "px";
        this.squirrelBody.style.backgroundColor = `rgb(106, 90, 205)`;
        //add to the DOM
        document.getElementsByClassName("grass")[0].appendChild(this.squirrelBody);
    }
}

function distance(x0, y0, x1, y1) {
    return Math.hypot(x1 - x0, y1 - y0);
}