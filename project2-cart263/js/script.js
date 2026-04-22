import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';

//gltf loader
const gltfLoader = new GLTFLoader();

//scene
const scene = new THREE.Scene()
//scene.add(new THREE.AxesHelper())
let models = [];
let started = false;


//add background
const loader = new THREE.CubeTextureLoader();
//add a background image for each faces
loader.setPath("./textures/");
loader.load([
    "spiral.jpg", "spiral.jpg",
    "spiral.jpg", "spiral.jpg",
    "spiral.jpg", "spiral.jpg"
], function (texture) {
    scene.background = texture;
})
//make the background blur
scene.backgroundBlurriness = 0.3;
scene.backgroundIntensity = 0.5;
scene.background = new THREE.Color(0x111111)

//add fog
scene.fog = new THREE.FogExp2(0x120021, 0.005);

//camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight)
scene.add(camera)
camera.position.set(0, 2, 3)
camera.layers.enable(0);

//access the canvas
const canvas = document.querySelector("canvas#three-ex")

//renderer to visualize in 3d
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})
renderer.setSize(window.innerWidth, window.innerHeight)

//to resize everything when the window is smaller or bigger
window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, innerHeight)
})

//light
const ambientLight = new THREE.AmbientLight()
scene.add(ambientLight)

ambientLight.color = new THREE.Color(0xffffff)
ambientLight.intensity = .5;
ambientLight.layers.enable(1);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2.0);
directionalLight.position.set(5, 10, 7);
scene.add(directionalLight);
directionalLight.layers.enable(1);
//add 3d text
//load font
const loaderfont = new FontLoader();
const font = await loaderfont.loadAsync('./fonts/creepster_regular.json');


const geometry1 = new TextGeometry('WELCOME TO', {
    font: font,
    size: 4,
    depth: 3

});

const material1 = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const mesh1 = new THREE.Mesh(geometry1, material1);
//text rotation because it was flipped
mesh1.rotation.y = Math.PI;
//text position
mesh1.position.y = 6;
mesh1.position.z = 40;
mesh1.position.x = 10;


const geometry2 = new TextGeometry('INFINITE MYSTERIES', {
    font: font,
    size: 4,
    depth: 3

});

const material2 = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const mesh2 = new THREE.Mesh(geometry2, material2);
//text rotation because it was flipped
mesh2.rotation.y = Math.PI;
//text position
mesh2.position.y = 2;
mesh2.position.z = 60;
mesh2.position.x = 10;

scene.add(mesh1, mesh2);


//models
let spaceship = null;
let monster = null;
let metal = null;
let tree = null;
let cube = null;
let spike = null;
let screw = null;
let chair = null;
let creature = null;

try {
    //loading models
    spaceship = await gltfLoader.loadAsync("./models/spaceship2.glb");

    metal = await gltfLoader.loadAsync("./models/metal.glb");
    tree = await gltfLoader.loadAsync("./models/tree.glb");
    monster = await gltfLoader.loadAsync("./models/monster1.glb");

    cube = await gltfLoader.loadAsync("./models/cube.glb");
    spike = await gltfLoader.loadAsync("./models/spike.glb");
    screw = await gltfLoader.loadAsync("./models/screw.glb");
    chair = await gltfLoader.loadAsync("./models/chair.glb");
    creature = await gltfLoader.loadAsync("./models/creature.glb");



    spaceship.scene.rotation.x = 0;
    spaceship.scene.rotation.y = Math.PI;
    scene.add(spaceship.scene);
    //to make camera look at the spaceship view
    camera.position.set(0, 2, 5);
    camera.lookAt(0, 0, 0);
    spaceship.scene.add(camera);


    //array of all the models
    models = [tree.scene, metal.scene, cube.scene, monster.scene, spike.scene, screw.scene, chair.scene, creature.scene]

    for (const model of models) {
        //to make the position at random places
        model.position.x = (Math.random() - 0.5) * 200;
        model.position.z = Math.random() * 400;

        //too see all the pieces in a model
        model.traverse(function (child) {
            //verify that the object is a mesh
            if (child.isMesh) {
                child.userData.parentModel = model;
                child.layers.enable(1);
            }
        });
        scene.add(model);

        //this is for text section
        const legend = {
            tree: { title: "THE ABNORMAL TREE", text: "This is an abnormal tree that grew up in another universe(it's what scientists believe). After the biggest failure ever of creating a machine to travel through different universes. Someone tried to travel with it, and we found this tree after, and the person never came back again. Many people believe that the person was actually transformed into this tree, and other believes that they changed places, he went to another universe, and the tree came here instead." },
            metal: { title: "THE HISTORIC SPACE METAL", text: "The Historic Space Metal was found floating around a forgotten planet. People say it comes from the very first spaceship ever made 100000 years ago by a lost civilization. The metal is so strong that nothing can break it. Sometimes the metal makes soft, musical sounds during storms. Some people think it might be haunted metal. Some people say it might also be haunted by a virus that would explain the shape and would explain why when something get close to it become sick immediately." },
            cube: { title: "THE FUTURE OF STM TRAIN", text: "With some advanced technologies in the year 20200, this is how the STM train will look like. The STM became like a cube, constantly moving and stopping at every station. There are places to sit everywhere in there. After a couple of years, they found it was dangerous, and people died, so they threw it in this place and become a historical object." },
            monster: { title: "ORBKIN CREATURE", text: "Nobody really knows where this creature came from, but explorers say it loves to eat ice cream and it has the capacity of doing complex gymnastics even if it has small arms and legs. When it's happy, it has the ability to spin around itself for 20 minutes." },
            spike: { title: "THE DANGEROUS CANDY", text: "In 19380, 1000 years ago, this candy was invented. I was a huge trend at this time, and it was called: The Venus Candy. Why, because it was invented in Venus at the north pole by an alien Mr.Cactus. He was a popular chef, and this was his most popular food. I was a trend for 5 years, but then everyone forgot about it as if it had never existed, and now 10 years later did not exist anymore. Even though it didn't really taste good, you would probably suffer from blood loss and a destroyed mouth after eating this. Millions of people just bought it for the trend and to be popular on social media." },
            screw: { title: "SCREW FOR INVISIBLE WALLS", text: "In 19990, someone created an invisible wall. It was there but invisible. It was like magic. With some advanced scientific invisible chemical liquid, it would solidify after a couple of minutes. It was necessary to create a screw that would go with this. This screw is visible, but when put it on an invisible wall, it takes on the same properties as this wall and become invisible." },
            chair: { title: "THE MOST EXPENSIVE CHAIR", text: "In the year 19880, 500 years ago, this chair was a really popular chair. It was and still is seen as the most confortable chair ever and good for back posture. Made with high quality, it was sold with 2 000 000 000$ to Cantaloupe(a popular businessman)." },
            creature: { title: "THE ALIEN PENGUIN", text: "This is named an alien penguin. It's an alien from Jupiter. It became sort of a legend used in stories after it disappearence because of alien pollution. " }

        }

        // connect text with the model
        tree.scene.userData.info = legend.tree;
        metal.scene.userData.info = legend.metal;
        cube.scene.userData.info = legend.cube;
        monster.scene.userData.info = legend.monster;
        spike.scene.userData.info = legend.spike;
        screw.scene.userData.info = legend.screw;
        chair.scene.userData.info = legend.chair;
        creature.scene.userData.info = legend.creature;
    }
    /*     metal.scene.position.z = (Math.random() - 0.5) * 100;
        metal.scene.position.x = (Math.random() - 0.5) * 100;
        scene.add(metal.scene);
    
    
        tree.scene.position.z = (Math.random() - 0.5) * 100;
        tree.scene.position.x = (Math.random() - 0.5) * 100;
        scene.add(tree.scene);
    
    
        cube.scene.position.z = (Math.random() - 0.5) * 100;
        cube.scene.position.x = (Math.random() - 0.5) * 100;
        scene.add(cube.scene);
    
        monster.scene.position.z = (Math.random() - 0.5) * 100;
        monster.scene.position.x = (Math.random() - 0.5) * 100;
        scene.add(monster.scene);
    
    
        spike.scene.position.z = (Math.random() - 0.5) * 100;
        spike.scene.position.x = (Math.random() - 0.5) * 100;
        scene.add(spike.scene);
    
        screw.scene.position.z = (Math.random() - 0.5) * 100;
        screw.scene.position.x = (Math.random() - 0.5) * 100;
        scene.add(screw.scene);
    
        chair.scene.position.z = (Math.random() - 0.5) * 100;
        chair.scene.position.x = (Math.random() - 0.5) * 100;
        scene.add(chair.scene);
    
    
        creature.scene.position.z = (Math.random() - 0.5) * 100;
        creature.scene.position.x = (Math.random() - 0.5) * 100;
        scene.add(creature.scene); */

} catch (error) {
    console.log(error.message)
}


//keys false, not clicked
const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false
}
//key event
/**Arrow key up */
window.addEventListener("keydown", function (event) {
    //become true when pressed
    if (event.key === "ArrowUp") {
        keys.ArrowUp = true;
        //spaceship.scene.position.z -= 10;
    }
});

//become false when it's not clicked anymore
window.addEventListener("keyup", function (event) {
    if (event.key === "ArrowUp") {
        keys.ArrowUp = false;
    }
})

/**Arrow key Down */
window.addEventListener("keydown", function (event) {
    //become true when pressed
    if (event.key === "ArrowDown") {
        keys.ArrowDown = true;

    }
});
//become false when it's not clicked anymore
window.addEventListener("keyup", function (event) {
    if (event.key === "ArrowDown") {
        keys.ArrowDown = false;
    }
})
/**Arrow key Right */
window.addEventListener("keydown", function (event) {
    //become true when pressed
    if (event.key === "ArrowRight") {
        keys.ArrowRight = true;

    }
});
//become false when it's not clicked anymore
window.addEventListener("keyup", function (event) {
    if (event.key === "ArrowRight") {
        keys.ArrowRight = false;
    }
})

/**Arrow key left */
window.addEventListener("keydown", function (event) {
    //become true when pressed
    if (event.key === "ArrowLeft") {
        keys.ArrowLeft = true;

    }
});
//become false when it's not clicked anymore
window.addEventListener("keyup", function (event) {
    if (event.key === "ArrowLeft") {
        keys.ArrowLeft = false;
    }
})
/** Press on "s" to start */
window.addEventListener("keydown", function (event) {
    if (event.key === "s") {
        started = true;
        document.getElementById("instructions").style.display = "none";
    }
})

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

//Mouse positions
window.addEventListener("mousemove", function (event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
})


/**Mini canvas */
const miniCanvas = document.getElementById('object');
//renderer
const miniRenderer = new THREE.WebGLRenderer({
    canvas: miniCanvas

});
miniRenderer.setSize(200, 200);

//scene
const miniScene = new THREE.Scene();
miniScene.background = new THREE.Color(0x000000);
//camera
const miniCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
miniCamera.position.z = 5;
miniCamera.layers.set(1);
miniRenderer.render(scene, miniCamera);

//light
const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(1, 1, 2);
miniScene.add(light, new THREE.AmbientLight(0xffffff, 0.5));

//controls
const controls = new OrbitControls(miniCamera, miniCanvas);
controls.enableDamping = true;

//when clicked
window.addEventListener("click", function () {

    const intersects = raycaster.intersectObjects(models, true);

    //panel from html
    let panel = document.getElementById("panel");

    //verifiy if it's touching a model
    if (intersects.length > 0) {
        const target = intersects[0].object.userData.parentModel;

        if (target) {
            const offset = new THREE.Vector3(0, 0, 5);
            miniCamera.position.copy(target.position).add(offset);

            controls.target.copy(target.position);
            controls.update();
            // openPanel(target);
            //get the text depending on the target
            document.getElementById("panel-title").innerText = target.userData.info.title;
            document.getElementById("description").innerText = target.userData.info.text;
            //display panel
            panel.style.display = "block";




        }
    }
})

const clock = new THREE.Clock();

//animation
window.requestAnimationFrame(animate);

function animate() {
    // if started equal true then make the animation work
    if (started) {
        //animation for the models
        if (panel.style.display !== "block") {
            for (const model of models) {
                model.rotation.y += 0.01
                model.position.x += Math.sin(clock.getElapsedTime()) * 0.1;
                model.position.z += Math.sin(clock.getElapsedTime()) * 0.05 + 0.05;
            }
        }
        // controls.update();
        //make the spaceship move depending on the arrow clicked
        if (keys.ArrowUp === true) {
            spaceship.scene.position.z += 1;
        }
        if (keys.ArrowDown === true) {
            spaceship.scene.position.z -= 1;
        }
        if (keys.ArrowRight === true) {
            spaceship.scene.position.x -= 1;
        }
        if (keys.ArrowLeft === true) {
            spaceship.scene.position.x += 1;
        }

        raycaster.setFromCamera(mouse, camera);

        for (let i = 0; i < models.length; i++) {
            models[i].scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
            models[i].traverse(function (node) {
                if (node.isMesh) {
                    node.material.emissive.setHex(0x000000);
                }
            });
        }

        //verify if the mouse is touching a model
        const intersects = raycaster.intersectObjects(models, true)
        //if it's touching
        if (intersects.length > 0) {
            const target = intersects[0].object.userData.parentModel;

            if (target) {
                //make it bigger
                target.scale.lerp(new THREE.Vector3(2, 2, 2), 0.1);

                target.traverse(function (node) {
                    if (node.isMesh) {
                        //add like a transparent white to the object
                        node.material.emissive.setHex(0x444444);
                    }
                })
            }
        }

    }

    renderer.render(scene, camera);

    if (panel.style.display === "block") {
        miniRenderer.render(scene, miniCamera);
    }
    window.requestAnimationFrame(animate);
}

/* function openPanel(model) {
    const geometry = new THREE.BoxGeometry(2, 1, 0.1);
    const material = new THREE.MeshStandardMaterial({
        color: 0x333333
    });
    const panel = new THREE.Mesh(geometry, material);

    panel.position.set();
    scene.add(panel);
} */