import React, { Suspense, useState, useRef } from 'react';
import { Canvas, extend, useThree } from '@react-three/fiber';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass';
import { OrbitControls, Effects, Html, ScrollControls, PointerLockControls, CameraControls, Scroll } from '@react-three/drei';

import AnimatedStars from './components/ui/AnimatedStars';
import CameraPosLogging from './components/helpers/CameraPosLogging';
import TVScreen from './components/ui/TVScreen';
import Floor from './components/ui/Floor';
import Heading from './components/ui/Heading';

import CC92MB from './assets/coca-cola_92mb.mp4';
import DFS from './assets/dfs-mrp.mp4';
import JNJ from './assets/jnjvision.mp4';
import SAMSHA from './assets/samsha.mp4';
import NA from './assets/new-alternatives.mp4';
import TABOOLA from './assets/taboola.mp4';

import './styles.css';

// export const UseThreeSize = () => {
//   const size = useThree();
//   console.log(size);
// };

extend({ OutlinePass });


export const App = () => {
  const [wheelPos, setWheelPos] = useState(25);
  const contactRef = useRef();
  return (
    <main>
      <Canvas
        style={{ width: '100%', height: '100vh' }}
        camera={{
          fov: 75,
          near: 0.1,
          far: 1000,
          position: [0, 0, wheelPos]
        }}
        onWheel={e => setWheelPos(e.deltaZ)}
      >
        <Html
          ref={contactRef}
          as='section'
          position={[.0, 7.2, 14]}
          transform
        >
          <Heading
            paddingTop={'15%'}
            paddingRight={'20%'}
            paddingBottom={'15%'}
            paddingLeft={'20%'}
            border={'#7AF8FF 3px solid'}
            backgroundColor={'#1b1b1c'}
            contactText={'Projects'} />
        </Html>
        <Suspense fallback={null}>
          {/* <ScrollControls>
          <Scroll> */}
          <TVScreen
            src='tvPlane.gltf'
            url={CC92MB}
            zMeshPos={11}
            yMeshPos={7}
            xMeshPos={1}
            xPlaneGeometry={3}
            yPlaneGeometry={1.5}
            captionText={"Developed in-house 100+ custom React component library as building blocks for redesign of customer-facing applications."}
          />
          <TVScreen
            src='tvPlane.gltf'
            url={DFS}
            zMeshPos={9}
            yMeshPos={6}
            xMeshPos={2}
            xPlaneGeometry={3}
            yPlaneGeometry={1.5}
            captionText={"Overhaul and expansion of Discover's Mobile Regression Pipeline portal servicing all 15 mobile application development teams."}

          />
          <TVScreen
            src='tvPlane.gltf'
            url={JNJ}
            zMeshPos={7}
            yMeshPos={5}
            xMeshPos={3}
            xPlaneGeometry={3}
            yPlaneGeometry={1.5}
            captionText={"Piloted B2B customer loyalty website for Johnson and Johnson Vision's alliance of global GPOs."}
          />

          <TVScreen
            src='tvPlane.gltf'
            url={SAMSHA}
            zMeshPos={5}
            yMeshPos={4}
            xMeshPos={4}
            xPlaneGeometry={3}
            yPlaneGeometry={1.5}
            captionText={''}
          />
          <TVScreen
            src='tvPlane.gltf'
            url={NA}
            zMeshPos={3}
            yMeshPos={3}
            xMeshPos={5}
            xPlaneGeometry={3}
            yPlaneGeometry={1.5}
            captionText={'Redesigned customer facing website for LGBTQ+ homeless center in NYC.'}
          />
          <TVScreen
            src='tvPlane.gltf'
            url={TABOOLA}
            zMeshPos={1}
            yMeshPos={2}
            xMeshPos={6}
            xPlaneGeometry={3}
            yPlaneGeometry={1.5}
            captionText={'Developed web applications for global publishers, including the New York Times, Business Insider, and MSN, on the Taboola ads platform.'}
          />
          {/* </Scroll>
          </ScrollControls> */}
        </Suspense>
        <fog
          attach='fog'
          args={["#131216", 1, 35]}
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
        <AnimatedStars />
        <CameraPosLogging
          event='mousemove'
        />
        <Effects>
          {/* <outlinePass attachArray='passes'/> */}
        </Effects>
      </Canvas>
    </main>
  );
};

export default App;
