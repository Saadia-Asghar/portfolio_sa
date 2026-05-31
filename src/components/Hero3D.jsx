import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { Download, MapPin, Trophy } from 'lucide-react';
import { CONTACT, PROFILE, HACKATHON_WINS } from '../data/portfolio';
import MarqueeTicker from './MarqueeTicker';

const ParticleField = () => {
  const points = useMemo(() => {
    const p = new Float32Array(100 * 3);
    for (let i = 0; i < 100; i++) {
      p[i * 3] = (Math.random() - 0.5) * 10;
      p[i * 3 + 1] = (Math.random() - 0.5) * 10;
      p[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return p;
  }, []);

  return (
    <Points positions={points} stride={3}>
      <PointMaterial transparent color="#00f3ff" size={0.022} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
    </Points>
  );
};

const GlitchGeometry = () => {
  const meshRef = useRef();
  useFrame((state) => {
    if (meshRef.current) meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });
  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2.2, 1]} />
      <meshBasicMaterial color="#00f3ff" wireframe transparent opacity={0.07} />
    </mesh>
  );
};

const Hero3D = () => (
  <div className="relative w-full overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-spider-cyan/[0.03] via-transparent to-spider-magenta/[0.04] pointer-events-none z-[1]" />

    <div className="relative min-h-[90vh] flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 75 }} dpr={[1, 1.5]}>
          <ambientLight intensity={0.35} />
          <pointLight position={[10, 10, 10]} color="#00f3ff" intensity={0.7} />
          <pointLight position={[-10, -10, -10]} color="#ff0055" intensity={0.5} />
          <GlitchGeometry />
          <ParticleField />
        </Canvas>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-6">
          <p className="text-[11px] font-mono uppercase tracking-[0.35em] text-spider-cyan">{PROFILE.title}</p>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold font-tech tracking-tight leading-[0.92]">
            <span className="text-white">SAADIA</span>
            <br />
            <span className="hero-gradient-name">ASGHAR</span>
          </h1>

          <p className="text-base md:text-lg font-tech text-gray-300 max-w-2xl mx-auto leading-relaxed">{PROFILE.heroLine}</p>

          <div className="flex flex-wrap justify-center gap-2 text-[10px] font-mono">
            <span className="px-3 py-1.5 rounded-full border border-spider-cyan/30 text-spider-cyan bg-spider-cyan/5">Build</span>
            <span className="px-3 py-1.5 rounded-full border border-spider-magenta/30 text-spider-magenta bg-spider-magenta/5">Grow</span>
            <span className="px-3 py-1.5 rounded-full border border-white/15 text-gray-400 flex items-center gap-1">
              <MapPin size={11} /> {CONTACT.location}
            </span>
            <span className="px-3 py-1.5 rounded-full border border-spider-yellow/30 text-spider-yellow bg-spider-yellow/5 flex items-center gap-1">
              <Trophy size={11} /> {HACKATHON_WINS.length} competitions
            </span>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
            <a href="#hackathons" className="btn-primary">Hackathons</a>
            <a href="#achievements" className="btn-secondary">Achievements</a>
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
