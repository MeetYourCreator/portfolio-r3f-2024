import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ScrollControls, useScroll } from '@react-three/drei';
import { getProject } from '@theatre/core';
import { editable as e, SheetProvider } from '@theatre/r3f';

import Scene from './components/ui/Scene';

const demoSheet = getProject('Ride Through').sheet('Scene');

export const App = () => {

  return (
    <main>
      <Canvas
        style={{ width: '100%', height: '100vh' }}
        gl={{ preserveDrawingBuffer: true }}
      // camera={{
      //   fov: 75,
      //   near: 0.1,
      //   far: 1000,
      //   position: [0, 0, wheelPos]
      // }}
      >
        <ScrollControls pages={5}>
          <SheetProvider sheet={demoSheet}>
            <Scene />
          </SheetProvider>
        </ScrollControls>
      </Canvas>
    </main>
  );
};

export default App;

//TODO1: Create ModalOverlay component for isActive elements
//TODO2: Reposition video components
//TODO3: Add Contact Section with Github, Linkedin, and Email Links
