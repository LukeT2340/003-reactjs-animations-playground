import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { lerp } from "three/src/math/MathUtils.js"

function CameraController() {
  const cameraRef = useRef<any>()

  useFrame((state) => {
    if (!cameraRef.current) {
      cameraRef.current = state.camera
    }

    const mouseX = state.pointer.x
    const mouseY = state.pointer.y

    cameraRef.current.position.x = lerp(
      cameraRef.current.position.x,
      mouseX * 0.8,
      0.02
    )

    cameraRef.current.position.y = lerp(
      cameraRef.current.position.y,
      mouseY * 0.8,
      0.02
    )

    // Uncomment if you also want the z position to change with mouse movement
    // cameraRef.current.position.z = lerp(
    //   cameraRef.current.position.z,
    //   mouseY ** 2 * 3 * mouseX ** 2 * 3,
    //   0.02
    // )
  })

  return null
}

export default CameraController
