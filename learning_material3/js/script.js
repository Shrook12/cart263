window.onload = function () {
    // Our garden
    let garden = {

        // An array to store the individual birds
        birds: [],
        // How many birds in the garden
        numBirds: 10,


        numDogs: 10,
        dogs: [],

        // An array to store the individual flowers
        flowers: [],
        // How many flowers in the garden
        numFlowers: 20,

        /*grass object */
        grass: {
            // The color of the grass (background)
            grassColor: {
                r: 120,
                g: 180,
                b: 120,
            },
            //the grass element
            grassDiv: document.createElement("div"),
        },

        /*sky object */
        sky: {
            // The color of the sky (background)
            skyColor: {
                r: 83,
                g: 154,
                b: 240,
            },
            //the sky element
            skyDiv: document.createElement("div"),
        },

        /*sun object */
        /*         sun: {
                    sunColor: {
                        r: 240,
                        g: 206,
                        b: 83,
                    }, */
        //the sun element
        // sunDiv: document.createElement("div"),
        //},

    };
    let sun = new Sun(10, 10, { r: 240, g: 206, b: 83 });
    function createAndRenderTheGarden() {
        /* note how we use dot notation....*/
        //sky
        garden.sky.skyDiv.classList.add("sky");
        garden.sky.skyDiv.style.background = `rgb(
        ${garden.sky.skyColor.r},
        ${garden.sky.skyColor.g},
        ${garden.sky.skyColor.b}
        )`;
        document.getElementsByTagName("main")[0].appendChild(garden.sky.skyDiv);

        //sun - IN the sky
        /*       garden.sun.sunDiv.classList.add("sun");
              garden.sun.sunDiv.style.background = `rgb(
              ${garden.sun.sunColor.r},
              ${garden.sun.sunColor.g},
              ${garden.sun.sunColor.b}
              )`; */
        //append to the SKY div
        // document.getElementsByClassName("sky")[0].appendChild(garden.sun.sunDiv);

        //grass
        garden.grass.grassDiv.classList.add("grass");
        garden.grass.grassDiv.style.background = `rgb(
        ${garden.grass.grassColor.r},
        ${garden.grass.grassColor.g},
        ${garden.grass.grassColor.b}
        )`;
        document.getElementsByTagName("main")[0].appendChild(garden.grass.grassDiv);
    }

    function createDogs() {
        // Create the correct number of dogs and put them in our array
        for (let i = 0; i < garden.numDogs; i++) {
            let x = Math.random() * window.innerWidth;
            let y = Math.random() * 100;
            let dog = new Dog(x, y, 15, 15);
            garden.dogs.push(dog);
        }

    }
    function createBirds() {
        //create some birds
        for (let i = 0; i < garden.numBirds; i++) {
            let x = Math.random() * window.innerWidth;
            let y = Math.random() * 100;
            let bird = new Bird(x, y, 15, 15);
            garden.birds.push(bird);
        }
    }
    function renderAnimals() {
        // Go through all the animals and move, wrap, and display them
        for (let i = 0; i < garden.dogs.length; i++) {
            let dog = garden.dogs[i];
            dog.renderAnimal();
        }

        // Go through all the birds and move, wrap, and display them
        for (let i = 0; i < garden.birds.length; i++) {
            let bird = garden.birds[i];
            bird.renderAnimal();
        }

    }
    function updateGarden() {
        // Go through all the animals and move, wrap, and display them
        for (let i = 0; i < garden.dogs.length; i++) {
            let dog = garden.dogs[i];
            dog.move();
            dog.wrap();

        }

        // Go through all the birds and move, wrap, and display them
        for (let i = 0; i < garden.birds.length; i++) {
            let bird = garden.birds[i];
            bird.move();
            bird.wrap();
        }
        // if the first dog is set to jump
        if (garden.dogs[0].isjumping === true) {
            console.log("jump")
            garden.dogs[0].updateJump()
            for (let k = 0; k < garden.birds.length; k++) {
                garden.dogs[0].catchBird(garden.birds[k])
            }
        }
        window.requestAnimationFrame(updateGarden)
    }
    /* render the sun, sky and grass*/
    createAndRenderTheGarden();
    createDogs();//make dog
    createBirds();//make birds
    renderAnimals();
    window.requestAnimationFrame(updateGarden);

    // let flower = new Flower();
    // flower.renderFlower(); */
    // let flower = createFlower();
    //    renderFlower(flower);

    /* for (let i = 0; i < garden.numFlowers; i++) {
        // Create variables for our arguments for clarity
        let x = Math.random() * (window.innerWidth - 100);
        let y = Math.random() * 120;
        let size = Math.random() * 30 + 50;
        let stemLength = Math.random() * 50 + 50;
        let petalColor = {
            r: parseInt(Math.random() * 155) + 100,
            g: parseInt(Math.random() * 155) + 100,
            b: parseInt(Math.random() * 155) + 100,
        };

        // Create a new flower using the arguments
        let flower = new Flower(x, y, size, stemLength, petalColor);
        // Add the flower to the array of flowers
        garden.flowers.push(flower);
    }
    for (let i = 0; i < garden.flowers.length; i++) {
        garden.flowers[i].renderFlower();
    } */
    sun.renderSun();
    window.addEventListener("keydown",
        function handleKeyDown(event) {
            // console.log(event.key)
            sun.handleKeyEvent(event);
        })


    // new jump on key press
    window.addEventListener("keydown", function (e) {
        //set up to allow got "0" to jump 
        if (e.code === "Space") {
            //prevent default behaviour of the space bar
            e.preventDefault()
            //check if the dog is already jumping
            if (garden.dogs[0].isjumping === false) {
                garden.dogs[0].jump()
            }

        }
    })
}

