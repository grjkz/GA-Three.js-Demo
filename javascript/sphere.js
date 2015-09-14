console.log('main js linked')

var scene, camera, renderer, geometry, material, mesh, texture;

//	 SCALES CANVAS TO WINDOW SIZE
window.addEventListener( 'resize', onWindowResize, false );  

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}
scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera( -45, window.innerWidth / window.innerHeight, 0.1, 0 );


renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

geometry = new THREE.SphereGeometry( 3, 60, 60 );
// THE NEXT 2 LINES SET THE TEXTURE IMAGE ONTO THE OBJECT
texture = THREE.ImageUtils.loadTexture('images/earth.jpg')
material = new THREE.MeshBasicMaterial({map: texture,wireframe:true})

var earth = new THREE.Mesh( geometry, material );
earth.position.set(10,0,0)

scene.add( earth );
earth.add()


// LIGHTS
scene.add(new THREE.AmbientLight(0xffffff));
var light = new THREE.PointLight( 0xffffff, 2, 0 );
light.position.set( 80, 30, 50 );
scene.add( light );

camera.position.z = 10;

function render() {
	requestAnimationFrame( render );
	renderer.render( scene, camera );
	earth.rotation.x += 0.000;
	earth.rotation.y += 0.01;
}
render();


