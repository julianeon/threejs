import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";

class Lathe extends Component {
    
    componentDidMount() {
	const materialColor = 0xe3242b;
	const backgroundColor = 0x228c22;

    // === THREE.JS CODE START ===
      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );
      var renderer = new THREE.WebGLRenderer();
      renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( renderer.domElement );

      const geometry = new THREE.ConeGeometry( 0.5, 2, 3.2 );
      const sgeo = new THREE.SphereGeometry( 1, 32, 24 );
      //const tgeo = new THREE.TorusKnotGeometry( 0.5, 0.2, 100, 16 );
      const tgeo= new THREE.OctahedronGeometry(1,0);

      const material = new THREE.MeshStandardMaterial( {color: materialColor } );
      //const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );      

      var light = new THREE.DirectionalLight(0xfdfdfd, 2);
    // you set the position of the light and it shines into the origin
      light.position.set(2, 2, 1).normalize();
      scene.add(light);
    
    // add ambient light
    // subtle blue
      var ambientLight = new THREE.AmbientLight(0x000022);
      scene.add(ambientLight);      
      

	const points = [];
	for ( let i = 0; i < 10; i ++ ) {
	    points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 5 ) * 2 ) );
	}
	const lgeo = new THREE.LatheGeometry( points );
//const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
	const lathe = new THREE.Mesh( lgeo, material );

          
	const shape = new THREE.Mesh( tgeo, material );
	shape.position.set( 1, 0, 0 );

	const cubeC = new THREE.Mesh( geometry, material );
	cubeC.position.set( -1, -4, -20 );

	const cubeD = new THREE.Mesh( sgeo, material );
	cubeD.position.set( 2, -1, -25 );
      
      
      const group = new THREE.Group();
      group.add( lathe );
      //group.add( cubeC );
      //group.add( cubeD );            
      scene.add( group );      
      scene.background = new THREE.Color( backgroundColor );
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

export default Lathe;
