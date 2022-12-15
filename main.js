import './style.css'

import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1, 10000 );

const renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector('#bg'),
})




renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);

renderer.render( scene, camera )
const moonTexture = new THREE.TextureLoader().load('/images/moonmap.jpg');
const moonTexture2 = new THREE.TextureLoader().load('/images/moon2.jpg');
const moonRocks = new THREE.TextureLoader().load('/images/moonrocks.jpg')
const earthTexture = new THREE.TextureLoader().load('/images/earthjan.jpg');
const earthSpec = new THREE.TextureLoader().load('/images/earthspec.jpg');
const earthNight = new THREE.TextureLoader().load('/images/earthnight.jpg');
const earthClouds = new THREE.TextureLoader().load('/images/clouds.png');
const sunTexture = new THREE.TextureLoader().load('/images/sun.jpg');
const milkyWay = new THREE.TextureLoader().load('/images/milkyway.jpg');
const jupiterTexture = new THREE.TextureLoader().load('/images/jupiter.jpg');

scene.background = milkyWay;

const geometry = new THREE.SphereGeometry( 5, 60, 60 )
const material = new THREE.MeshStandardMaterial( { 
	map: moonTexture2, 
	bumpMap: moonRocks, 
	bumpScale: 0.30,
	sheen: 0.3,
	sheenRoughness: 0.75,
	clearcoat: 0.1, 
 });
const moon = new THREE.Mesh( geometry, material )
moon.position.setX(245)
moon.position.setY(30)
scene.add(moon)

const geometry2 = new THREE.SphereGeometry( 25, 50, 50)
const material2 = new THREE.MeshStandardMaterial( { 
	map: earthTexture, 
	bumpMap: moonRocks,
	bumpScale: 0.05,
	sheen: 0.3,
	sheenRoughness: 0.75,
	clearcoat: 0.1, 
} );
const earth = new THREE.Mesh( geometry2, material2 )
earth.position.z = 30;
earth.position.setX(300)
scene.add(earth)

const geometry3 = new THREE.SphereGeometry( 100, 50, 50)
const material3 = new THREE.MeshStandardMaterial( { 
	map: sunTexture,
	sheen: 0.3,
	sheenRoughness: 0.75,
	clearcoat: 0.1, 
} );
const sun = new THREE.Mesh( geometry3, material3 )
sun.position.z = 30;
sun.position.setX(-450)
scene.add(sun)

const geometry4 = new THREE.SphereGeometry( 26, 55, 55)
const material4 = new THREE.MeshStandardMaterial( { 
	map: earthClouds,
	sheen: 0.3,
	sheenRoughness: 0.75,
	clearcoat: 0.1, 
	
});
material4.opacity = 0.65,
material4.transparent = true;
const clouds = new THREE.Mesh( geometry4, material4 )
clouds.position.z = 30;
clouds.position.setX(300)
scene.add(clouds)


// lighting
// const pointLight = new THREE.PointLight(0xFFFFFF)
// pointLight.position.set( 30,100,100 )

const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.7);
ambientLight.position.set(-500, 0, 30)

const directionalLight = new THREE.DirectionalLight(0xFFFFFF, .5);
directionalLight.position.set(-350, 0, 30);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 10000;
directionalLight.shadow.mapSize.height = 10000;
directionalLight.shadow.camera.near = 1000;
directionalLight.shadow.camera.far = 10000;
directionalLight.shadow.camera.left = -1050;
directionalLight.shadow.camera.bottom = -1000;
directionalLight.shadow.camera.top = 1000;
directionalLight.shadow.camera.right = 1000;

scene.add( directionalLight, ambientLight );

directionalLight.target = earth;
scene.add( directionalLight.target );

// // helpers
// const lightHelper = new THREE.PointLightHelper(pointLight)
// scene.add(lightHelper)

// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(gridHelper)

const directionalHelper = new THREE.DirectionalLightHelper( directionalLight, 10 );
scene.add( directionalHelper );

// orbit control
const controls = new OrbitControls(camera, renderer.domElement); 
			controls.target.set(-450, 0, 30);
      controls.dampingFactor = 0.15;
      controls.enableDamping = true;
      controls.autoRotate = true;
      controls.rotateSpeed = .1;
function addStars() {
	const geometry = new THREE.SphereGeometry(0.25, 24, 24);
	const material = new THREE.MeshStandardMaterial( {color: 0xFFFFFF} )
	const star = new THREE.Mesh( geometry, material );

	const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(1000) );

	star.position.set(x, y, z)
	scene.add(star)
}

Array(600).fill().forEach(addStars)



// textures
// const bgTexture = new THREE.TextureLoader().load('space.jpg');
// scene.background(bgTexture)

// recursion to repeat animation and register changes between frames
function animate() {
	requestAnimationFrame( animate );
	
	moon.rotation.x += 0.0001;
	moon.rotation.y += 0.0005;
	moon.rotation.z += 0.001;
	earth.rotation.x += 0.001;
	earth.rotation.y += 0.0010;
	clouds.rotation.x += 0.0015;
	clouds.rotation.y += 0.0012;
	sun.rotation.x = 0;
	sun.rotation.y = 0;
	sun.rotation.z = 0;

	controls.update()
	renderer.render( scene, camera );
}
animate();