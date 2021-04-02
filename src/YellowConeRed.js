import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";

class YellowConeRed extends Component {
  componentDidMount() {
    // === THREE.JS CODE START ===
      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );
      var renderer = new THREE.WebGLRenderer();
      renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( renderer.domElement );

      const geometry = new THREE.ConeGeometry( 0.5, 2, 3.2 );
      const sgeo = new THREE.SphereGeometry( 1, 32, 24 );

      const material = new THREE.MeshStandardMaterial( {color: 0xffff00} );
      //const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );      

      var light = new THREE.DirectionalLight(0xfdfdfd, 2);
    // you set the position of the light and it shines into the origin
      light.position.set(2, 2, 1).normalize();
      scene.add(light);
    
    // add ambient light
    // subtle blue
      var ambientLight = new THREE.AmbientLight(0x000022);
      scene.add(ambientLight);      
      
      
          
      const cubeB = new THREE.Mesh( sgeo, material );
      cubeB.position.set( -5, -1, -25 );

      const cubeC = new THREE.Mesh( geometry, material );
      cubeC.position.set( -1, -4, -20 );

      const cubeD = new THREE.Mesh( sgeo, material );
      cubeD.position.set( 2, -1, -25 );
      
      
      const group = new THREE.Group();
      group.add( cubeB );
      group.add( cubeC );
      group.add( cubeD );            
      scene.add( group );      
      scene.background = new THREE.Color( 0xff0000 );
      camera.position.z = 5;


      
      var animate = function () {
	  requestAnimationFrame( animate );
	  //cubeC.rotation.y += 0.01;	  
	  //cubeA.rotation.y += 0.01;
	  //cubeB.rotation.y += 0.01;
	  renderer.render( scene, camera );
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

export default YellowConeRed;
