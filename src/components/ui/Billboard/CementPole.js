import React, { useState, useRef } from 'react';
import * as THREE from 'three';
import { useGLTF, Html } from '@react-three/drei';


const CementPole = () => {

  const { nodes } = useGLTF('models/cement_pole.gltf');

  console.log('cement pole', nodes);

  return (
    <>
      {/* <mesh
      geometry={nodes}
      />
      <meshStandardMaterial color='grey' /> */}
    </>
  );
};
export default CementPole;
