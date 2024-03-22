import React from 'react';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';

const Image = ({ img, imgWidth, imgLength, posX, posY, posZ }) => {
  const texture = useLoader(THREE.TextureLoader, img);
  return (
    <mesh
      position={[posX, posY, posZ]}
    >
      <planeGeometry attach="geometry" args={[imgWidth, imgLength]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
};

export default Image;
