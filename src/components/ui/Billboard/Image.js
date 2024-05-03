import React, { useState } from 'react';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';

const Image = ({ img, imgWidth, imgLength, xPosImage, yPosImage, zPosImage, xRotImage, yRotImage, zRotImage }) => {
  const texture = useLoader(THREE.TextureLoader, img);

  return (
    <mesh
      scale={1}
      position={[xPosImage, yPosImage, zPosImage]}
      rotation={[xRotImage, yRotImage, zRotImage]}
    >
      <planeGeometry attach="geometry" args={[imgWidth, imgLength]} />
      <meshStandardMaterial

        attach="material"
        emissive='#000000'
        map={texture}
      />
    </mesh>
  );
};

export default Image;
