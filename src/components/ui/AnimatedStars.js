import React, { useId, useCallback, useMemo, useRef, useEffect, useState, useContext } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const AnimatedStars = () => {
  const starsRef = useRef();

  useFrame(() => {
    starsRef.current.rotation.x += 0.0001;
    starsRef.current.rotation.y += 0.0001;
    starsRef.current.rotation.z += 0.0001;
  });

  return (
    <>
      <Stars
        ref={starsRef}
      />
    </>
  );
};
export default AnimatedStars;
