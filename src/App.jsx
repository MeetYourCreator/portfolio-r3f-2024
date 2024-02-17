import React, { Suspense } from 'react';
import { Canvas, extend, useThree } from '@react-three/fiber';

import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass';
import { OrbitControls, Effects } from '@react-three/drei';

import Floor from './components/Floor';
import TV from './components/TV';

import JNJ from './assets/jnjvision.mp4';
import DFS from './assets/dfs-mrp.mp4';
import TABOOLA from './assets/taboola.mp4';

export const UseThreeSize = () => {
  const size = useThree();
  console.log(size);
};

export const App = () => {

  extend({ OutlinePass });

  return (
    <Canvas style={{ width: '100vw', height: '100vh' }} camera={{ position: [0, 0, 25] }}>
      <Effects>
        {/* <outlinePass attachArray='passes'/> */}
      </Effects>
      <Suspense fallback={null}>
        {/* <group> */}

        <TV src='tvPlane.gltf' url={JNJ} xPlaneGeometry={3} yPlaneGeometry={1} xMeshPos={3} yMeshPos={5} zMeshPos={7} />
        <TV src='tvPlane.gltf' url={DFS} xPlaneGeometry={3} yPlaneGeometry={1} xMeshPos={5} yMeshPos={3} zMeshPos={5} />
        <TV src='tvPlane.gltf' url={TABOOLA} xPlaneGeometry={3} yPlaneGeometry={1} xMeshPos={7} yMeshPos={1} zMeshPos={3} />
        {/* </group>   */}
      </Suspense>
      <fog attach='fog' args={["white", 1, 80]} />
      <directionalLight intensity={0.5} />

      <OrbitControls
        maxPolarAngle={0}
        minPolarAngle={Math.PI / 2}
      // minAzimuthAngle={-Math.PI / 4}
      // maxAzimuthAngle={Math.PI / 4}
      // minPolarAngle={Math.PI / 6}
      // maxPolarAngle={Math.PI - Math.PI / 6}
      />
      <Floor />

    </Canvas>

  );
};

export default App;
