import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { MapPin, Trophy, Palette, Sparkles, ArrowDown } from 'lucide-react';
import { CONTACT, PROFILE, HACKATHON_WINS } from '../data/portfolio';
import MarqueeTicker from './MarqueeTicker';
import { ComicBurst, FloatingStickers, ZigzagStrip } from './ComicGraphics';

const PARTICLE_COLORS = ['#00f3ff', '#ff0055', '#f9ff00', '#7a00ff', '#b8ff00', '#ff6b00'];

const ParticleField = () => {
  const points = useMemo(() => {
    const p = new Float32Array(160 * 3);
    const c = new Float32Array(160 * 3);
    for (let i = 0; i < 160; i++) {
      p[i * 3] = (Math.random() - 0.5) * 12;
      p[i * 3 + 1] = (Math.random() - 0.5) * 12;
      p[i * 3 + 2] = (Math.random() - 0.5) * 12;
      const hex = PARTICLE_COLORS[i % PARTICLE_COLORS.length];
      const col = new THREE.Color(hex);
      c[i * 3] = col.r;
      c[i * 3 + 1] = col.g;
      c[i * 3 + 2] = col.b;
    }
    return { positions: p, colors: c };
  }, []);

  return (
    <Points positions={points.positions} colors={points.colors} stride={3}>
      <PointMaterial
        transparent
        vertexColors
        size={0.028}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const GlitchGeometry = () => {
  const meshRef = useRef();
  const meshRef2 = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) meshRef.current.rotation.y = t * 0.05;
    if (meshRef2.current) {
      meshRef2.current.rotation.x = t * 0.03;
      meshRef2.current.rotation.z = t * 0.02;
    }
  });

  return (
    <>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.2, 1]} />
        <meshBasicMaterial color="#00f3ff" wireframe transparent opacity={0.09} />
      </mesh>
      <mesh ref={meshRef2}>
        <torusGeometry args={[2.8, 0.02, 8, 48]} />
        <meshBasicMaterial color="#ff0055" transparent opacity={0.15} />
      </mesh>
    </>
  );
};

const Hero3D = () => (
  <div className="relative w-full overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-spider-cyan/[0.08] via-spider-purple/[0.03] to-spider-magenta/[0.08] pointer-events-none z-[1]" />
    <FloatingStickers />

    <div className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-12">
      <ComicBurst color="yellow" className="absolute top-[18%] left-[8%] opacity-20 hidden lg:block animate-color-pulse" size={120} />
      <ComicBurst color="magenta" className="absolute bottom-[28%] right-[6%] opacity-15 hidden lg:block" size={90} />

      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 75 }} dpr={[1, 1.5]}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} color="#00f3ff" intensity={0.8} />
          <pointLight position={[-10, -10, -10]} color="#ff0055" intensity={0.6} />
          <GlitchGeometry />
          <ParticleField />
        </Canvas>
      </div>

      <div className="relative z-10 px-4 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left space-y-6"
          >
            <p className="text-sm md:text-base font-accent text-spider-yellow italic">
              {PROFILE.heroGreeting}
            </p>

            <div className="hero-name-frame">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-tech tracking-tight leading-[0.95]">
                <span className="text-white drop-shadow-[0_0_30px_rgba(0,243,255,0.3)]">SAADIA</span>
                <br />
                <span className="hero-gradient-name animate-chromatic">ASGHAR</span>
              </h1>
            </div>

            <p className="text-base md:text-lg font-tech text-gray-200 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {PROFILE.heroTagline}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 text-[10px] font-mono">
              <span className="px-3 py-1.5 rounded-full border-2 border-spider-cyan/50 text-spider-cyan bg-spider-cyan/10">Build</span>
              <span className="px-3 py-1.5 rounded-full border-2 border-spider-magenta/50 text-spider-magenta bg-spider-magenta/10">Grow</span>
              <span className="px-3 py-1.5 rounded-full border-2 border-spider-yellow/50 text-spider-yellow bg-spider-yellow/10 flex items-center gap-1">
                <Palette size={11} /> Design
              </span>
              <span className="px-3 py-1.5 rounded-full border border-spider-lime/40 text-spider-lime bg-spider-lime/5 flex items-center gap-1">
                <MapPin size={11} /> {CONTACT.location}
              </span>
              <span className="px-3 py-1.5 rounded-full border border-spider-orange/40 text-spider-orange bg-spider-orange/5 flex items-center gap-1">
                <Trophy size={11} /> {HACKATHON_WINS.length} hackathons
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 pt-2">
              <a href="#connect" className="btn-primary">Contact me</a>
              <a href="#about" className="btn-secondary flex items-center justify-center gap-2">
                More about me <ArrowDown size={14} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="profile-frame">
              <div className="profile-frame-inner">
                <img
                  src={CONTACT.profileImage}
                  alt={CONTACT.name}
                  className="w-full h-full object-cover object-top"
                  width={320}
                  height={400}
                />
              </div>
              <span className="profile-badge profile-badge-cyan">GIKI &apos;28</span>
              <span className="profile-badge profile-badge-magenta">Data Science</span>
              <motion.span
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-2 hidden sm:block"
              >
                <Sparkles className="text-spider-yellow" size={28} />
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>

    <ZigzagStrip className="opacity-80" />
    <MarqueeTicker />
  </div>
);

export default Hero3D;
