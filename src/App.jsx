import React, { Suspense, useState, useRef } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass';
import { OrbitControls, Effects, Html, ScrollControls, PointerLockControls, CameraControls, Scroll } from '@react-three/drei';
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';

import AnimatedStars from './components/ui/AnimatedStars';
import CameraPosLogging from './components/helpers/CameraPosLogging';
import TVScreen from './components/ui/TV/TVScreen';
import Floor from './components/ui/Floor';
import Heading from './components/ui/Heading';
import Pole from './components/ui/Billboard/Pole';
import Image from './components/ui/Billboard/Image';

import CC92MB from './assets/coca-cola_92mb.mp4';
import DFS from './assets/dfs-mrp.mp4';
import JNJ from './assets/jnjvision.mp4';
import SAMSHA from './assets/samsha.mp4';
import NA from './assets/new-alternatives.mp4';
import TABOOLA from './assets/taboola.mp4';

import DFSREC_BL from './assets/images/ben-lane-dfs.png';
import JNJREC_DB from './assets/images/dalila-brosen-jnj.png';
import DFSREC_BW from './assets/images/bradley-walker-dfs.png';

import './styles.css';

extend({ OutlinePass });

export const App = () => {


  const [wheelPos, setWheelPos] = useState(25);
  const projectsHeadingRef = useRef();
  const testimonialsHeadingRef = useRef();
  // //code from tweenJS updates
  // const [cameralPos, setCameraPos] = useState(
  //   new THREE.Vector3(0, 0, 25)
  // );
  // const [cameraTargetPos, setCameraPosTarget] = useState(
  //   new THREE.Vector3(0, 0, 0)
  // );
  // useFrame(({ camera }) => {

  //   new TWEEN.Tween(cameralPos)
  //     .to(cameraTargetPos, 1000)
  //     .easing(TWEEN.Easing.Quadratic.Out)
  //     .onUpdate(() => setCameraPos(cameralPos));
  // });

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
        <Suspense fallback={null}>
          {/* Z at -4 */}
          <Pole
            posZ={-4}
            posX={2}
            posY={-5}
            color='yellow'
          />
          <Image
            posZ={-3.9}
            posX={3}
            posY={2}
            img={DFSREC_BL}
            imgWidth={4}
            imgLength={2}
          />
          <Pole
            posZ={-4}
            posX={4}
            posY={-5}
            color='yellow'
          />
          {/* Z at -2 */}
          <Pole
            posZ={-2}
            posX={1}
            posY={-5}
            color='green'
          />
          <Image
            posZ={-1.9}
            posX={0}
            posY={2}
            img={DFSREC_BW}
            imgWidth={4}
            imgLength={2}
          />
          <Pole
            posZ={-2}
            posX={-1}
            posY={-5}
            color='green'
          />
          {/* Z at 0 */}
          <Pole
            posZ={0}
            posX={-2}
            posY={-5}
            color='red'
          />
          <Image
            posZ={.1}
            posX={-3}
            posY={2}
            img={JNJREC_DB}
            imgWidth={4}
            imgLength={2}
          />
          <Pole
            posZ={0}
            posX={-4}
            posY={-5}
            color='red'
          />
          {/* Heading Billboard
              Z at 2 */}
          <Pole
            posZ={2}
            posX={-4.5}
            posY={-5}
            color='blue'
          />
          <Html
            ref={testimonialsHeadingRef}
            as='section'
            position={[-6, 2, 2]}
            transform
          >
            <Heading
              contactText={'Testimonials'}
              paddingTop={'5%'}
              paddingRight={'5%'}
              paddingBottom={'5%'}
              paddingLeft={'5%'}
              border={'1px solid rgb(79,48,48)'}
              borderRadius={10}
              backgroundColor={'rgb(84,73,63'}
              fontFamily='Nosifer'
              fontSize={'20px'}
              // fontWeight={900}
              fontVariant='small-caps'
              color='red'
            />
          </Html>
          {/* <Image
            posZ={.1}
            posX={-3}
            posY={2}
            img={JNJREC_DB}
            imgWidth={4}
            imgLength={2}
          /> */}
          <Pole
            posZ={2}
            posX={-7}
            posY={-5}
            color='blue'
          />

        </Suspense>

        <Html
          ref={projectsHeadingRef}
          as='section'
          position={[0, 7, 13]}
          transform
        >
          <Heading
            contactText='Projects'
            paddingTop='15%'
            paddingRight='20%'
            paddingBottom='15%'
            paddingLeft='20%'
            border='#7AF8FF 3px solid'
            borderRadius={10}
            backgroundColor='#1b1b1c'
            fontFamily='Raleway Dots'
            fontSize='1rem'
            fontVariant='small-caps'
            letterSpacing='.15rem'
            color='gold'
            mixBlendMode='screen'
          />
        </Html>
        <Suspense fallback={null}>
          {/* <ScrollControls>
          <Scroll> */}
          <TVScreen
            src='tvPlane.gltf'
            url={CC92MB}
            zMeshPos={9.5}
            yMeshPos={7}
            xMeshPos={1}
            xPlaneGeometry={3}
            yPlaneGeometry={1.5}
            captionText={"Developed in-house 100+ custom React component library as building blocks for redesign of customer-facing applications."}
          />
          <TVScreen
            src='tvPlane.gltf'
            url={DFS}
            zMeshPos={8.5}
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
