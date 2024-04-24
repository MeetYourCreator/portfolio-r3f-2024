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
  const [isActive, setIsActive] = useState(false);
  const tvMeshRef = useRef();
  const textSectionRef = useRef();
  const { nodes } = useGLTF('models/tvPlane.gltf');

  const [video] = useState(() => {
    const vid = document.createElement('video');
    vid.src = url;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });

  // const handleClick = (e) => {
  //   e.stopPropagation();
  //   setIsActive(!isActive);
  // };

  return (

    <group rotation={[Math.PI / 1, Math.PI / 1, Math.PI / 1]}>
      <mesh
        geometry={nodes.tvPlane.geometry}>
        <meshStandardMaterial color='#000000' />
      </mesh>
      <mesh
        {...props}
        ref={tvMeshRef}
        // onClick={handleClick}
        onPointerOver={(event) => setIsHover(true)}
        onPointerOut={(event) => setIsHover(false)}
        // scale={isActive ? 2.5 : 1}
        // position={isActive ? [0, 1, 15] : [xMeshPos, yMeshPos, zMeshPos]}
        rotation={[0, 0, 0]}
        position={[xMeshPos, yMeshPos, zMeshPos]}
      >
        <planeGeometry
          args={[xPlaneGeometry, yPlaneGeometry]}
        />
        <meshStandardMaterial
          emissive="#000000"
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
        // zIndexRange={[1000]}
        // distanceFactor={1.5}
        position={[xPosCaption, yPosCaption, zPosCaption]}
        // position={isActive ? [0, -2, 15] : null}
        transform
      >
        {/* {isActive && (
          <> */}
        <TVCaption tvCaption={captionText} />
        {/* </>
        )} */}
      </Html>
    </group>
  );
};

export default TVScreen;
