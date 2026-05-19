import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { Download, MapPin } from 'lucide-react';
import { CONTACT } from '../data/portfolio';

const ParticleField = () => {
  const points = useMemo(() => {
    const p = new Float32Array(150 * 3);
    for (let i = 0; i < 150; i++) {
      p[i * 3] = (Math.random() - 0.5) * 10;
      p[i * 3 + 1] = (Math.random() - 0.5) * 10;
      p[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return p;
  }, []);

  return (
    <Points positions={points} stride={3}>
      <PointMaterial
        transparent
        color="#00f3ff"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const GlitchGeometry = () => {
  const meshRef = useRef();
  const innerRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.08;
      meshRef.current.rotation.z = t * 0.04;
    }
    if (innerRef.current) {
      innerRef.current.position.y = Math.sin(t) * 0.05;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 1]} />
        <meshBasicMaterial color="#00f3ff" wireframe transparent opacity={0.1} />
      </mesh>
      <mesh ref={innerRef}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <MeshDistortMaterial
          color="#ff0055"
          speed={1.5}
          distort={0.2}
          radius={1}
          emissive="#ff0055"
          emissiveIntensity={0.5}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
};

const Hero3D = () => (
  <motion.div className="relative w-full min-h-[90vh] md:min-h-[95vh] flex items-center justify-center overflow-hidden pt-20">
    <div className="absolute inset-0 z-0 bg-spider-black">
      <Canvas camera={{ position: [0, 0, 6], fov: 75 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#00f3ff" intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#ff0055" intensity={1} />
        <GlitchGeometry />
        <ParticleField />
      </Canvas>
    </div>

    <div className="relative z-10 text-center select-none px-4 md:px-12 flex flex-col items-center max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="space-y-5 flex flex-col items-center"
      >
        <div className="flex flex-wrap justify-center gap-3 mb-2">
          <div className="px-4 py-1.5 border border-spider-cyan/30 rounded-full font-mono text-[9px] md:text-[10px] text-spider-cyan tracking-[0.15em] uppercase backdrop-blur-md flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-spider-cyan animate-pulse" />
            Open for internships & roles
          </div>
          <div className="px-4 py-1.5 border border-spider-yellow/30 rounded-full font-mono text-[9px] md:text-[10px] text-spider-yellow tracking-[0.15em] uppercase backdrop-blur-md flex items-center gap-2">
            <MapPin size={12} /> {CONTACT.location}
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] font-bold font-tech text-white tracking-tighter relative leading-[0.9]">
          <span className="relative z-10">SAADIA</span>
          <span className="block text-spider-cyan animate-chromatic">ASGHAR</span>
        </h1>

        <p className="text-base sm:text-lg md:text-2xl font-accent text-white/90 mt-6 tracking-wide max-w-2xl leading-relaxed px-2">
          B.Sc. Data Science @ GIKI ·{' '}
          <span className="text-spider-cyan font-bold">Product & UI/UX design</span> ·{' '}
          <span className="text-spider-magenta font-bold">Full-stack builds</span>
        </p>

        <p className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.25em] max-w-lg">
          Hack@GIKI 2nd · Imagine Cup · hackathon builder
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
          <a
            href={CONTACT.resumePath}
            download="Saadia_Asghar_Resume.png"
            data-cursor="interactive"
            className="px-8 md:px-10 py-4 md:py-5 bg-spider-cyan text-black font-tech font-black rounded-xl flex items-center justify-center gap-3 uppercase tracking-widest text-xs md:text-sm hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] transition-shadow"
          >
            <Download size={20} /> Download Resume
          </a>
          <a
            href="#projects"
            data-cursor="interactive"
            className="px-8 md:px-10 py-4 md:py-5 border-2 border-white/20 text-white font-tech font-black rounded-xl uppercase tracking-widest text-xs md:text-sm backdrop-blur-md hover:bg-white/10 transition-colors text-center"
          >
            View Projects
          </a>
        </div>
      </motion.div>
    </div>

    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30"
      aria-hidden
    >
      <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
    </motion.div>
  </motion.div>
);

export default Hero3D;
