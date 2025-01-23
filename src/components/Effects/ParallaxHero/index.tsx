import React from "react"
import { Canvas } from "@react-three/fiber"
import * as THREE from "three"
import { Clouds, Cloud } from "@react-three/drei"
import CameraController from "./CameraController"
import Background from "./Background"
import ForegroundImage from "./ForegroundImage"

const ParallaxHero: React.FC = () => {
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
        <Background
          textureUrl='/assets/images/ParallaxHero/hero-parallax-3.jpg'
          position={[0, 0, -10]}
          size={[80, 44]}
        />
        <ForegroundImage
          textureUrl='/assets/images/ParallaxHero/hero-parallax-1.png'
          position={[0, 0, -5]}
          size={[24, 13.5]}
        />
        <ForegroundImage
          textureUrl='/assets/images/ParallaxHero/hero-parallax-2.png'
          position={[0, 0, -8]}
          size={[40, 23]}
        />

        <Clouds material={THREE.MeshBasicMaterial} position={[0, -2, 2]}>
          <Cloud
            segments={5}
            bounds={[6, 6, 7]}
            volume={2}
            color='white'
            speed={0.2}
            seed={3}
            opacity={0.4}
          />
        </Clouds>
        <Clouds material={THREE.MeshBasicMaterial} position={[0, -2, -14]}>
          <Cloud
            segments={25}
            bounds={[5, 5, 7]}
            volume={2}
            color='white'
            speed={0.1}
            seed={5}
            opacity={0.4}
          />
        </Clouds>
        <Clouds material={THREE.MeshBasicMaterial} position={[0, -2, -17]}>
          <Cloud
            segments={45}
            bounds={[5, 5, 5]}
            volume={2}
            scale={4}
            color='white'
            speed={0.2}
            seed={4}
            opacity={0.4}
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

export default ParallaxHero
