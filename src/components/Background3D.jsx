import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

const ParticleField = () => {
  const ref = useRef();
  // Reduce particle count on mobile for better performance
  const particleCount = window.innerWidth < 768 ? 1000 : 2000;

  // Generate random positions for particles
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, [particleCount]);

  // Animate particles
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.025;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00ffff"
        size={window.innerWidth < 768 ? 0.015 : 0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={window.innerWidth < 768 ? 0.4 : 0.6}
      />
    </Points>
  );
};

const FloatingGeometry = () => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
    }
  });

  // Hide floating geometry on mobile for better performance
  if (window.innerWidth < 768) return null;

  return (
    <mesh ref={meshRef} position={[3, 0, -5]}>
      <torusKnotGeometry args={[1, 0.3, 64, 16]} />
      <meshBasicMaterial
        color="#8b5cf6"
        wireframe
        transparent
        opacity={0.2}
      />
    </mesh>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={window.innerWidth < 768 ? 1 : window.devicePixelRatio}
        performance={{ min: 0.5 }}
      >
        <ParticleField />
        <FloatingGeometry />
        <ambientLight intensity={0.3} />
      </Canvas>
    </div>
  );
};

export default Background3D;