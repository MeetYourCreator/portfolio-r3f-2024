import React, { useState, useRef } from 'react';
import * as THREE from 'three';
import { useGLTF, Html } from '@react-three/drei';


const CementPole = ({
  posX,
  posY,
  posZ
}) => {
  const cementPoleRef = useRef();
  const { nodes } = useGLTF('models/cement_pole.glb');

  console.log('cement pole', nodes.cement_pole);

  return (
    <>
      <mesh
        geometry={nodes.cement_pole.geometry}
        position={[posX, posY, posZ]}
        scale={[3, 9, 3]}
      >
        <meshStandardMaterial
          emissive='grey'
        />
      </mesh>
    </>
  );
};
export default CementPole;
