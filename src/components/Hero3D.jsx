import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { Download, CheckCircle } from 'lucide-react';

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
                sizeAttenuation={true}
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
            innerRef.current.position.y = Math.sin(t * 1) * 0.05;
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

const Hero3D = () => {
    return (
        <div className="relative w-full h-[95vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0 bg-spider-black">
                <Canvas camera={{ position: [0, 0, 6], fov: 75 }} dpr={[1, 2]}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} color="#00f3ff" intensity={1} />
                    <pointLight position={[-10, -10, -10]} color="#ff0055" intensity={1} />
                    <GlitchGeometry />
                    <ParticleField />
                </Canvas>
            </div>

            <div className="relative z-10 text-center select-none px-6 md:px-12 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-6 flex flex-col items-center"
                >
                    <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                        <div className="px-4 py-1.5 border border-spider-cyan/30 rounded-full font-mono text-[9px] md:text-[11px] text-spider-cyan tracking-[0.2em] uppercase backdrop-blur-md flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-spider-cyan animate-pulse" />
                            STATUS: OPEN_FOR_MULTIDISCIPLINARY_ROLES
                        </div>
                        <div className="px-4 py-1.5 border border-spider-yellow/30 rounded-full font-mono text-[9px] md:text-[11px] text-spider-yellow tracking-[0.2em] uppercase backdrop-blur-md">
                            LEVEL: ASPIRING_DATA_SCIENTIST
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-bold font-tech text-white tracking-tighter relative inline-block leading-[0.85]">
                        <span className="relative z-10">SAADIA</span>
                        <span className="block text-spider-cyan animate-chromatic">ASGHAR</span>
                        <span className="absolute inset-0 text-spider-magenta opacity-10 blur-[2px] translate-x-1 translate-y-1 pointer-events-none uppercase">SAADIA ASGHAR</span>
                    </h1>

                    <p className="text-lg md:text-2xl lg:text-4xl font-accent text-white mt-10 tracking-wide max-w-3xl leading-relaxed">
                        Learning to <span className="text-spider-cyan font-bold lowercase italic">build with data</span> with
                        a <span className="text-spider-magenta font-bold lowercase italic">creative mindset</span>.
                    </p>

                    <div className="mt-12 flex flex-col md:flex-row gap-6">
                        <motion.a
                            href="https://drive.google.com/file/d/1B4TwI7EcYe7lEIeIeX_5r3XG-uowlPTZ/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 243, 255, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 bg-spider-cyan text-black font-tech font-black rounded-xl flex items-center gap-3 uppercase tracking-widest text-sm cursor-none"
                        >
                            <Download size={20} /> Download_Resume
                        </motion.a>
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                            className="px-10 py-5 border-2 border-white/20 text-white font-tech font-black rounded-xl uppercase tracking-widest text-sm backdrop-blur-md"
                        >
                            Explore_Portfolio
                        </motion.a>
                    </div>
                </motion.div>
            </div>


            <div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-halftone z-1" />

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
            >
                <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
            </motion.div>
        </div>
    );
};

export default Hero3D;
