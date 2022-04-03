
const fov = 75;
const aspect = window.innerWidth / window.innerHeight;  // the canvas default
const near = 0.1;
const far = 5;
const materialColor = 0x00ff00;
const lightColor = 0xffffff;
const zDistance = 5;
const intensity = 1;


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( fov, aspect, near, far);
const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer({canvas});

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhongMaterial( { color: materialColor } );
const cube = new THREE.Mesh( geometry, material );
const light = new THREE.DirectionalLight(lightColor, intensity);
light.position.set(-1, 2, 4);

scene.add( cube );
scene.add(light)

camera.position.z = zDistance;
function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
    
}
animate();
