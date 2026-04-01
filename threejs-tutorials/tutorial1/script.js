// library ref: because we are loading a module
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const scene = new THREE.Scene()
scene.add(new THREE.GridHelper())

//scene color
scene.background = new THREE.Color("skyblue")

///// it's possible to add a background image
//scene.background = new Three.TextureLoader().load("")

/////it's also possible to make the background be profound and add images to it
//scene.background = new THREE.CubeTextureLoader()
//.setPath("")
//.load("image1","image2","image3","image4","image5","image6")

/////can also make
//scene.backgroundBlurriness=0.5

/////CAN ALSO HAVE MULTIPLE SCENES: SCENEA, SCENEB, SCENEC

//camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight)
scene.add(camera)
//move camera
//camera.position.z = 1.5
camera.position.set(0, 2, 3)


//access the canvas
const canvas = document.querySelector("canvas#three-ex")
//renderer to visualize in 3d
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(window.innerWidth, window.innerHeight)

//a resize event every time the window is resized
window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    //if ondemand rendering this will help to have it also here
    // renderer.render(scene, camera)
})
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshNormalMaterial({
    wireframe: true
})

//give the ability to see shape from differemt view by moving the mouse
const controls = new OrbitControls(camera, canvas)

//this is on demand rendering instead of rendering every frame
/* controls.addEventListener("change", function () {
    renderer.render(scene, camera)
}) */

const cube = new THREE.Mesh(geometry, material)
cube.position.y = 1
cube.rotation.x = 45
//cube.scale.y = 1.5
cube.scale.set(0.1, 2, 3)
scene.add(cube)

//const clock = new THREE.Clock()
//let delta
function animate() {
    requestAnimationFrame(animate)

    delta = clock.getDelta(

    )
    // cube.rotation.x += 2 * delta
    //cube.rotation.y += 2 * delta

    controls.update()
    camera.lookAt(0, 0.5, 0)

    renderer.render(scene, camera)
}

animate() 
