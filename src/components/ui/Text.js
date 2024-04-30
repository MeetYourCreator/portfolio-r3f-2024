import React from 'react';
import { extend } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import openSans from '../../assets/Open Sans_Regular.json';

extend({ TextGeometry });
const Text = () => {
  const font = new FontLoader().parse(openSans);


  return (
    <mesh>
      <textGeometry args={['LinkedIn', { font, size: 1, height: 1 }]} />
      <meshPhysicalMaterial attach='material' color={'white'} />
    </mesh>
  );
};
export default Text;
