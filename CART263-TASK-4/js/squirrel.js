class Squirrel {
    //create a new squirrel object that moves
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.vx = Math.random() * 5 + 1;
        this.vy = 0;
        this.squirrelBody = document.createElement("div");

    }
}