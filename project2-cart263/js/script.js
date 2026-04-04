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


let spaceship = null;
try {
    spaceship = await gltfLoader.loadAsync("./models/spaceship2.glb");
    scene.add(spaceship.scene);
    console.log(spaceshipModel)
} catch (error) {
    console.log(error.message)
}

window.requestAnimationFrame(animate);

function animate(timer) {
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
}