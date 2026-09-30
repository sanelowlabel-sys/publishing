import React from 'react';
import { 
  STATUTORY_ORGANIZATIONS, 
  CORPORATE_GOVERNANCE 
} from '../data/musicData';
import { 
  ShieldCheck, 
  Scale, 
  Building2, 
  ExternalLink, 
  FileText, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { ActiveTab, StatutoryAcronym } from '../types';
import { StatutoryLogo } from './StatutoryLogos';

interface FooterProps {
  onNavigate: (tab: ActiveTab) => void;
  onSelectOrg?: (acronym: StatutoryAcronym) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectOrg }) => {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      {/* Statutory Organizations Ribbon */}
      <div className="border-b border-slate-800 bg-black/60 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono text-red-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-red-500" />
                <span>Statutory Compliance &amp; Industry Accreditation</span>
              </span>
              <h3 className="text-lg font-bold text-white">
                Official Regulatory Affiliations in South Africa
              </h3>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Full publisher and master record company memberships guaranteeing statutory rights, reciprocal international collection, and transparent administration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STATUTORY_ORGANIZATIONS.map((org) => (
              <div
                key={org.acronym}
                className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 space-y-3 hover:border-red-500/50 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="bg-white p-2 sm:p-2.5 rounded-xl flex items-center justify-center shadow-xs">
                      <StatutoryLogo acronym={org.acronym} size="md" />
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                      Accredited
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-300 font-medium line-clamp-1">
                    {org.fullName}
                  </div>
                  <div className="text-[10px] text-red-400/90 font-mono line-clamp-1">
                    {org.rightsType.split('(')[0]}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px]">
                  {onSelectOrg ? (
                    <button
                      onClick={() => {
                        onNavigate('statutory');
                        onSelectOrg(org.acronym);
                      }}
                      className="text-slate-400 hover:text-white transition-colors cursor-pointer text-xs"
                    >
                      View Dossier
                    </button>
                  ) : null}
                  <a
                    href={org.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:text-red-300 flex items-center gap-1 font-mono text-[10px]"
                  >
                    <span>Official Portal</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Links & Company Details */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-13 h-13 rounded-xl bg-white border border-slate-700 shadow-xs flex items-center justify-center overflow-hidden shrink-0">
                <img
                  src="/sanelow-logo.jpg"
                  alt="Sanelow Label PTY Ltd Music Publishers Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight block">
                  SANELOW LABEL PTY LTD
                </span>
                <span className="text-[11px] font-mono text-red-500 font-bold uppercase tracking-wider">
                  Music Publishers &amp; Rights Administration
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              South African electronic and deep house music publishing house and master rightsholder, founded in 2015. Certified statutory affiliate of SAMRO, CAPASSO, RISA, and SAMPRA, providing one-stop licensing for global television, film, and digital media.
            </p>
            <div className="space-y-1.5 text-xs text-slate-400 font-mono">
              <div>CIPC Registration: <strong className="text-slate-200">{CORPORATE_GOVERNANCE.cipcRegistrationNumber}</strong></div>
              <div>Incorporated in South Africa (Companies Act 71 of 2008)</div>
              <div>SARS Tax Identification: <strong className="text-slate-200">{CORPORATE_GOVERNANCE.taxRegistrationNumber}</strong></div>
              <div>Authorized ISRC Allocator: <strong className="text-red-400">{CORPORATE_GOVERNANCE.regulatoryBodyRegistrations.nationalIsrcPrefix}</strong></div>
            </div>
          </div>

          {/* Column 2: Regulatory Links */}
          <div className="space-y-3 text-xs">
            <h4 className="font-mono font-bold text-red-400 uppercase tracking-wider">
              Statutory Bodies
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('statutory')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  SAMRO (Performing Rights)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('statutory')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  CAPASSO (Mechanicals)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('statutory')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  RISA (ISRC &amp; Certifications)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('statutory')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  SAMPRA (Needletime Rights)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('statutory')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  CISAC Reciprocal Network
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Publishing & Repertoire */}
          <div className="space-y-3 text-xs">
            <h4 className="font-mono font-bold text-red-400 uppercase tracking-wider">
              Publishing &amp; Sync
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                >
                  <BookOpen className="w-3 h-3 text-red-400" />
                  <span>About &amp; Publishing Guide</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('repertoire')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sanelow Music Catalog
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('sync')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  One-Stop Sync Licensing
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('sync')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sync Fee Estimator
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('cuesheet')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Cue Sheet Generator
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('governance')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Corporate Governance
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Registered Office */}
          <div className="space-y-3 text-xs text-slate-400">
            <h4 className="font-mono font-bold text-red-400 uppercase tracking-wider">
              Headquarters
            </h4>
            <div className="space-y-1 leading-relaxed">
              <div className="text-slate-200 font-semibold">{CORPORATE_GOVERNANCE.registeredOffice.building}</div>
              <div>{CORPORATE_GOVERNANCE.registeredOffice.floor}</div>
              <div>{CORPORATE_GOVERNANCE.registeredOffice.street}</div>
              <div>{CORPORATE_GOVERNANCE.registeredOffice.suburb}</div>
              <div>{CORPORATE_GOVERNANCE.registeredOffice.city}, {CORPORATE_GOVERNANCE.registeredOffice.country}</div>
            </div>
            <div className="pt-2 text-slate-300 space-y-1 font-mono text-[11px]">
              <div>Tel: {CORPORATE_GOVERNANCE.executiveContacts.directTelephone}</div>
              <div>Licensing: {CORPORATE_GOVERNANCE.executiveContacts.syncLicensingDesk}</div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright Bar */}
        <div className="pt-8 mt-8 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Sanelow Label PTY Ltd Music Publishers. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4 text-[11px] font-mono">
            <span>South African Copyright Act No. 98 of 1978</span>
            <span>Performers' Protection Act No. 11 of 1967</span>
            <span>ISRC ZA-SNL Registered Master Rightsholder</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
