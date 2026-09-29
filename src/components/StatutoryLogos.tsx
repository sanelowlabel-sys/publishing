import React from 'react';
import { StatutoryAcronym } from '../types';

interface StatutoryLogoProps {
  acronym: StatutoryAcronym;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  inverted?: boolean;
  boxed?: boolean;
}

export const StatutoryLogo: React.FC<StatutoryLogoProps> = ({
  acronym,
  className = '',
  size = 'md',
  inverted = false,
  boxed = false
}) => {
  const sizeClasses = {
    sm: 'h-8 sm:h-9 max-w-[160px]',
    md: 'h-11 sm:h-12 max-w-[210px]',
    lg: 'h-15 sm:h-16 max-w-[280px]',
    xl: 'h-20 sm:h-24 max-w-[360px]'
  }[size];

  const logoSrc = {
    SAMRO: '/logos/samro.svg',
    CAPASSO: '/logos/capasso.svg',
    RISA: '/logos/risa.svg',
    SAMPRA: '/logos/sampra.svg'
  }[acronym];

  const altTexts = {
    SAMRO: 'SAMRO - Southern African Music Rights Organisation',
    CAPASSO: 'CAPASSO - The Mechanical Rights Hub',
    RISA: 'RiSA - Recording Industry of South Africa',
    SAMPRA: 'SAMPRA - South African Music Performance Rights Association'
  }[acronym];

  const containerClasses = boxed || inverted
    ? 'bg-white rounded-xl border border-slate-200/90 shadow-2xs p-2 sm:p-2.5'
    : 'bg-transparent';

  return (
    <div
      className={`inline-flex items-center justify-center transition-all ${containerClasses} ${className}`}
    >
      <img
        src={logoSrc}
        alt={altTexts}
        className={`${sizeClasses} w-auto object-contain shrink-0`}
        loading="lazy"
      />
    </div>
  );
};
