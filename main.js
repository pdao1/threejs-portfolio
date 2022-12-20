import './style.css'

import * as THREE from 'three';
import { Spinner } from 'spin.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

var opts = {
  lines: 20, // The number of lines to draw
  length: 6, // The length of each line
  width: 5, // The line thickness
  radius: 39, // The radius of the inner circle
  scale: 1.6, // Scales overall size of the spinner
  corners: 0.4, // Corner roundness (0..1)
  speed: 0.6, // Rounds per second
  rotate: 37, // The rotation offset
  animation: 'spinner-line-shrink', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#f5ed00', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};
var target = document.getElementById('loading');
var spinner = new Spinner(opts).spin(target);


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1, 10000 );

const renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector('#bg'),
})




renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(400);
camera.position.setY(-100);
camera.position.setX(600);


renderer.render( scene, camera )
const loadingManager = new THREE.LoadingManager();
loadingManager.onLoad = function(){
	setTimeout(function(){
	$('#loading').hide();
	$('canvas').show();
	$('canvas').css('opacity', '.40')
	}, 1500)
	setTimeout(function(){
		$('canvas').css('opacity', '.50')
	}, 1750)
	setTimeout(function(){
		$('canvas').css('opacity', '.60')
	}, 2000)
	setTimeout(function(){
		$('canvas').css('opacity', '.70')
	}, 2250)
	setTimeout(function(){
		$('canvas').css('opacity', '.80')
	}, 2500)
	setTimeout(function(){
		$('canvas').css('opacity', '.90')
	}, 2500)
	setTimeout(function(){
		$('canvas').css('opacity', '1.0')
	}, 3000)


	$(document).ready(function(){
		setTimeout(function(){
		$('#typing, #typing2, #typing3').css('border-right', '.15em solid orange')

		typing();
		}, 5000)
		setTimeout(function(){
		typing2();
		$('#typing').hide();
		}, 10000)
		setTimeout(function(){
		typing3();
		$('#typing2').hide()
		}, 16500)
		setTimeout(function(){
		$('#typing3').hide()
		$('.words').hide()
		}, 22500)
	})
	
};


// setTimeout(function(){
// 	let doc = document.querySelector('.typewriter p');
// 	doc.style.animation = "typingBackwards 5s steps(30, end)"
// 	}, 10000)
// setTimeout(function(){
// 	let doc = document.querySelector('.typewriter p')
// 	doc.innerText = ""
// }, 20000)
// setTimeout(function(){
// 	let doc = document.querySelector('.typewriter p')
// 	doc.innerText = "Please enjoy the interactive solar system, built in Three.js"
// 	doc.style.animation = "typing 5s steps(30, end)"
// 	}, 25000)
// 	setTimeout(function(){
// 		let doc = document.querySelector('.typewriter p');
// 		doc.style.animation = "typingBackwards 5s steps(30, end)"
// 		}, 30000)
// 	setTimeout(function(){
// 		let doc = document.querySelector('.typewriter p')
// 		doc.innerText = ""
// 	}, 35000)
// 	setTimeout(function(){
// 		let doc = document.querySelector('.typewriter p')
// 		doc.innerText = "My main portfolio links are at the bottom. Thank you."
// 		doc.style.animation = "typing 5s steps(30, end)"
// 		}, 40000)
// 		setTimeout(function(){
// 			let doc = document.querySelector('.typewriter p');
// 			doc.style.animation = "typingBackwards 5s steps(30, end
// 				)"
// 			}, 50000)
// 		setTimeout(function(){
// 			let doc = document.querySelector('.typewriter p')
// 			doc.innerText = ""
// 		}, 55000)
// })

var i = 0;
var e = 0;
var a = 0; 
var txt = 'Hello! My name is Phung Dao. I am a Frontend Developer'
var txt2 = 'Presented is my interactive rendition of the inner & outer solar system, built in Three.js'
var txt3 = 'My full portfolio and additional information in the links below. Thank you!'
var speed = 50;

function typing() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typing, speed);
	} 
}
function typing2() {
  if (e < txt2.length) {
    document.getElementById("typing2").innerHTML += txt2.charAt(e);
    e++;
    setTimeout(typing2, speed);
	}
}
function typing3() {
  if (a < txt3.length) {
    document.getElementById("typing3").innerHTML += txt3.charAt(a);
    a++;
    setTimeout(typing3, speed);
	}
}





// LOADERS
const moonTexture = new THREE.TextureLoader(loadingManager).load('images/moonmap.jpg');
const moonTexture2 = new THREE.TextureLoader(loadingManager).load('images/moon2.jpg');
const moonRocks = new THREE.TextureLoader(loadingManager).load('images/moonrocks.jpg.jpg')
const earthTexture = new THREE.TextureLoader(loadingManager).load('images/8kearth.jpg');
const earthSpec = new THREE.TextureLoader(loadingManager).load('images/earthspec.jpg');
const earthNight = new THREE.TextureLoader(loadingManager).load('images/earthnight.jpg');
const earthClouds = new THREE.TextureLoader(loadingManager).load('images/clouds2.jpg');
const sunTexture = new THREE.TextureLoader(loadingManager).load('images/sun.jpg');
const sunTexture2 = new THREE.TextureLoader(loadingManager).load('/images/sun2.jpg');
const milkyWay = new THREE.TextureLoader(loadingManager).load('images/milkyway.jpg');
const mercuryTexture = new THREE.TextureLoader(loadingManager).load('images/mercury.jpg');
const venusTexture = new THREE.TextureLoader(loadingManager).load('images/venus.jpg');
const marsTexture = new THREE.TextureLoader(loadingManager).load('images/mars.jpg');
const saturnTexture = new THREE.TextureLoader(loadingManager).load('images/saturn.jpg');
const jupiterTexture = new THREE.TextureLoader(loadingManager).load('images/jupiter.jpg');
const uranusTexture = new THREE.TextureLoader(loadingManager).load('images/uranus.jpg');
const neptuneTexture = new THREE.TextureLoader(loadingManager).load('images/neptune.jpg');
const saturnRingTexture = new THREE.TextureLoader(loadingManager).load('images/saturn_ring.png');
const alpha = new THREE.TextureLoader(loadingManager).load('images/alpha.jpg');
const alpha2 = new THREE.TextureLoader(loadingManager).load('images/alpha2.jpg');
const alpha3 = new THREE.TextureLoader(loadingManager).load('images/alpha3.jpg');
const starfieldTexture = new THREE.TextureLoader(loadingManager).load("images/galaxy_starfield.png");

scene.background = milkyWay;

const geometry = new THREE.SphereGeometry( 4, 60, 60 )
const material = new THREE.MeshStandardMaterial( { 
	map: moonTexture2, 
	bumpMap: moonRocks, 
	bumpScale: 0.30,

 });
const moon = new THREE.Mesh( geometry, material )
moon.position.set(400, 20, 40)
scene.add(moon)


const geometry2 = new THREE.SphereGeometry( 25, 50, 50)
const material2 = new THREE.MeshStandardMaterial( { 
	map: earthTexture, 
	bumpMap: moonRocks,
	bumpScale: 0.05,
} );
const earth = new THREE.Mesh( geometry2, material2 )
earth.position.z = 30;
earth.position.setX(450)
scene.add(earth)


const geometry3 = new THREE.SphereGeometry( 400, 64, 32)
const material3 = new THREE.MeshStandardMaterial( { 
	map: sunTexture,
	bumpMap: sunTexture2,
	bumpScale: 0.05,
} );
const sun = new THREE.Mesh( geometry3, material3 )
sun.position.z = 30;
sun.position.setX(-450)
scene.add(sun)


const geometry4 = new THREE.SphereGeometry( 27, 64, 32)
const material4 = new THREE.MeshStandardMaterial( { 
	map: earthClouds,

	
});
material4.opacity = .80;
material4.transparent = true;
const clouds = new THREE.Mesh( geometry4, material4 )
clouds.position.z = 30;
clouds.position.setX(450)
scene.add(clouds)



const geometry5 = new THREE.SphereGeometry( 10, 50, 32)
const material5 = new THREE.MeshStandardMaterial( { 
	map: mercuryTexture,

} );
const mercury = new THREE.Mesh( geometry5, material5 )
mercury.position.z = -250;
mercury.position.setX(-250)
scene.add(mercury)



const geometry6 = new THREE.SphereGeometry( 20, 50, 50)
const material6 = new THREE.MeshStandardMaterial( { 
	map: venusTexture,

} );
const venus = new THREE.Mesh( geometry6, material6 )
venus.position.z = 10;
venus.position.setX(150)
scene.add(venus)

const quaternion = new THREE.Quaternion();


const geometry7 = new THREE.SphereGeometry( 25, 50, 50)
const material7 = new THREE.MeshStandardMaterial( { 
	map: marsTexture,

} );
const mars = new THREE.Mesh( geometry7, material7 )
mars.position.z = 400;
mars.position.setX(650)
mars.applyQuaternion(quaternion)
quaternion.setFromAxisAngle( mars, Math.PI / 4 );
scene.add(mars)



const geometry8 = new THREE.SphereGeometry( 50, 50, 50)
const material8 = new THREE.MeshStandardMaterial( { 
	map: jupiterTexture,

} );
const jupiter = new THREE.Mesh( geometry8, material8)
jupiter.position.z = 700;
jupiter.position.setX(900)
scene.add(jupiter)



const geometry9 = new THREE.SphereGeometry( 30, 50, 50)
const material9 = new THREE.MeshStandardMaterial( { 
	map: saturnTexture,

} );
const saturn = new THREE.Mesh( geometry9, material9)
saturn.position.z = 700;
saturn.position.setX(1200)
scene.add(saturn)


const saturnRingGeometry = new THREE.RingGeometry( 60, 35, 38 );
const saturnRingMaterial = new THREE.MeshStandardMaterial( { 
	map: saturnTexture,

} );
saturnRingMaterial.opacity = 0.75,
saturnRingMaterial.transparent = true;
const saturnRing = new THREE.Mesh( saturnRingGeometry, saturnRingMaterial)
saturnRing.position.set(1200,0,700);
saturnRing.rotateX(90)
scene.add(saturnRing)

const geometry10 = new THREE.SphereGeometry( 15, 50, 50)
const material10 = new THREE.MeshStandardMaterial( { 
	map: uranusTexture,

} );
const uranus = new THREE.Mesh( geometry10, material10)
uranus.position.z = 800;
uranus.position.setX(1620)
scene.add(uranus)


const geometry11 = new THREE.SphereGeometry( 20, 50, 50)
const material11 = new THREE.MeshStandardMaterial( { 
	map: neptuneTexture,

} );
const neptune = new THREE.Mesh( geometry11, material11)
neptune.position.z = 70;
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

var starGeometry = new THREE.SphereGeometry(2000, 50, 50);
var starMaterial = new THREE.MeshPhongMaterial({
  map: starfieldTexture,
  side: THREE.DoubleSide,
  shininess: 0
});
starMaterial.opacity = 0.7;
starMaterial.transparent = true; 
var starField = new THREE.Mesh(starGeometry, starMaterial);
scene.add(starField);



// lighting
// const pointLight = new THREE.PointLight(0xFFFFFF)
// pointLight.position.set( 30,100,100 )

const ambientLight = new THREE.AmbientLightProbe(0xFFFFFF, 0.7);
ambientLight.position.set(-450, 100, 30)

var focus = new THREE.Vector3(450,100,0);

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
			controls.target.set(350, -30, 50);
      controls.dampingFactor = 0.15;
      controls.enableDamping = true;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.1;

// to create shitload of stars			
function addStars() {
	const geometry = new THREE.SphereGeometry(0.25, 24, 24);
	const material = new THREE.MeshStandardMaterial( {color: 0xFFFFFF} )
	const star = new THREE.Mesh( geometry, material );

	const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(3000) );
	const [x2,y2,z2] = Array(3).fill().map(() => THREE.MathUtils.randInt(-1000,3000) );


	star.position.set(x2, y2, z2)
	scene.add(star)

}

Array(1000).fill().forEach(addStars)


let r = 1100;
let theta = 50;
let theta2 = 0;
let dTheta = 5 * Math.PI / 10000  * - 1
let dTheta2 = 15 * Math.PI / 10000  * - 1

// recursion to repeat animation and register changes between frames
function animate() {
	requestAnimationFrame( animate );
	const dx = 0.10;
	const dy = 0.30;  
	const dz =  0.3;

	theta += dTheta
	theta2 += dTheta2

	moon.rotation.x += 0.0001;
	moon.rotation.y += 0.0005;
	moon.rotation.z += 0.004;
	moon.position.x = 1230 * Math.cos(theta + 20)
	moon.position.z = 1230 * Math.sin(theta + 20) 


	earth.rotation.x += 0.005;
	earth.rotation.y += 0.005;
	earth.rotation.z += 0.001;
	earth.position.x = 1200 * Math.cos(theta)
	earth.position.z = 1200 * Math.sin(theta)

	clouds.rotation.x += 0.0010
	clouds.rotation.z += 0.005;
	clouds.position.x =  1200 * Math.cos(theta) 
	clouds.position.z = 1200 * Math.sin(theta)

	sun.rotation.x = 0;
	sun.rotation.y = 1;
	sun.rotation.z = 0;

  venus.rotation.x += 0.000005;
	venus.rotation.y += 0.005;
	venus.rotation.z += 0.00001;
	venus.position.x = 800 * Math.cos(theta)
	venus.position.z = 800 * Math.sin(theta)

	mercury.rotation.x += 0.00005;
	mercury.rotation.y += 0.0005
	mercury.rotation.z += 0.0001;
	mercury.position.x = 800 * Math.cos(theta2)
	mercury.position.z = 700 * Math.sin(theta2)
	
	mars.rotation.x += 0.005;
	mars.position.x = 1500 * Math.cos(theta + 5) 
	mars.position.z = 1500 * Math.sin(theta + 5) 

	saturn.rotation.x += 0.0005;
	saturn.rotation.y += 0.005;
	saturn.rotation.z += 0.00001;	
	saturn.position.x = 1800 * Math.cos(theta) 
	saturn.position.z = 1800 * Math.sin(theta)

	saturnRing.rotation.z += 0.005;
	saturnRing.position.x = 1800 * Math.cos(theta) 
	saturnRing.position.z = 1800 * Math.sin(theta) 

	neptune.rotation.z += 0.010;
	neptune.position.x = 2300 * Math.cos(theta + 10) 
	neptune.position.z = 2200 * Math.sin(theta + 10)

	uranus.position.x = 2400 * Math.cos(theta) 
	uranus.position.z = 2000 * Math.sin(theta)  

	jupiter.position.x = 2000 * Math.cos(theta + 5) 
	jupiter.position.z = 2000 * Math.sin(theta + 5) 

  starField.position.x += 0.05
	starField.position.z += 0.05

	camera.position.x += dx;
  camera.position.y += dy;
  camera.position.z += dz;
	camera.lookAt(focus);

	controls.update()
	renderer.render( scene, camera );
}
animate();