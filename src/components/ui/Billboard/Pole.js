import { useLoader } from "@react-three/fiber";
import * as THREE from 'three';

const Pole = ({ color, posX, posY, posZ }) => {

  const texture = useLoader(THREE.TextureLoader, '../../../textures/weathered_planks_diff_1k.jpg');

  // console.log(texture);
  return (
    <>
      <mesh
        position={[posX, posY, posZ]}
        name='meshStandardMaterial'
        material={
          new THREE.MeshStandardMaterial({
            flatShading: true,
            map: texture
          })
        }
      >
        <cylinderGeometry
          args={[.1, .1, 15, 3]}

        />
        <meshStandardMaterial
          color={color} />
      </mesh>
    </>
  );
};

export default Pole;
