import React, { useState, useEffect, useRef } from 'react';
import { useLoader, Canvas } from '@react-three/fiber';
import { OrbitControls, useAnimations, Suspense } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three';

const Model = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useLoader(GLTFLoader, '/scene.gltf');
  const { actions } = useAnimations(animations, group);

  // Load textures from the public/textures folder
  const texture1 = useLoader(TextureLoader, '/textures/lambert1_baseColor.jpeg');
  const texture2 = useLoader(TextureLoader, '/textures/lambert1_emissive.jpeg');
  // Load other necessary textures similarly

  // Apply textures to materials
  if (materials.holo1) {
    materials.holo1.map = texture1; // Adjust as needed
    materials.holo1.emissiveMap = texture2; // Adjust as needed
    materials.holo1.needsUpdate = true; // Ensure the changes take effect
  }

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        {/* Your 3D structure */}
        <mesh geometry={nodes.pPlatonic3_holo1_0.geometry} material={materials.holo1} />
      </group>
    </group>
  );
};

export const RoboModel = () => {
  const [autoRotateSpeed, setAutoRotateSpeed] = useState(0.01);

  useEffect(() => {
    setAutoRotateSpeed(500);
    setTimeout(() => {
      setAutoRotateSpeed(2);
    }, 800);
  }, []);

  return (
    <Canvas
      camera={{ position: [5, 7, 7], fov: 22 }}
      style={{ width: '800px', height: '500px' }}
      className="canvas-container"
    >
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, 10]} intensity={1} />
      <directionalLight position={[0, 5, 5]} intensity={0.8} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls autoRotate autoRotateSpeed={autoRotateSpeed} enablePan={false} enableZoom={false} />
    </Canvas>
  );
};
