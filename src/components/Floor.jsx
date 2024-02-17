const Floor = () => {

  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-2, -2, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color='#02006b' />
      </mesh>
    </>
  );
};
export default Floor; 
