import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';

const ThreeDText = ({ text = "Bob Zhang", color = "#1890ff" }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Load font and create text
    const loader = new FontLoader();
    loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
      const textGeometry = new TextGeometry(text, {
        font: font,
        size: 0.5,
        height: 0.2,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5
      });

      const material = new THREE.MeshPhongMaterial({ 
        color: color,
        specular: 0x555555,
        shininess: 30
      });

      const textMesh = new THREE.Mesh(textGeometry, material);
      
      // Center the text
      textGeometry.computeBoundingBox();
      const centerOffset = -0.5 * (textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x);
      textMesh.position.x = centerOffset;
      textMesh.position.y = -0.25;
      textMesh.position.z = -2;

      scene.add(textMesh);

      // Animation
      const animate = () => {
        requestAnimationFrame(animate);
        textMesh.rotation.y += 0.005;
        renderer.render(scene, camera);
      };

      animate();
    });

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [text, color]);

  return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }} />;
};

export default ThreeDText;
