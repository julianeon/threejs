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

    // create a point light
    const pointLight =
      new THREE.PointLight(0xFFFFFF);

    // set its position
    pointLight.position.x = 10;
    pointLight.position.y = 50;
    pointLight.position.z = 130;

    // add to the scene
    scene.add(pointLight);

    // create the sphere's material
    const sphereMaterial =
      new THREE.MeshLambertMaterial(
        {
          color: 0xCC0000
        });

    // Set up the sphere vars
    const RADIUS = 50;
    const SEGMENTS = 16;
    const RINGS = 16;

    // Create a new mesh with
    // sphere geometry - we will cover
    // the sphereMaterial next!
    const sphere = new THREE.Mesh(

      new THREE.SphereGeometry(
        RADIUS,
        SEGMENTS,
        RINGS),

      sphereMaterial);

    // Move the Sphere back in Z so we
    // can see it.
    sphere.position.z = -300;

    // Finally, add the sphere to the scene.
    scene.add(sphere);


      

      const animate = function () {
	  requestAnimationFrame(animate);

	  //mesh.rotation.x += 0.005;
	  //mesh.rotation.y += 0.005;
	  //mesh.rotation.z += 0.005;

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
