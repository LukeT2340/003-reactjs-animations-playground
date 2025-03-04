import React, { useEffect, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import * as THREE from "three"
import { Clouds, Cloud } from "@react-three/drei"
import { EffectComposer, DepthOfField } from "@react-three/postprocessing"
import CameraController from "./CameraController"
import Background from "./Background"
import ForegroundImage from "./ForegroundImage"
import HeroText from "./HeroText"

const Hero: React.FC = () => {
  const canvasContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!canvasContainerRef.current) return

      const scrollY = window.scrollY
      const normalizedScroll = scrollY / window.innerHeight
      if (normalizedScroll > 1) {
        canvasContainerRef.current.style.display = "none"
        return
      }
      canvasContainerRef.current.style.display = "block"
      canvasContainerRef.current.style.opacity = (
        1 - normalizedScroll
      ).toString()
    }

    document.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section className='hero z-10'>
      <div className='block-one relative z-10 h-screen w-screen bg-orange'>
        <div
          className='fixed inset-0 z-10 h-full w-full'
          ref={canvasContainerRef}
        >
          <Canvas
            camera={{
              position: [0, 0, 3],
              fov: 72,
              near: 3,
              far: 30,
            }}
          >
            <CameraController />
            <ForegroundImage
              textureUrl='/assets/images/ParallaxHero/Front.png'
              position={[0, 0, -2]}
              size={[16, 9]}
              adjustWithScroll={true}
              adjustsWithScrollFactor={4}
            />
            <ForegroundImage
              textureUrl='/assets/images/ParallaxHero/Mid.png'
              position={[0, 0, -4]}
              size={[24, 13.5]}
              adjustWithScroll={true}
              adjustsWithScrollFactor={4}
            />
            <ForegroundImage
              textureUrl='/assets/images/ParallaxHero/Back.png'
              position={[0, 0, -6]}
              size={[28, 15.75]}
              adjustWithScroll={true}
              adjustsWithScrollFactor={1}
            />
            <ForegroundImage
              textureUrl='/assets/images/ParallaxHero/Back-Silhouette.png'
              position={[0, 0, -8]}
              size={[34, 19.7]}
              adjustWithScroll={false}
              adjustsWithScrollFactor={24}
            />
            <Background
              textureUrl='/assets/images/ParallaxHero/Sky.png'
              position={[0, 0, -14]}
              size={[55, 31]}
            />
            <Clouds material={THREE.MeshBasicMaterial} position={[0, -2, -1]}>
              <Cloud
                segments={40}
                bounds={[11, 10, -12]}
                volume={5}
                color='white'
                speed={0.2}
                seed={32}
                opacity={0.05}
              />
            </Clouds>
            <Clouds material={THREE.MeshBasicMaterial} position={[0, -2, -2]}>
              <Cloud
                segments={15}
                bounds={[8, 3, -1]}
                volume={2}
                color='white'
                speed={0.2}
                seed={19}
                opacity={0.03}
              />
            </Clouds>
            <HeroText />

            <EffectComposer multisampling={0}>
              <DepthOfField
                focusDistance={0.02}
                focalLength={0.5}
                bokehScale={6}
                height={240}
                width={480}
              />
            </EffectComposer>
          </Canvas>
        </div>
      </div>
    </section>
  )
}

export default Hero
