import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

const LightParticleField = () => {
  const ref = useRef();
  // Reduce particle count on mobile for better performance
  const particleCount = window.innerWidth < 768 ? 800 : 1500;

  // Generate random positions for particles
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }
    return positions;
  }, [particleCount]);

  // Animate particles with slower movement
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.02;
      ref.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#6b7280"
        size={window.innerWidth < 768 ? 0.02 : 0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={window.innerWidth < 768 ? 0.15 : 0.2}
      />
    </Points>
  );
};

const LightFloatingShapes = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.03;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
    }
  });

  // Hide floating shapes on mobile for better performance
  if (window.innerWidth < 768) return null;

  return (
    <group ref={groupRef}>
      {/* Floating sphere */}
      <mesh position={[4, 2, -8]}>
        <sphereGeometry args={[0.8, 16, 16]} />
        <meshBasicMaterial
          color="#d1d5db"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* Floating cube */}
      <mesh position={[-3, -1, -6]}>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshBasicMaterial
          color="#9ca3af"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
      
      {/* Floating cylinder */}
      <mesh position={[2, -2, -10]}>
        <cylinderGeometry args={[0.6, 0.6, 1.5, 12]} />
        <meshBasicMaterial
          color="#6b7280"
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>
    </group>
  );
};

const LightBackgroundElements = () => {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <group ref={ref}>
      {/* Large background rings */}
      <mesh position={[0, 0, -15]}>
        <ringGeometry args={[8, 10, 32]} />
        <meshBasicMaterial
          color="#e5e7eb"
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>
      
      <mesh position={[0, 0, -20]}>
        <ringGeometry args={[12, 14, 32]} />
        <meshBasicMaterial
          color="#d1d5db"
          wireframe
          transparent
          opacity={0.08}
        />
      </mesh>
    </group>
  );
};

const Background3DLight = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
        dpr={window.innerWidth < 768 ? 1 : window.devicePixelRatio}
        performance={{ min: 0.5 }}
      >
        <LightParticleField />
        <LightFloatingShapes />
        <LightBackgroundElements />
        <ambientLight intensity={0.6} />
      </Canvas>
    </div>
  );
};

export default Background3DLight; 