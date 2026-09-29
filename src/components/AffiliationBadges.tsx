import React from 'react';
import { 
  ShieldCheck, 
  ExternalLink, 
  FileCheck, 
  Building, 
  Award, 
  Globe2,
  CheckCircle2
} from 'lucide-react';
import { STATUTORY_ORGANIZATIONS } from '../data/musicData';
import { StatutoryAcronym } from '../types';
import { StatutoryLogo } from './StatutoryLogos';

interface AffiliationBadgesProps {
  onSelectOrg?: (acronym: StatutoryAcronym) => void;
  showDetails?: boolean;
}

export const AffiliationBadges: React.FC<AffiliationBadgesProps> = ({
  onSelectOrg,
  showDetails = true
}) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-red-700">
            <ShieldCheck className="w-4 h-4 text-red-600" />
            <span>Statutory Accreditation &amp; Governance</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            Certified South African Music Regulatory Affiliations
          </h3>
        </div>
        <p className="text-xs text-slate-500 max-w-md">
          Sanelow Label PTY Ltd Music Publishers maintains full statutory compliance and direct institutional membership with all four South African music rights regulatory bodies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {STATUTORY_ORGANIZATIONS.map((org) => (
          <div
            key={org.acronym}
            id={`statutory-card-${org.acronym.toLowerCase()}`}
            className="group relative bg-white rounded-xl border border-slate-200 hover:border-red-500/50 p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Official Real Logo Mark */}
              <div className="w-full flex items-center justify-between">
                <StatutoryLogo acronym={org.acronym} size="md" boxed />
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Accredited</span>
                </span>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 leading-snug">
                  {org.fullName}
                </h4>
                <div className="text-[11px] font-mono text-red-700 mt-1 font-semibold">
                  {org.rightsType.split('(')[0]}
                </div>
              </div>

              {showDetails && (
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {org.primaryMandate}
                </p>
              )}

              <div className="pt-2 border-t border-slate-100 space-y-1.5 text-[11px]">
                <div className="text-slate-500 font-mono">
                  Statute: <span className="text-slate-700 font-medium">{org.regulatoryStatute.split('(')[0]}</span>
                </div>
                <div className="text-slate-500 font-mono truncate">
                  Registered: <span className="text-red-700 font-bold">{org.sanelowRegistrationDetail.split('(')[1]?.replace(')', '') || 'Direct Publisher/Master'}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
              {onSelectOrg ? (
                <button
                  onClick={() => onSelectOrg(org.acronym)}
                  className="text-xs font-bold text-red-600 hover:text-red-800 flex items-center gap-1 cursor-pointer"
                >
                  <span>View Mandate &amp; Royalties</span>
                </button>
              ) : (
                <a
                  href={org.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-slate-700 hover:text-red-700 flex items-center gap-1"
                >
                  <span>Official Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}

              <span className="text-[10px] font-mono font-semibold text-slate-400">
                Est. {org.establishedYear}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
