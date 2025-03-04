import * as THREE from "three"
import { Canvas, useThree } from "@react-three/fiber"
import { KTX2Loader } from "three-stdlib"
import { Gltf, Environment, CameraControls } from "@react-three/drei"

const CarScene: React.FC = () => {
  return (
    <div className='h-screen w-screen'>
      <Canvas camera={{ position: [-1, 0.5, 3] }} className='h-full w-full'>
        <Scene />

        <Environment background>
          <mesh scale={100}>
            <sphereGeometry args={[1, 64, 64]} />
            <meshBasicMaterial color='#393939' side={THREE.BackSide} />
          </mesh>
        </Environment>
        <ambientLight intensity={0.5} />

        <CameraControls />
      </Canvas>
    </div>
  )
}

const ktx2Loader = new KTX2Loader()
ktx2Loader.setTranscoderPath(
  `https://unpkg.com/three@0.169.0/examples/jsm/libs/basis/`
)

function Scene() {
  const { gl } = useThree()

  return (
    <>
      <Gltf
        src={"/assets/images/car.glb"}
        extendLoader={(loader) => {
          loader.setKTX2Loader(ktx2Loader.detectSupport(gl))
        }}
      />
      <Gltf
        src={"/assets/images/scene.glb"}
        extendLoader={(loader) => {
          loader.setKTX2Loader(ktx2Loader.detectSupport(gl))
        }}
      />
    </>
  )
}

export default CarScene
