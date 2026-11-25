import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Room } from './Room'
import HeroLights from './HeroLights'
import Particles from './Particles'

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const containerRef = useRef(null);
    const [isInView, setIsInView] = useState(true);

    useEffect(() => {
      const node = containerRef.current;
      if (!node || typeof IntersectionObserver === 'undefined') return;

      const observer = new IntersectionObserver(
        ([entry]) => setIsInView(entry.isIntersecting),
        { threshold: 0.05 },
      );
      observer.observe(node);
      return () => observer.disconnect();
    }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 45 }}
        dpr={[1, 1.5]}
        frameloop={isInView ? 'always' : 'demand'}
        gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
      >
          <OrbitControls
              enablePan={false}
              enableZoom={!isTablet}
              maxDistance={20}
              minDistance={5}
              minPolarAngle={Math.PI / 5}
              maxPolarAngle={Math.PI / 2}
          />

          <HeroLights />

          <Particles count={isMobile ? 50 : 100} />

          <Suspense fallback={null}>
            <group
                scale={isMobile ? 0.7 : 1}
                position={[0, -3.5, 0]}
                rotation={[0, -Math.PI / 4, 0]}
            >
                <Room />
            </group>
          </Suspense>
      </Canvas>
    </div>
  )
}

export default HeroExperience