import React
  // { Suspense }
  from 'react';
import { Canvas } from '@react-three/fiber';
import {
  ScrollControls,
  // Loader
} from '@react-three/drei';
import { getProject } from '@theatre/core';
import { SheetProvider } from '@theatre/r3f';
import Scene from './components/ui/Scene';
import scrollState from './camera-scroll-state.json';
import './styles.css';

const sheet = getProject('Camera Scroll Animation', { state: scrollState }).sheet('Scene');

export const App = () => {

  return (
    <>
      <Canvas
        style={{ width: '100%', height: '100vh', backgroundColor: '#131216' }}
        gl={{ preserveDrawingBuffer: true }}
      >
        {/* <Suspense fallback={null}> */}
        <ScrollControls
          pages={25}
          damping={3}
          maxSpeed={.03}
        >
          <SheetProvider sheet={sheet}>
            <Scene />
          </SheetProvider>
        </ScrollControls>
        {/* </Suspense> */}
      </Canvas>
      {/* <Loader /> */}
    </>
  );
};

export default App;
