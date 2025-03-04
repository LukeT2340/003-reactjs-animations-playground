import { useLoader, useFrame } from '@react-three/fiber';
import { useState } from 'react';
import { TextureLoader } from 'three';

interface Props {
  textureUrl: string;
  position: [number, number, number];
  size: [number, number];
  adjustWithScroll?: boolean;
  adjustsWithScrollFactor?: number;
}

function ForegroundImage({
  textureUrl,
  position = [0, 0, 1],
  size = [16, 9],
  adjustWithScroll = false,
  adjustsWithScrollFactor = 10,
}: Props) {
  const [adjustedSize, setAdjustedSize] = useState<[number, number]>(size);
  const texture = useLoader(TextureLoader, textureUrl);

  useFrame(() => {
    if (!adjustWithScroll) return;

    const normalizedScroll = Math.min(window.scrollY / window.innerHeight, 1);

    if (normalizedScroll > 1) return;

    setAdjustedSize([
      size[0] + normalizedScroll ** 1 * adjustsWithScrollFactor,
      size[1] + (9 / 16) * normalizedScroll ** 1 * adjustsWithScrollFactor,
    ]);
  });

  return (
    <mesh position={position}>
      <planeGeometry args={adjustedSize} />
      <meshBasicMaterial map={texture} transparent={true} side={2} />
    </mesh>
  );
}

export default ForegroundImage;
