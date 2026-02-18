class Animal {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.vx = 0;
        this.vy = 0;
        this.animalBody = document.createElement("div");
    }

    // Move the Animal according to its velocity
    move() {
        this.x += this.vx;
        this.y += this.vy;
        //update the actual div...
        this.animalBody.style.left = this.x + "px";
        this.animalBody.style.top = this.y + "px";
    }

    // Wrap the animal if it reaches the right edge
    wrap() {
        if (this.x > window.innerWidth) {
            this.x -= window.innerWidth;
        }
    }

    renderAnimal() {
        this.animalBody.classList.add("animal");
        this.animalBody.style.width = this.width + "px";
        this.animalBody.style.height = this.height + "px";
        this.animalBody.style.left = this.x + "px";
        this.animalBody.style.top = this.y + "px";
        this.animalBody.style.borderRadius = this.width + "px";
    }
}