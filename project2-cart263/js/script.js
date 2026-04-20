import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"
//import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';


//gltf loader
const gltfLoader = new GLTFLoader();

//scene
const scene = new THREE.Scene()
scene.add(new THREE.AxesHelper())
let models = [];
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
//const controls = new OrbitControls(camera, canvas)

//light
const ambientLight = new THREE.AmbientLight()
scene.add(ambientLight)

ambientLight.color = new THREE.Color(0xff0000)
ambientLight.intensity = .5;


/* const geometry = new TextGeometry('Hello three.js!', {
    size: 80,
    depth: 5,
    curveSegments: 12
});

const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh); */


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



    models = [tree.scene, metal.scene, cube.scene, monster.scene, spike.scene, screw.scene, chair.scene, creature.scene]

    for (const model of models) {
        model.position.x = (Math.random() - 0.5) * 100;
        model.position.z = (Math.random() - 0.5) * 100;

        model.traverse(function (child) {
            //verify that the object is a mesh
            if (child.isMesh) {
                child.userData.parentModel = model;
            }
        });
        scene.add(model);

        const legend = {
            tree: { title: "THE ABNORMAL TREE", text: "This is an abnormal tree that grew up in another universe(it's what scientists believe). After the biggest failure ever of creating a machine to travel through different universes. Someone tried to travel with it and we found this tree after and the person never came back again. Many people believe that the personne was actually transformed into this tree and other believes that they changed place he went to another universe and the tree came here instead " },
            metal: { title: "THE HISTORIC METAL", text: "" },
            cube: { title: "", text: "" },
            monster: { title: "", text: "" },
            spike: { title: "THE DELICIOUS CANDY", text: "In 19380, 1000 years ago, was invented this candy. I was a huge trend at this time and it was called: The Venus Candy. Why because it was invented in Venus in the north pole by an alien Mr.Cactus. He was a popular chef and this was his most popular food. I was a trend for 5 years but then everyone forgot about it as if it was never created and now 10 years later did not exist anymore. Even though it didn't really taste good and you would probably suffer of blood loss and a destroyed mouth after eating this. Millions of people just bought for trend and to be popular on social media." },
            screw: { title: "", text: "" },
            chair: { title: "THE MOST EXPENSIVE CHAIR", text: "In the year 19880, 500 years ago, this chair was a really popular chair. It was and still seen as the most confortable chair ever and good for back posture. Made with high quality it was sold with 2 000 000 000$ to Cantaloupe LeGrand." },
            creature: { title: "THE ALIEN PENGUIN", text: "This is named an alien penguin. It's an alien from Jupite. It became sort of a legend used in story after it disappearence because alien pollution. " }

        }

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



const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
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
window.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
        keys.ArrowRight = true;

    }
});

window.addEventListener("keyup", function (event) {
    if (event.key === "ArrowRight") {
        keys.ArrowRight = false;
    }
})
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();


window.addEventListener("mousemove", function (event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
})

window.addEventListener("click", function () {
    const intersects = raycaster.intersectObjects(models, true);

    let panel = document.getElementById("panel");

    if (intersects.length > 0) {
        const target = intersects[0].object.userData.parentModel;

        if (target) {
            // openPanel(target);
            document.getElementById("panel-title").innerText = target.userData.info.title;
            document.getElementById("description").innerText = target.userData.info.text;

            panel.style.display = "block";


        }
    }
})
//animation
window.requestAnimationFrame(animate);

function animate(timer) {
    // controls.update();
    if (keys.ArrowUp === true) {
        spaceship.scene.position.z += 1;
    }
    if (keys.ArrowDown === true) {
        spaceship.scene.position.z -= 1;
    }
    if (keys.ArrowRight === true) {
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

    const intersects = raycaster.intersectObjects(models, true)

    if (intersects.length > 0) {
        const target = intersects[0].object.userData.parentModel;

        if (target) {
            target.scale.lerp(new THREE.Vector3(1.5, 1.5, 1.5), 0.1);

            target.traverse(function (node) {
                if (node.isMesh) {
                    node.material.emissive.setHex(0x444444);
                }
            })
        }
    }


    renderer.render(scene, camera);
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