import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Computer } from './Models/Computer-optimized'
import { OrbitControls } from '@react-three/drei'

const ContactExperience = () => {
  const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 1.5) : 1;

  return (
    <Canvas
      camera={{ position: [0, 3, 7], fov: 45 }}
      dpr={dpr}
      gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
      shadows={false}
    >
        <ambientLight intensity={0.35} color='#fff4e6'/>
        <directionalLight position={[5, 5, 3]} intensity={1.8} color='#ffd9b3'/>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        />

        <group scale={0.03} position={[0, -1.5, -2]}>
            <Computer />
        </group>

        <group scale={[1, 1, 1]}>
            <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[30, 30]} />
                <meshStandardMaterial color="#a46b2d" />
            </mesh>
        </group>
    </Canvas>
  )
}

export default ContactExperience