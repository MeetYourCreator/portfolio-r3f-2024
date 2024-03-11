import React, { Suspense, useRef } from 'react';
import { Canvas, extend, useThree } from '@react-three/fiber';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass';
import { OrbitControls, Effects, ScrollControls, PointerLockControls, CameraControls, Scroll } from '@react-three/drei';
import { useGLTF, Html } from '@react-three/drei';

import Floor from './components/Floor';
import TV from './components/TV';
// import { CC, JNJ, DFS, TABOOLA, NA, CC92MB, JNJ83MB, DFS97MB, TABOOLA_70MB, NA22MB, SAMSHA } from './assets/index.js';
import DFS from './assets/dfs-mrp.mp4';
import CC92MB from './assets/coca-cola_92mb.mp4';
import JNJ from './assets/jnjvision.mp4';

export const UseThreeSize = () => {
  const size = useThree();
  console.log(size);
};

extend({ OutlinePass });

export const App = () => {

  return (
    <main>
      <Canvas
        style={{ width: '100%', height: '100vh' }}
        camera={{ position: [0, 0, 25] }}
      >
        <Suspense fallback={null}>
          {/* <ScrollControls>
          <Scroll> */}
          <TV
            src='tvPlane.gltf'
            url={DFS}
            zMeshPos={9}
            yMeshPos={6}
            xMeshPos={2}
            xPlaneGeometry={3}
            yPlaneGeometry={1.5}
            tvCaption={"Overhaul and expansion of Discover's Mobile Regression Pipeline portal servicing all 15 mobile application development teams "}

          />
          <TV
            src='tvPlane.gltf'
            url={CC92MB}
            zMeshPos={11}
            yMeshPos={7}
            xMeshPos={1}
            xPlaneGeometry={3}
            yPlaneGeometry={1.5}
            tvCaption={"Developed in-house 100+ custom React component library as building blocks for redesign of customer-facing applications"}
          />
          <TV
            src='tvPlane.gltf'
            url={JNJ}
            zMeshPos={7}
            yMeshPos={5}
            xMeshPos={3}
            xPlaneGeometry={3}
            yPlaneGeometry={1.5}
            tvCaption={"Piloted B2B customer loyalty website for Johnson and Johnson Vision's alliance of global GPOs"}
          />
          <TV
            src='tvPlane.gltf'
            // url={SAMSHA}
            zMeshPos={5}
            yMeshPos={4}
            xMeshPos={4}
            xPlaneGeometry={3}
            yPlaneGeometry={1.5}
            tvCaption={''}
          />
          <TV
            src='tvPlane.gltf'
            // url={NA22MB}
            zMeshPos={3}
            yMeshPos={3}
            xMeshPos={5}
            xPlaneGeometry={3}
            yPlaneGeometry={1.5}
            tvCaption={'Redesigned customer-facing website for LGBTQ+ homeless center in NYC'}
          />
          <TV
            src='tvPlane.gltf'
            // url={TABOOLA_70MB}
            zMeshPos={1}
            yMeshPos={2}
            xMeshPos={6}
            xPlaneGeometry={3}
            yPlaneGeometry={1.5}
            tvCaption={'Developed web applications for global publishers, including the New York Times, Business Insider, and MSN, on the Taboola ads platform '}
          />
          {/* </Scroll>
          </ScrollControls> */}
        </Suspense>
        <fog
          attach='fog'
          args={["white", 1, 80]}
        />
        <directionalLight
          intensity={1}
        />
        <OrbitControls
          maxPolarAngle={0}
          // minAzimuthAngle={-Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          // maxAzimuthAngle={Math.PI / 2}
          enableDamping={false}
        // maxPolarAngle={0}
        // minPolarAngle={Math.PI / 2}
        />
        <Floor />

        <Effects>
          {/* <outlinePass attachArray='passes'/> */}
        </Effects>
      </Canvas>
    </main>
  );
};

export default App;
