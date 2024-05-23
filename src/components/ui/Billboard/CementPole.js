import React from 'react';
import { useGLTF } from '@react-three/drei';

const CementPole = ({
  posX,
  posY,
  posZ
}) => {

  const { nodes } = useGLTF('models/cement_pole.glb');

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
