import React, { useState } from 'react';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';

const Image = ({ img, imgWidth, imgLength, posX, posY, posZ }) => {
  const [isActive, setIsActive] = useState();
  const texture = useLoader(THREE.TextureLoader, img);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsActive(!isActive);
  };

  return (
    <mesh

      onClick={handleClick}
      scale={isActive ? 2 : 1}
      position={isActive ? [0, 1, 14] : [posX, posY, posZ]}
    >
      <planeGeometry attach="geometry" args={[imgWidth, imgLength]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
};

export default Image;
