import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
class App extends Component {
  componentDidMount() {
    // === THREE.JS CODE START ===
      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
      var renderer = new THREE.WebGLRenderer();
      renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( renderer.domElement );

      const geometry = new THREE.SphereGeometry( 20, 64, 64 );

      scene.background = new THREE.Color(0x282c34);

      const material = new THREE.MeshNormalMaterial();

      const mesh = new THREE.Mesh(geometry, material);

      mesh.scale.x = 0.1;
      mesh.scale.y = 0.1;
      mesh.scale.z = 0.1;

      scene.add(mesh);

      camera.position.z = 5;

      const frontSpot = new THREE.SpotLight(0xeeeece);
      frontSpot.position.set(1000, 1000, 1000);
      scene.add(frontSpot);

      const frontSpot2 = new THREE.SpotLight(0xddddce);
      frontSpot2.position.set(-500, -500, -500);
      scene.add(frontSpot2);

      const animate = function () {
	  requestAnimationFrame(animate);

	  mesh.rotation.x += 0.005;
	  mesh.rotation.y += 0.005;
	  mesh.rotation.z += 0.005;

	  renderer.render(scene, camera);
      };
      
      animate();      
      
    // === THREE.JS EXAMPLE CODE END ===
  }
    render() {
	return (
		<div />
	)
    }
}

export default App;
