import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { Download, MapPin, Sparkles } from 'lucide-react';
import { CONTACT } from '../data/portfolio';
import MarqueeTicker from './MarqueeTicker';

const ParticleField = () => {
  const points = useMemo(() => {
    const p = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      p[i * 3] = (Math.random() - 0.5) * 12;
      p[i * 3 + 1] = (Math.random() - 0.5) * 12;
      p[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return p;
  }, []);

  return (
    <Points positions={points} stride={3}>
      <PointMaterial
        transparent
        color="#00f3ff"
        size={0.025}
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
      innerRef.current.position.y = Math.sin(t * 1.2) * 0.08;
      innerRef.current.scale.setScalar(1 + Math.sin(t * 2) * 0.03);
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.2, 1]} />
        <meshBasicMaterial color="#00f3ff" wireframe transparent opacity={0.12} />
      </mesh>
      <mesh ref={innerRef}>
        <sphereGeometry args={[0.75, 32, 32]} />
        <MeshDistortMaterial
          color="#ff0055"
          speed={2}
          distort={0.25}
          radius={1}
          emissive="#ff0055"
          emissiveIntensity={0.6}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
};

const Hero3D = () => (
  <div className="relative w-full overflow-hidden">
    <div className="relative min-h-[92vh] md:min-h-[95vh] flex items-center justify-center pt-20">
      {/* Halftone wash */}
      <div className="absolute inset-0 halftone-corner opacity-[0.07] pointer-events-none z-[1]" />

      {/* Floating comic stickers */}
      <span
        className="floating-sticker bg-spider-yellow text-black hidden md:block"
        style={{ top: '22%', left: '8%', '--sticker-rotate': '-12deg' }}
      >
        HACK@GIKI 2ND
      </span>
      <span
        className="floating-sticker bg-spider-magenta text-white hidden lg:block"
        style={{ top: '28%', right: '10%', '--sticker-rotate': '8deg', animationDelay: '1s' }}
      >
        UI/UX DESIGNER
      </span>
      <span
        className="floating-sticker bg-spider-cyan text-black hidden md:block"
        style={{ bottom: '28%', left: '12%', '--sticker-rotate': '5deg', animationDelay: '2s' }}
      >
        DATA SCIENCE
      </span>

      <div className="absolute inset-0 z-0 bg-spider-black/80">
        <Canvas camera={{ position: [0, 0, 6], fov: 75 }} dpr={[1, 2]}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} color="#00f3ff" intensity={1.2} />
          <pointLight position={[-10, -10, -10]} color="#ff0055" intensity={1.2} />
          <pointLight position={[0, 5, 5]} color="#f9ff00" intensity={0.4} />
          <GlitchGeometry />
          <ParticleField />
        </Canvas>
      </div>

      <div className="relative z-10 text-center select-none px-4 md:px-12 flex flex-col items-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6 flex flex-col items-center"
        >
          <div className="flex flex-wrap justify-center gap-3">
            <span className="comic-sticker bg-spider-cyan text-black px-4 py-1.5 font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
              Open for roles
            </span>
            <span className="comic-sticker bg-spider-yellow text-black px-4 py-1.5 font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase flex items-center gap-2">
              <MapPin size={12} /> {CONTACT.location}
            </span>
          </div>

          <div className="hero-name-frame py-4 px-2">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-spider-yellow text-lg md:text-2xl tracking-widest mb-2"
            >
              PORTFOLIO // 2026
            </motion.p>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[8.5rem] font-bold font-tech text-white tracking-tighter leading-[0.88]">
              <span className="block relative">
                SAADIA
                <span className="absolute inset-0 text-spider-magenta opacity-20 translate-x-[3px] translate-y-[2px] pointer-events-none" aria-hidden>
                  SAADIA
                </span>
              </span>
              <span className="block text-spider-cyan animate-chromatic text-comic-pop font-display tracking-wide">
                ASGHAR
              </span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="comic-speech text-base sm:text-lg md:text-xl font-tech text-gray-300 max-w-xl leading-relaxed mx-auto"
          >
            I turn <span className="text-spider-cyan font-bold">data</span>,{' '}
            <span className="text-spider-magenta font-bold">design</span> &{' '}
            <span className="text-spider-yellow font-bold">code</span> into products people actually want to use —
            from arcade learning apps to global hackathon wins.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-2 text-[9px] font-mono uppercase tracking-[0.2em] text-gray-500">
            {['Skill Issue', 'Vyrothon', 'EcoBite', 'CallPilot'].map((tag) => (
              <span key={tag} className="px-3 py-1 border border-white/10 rounded-full bg-white/5">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <motion.a
              href={CONTACT.resumePath}
              download="Saadia_Asghar_Resume.png"
              data-cursor="interactive"
              whileHover={{ scale: 1.04, rotate: -1 }}
              whileTap={{ scale: 0.98 }}
              className="comic-sticker bg-spider-cyan text-black px-8 md:px-10 py-4 md:py-5 font-tech font-black flex items-center justify-center gap-3 uppercase tracking-widest text-xs md:text-sm shadow-[4px_4px_0_rgba(0,243,255,0.4)]"
            >
              <Download size={20} /> Resume
            </motion.a>
            <motion.a
              href="#projects"
              data-cursor="interactive"
              whileHover={{ scale: 1.04, rotate: 1 }}
              whileTap={{ scale: 0.98 }}
              className="comic-sticker bg-transparent text-white border-2 border-white/30 px-8 md:px-10 py-4 md:py-5 font-tech font-black uppercase tracking-widest text-xs md:text-sm backdrop-blur-md hover:bg-white/10 transition-colors text-center flex items-center justify-center gap-2"
            >
              <Sparkles size={18} /> Projects
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40 z-10"
        aria-hidden
      >
        <span className="text-[8px] font-mono tracking-[0.4em] uppercase mb-2 text-gray-500">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-spider-cyan to-transparent" />
      </motion.div>
    </div>

    <MarqueeTicker />
  </div>
);

export default Hero3D;
