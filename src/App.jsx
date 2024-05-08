import React from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls } from '@react-three/drei';
import { getProject } from '@theatre/core';
import { editable as e, SheetProvider } from '@theatre/r3f';
import Scene from './components/ui/Scene';
import scrollState from './camera-scroll-state.json';
import './styles.css';

const sheet = getProject('Camera Scroll Animation', { state: scrollState }).sheet('Scene');

export const App = () => {
  console.log('hello');
  return (
    <main>
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
    </main>
  );
};

export default App;

//DONE: Fix Camera
//*****

//TODO2: Reposition components
//TODO5: Animate keyrames
//**********


//TODO3: Add Contact Section with Github, Linkedin, and Email Links
//TODO4: Fix light amount in TVScreen component
