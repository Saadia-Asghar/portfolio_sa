import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverType, setHoverType] = useState(null);

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)');
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;

    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });

    const handleMouseOver = (e) => {
      const target =
        e.target.closest('[data-cursor]') || e.target.closest('a') || e.target.closest('button');
      if (target) {
        setIsHovering(true);
        setHoverType(target.getAttribute('data-cursor') || 'interactive');
      } else {
        setIsHovering(false);
        setHoverType(null);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [enabled]);

  if (!enabled) return null;

  const ringClass =
    hoverType === 'design'
      ? 'border-spider-magenta bg-spider-magenta/10'
      : hoverType === 'interactive'
        ? 'border-spider-yellow bg-spider-yellow/10'
        : 'border-spider-cyan bg-spider-cyan/10';

  const dotClass =
    hoverType === 'design'
      ? 'bg-spider-magenta'
      : hoverType === 'interactive'
        ? 'bg-spider-yellow'
        : 'bg-spider-cyan';

  const lineClass =
    hoverType === 'design'
      ? 'bg-spider-magenta'
      : hoverType === 'interactive'
        ? 'bg-spider-yellow'
        : 'bg-spider-cyan';

  return (
    <motion.div className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block">
      <motion.div
        className="relative"
        animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.5 }}
      >
        <motion.div
          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${ringClass}`}
          animate={{ scale: isHovering ? 2 : 1, rotate: isHovering ? 180 : 0 }}
        >
          <motion.div animate={{ scale: isHovering ? 0 : 1 }} className={`w-1 h-1 rounded-full ${dotClass}`} />
          <AnimatePresence>
            {isHovering && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className={`w-full h-px absolute ${lineClass}`} />
                <div className={`h-full w-px absolute ${lineClass}`} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;
