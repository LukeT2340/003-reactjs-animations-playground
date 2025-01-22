import React, { useRef } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import * as THREE from "three"
import { TextureLoader } from "three"
import { Clouds, Cloud } from "@react-three/drei"
import { lerp } from "three/src/math/MathUtils"

const SectionOne: React.FC = () => {
  return (
    <section className='relative w-full h-screen z-10'>
      <Canvas
        camera={{
          position: [0, 0, 3],
          fov: 75,
          near: 3,
          far: 30,
        }}
      >
        <CameraController />
        <Background textureUrl='/assets/images/hero-parallax-3.jpg' />
        <ForegroundImage
          textureUrl='/assets/images/hero-parallax-1.png'
          position={[0, 0, -5]}
          size={[24, 13.5]}
        />
        <ForegroundImage
          textureUrl='/assets/images/hero-parallax-2.png'
          position={[0, 0, -8]}
          size={[40, 23]}
        />

        <Clouds material={THREE.MeshBasicMaterial} position={[0, -2, 2]}>
          <Cloud
            segments={5}
            bounds={[6, 6, 7]}
            volume={2}
            color='white'
            speed={0.1}
            seed={9}
            opacity={0.5}
          />
        </Clouds>
        <Clouds material={THREE.MeshBasicMaterial} position={[0, -2, -14]}>
          <Cloud
            segments={25}
            bounds={[5, 5, 7]}
            volume={2}
            color='white'
            speed={0.1}
            seed={3}
            opacity={0.6}
          />
        </Clouds>
        <Clouds material={THREE.MeshBasicMaterial} position={[0, -2, -17]}>
          <Cloud
            segments={45}
            bounds={[5, 5, 15]}
            volume={2}
            scale={4}
            color='white'
            speed={0.1}
            seed={3}
            opacity={0.8}
          />
        </Clouds>
      </Canvas>
      <div className='absolute left-[10%] bottom-[10%] z-50 text-white font-light pointer-events-none'>
        <h1 className='mb-10 text-[133px] leading-[130px] '>
          Collect. <br />
          Convert. Pay.
        </h1>
        <h6 className='uppercase font-bold'>Scroll to explore</h6>
      </div>
    </section>
  )
}

function CameraController() {
  const cameraRef = useRef<any>()

  useFrame((state) => {
    if (!cameraRef.current) {
      cameraRef.current = state.camera
    }

    // Get mouse position in normalized device coordinates (-1 to +1)
    const mouseX = state.pointer.x
    const mouseY = state.pointer.y

    // Smoothly interpolate the camera position using lerp
    cameraRef.current.position.x = lerp(
      cameraRef.current.position.x,
      mouseX * 0.2,
      0.1 // Lower values mean slower and smoother
    )
    cameraRef.current.position.y = lerp(
      cameraRef.current.position.y,
      mouseY * 0.2,
      0.1
    )
  })

  return null
}

function Background({ textureUrl }: { textureUrl: string }) {
  const texture = useLoader(TextureLoader, textureUrl)

  return (
    <mesh position={[0, 0, -10]}>
      <planeGeometry args={[80, 44]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  )
}

function ForegroundImage({
  textureUrl,
  position = [0, 0, 1],
  size = [16, 9],
}: {
  textureUrl: string
  position: [number, number, number]
  size: [number, number]
}) {
  const texture = useLoader(TextureLoader, textureUrl)

  return (
    <mesh position={position}>
      <planeGeometry args={size} />
      <meshBasicMaterial map={texture} transparent={true} side={2} />
    </mesh>
  )
}

export default SectionOne
