var width = 1108;
var height = 1108;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(42, width / height, 0.01, 5000);
camera.position.z = 2.2;
var renderer = new THREE.WebGLRenderer({
	antialias	: true,
	alpha : true
});
renderer.setSize(width, height);
document.getElementById("mars-model").appendChild( renderer.domElement );
renderer.shadowMapEnabled = true;
var onRenderFcts= [];
var light	= new THREE.AmbientLight( 0x100000 );
scene.add( light );
var containerLight	= new THREE.Object3D();
containerLight.rotation.y = 1.2;
containerLight.rotation.x = -0.2;
scene.add(containerLight)
var light	= new THREE.DirectionalLight( 0xFFCF96, 1.1 )
light.position.set(-3,2,2)
containerLight.add( light )
light.castShadow	= true
light.shadowCameraNear	= 0.01
light.shadowCameraFar	= 15
light.shadowCameraFov	= 45
light.shadowCameraLeft	= -1
light.shadowCameraRight	=  1
light.shadowCameraTop	=  1
light.shadowCameraBottom= -1
light.shadowBias	= 0.001
light.shadowDarkness	= 0.05
light.shadowMapWidth	= 1024
light.shadowMapHeight	= 1024
var containerEarth	= new THREE.Object3D()
scene.add(containerEarth)
var earthMesh = THREEx.Planets.createMars()
earthMesh.receiveShadow	= true
earthMesh.castShadow	= true
containerEarth.add(earthMesh)
var geometry	= new THREE.SphereGeometry(0.01, 32, 32)
var material	= THREEx.createAtmosphereMaterial()
material.side	= THREE.BackSide
material.uniforms.glowColor.value.set(0x4e1d09)
material.uniforms.coeficient.value	= 0.4
material.uniforms.power.value		= 8.9
var mesh	= new THREE.Mesh(geometry, material );
mesh.scale.multiplyScalar(1.1);
containerEarth.add( mesh );
render();
function render() {
	update();
	requestAnimationFrame(render);
	renderer.render(scene, camera);
}