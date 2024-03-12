import React, { useState, useRef } from 'react';
import * as THREE from 'three';
import { useGLTF, Html } from '@react-three/drei';
import TVCaption from './TVCaption';

export const TV = ({
  url,
  xPlaneGeometry,
  yPlaneGeometry,
  xMeshPos,
  yMeshPos,
  zMeshPos,
  props,
  captionText
}) => {

  const tvMeshRef = useRef();
  const textSectionRef = useRef();
  // const textCardMeshRef = useRef()

  const [isHover, setIsHover] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const { nodes } = useGLTF('tvPlane.gltf');
  const [video] = useState(() => {
    const vid = document.createElement('video');
    vid.src = url;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });

  const handleClick = (e) => {
    e.stopPropagation();
    setIsActive(!isActive);
  };


  console.log(tvMeshRef.current);
  return (

    <group rotation={[Math.PI / 1, Math.PI / 1, Math.PI / 1]}>
      <mesh
        geometry={nodes.tvPlane.geometry}>
        <meshStandardMaterial color='white' />
      </mesh>
      <mesh
        {...props}
        ref={tvMeshRef}
        onClick={handleClick}
        onPointerOver={(event) => setIsHover(true)}
        onPointerOut={(event) => setIsHover(false)}
        scale={isActive ? 2.5 : 1}
        rotation={[0, 0, 0]}
        position={isActive ? [0, 1, 14] : [xMeshPos, yMeshPos, zMeshPos]}
      >
        <planeGeometry
          args={[xPlaneGeometry, yPlaneGeometry]}
        />
        <meshStandardMaterial
          emissive="white"
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
        position={isActive ? [0, -2, 15] : null}
        transform
      >
        {isActive && (
          <TVCaption tvCaption={captionText} />
        )}
      </Html>
      {/* <mesh
         ref={textCardMeshRef}
         scale={isActive ? 2 : null}
         rotation={[0, 0, 0]}
         position={isActive ? [0, 4.871, 14 ] : null}
        >
          <planeGeometry
            args={[3.7, 2]}
          />
          <meshStandardMaterial
            emissive="yellow"
            side={THREE.DoubleSide}
          >
          </meshStandardMaterial>
        </mesh> */}
    </group>

  );

};

export default TV;
