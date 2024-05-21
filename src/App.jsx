import React,
{ Suspense }
  from 'react';
import { Canvas } from '@react-three/fiber';
import {
  ScrollControls,
  Loader
} from '@react-three/drei';
import { getProject } from '@theatre/core';
import { SheetProvider } from '@theatre/r3f';
import Scene from './components/ui/Scene';
import scrollState from './camera-scroll-state.json';
import './styles.css';

const sheet = getProject('Camera Scroll Animation', { state: scrollState }).sheet('Scene');

export const App = () => {

  return (
    <main>
      <Loader />
      <Suspense fallback={null}>
        <Canvas
          style={{ width: '100%', height: '100vh' }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <ScrollControls
            pages={7}
            damping={1}
            maxSpeed={.1}
          >
            <SheetProvider sheet={sheet}>
              <Scene />
            </SheetProvider>
          </ScrollControls>
        </Canvas>
      </Suspense>
    </main>
  );
};

export default App;
