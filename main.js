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
camera.position.setZ(800);
camera.position.setY(350);
camera.position.setX(100);


renderer.render( scene, camera )
const moonTexture = new THREE.TextureLoader().load('images/moonmap.jpg');
const moonTexture2 = new THREE.TextureLoader().load('images/moon2.jpg');
const moonRocks = new THREE.TextureLoader().load('images/moonrocks.jpg.jpg.jpg')
const earthTexture = new THREE.TextureLoader().load('images/earthjan.jpg');
const earthSpec = new THREE.TextureLoader().load('images/earthspec.jpg');
const earthNight = new THREE.TextureLoader().load('images/earthnight.jpg');
const earthClouds = new THREE.TextureLoader().load('images/clouds.png');
const sunTexture = new THREE.TextureLoader().load('images/sun.jpg');
const sunTexture2 = new THREE.TextureLoader().load('/images/sun2.jpg');

const milkyWay = new THREE.TextureLoader().load('images/milkyway.jpg');
const mercuryTexture = new THREE.TextureLoader().load('images/mercury.jpg');
const venusTexture = new THREE.TextureLoader().load('images/jupiter.jpg');
const marsTexture = new THREE.TextureLoader().load('images/mars.jpg');
const saturnTexture = new THREE.TextureLoader().load('images/saturn.jpg');
const jupiterTexture = new THREE.TextureLoader().load('images/jupiter.jpg');
const uranusTexture = new THREE.TextureLoader().load('images/uranus.jpg');
const neptuneTexture = new THREE.TextureLoader().load('images/neptune.jpg');
const saturnRingTexture = new THREE.TextureLoader().load('images/saturn_ring.png');
const alpha = new THREE.TextureLoader().load('images/alpha.jpg');
const alpha2 = new THREE.TextureLoader().load('images/alpha2.jpg');
const alpha3 = new THREE.TextureLoader().load('images/alpha3.jpg');
scene.background = milkyWay;

const geometry = new THREE.SphereGeometry( 4, 60, 60 )
const material = new THREE.MeshStandardMaterial( { 
	map: moonTexture2, 
	bumpMap: moonRocks, 
	bumpScale: 0.30,
	sheen: 0.3,
	sheenRoughness: 0.75,
	clearcoat: 0.1, 
 });
const moon = new THREE.Mesh( geometry, material )
moon.position.setX(320)
moon.position.setY(20)
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
earth.position.setX(350)
scene.add(earth)

const geometry3 = new THREE.SphereGeometry( 400, 64, 32)
const material3 = new THREE.MeshStandardMaterial( { 
	map: sunTexture,
	bumpMap: sunTexture2,
	bumpScale: 0.05,
	sheen: 0.7,
	sheenRoughness: 0.75,
	clearcoat: 0.4, 
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
clouds.position.setX(350)
scene.add(clouds)


const geometry5 = new THREE.SphereGeometry( 10, 50, 50)
const material5 = new THREE.MeshStandardMaterial( { 
	map: mercuryTexture,
	sheen: 0.3,
	sheenRoughness: 0.75,
	clearcoat: 0.1, 
} );
const mercury = new THREE.Mesh( geometry5, material5 )
mercury.position.z = 150;
mercury.position.setX(-10)
scene.add(mercury)


const geometry6 = new THREE.SphereGeometry( 20, 50, 50)
const material6 = new THREE.MeshStandardMaterial( { 
	map: venusTexture,
	sheen: 0.3,
	sheenRoughness: 0.75,
	clearcoat: 0.1, 
} );
const venus = new THREE.Mesh( geometry6, material6 )
venus.position.z = 10;
venus.position.setX(150)
scene.add(venus)

const quaternion = new THREE.Quaternion();



const geometry7 = new THREE.SphereGeometry( 25, 50, 50)
const material7 = new THREE.MeshStandardMaterial( { 
	map: marsTexture,
	sheen: 0.3,
	sheenRoughness: 0.75,
	clearcoat: 0.1, 
} );
const mars = new THREE.Mesh( geometry7, material7 )
mars.position.z = 400;
mars.position.setX(500)
mars.applyQuaternion(quaternion)
quaternion.setFromAxisAngle( mars, Math.PI / 4 );

scene.add(mars)

const geometry8 = new THREE.SphereGeometry( 50, 50, 50)
const material8 = new THREE.MeshStandardMaterial( { 
	map: jupiterTexture,
	sheen: 0.3,
	sheenRoughness: 0.75,
	clearcoat: 0.1, 
} );
const jupiter = new THREE.Mesh( geometry8, material8)
jupiter.position.z = 500;
jupiter.position.setX(750)
scene.add(jupiter)

const geometry9 = new THREE.SphereGeometry( 30, 50, 50)
const material9 = new THREE.MeshStandardMaterial( { 
	map: saturnTexture,
	sheen: 0.3,
	sheenRoughness: 0.75,
	clearcoat: 0.1, 
} );
const saturn = new THREE.Mesh( geometry9, material9)
saturn.position.z = 300;
saturn.position.setX(1100)
scene.add(saturn)

const saturnRingGeometry = new THREE.RingGeometry( 60, 35, 38 );
const saturnRingMaterial = new THREE.MeshStandardMaterial( { 
	map: saturnTexture,
	sheen: 0.3,
	sheenRoughness: 0.75,
	clearcoat: 0.1, 
} );
saturnRingMaterial.opacity = 0.75,
saturnRingMaterial.transparent = true;
const saturnRing = new THREE.Mesh( saturnRingGeometry, saturnRingMaterial)
saturnRing.position.set(1100,0,300);
saturnRing.rotateX(90)

scene.add(saturnRing)

const geometry10 = new THREE.SphereGeometry( 15, 50, 50)
const material10 = new THREE.MeshStandardMaterial( { 
	map: uranusTexture,
	sheen: 0.3,
	sheenRoughness: 0.75,
	clearcoat: 0.1, 
} );
const uranus = new THREE.Mesh( geometry10, material10)
uranus.position.z = -400;
uranus.position.setX(1520)
scene.add(uranus)

const geometry11 = new THREE.SphereGeometry( 20, 50, 50)
const material11 = new THREE.MeshStandardMaterial( { 
	map: neptuneTexture,
	sheen: 0.3,
	sheenRoughness: 0.75,
	clearcoat: 0.1, 
} );
const neptune = new THREE.Mesh( geometry11, material11)
neptune.position.z = 30;
neptune.position.setX(1800)
scene.add(neptune)

const geometry12 = new THREE.SphereGeometry( 3000, 50, 50)
const material12 = new THREE.MeshStandardMaterial( { 
	color: 0x808080,
	sheen: 0.3,
	sheenRoughness: 0.75,
	clearcoat: 0.1,
	alphaTest: .4,
	alphaMap: alpha,
} );


const ort = new THREE.Mesh( geometry12, material12)
ort.position.z = 30;
ort.position.setX(500)
scene.add(ort)



// lighting
// const pointLight = new THREE.PointLight(0xFFFFFF)
// pointLight.position.set( 30,100,100 )

const ambientLight = new THREE.AmbientLightProbe(0xFFFFFF, 0.7);
ambientLight.position.set(-450, 100, 30)

const directionalLight = new THREE.DirectionalLight(0xFFFFFF, .2);
directionalLight.position.set(-400, 100, 0);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 400;
directionalLight.shadow.mapSize.height = 400;
directionalLight.shadow.camera.near = 100;
directionalLight.shadow.camera.far = 1000;
directionalLight.shadow.camera.left = -150;
directionalLight.shadow.camera.bottom = -100;
directionalLight.shadow.camera.top = 100;
directionalLight.shadow.camera.right = 100;

scene.add( directionalLight, ambientLight );

directionalLight.target = earth;
scene.add( directionalLight.target );

// // helpers
// const lightHelper = new THREE.PointLightHelper(pointLight)
// scene.add(lightHelper)

// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(gridHelper)

// const directionalHelper = new THREE.DirectionalLightHelper( directionalLight, 10 );
// scene.add( directionalHelper );

// orbit control
const controls = new OrbitControls(camera, renderer.domElement); 
			controls.target.set(-450, 0, 30);
      controls.dampingFactor = 0.15;
      controls.enableDamping = true;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;
function addStars() {
	const geometry = new THREE.SphereGeometry(0.25, 24, 24);
	const material = new THREE.MeshStandardMaterial( {color: 0xFFFFFF} )
	const star = new THREE.Mesh( geometry, material );

	const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(3000) );
	const [x2,y2,z2] = Array(3).fill().map(() => THREE.MathUtils.randInt(-1000,3000) );


	star.position.set(x2, y2, z2)
	scene.add(star)

}

Array(3000).fill().forEach(addStars)



// textures
// const bgTexture = new THREE.TextureLoader().load('space.jpg');
// scene.background(bgTexture)

// recursion to repeat animation and register changes between frames
function animate() {
	requestAnimationFrame( animate );
	
	moon.rotation.x += 0.0001;
	moon.rotation.y += 0.0005;
	moon.rotation.z += 0.001;
	earth.rotation.x += 0.000005;
	earth.rotation.y += 0.0001;
	earth.rotation.z += 0.00001;
	clouds.rotation.x += 0.0010
	clouds.rotation.y += 0.0001;
	sun.rotation.x = 0;
	sun.rotation.y = 0;
	sun.rotation.z = 0;
  venus.rotation.x += 0.000005;
	venus.rotation.y += 0.005;
	venus.rotation.z += 0.00001;
	mercury.rotation.x += 0.000005;
	mercury.rotation.y += 0.005;
	mercury.rotation.z += 0.00001;
	mars.translateX += 10;
	mars.translateZ += 30;
	saturn.rotation.x += 0.000005;
	saturn.rotation.y += 0.005;
	saturn.rotation.z += 0.00001;	
	neptune.rotation.z += 0.010
	saturnRing.rotation.z  += 0.005;
	saturn.rotation.y += 0.001;

	controls.update()
	renderer.render( scene, camera );
}
animate();