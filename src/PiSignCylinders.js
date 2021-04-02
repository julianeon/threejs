import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";

class Cylinder extends Component {
  componentDidMount() {
      // === THREE.JS CODE START ===
      const materialColor = 0x4169e1;
      const backgroundColor = 0xecf0fc;
      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );
      var renderer = new THREE.WebGLRenderer();
      renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( renderer.domElement );

      const geometry = new THREE.ConeGeometry( 0.5, 2, 3.2 );
      const sgeo = new THREE.SphereGeometry( 1, 32, 24 );
      //const tgeo = new THREE.TorusKnotGeometry( 0.5, 0.2, 100, 16 );
      const tgeo= new THREE.CylinderGeometry(0.5,0.5,3,20);

      //const geometry = new THREE.PlaneGeometry( 5, 20, 32 );
      //const material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
      //const tgeo = new THREE.Mesh( geometry, material );
      //scene.add( plane );
      
      const material = new THREE.MeshStandardMaterial( {color: materialColor} );
      //const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );      

      var light = new THREE.DirectionalLight(0xfdfdfd, 2);
    // you set the position of the light and it shines into the origin
      light.position.set(2, 2, 1).normalize();
      scene.add(light);
    
    // add ambient light
    // subtle blue
      var ambientLight = new THREE.AmbientLight(0x000022);
      scene.add(ambientLight);      
      
      
          
      const shape = new THREE.Mesh( tgeo, material );
      shape.position.set( 1, 0, -5 );

      const cubeA = new THREE.Mesh( tgeo, material );
      cubeA.position.set( -1, 0, -5 );

      const cubeB = new THREE.Mesh( tgeo, material );
      cubeB.position.set( 3, 0, 0 );
      
      
      const cubeC = new THREE.Mesh( tgeo, material );
      cubeC.position.set( -3, 0, 0 );
      
      
      const group = new THREE.Group();
      group.add( shape );
      group.add( cubeA );
      //group.add( cubeB );
      //group.add( cubeC );                  
      scene.add( group );      
      scene.background = new THREE.Color( backgroundColor );
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

export default Cylinder;
