const Pole = ({ color, posX, posY, posZ }) => {

  return (
    <>
      <mesh
        position={[posX, posY, posZ]}
      >
        <cylinderGeometry
          args={[.1, .1, 15, 3]} />
        <meshBasicMaterial
          color={color} />
      </mesh>
    </>
  );
};

export default Pole;
