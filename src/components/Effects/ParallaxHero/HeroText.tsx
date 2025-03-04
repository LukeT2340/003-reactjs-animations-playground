import { Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const HeroText = () => {
  const h2ContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!h2ContainerRef.current) return;

      const normalizedScroll = window.scrollY / window.innerHeight;

      if (normalizedScroll > 1) return;

      h2ContainerRef.current.style.scale = (
        1 +
        normalizedScroll * 8
      ).toString();
      h2ContainerRef.current.style.transform = `translateY(${-4 * normalizedScroll}vh)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <mesh position={[0, 0, 0]}>
      <Html className="pointer-events-none" center={true} zIndexRange={[0, 10]}>
        <div className="mx-auto max-w-[541px] font-taiwan">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.1, ease: 'easeOut' }}
          >
            Travel through Taiwan
          </motion.h1>
          <div ref={h2ContainerRef} className="ml-5 lg:ml-10">
            <motion.h2
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.1, ease: 'easeOut' }}
            >
              your way
            </motion.h2>
          </div>
        </div>
      </Html>
    </mesh>
  );
};

export default HeroText;
