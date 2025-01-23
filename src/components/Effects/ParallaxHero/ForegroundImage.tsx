import { useLoader } from "@react-three/fiber"
import { TextureLoader } from "three"

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

export default ForegroundImage
