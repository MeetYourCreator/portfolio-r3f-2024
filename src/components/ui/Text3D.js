import React from 'react';
import * as THREE from 'three';
import { useGLTF, Html } from '@react-three/drei';
const Text3D = ({ url, textRotationX, textRotationY, textRotationZ, textPosX, textPosY, textPosZ }) => {

  const { nodes } = useGLTF(url);

  console.log(nodes);
  return (
    <>
      <mesh
        geometry={nodes.GitHub.geometry}
        rotation={[textRotationX, textRotationY, textRotationZ]}
        position={[textPosX, textPosY, textPosZ]}
      >
        <meshStandardMaterial color='white' />
      </mesh>
    </>
  );
};
export default Text3D;
