import React from 'react';

interface ChurchSilhouetteProps {
  className?: string;
}

// Simplified solid outline for the 3D depth/shadow layer (no arch or diamond cutouts)
const shadowPath = [
  'M23 3 H27 V7 H31 V10 H27 V15 H23 V10 H19 V7 H23 Z',
  'M25 15 C22 15 22 18 25 18 C28 18 28 15 25 15 Z',
  'M25 18 C18 18 14 24 14 30 H36 C36 24 32 18 25 18 Z',
  'M17 30 H33 V33 H17 Z',
  'M12 33 H38 V39 H12 Z',
  'M14 39 H36 V76 H14 Z',
  'M11 76 H39 V80 H11 Z',
  'M9 80 H41 V120 H9 Z',
].join(' ');

// Detailed front face with pointed arches, diamond cutouts, and architectural details
const frontPath = [
  // Cross
  'M23 3 H27 V7 H31 V10 H27 V15 H23 V10 H19 V7 H23 Z',
  // Ball finial
  'M25 15 C22 15 22 18 25 18 C28 18 28 15 25 15 Z',
  // Dome
  'M25 18 C18 18 14 24 14 30 H36 C36 24 32 18 25 18 Z',
  // Drum
  'M17 30 H33 V33 H17 Z',
  // Upper decorative band
  'M12 33 H38 V39 H12 Z',
  // Diamond cutouts in upper band
  'M19 36 L21 34 L23 36 L21 38 Z',
  'M24 36 L26 34 L28 36 L26 38 Z',
  'M29 36 L31 34 L33 36 L31 38 Z',
  // Belfry body
  'M14 39 H36 V76 H14 Z',
  // Left pointed arch cutout
  'M18 73 V50 C18 44 19.5 43 20.5 43 C21.5 43 23 44 23 50 V73 Z',
  // Right pointed arch cutout
  'M27 73 V50 C27 44 28.5 43 29.5 43 C30.5 43 32 44 32 50 V73 Z',
  // Lower band
  'M11 76 H39 V80 H11 Z',
  // Base
  'M9 80 H41 V120 H9 Z',
].join(' ');

const ChurchSilhouette: React.FC<ChurchSilhouetteProps> = ({ className }) => (
  <svg
    viewBox="0 0 56 120"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* 3D depth shadow layer */}
    <path
      d={shadowPath}
      fill="currentColor"
      opacity="0.5"
      transform="translate(4, -2)"
    />
    {/* Detailed front face */}
    <path
      fillRule="evenodd"
      d={frontPath}
      fill="currentColor"
    />
  </svg>
);

export default ChurchSilhouette;
