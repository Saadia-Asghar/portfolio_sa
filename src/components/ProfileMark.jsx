import React from 'react';
import { motion } from 'framer-motion';

const ProfileMark = () => (
  <motion.div
    className="profile-mark"
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.15 }}
    aria-hidden
  >
    <div className="profile-mark-card">
      <div className="profile-mark-accent" />
      <div className="profile-mark-body">
        <span className="profile-mark-monogram">S</span>
        <p className="profile-mark-name">Saadia Asghar</p>
        <p className="profile-mark-role">Data Science · Design · Growth</p>
        <div className="profile-mark-tracks" aria-hidden>
          <span className="profile-mark-track profile-mark-track-build">Build</span>
          <span className="profile-mark-track profile-mark-track-design">Design</span>
          <span className="profile-mark-track profile-mark-track-grow">Grow</span>
        </div>
      </div>
    </div>
  </motion.div>
);

export default ProfileMark;
