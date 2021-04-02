import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";

class ShapeHeart extends Component {
  componentDidMount() {
    // === THREE.JS CODE START ===
      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );
      var renderer = new THREE.WebGLRenderer();
      renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( renderer.domElement );


const x = 0, y = 0;

const heartShape = new THREE.Shape();

heartShape.moveTo( x + 5, y + 5 );
heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );
      
      const geometry = new THREE.ShapeGeometry( heartShape );
      const sgeo = new THREE.SphereGeometry( 1, 32, 24 );
      //const tgeo = new THREE.TorusKnotGeometry( 0.5, 0.2, 100, 16 );
      const tgeo= new THREE.RingGeometry(0.5,1,64);

      const material = new THREE.MeshStandardMaterial( {color: 0xd21404} );
      //const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );      

      var light = new THREE.DirectionalLight(0xfdfdfd, 2);
    // you set the position of the light and it shines into the origin
      light.position.set(2, 2, 1).normalize();
      scene.add(light);
    
    // add ambient light
    // subtle blue
      var ambientLight = new THREE.AmbientLight(0x000022);
      scene.add(ambientLight);      
      
      
          
      const shape = new THREE.Mesh( geometry, material );
      shape.position.set( 1.5, 0, 0 );

      const cubeA = new THREE.Mesh( tgeo, material );
      cubeA.position.set( -1.5, 0, 0 );

      const group = new THREE.Group();
      group.add( shape );
      //group.add( cubeA );

      scene.add( group );      
      scene.background = new THREE.Color( 0x000000 );
      camera.position.z = 50;

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

export default ShapeHeart;
