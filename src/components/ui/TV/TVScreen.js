import React, {
  useEffect,
  useState,
  useRef
} from 'react';
import * as THREE from 'three';
import { useGLTF, Html } from '@react-three/drei';
import TVCaption from './TVCaption';

export const TVScreen = ({
  url,
  xPlaneGeometry,
  yPlaneGeometry,
  xMeshPos,
  yMeshPos,
  zMeshPos,
  props,
  captionText,
  xPosCaption,
  yPosCaption,
  zPosCaption
}) => {
  const [isHover, setIsHover] = useState(false);
  const tvMeshRef = useRef();
  const textSectionRef = useRef();
  const { nodes } = useGLTF('models/tvPlaneWithCaption.gltf');

  const [video] = useState(() => {
    const vid = document.createElement('video');
    vid.src = url;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });

  console.log('nodes', nodes.Empty);
  return (

    <group rotation={[Math.PI / 1, Math.PI / 1, Math.PI / 1]}>
      <mesh
        geometry={nodes.tvPlane.geometry}>
        <meshStandardMaterial color='#000000' />
      </mesh>
      <mesh
        {...props}
        ref={tvMeshRef}
        onPointerOver={(event) => setIsHover(true)}
        onPointerOut={(event) => setIsHover(false)}
        rotation={[0, 0, 0]}
        position={[xMeshPos, yMeshPos, zMeshPos]}
      >
        <planeGeometry
          args={[xPlaneGeometry, yPlaneGeometry]}
        />
        <meshStandardMaterial
          emissive="#404040"
          side={THREE.DoubleSide}
        >
          <videoTexture
            attach='map'
            args={[video]}
          />
          <videoTexture
            attach='emissiveMap'
            args={[video]}
          />
        </meshStandardMaterial>
      </mesh>
      <Html
        ref={textSectionRef}
        as='section'
        position={[xPosCaption, yPosCaption, zPosCaption]}
        transform
      >
        <TVCaption tvCaption={captionText} />
      </Html>
    </group>
  );
};

export default TVScreen;
