import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { Download, MapPin } from 'lucide-react';
import { CONTACT, PROFILE } from '../data/portfolio';
import MarqueeTicker from './MarqueeTicker';

const ParticleField = () => {
  const points = useMemo(() => {
    const p = new Float32Array(120 * 3);
    for (let i = 0; i < 120; i++) {
      p[i * 3] = (Math.random() - 0.5) * 10;
      p[i * 3 + 1] = (Math.random() - 0.5) * 10;
      p[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return p;
  }, []);

  return (
    <Points positions={points} stride={3}>
      <PointMaterial transparent color="#00f3ff" size={0.02} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
    </Points>
  );
};

const GlitchGeometry = () => {
  const meshRef = useRef();
  useFrame((state) => {
    if (meshRef.current) meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.06;
  });
  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2, 1]} />
      <meshBasicMaterial color="#00f3ff" wireframe transparent opacity={0.08} />
    </mesh>
  );
};

const Hero3D = () => (
  <div className="relative w-full overflow-hidden">
    <div className="relative min-h-[88vh] flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0 bg-spider-black/90">
        <Canvas camera={{ position: [0, 0, 6], fov: 75 }} dpr={[1, 1.5]}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} color="#00f3ff" intensity={0.8} />
          <pointLight position={[-10, -10, -10]} color="#ff0055" intensity={0.6} />
          <GlitchGeometry />
          <ParticleField />
        </Canvas>
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="flex flex-wrap justify-center gap-2 text-[10px] font-mono uppercase tracking-widest">
            <span className="px-3 py-1 rounded-full border border-spider-cyan/30 text-spider-cyan">Build track</span>
            <span className="px-3 py-1 rounded-full border border-spider-magenta/30 text-spider-magenta">Grow track</span>
            <span className="px-3 py-1 rounded-full border border-white/15 text-gray-400 flex items-center gap-1">
              <MapPin size={11} /> {CONTACT.location}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-tech text-white tracking-tight leading-[0.95]">
            SAADIA <span className="text-spider-cyan">ASGHAR</span>
          </h1>

          <p className="text-lg md:text-xl font-tech text-gray-300 leading-relaxed">{PROFILE.heroLine}</p>
          <p className="text-sm text-gray-500 font-mono">{PROFILE.subtitle}</p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
            <a href="#achievements" className="btn-primary">View achievements</a>
            <a href={CONTACT.resumePath} download="Saadia_Asghar_Resume.png" className="btn-secondary">
              <Download size={16} className="inline mr-2 -mt-0.5" /> Resume
            </a>
          </div>
        </motion.div>
      </div>
    </div>
    <MarqueeTicker />
  </div>
);

export default Hero3D;
