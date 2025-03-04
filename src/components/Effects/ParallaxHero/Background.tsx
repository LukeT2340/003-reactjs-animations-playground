import { useFrame, useLoader } from '@react-three/fiber';
import { useState } from 'react';
import { TextureLoader } from 'three';

interface Props {
  textureUrl: string;
  size: [number, number];
  position: [number, number, number];
  adjustWithScroll?: boolean;
  adjustsWithScrollFactor?: number;
}

function Background({
  textureUrl,
  size,
  position,
  adjustWithScroll = false,
  adjustsWithScrollFactor = 10,
}: Props) {
  const texture = useLoader(TextureLoader, textureUrl);
  const [adjustedSize, setAdjustedSize] = useState<[number, number]>(size);

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
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

export default Background;
