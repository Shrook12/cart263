import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"


//gltf loader
const gltfLoader = new GLTFLoader();

//scene
const scene = new THREE.Scene()
scene.add(new THREE.AxesHelper())

//add background
//I will change this in the future this is just to try
const loader = new THREE.CubeTextureLoader();
loader.setPath("./textures/");
loader.load([
    "spiral.jpg", "spiral.jpg",
    "spiral.jpg", "spiral.jpg",
    "spiral.jpg", "spiral.jpg"
], function (texture) {
    scene.background = texture;
})
scene.backgroundBlurriness = 0.3;
scene.backgroundIntensity = 0.5;
scene.background = new THREE.Color(0x111111)
//camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight)
scene.add(camera)
camera.position.set(0, 2, 3)

//access the canvas
const canvas = document.querySelector("canvas#three-ex")

//renderer to visualize in 3d
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})
renderer.setSize(window.innerWidth, window.innerHeight)

window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, innerHeight)
})

//controls
const controls = new OrbitControls(camera, canvas)

//light
const ambientLight = new THREE.AmbientLight()
scene.add(ambientLight)

ambientLight.color = new THREE.Color(0xff0000)
ambientLight.intensity = .5;

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
    camera.position.set(0, 2, 5);
    camera.lookAt(0, 0, 0);
    spaceship.scene.add(camera);

    const models = [tree.scene, metal.scene, cube.scene, monster.scene, spike.scene, screw.scene, chair.scene, creature.scene]

    for (const model of models) {
        model.position.x = (Math.random() - 0.5) * 100;
        model.position.z = (Math.random() - 0.5) * 100;
        scene.add(model);
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

const raycaster = new THREE.Raycaster()

const keys = {
    ArrowUp: false,
    ArrowDown: false
}
//key event
window.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
        keys.ArrowUp = true;
        //spaceship.scene.position.z -= 10;
    }
});

window.addEventListener("keyup", function (event) {
    if (event.key === "ArrowUp") {
        keys.ArrowUp = false;
    }
})

window.addEventListener("keydown", function (event) {
    if (event.key === "ArrowDown") {
        keys.ArrowDown = true;

    }
});

window.addEventListener("keyup", function (event) {
    if (event.key === "ArrowDown") {
        keys.ArrowDown = false;
    }
})

//animation
window.requestAnimationFrame(animate);

function animate(timer) {
    controls.update();
    if (keys.ArrowUp === true) {
        spaceship.scene.position.z += 1;
    }
    if (keys.ArrowDown === true) {
        spaceship.scene.position.z -= 1;
    }

    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
}