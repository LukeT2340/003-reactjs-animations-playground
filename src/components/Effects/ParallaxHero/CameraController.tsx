import { useFrame } from '@react-three/fiber';
import { useRef, useEffect, useState } from 'react';
import { lerp } from 'three/src/math/MathUtils.js';

function CameraController() {
  const cameraRef = useRef<any>();
  const timeRef = useRef(0);
  const [deviceMotion, setDeviceMotion] = useState({
    alpha: 0,
    beta: 0,
    gamma: 0,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const detectMobile = () => {
      return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    };

    setIsMobile(detectMobile());

    if (detectMobile()) {
      const handleOrientation = (event: DeviceOrientationEvent) => {
        const normalizedScroll = window.scrollY / window.innerHeight;
        if (normalizedScroll > 1) return;

        setDeviceMotion({
          alpha: event.alpha || 0, // Yaw
          beta: event.beta || 0, // Pitch
          gamma: event.gamma || 0, // Roll
        });
      };

      window.addEventListener('deviceorientation', handleOrientation);

      return () => {
        window.removeEventListener('deviceorientation', handleOrientation);
      };
    }
  }, []);

  const zAnimation = {
    duration: 2,
    startZ: 1.8,
    endZ: 3,
  };

  useFrame((state, delta) => {
    if (!cameraRef.current) {
      cameraRef.current = state.camera;
      cameraRef.current.position.z = zAnimation.startZ;
    }

    timeRef.current += delta;
    const progress = Math.min(timeRef.current / zAnimation.duration, 1);
    const eased = 1 - Math.pow(1 - progress, 2);

    let targetX = 0;
    let targetY = 0;

    if (isMobile) {
      // Use gyroscope data for mobile control
      const { beta, gamma } = deviceMotion;
      targetX = lerp(cameraRef.current.position.x, gamma * 0.03, 0.05);
      targetY = lerp(cameraRef.current.position.y, beta * 0.002, 0.05);
    } else {
      // Use mouse-based control for desktop
      const mouseX = state.pointer.x;
      const mouseY = state.pointer.y;
      targetX = lerp(cameraRef.current.position.x, mouseX * 0.3, 0.01);
      targetY = lerp(cameraRef.current.position.y, mouseY * 0.3, 0.01);
    }

    cameraRef.current.position.x = targetX;
    cameraRef.current.position.y = targetY;
    cameraRef.current.position.z = lerp(
      zAnimation.startZ,
      zAnimation.endZ,
      eased
    );
  });

  return null;
}

export default CameraController;
