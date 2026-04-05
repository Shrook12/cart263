import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"


//gltf loader
const gltfLoader = new GLTFLoader();

//scene
const scene = new THREE.Scene()
scene.add(new THREE.AxesHelper())



//camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight)
scene.add(camera)
camera.position.set(0, 2, 3)

//access the canvas
const canvas = document.querySelector("canvas#three-ex")
//renderer to visualize in 3d
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(window.innerWidth, window.innerHeight)

window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, innerHeight)
})


const controls = new OrbitControls(camera, canvas)

const ambientLight = new THREE.AmbientLight()
scene.add(ambientLight)

ambientLight.color = new THREE.Color(0xff0000)
ambientLight.intensity = .5;


let spaceship = null;
let monster = null;
let metal = null;
let tree = null;

let cube = null;

try {
    spaceship = await gltfLoader.loadAsync("./models/spaceship2.glb");

    metal = await gltfLoader.loadAsync("./models/metal.glb");
    tree = await gltfLoader.loadAsync("./models/tree.glb");
    monster = await gltfLoader.loadAsync("./models/monster1.glb");

    cube = await gltfLoader.loadAsync("./models/cube.glb")
    scene.add(spaceship.scene);

    metal.scene.position.set(0, 0, -10)
    scene.add(metal.scene);
    tree.scene.position.set(0, 0, -5)
    tree.scene.scale.set(100, 100, 100);
    scene.add(tree.scene);


    cube.scene.position.set(0, 0, 0)
    scene.add(cube.scene);
    monster.scene.position.set(0, 0, -10)
    scene.add(monster.scene);

} catch (error) {
    console.log(error.message)
}

window.requestAnimationFrame(animate);

function animate(timer) {
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
}