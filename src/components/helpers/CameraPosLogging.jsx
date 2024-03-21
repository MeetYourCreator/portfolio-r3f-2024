import { useRef, useEffect } from 'react';
import { useThree } from '@react-three/fiber';

const CameraPosLogging = ({ event }) => {

  const { camera } = useThree();
  const cameraRef = useRef();

  useEffect(() => {
    const logCameraPos = () => {
      const { x, y, z } = cameraRef.current.position;
      const roundX = Math.round(x * 100) / 100;
      const roundY = Math.round(y * 100) / 100;
      const roundZ = Math.round(z * 100) / 100;
      console.log(`Camera Position: x: ${roundX} y: ${roundY} z: ${roundZ}`);
    };
    cameraRef.current = camera;
    window.addEventListener(event, logCameraPos);
    return () => {
      window.removeEventListener(event, logCameraPos);
    };
  }, []);
  return null;
};
export default CameraPosLogging;
