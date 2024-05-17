import React, { useCallback, useMemo, useRef } from 'react';
import { Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const RotatingText = ({ captionText, xPosCaption, yPosCaption, zPosCaption }) => {

  const textRef = useRef();

  useFrame(() => {
    if (textRef.current) { textRef.current.rotation.y += 100; }
  });
  return (
    <>
      <Text
        ref={textRef}
        position={[xPosCaption, yPosCaption, zPosCaption]}
        scale={.11}
        anchorX={'center'}
      >
        {captionText}
      </Text>
    </>
  );
};
export default RotatingText;
