import { useLoader } from "@react-three/fiber"
import { TextureLoader } from "three"

interface Props {
  textureUrl: string
  size: [number, number]
  position: [number, number, number]
}

function Background({ textureUrl, size, position }: Props) {
  const texture = useLoader(TextureLoader, textureUrl)

  return (
    <mesh position={position}>
      <planeGeometry args={size} />
      <meshBasicMaterial map={texture} />
    </mesh>
  )
}

export default Background
