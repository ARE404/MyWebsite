import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { OrbitControls } from "three/examples/jsm/Addons.js";

const ThreeDText = ({ message = "young apprentice, sometimes naive.", color = "#1890ff" }) => {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);  

  useEffect(() => {
    // Scene 
    const scene = new THREE.Scene();
    // camera
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    camera.position.set(0, -5, 70);

    // renderer
    if (!rendererRef.current) {
      rendererRef.current = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: true,    
      });
      rendererRef.current.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      rendererRef.current.setPixelRatio(window.devicePixelRatio);
      mountRef.current.appendChild(rendererRef.current.domElement);
    }

    // Load font and create text geometry
    const loader = new FontLoader();
    loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
      const matDark = new THREE.LineBasicMaterial({
        color: color,
        side: THREE.DoubleSide
      });

      const matLite = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.4,  
        side: THREE.DoubleSide
      });

      //create geometry
      const shapes = font.generateShapes(message, 60);  
      const geometry = new THREE.ShapeGeometry(shapes);
      geometry.computeBoundingBox();

      const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
      geometry.translate(xMid, 0, 0);

      const text = new THREE.Mesh(geometry, matLite);
      text.position.z = 1;  
      scene.add(text);

      const holeShapes = [];

      for (let i = 0; i < shapes.length; i++) {
        const shape = shapes[i];
        if (shape.holes && shape.holes.length > 0) {
          for (let j = 0; j < shape.holes.length; j++) {
            const hole = shape.holes[j];
            holeShapes.push(hole);
          }
        }
      }

      shapes.push(...holeShapes);

      const lineText = new THREE.Object3D();

      for (let i = 0; i < shapes.length; i++) {
        const shape = shapes[i];
        const points = shape.getPoints();
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        geometry.translate(xMid, 0, 0);
        const lineMesh = new THREE.Line(geometry, matDark);
        lineText.add(lineMesh);
      }

      scene.add(lineText);
      render();
    });

    const render = () => {
      rendererRef.current.render(scene, camera);
    };

    const controls = new OrbitControls(camera, rendererRef.current.domElement);
    controls.target.set(0, 0, 0);
    controls.enableZoom = false;  
    controls.enablePan = false;  
    controls.update();

    // set animate
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      render();
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      render();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      scene.clear();

    };
  }, [message, color]);


  useEffect(() => {
    return () => {
      if (rendererRef.current) {
        mountRef.current?.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
        rendererRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      style={{ 
        width: '700px',
        height: '50px',  
        position: 'relative',
        zIndex: 0,
        margin: '16px 0'  
      }} 
    />
  );
};

export default ThreeDText;
