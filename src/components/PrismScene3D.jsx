import React, { useRef, useMemo, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sparkles, Stars, Ring } from '@react-three/drei';
import * as THREE from 'three';

const SIGNALS = [
  { color: '#34d399', position: [2.4, 0.8, 0.5], scale: 0.42 },
  { color: '#a78bfa', position: [-2.2, -0.6, 0.8], scale: 0.38 },
  { color: '#fb7185', position: [0.4, -2.1, -0.3], scale: 0.36 },
];

const SignalOrb = ({ color, position, scale }) => (
  <Float speed={1.8} rotationIntensity={0.35} floatIntensity={0.85}>
    <mesh position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhysicalMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.35}
        roughness={0.15}
        metalness={0.65}
        transparent
        opacity={0.92}
      />
    </mesh>
  </Float>
);

const PrismCore = () => {
  const ringRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ringRef.current) ringRef.current.rotation.z = t * 0.15;
  });

  return (
    <group>
      <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.4}>
        <mesh>
          <icosahedronGeometry args={[1.15, 5]} />
          <MeshDistortMaterial
            color="#6366f1"
            emissive="#4338ca"
            emissiveIntensity={0.25}
            distort={0.38}
            speed={1.8}
            roughness={0.08}
            metalness={0.85}
          />
        </mesh>
      </Float>
      <Ring ref={ringRef} args={[1.85, 1.95, 64]}>
        <meshBasicMaterial color="#818cf8" transparent opacity={0.35} side={THREE.DoubleSide} />
      </Ring>
      <Ring rotation={[Math.PI / 2.2, 0, 0]} args={[2.35, 2.38, 64]}>
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.12} side={THREE.DoubleSide} />
      </Ring>
    </group>
  );
};

const SceneContent = () => (
  <>
    <ambientLight intensity={0.35} />
    <pointLight position={[4, 4, 4]} intensity={1.2} color="#a78bfa" />
    <pointLight position={[-4, -2, 2]} intensity={0.8} color="#34d399" />
    <pointLight position={[0, -4, -2]} intensity={0.6} color="#fb7185" />
    <Stars radius={40} depth={30} count={1200} factor={2.2} saturation={0.15} fade speed={0.4} />
    <Sparkles count={48} scale={8} size={2} speed={0.25} opacity={0.35} color="#c4b5fd" />
    <PrismCore />
    {SIGNALS.map((s) => (
      <SignalOrb key={s.color} {...s} />
    ))}
  </>
);

const PrismFallback = () => (
  <div className="prism-scene-fallback" aria-hidden>
    <div className="prism-fallback-orb prism-fallback-orb-build" />
    <div className="prism-fallback-orb prism-fallback-orb-design" />
    <div className="prism-fallback-orb prism-fallback-orb-grow" />
    <div className="prism-fallback-core" />
  </div>
);

const PrismScene3D = ({ className = '' }) => {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const handler = (e) => setReduceMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  if (reduceMotion) {
    return (
      <div className={`prism-scene-wrap ${className}`}>
        <PrismFallback />
      </div>
    );
  }

  return (
    <div className={`prism-scene-wrap ${className}`}>
      <Suspense fallback={<PrismFallback />}>
        <Canvas
          camera={{ position: [0, 0, 5.5], fov: 42 }}
          dpr={[1, 1.5]}
          gl={{ alpha: true, antialias: true }}
          style={{ background: 'transparent' }}
        >
          <SceneContent />
        </Canvas>
      </Suspense>
      <div className="prism-scene-glow" aria-hidden />
    </div>
  );
};

export default PrismScene3D;
