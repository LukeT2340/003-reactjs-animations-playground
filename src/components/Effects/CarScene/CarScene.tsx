import * as THREE from "three"
import { Canvas, useThree, useLoader } from "@react-three/fiber"
import { KTX2Loader } from "three-stdlib"
import { Gltf, Environment, CameraControls } from "@react-three/drei"
import { Suspense } from "react"
import { TextureLoader } from "three"

const CarScene: React.FC = () => {
  return (
    <div className='h-screen w-screen'>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>

        {/* Custom environment background */}
        <Environment background>
          <mesh scale={100}>
            <sphereGeometry args={[1, 64, 64]} />
            <meshBasicMaterial color='#393939' side={THREE.BackSide} />
          </mesh>
        </Environment>

        <ambientLight intensity={0.7} />
        <directionalLight intensity={0.6} position={[5, 5, 5]} />

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
  const carTexture = useLoader(TextureLoader, "/assets/images/Flar03Flip.png")
  carTexture.encoding = THREE.sRGBEncoding
  carTexture.flipY = true // Often needed for GLB models

  return (
    <>
      <Gltf
        src='/assets/images/car.glb'
        onLoad={(gltf) => {
          gltf.scene.traverse((child) => {
            if (child.isMesh) {
              // Create a new MeshStandardMaterial
              child.material = new THREE.MeshStandardMaterial({
                color: new THREE.Color("#000000"), // Change this to any color
                metalness: 1,
                roughness: 0.2,
              })
              child.material.needsUpdate = true
            }
          })
        }}
      />
      {/* Environment with fallback */}
      <Environment preset='sunset' background blur={0.5} />

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
