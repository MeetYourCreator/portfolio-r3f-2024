import React from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls } from '@react-three/drei';
import { getProject } from '@theatre/core';
import { editable as e, SheetProvider } from '@theatre/r3f';
import Scene from './components/ui/Scene';
import './styles.css';

const sheet = getProject('Ride Through 4').sheet('Scene');

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
      //   position: [0, 0, 25]
      // }}
      >
        <ScrollControls pages={5}>
          <SheetProvider sheet={sheet}>
            <Scene />
          </SheetProvider>
        </ScrollControls>
      </Canvas>
    </main>
  );
};

export default App;

//TODO1: DONE Fix Camera
//*****
//TODO2: Reposition video components
//TODO3: Add Contact Section with Github, Linkedin, and Email Links
//TODO4: Fix light amount in TVScreen component
