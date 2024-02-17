import React, { useState, useRef } from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';

export const TV = ({ url, xPlaneGeometry, yPlaneGeometry, xMeshPos, yMeshPos, zMeshPos, props }) => {
  
  const meshRef = useRef()
  // useFrame((state, delta) => (meshRef.current.rotation.x += delta))
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)


  const { nodes } = useGLTF('tvPlane.gltf');
  const [video] = useState(() => {
    const vid = document.createElement('video');
    vid.src = url;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });

  return (
    <>
      <group rotation={[Math.PI / 1, Math.PI / 1, Math.PI / 1]}>
     
      <mesh
        geometry={nodes.tvPlane.geometry}>
        <meshStandardMaterial color='white' />
      </mesh>
        <mesh
          {...props}
          ref={meshRef}
     
      scale={active ? 2.5 : 1}
          onClick={(event) => setActive(!active)}
      
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
        rotation={[0, 0, 0]} position={active ? [0, 2, 14] :[xMeshPos, yMeshPos, zMeshPos]}>
        <planeGeometry args={[xPlaneGeometry, yPlaneGeometry]} />
        <meshStandardMaterial emissive="white" side={THREE.DoubleSide}>
          <videoTexture attach='map' args={[video]} />
          <videoTexture attach='emissiveMap' args={[video]} />
        </meshStandardMaterial>
        </mesh>
   
       </group>
      </>
  );

};

export default TV;
