import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const TechIcon = ({ model }) => {
    const scene = useGLTF(model.modelPath);
    useEffect(() => {
        if (model.name === 'Interactive Developer') {
            scene.scene.traverse((child) => {
                if (child.isMesh && child.name === 'Object_5') {
                    child.material = new THREE.MeshStandardMaterial({ color: 'white' });
                }
            })
        }
    }, [model.name, scene.scene])

  const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 1.5) : 1;

  return (
    <Canvas
      dpr={dpr}
      gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
      frameloop="demand"
    >
        <ambientLight intensity={0.25} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.2} />
        <Float speed={3.2} rotationIntensity={0.25} floatIntensity={0.5}>
            <group scale={model.scale} rotation={model.rotation}>
                <primitive object={scene.scene}/>
            </group>
        </Float>
    </Canvas>
  )
}

export default TechIcon