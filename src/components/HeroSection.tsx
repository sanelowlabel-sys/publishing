import React from 'react';
import { 
  ShieldCheck, 
  Scale, 
  Clapperboard, 
  Disc3, 
  ArrowRight, 
  CheckCircle2, 
  Globe2, 
  BookOpen,
  Sparkles,
  Lock,
  Layers
} from 'lucide-react';
import { ActiveTab } from '../types';
import { StatutoryLogo } from './StatutoryLogos';

interface HeroSectionProps {
  onNavigate: (tab: ActiveTab) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Subtle architectural background texture */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-70" />
      <div className="absolute -top-40 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="space-y-8">
        {/* Hero Title & Value Proposition with Real Logo Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-red-100 text-red-900 border border-red-300">
              <Sparkles className="w-3.5 h-3.5 text-red-700" />
              <span>Digital Music Publishing &amp; Streaming Rights Administration</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Digital Music Publishing &amp; <br />
              <span className="text-red-600">Online Rights Administration.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
              <strong className="text-slate-900 font-semibold">Sanelow Label PTY Ltd Music Publishing</strong> is a certified South African music publishing house and master administrator founded in 2015. We administer digital streaming royalties across global DSPs (Spotify, Apple Music, YouTube Music, Deezer), algorithmic social monetization (YouTube Content ID, TikTok, Meta), and statutory rights collections through <strong className="text-slate-900">SAMRO, CAPASSO, RISA, and SAMPRA</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onNavigate('about')}
                className="py-3.5 px-6 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Online Publishing &amp; Streaming Guide</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('sync')}
                className="py-3.5 px-5 rounded-xl border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm transition-all flex items-center gap-2 shadow-2xs cursor-pointer"
              >
                <Clapperboard className="w-4 h-4 text-red-600" />
                <span>Sync &amp; Master Licensing Desk</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('statutory')}
                className="py-3.5 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <Scale className="w-4 h-4 text-red-400" />
                <span>SAMRO • CAPASSO • RISA • SAMPRA</span>
              </button>
            </div>
          </div>

          {/* Right Brand Badge Card */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-full max-w-sm bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-5 relative">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 shadow-sm shrink-0 flex items-center justify-center overflow-hidden">
                  <img
                    src="/sanelow-logo.jpg"
                    alt="Sanelow Label PTY Ltd Music Publishers Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-red-700 font-bold bg-red-50 px-2 py-0.5 rounded border border-red-200 inline-block mb-1">
                    Official Trademark
                  </span>
                  <h3 className="font-extrabold text-base text-slate-900 leading-tight">
                    Sanelow Label
                  </h3>
                  <div className="text-xs text-red-700 font-mono font-bold">
                    PTY Ltd Music Publishers
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-3 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>100% Pre-Cleared One-Stop Sync</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Full ISWC &amp; ISRC Registry Embedded</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>24-Hour Synchronization Turnaround</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Global CISAC / BIEM Reciprocal Royalties</span>
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] font-mono text-slate-400 uppercase">Sanelow Catalog</span>
                  <span className="font-mono font-bold text-xs text-slate-900">SNL001 – SNL048</span>
                </div>
                <button
                  onClick={() => onNavigate('repertoire')}
                  className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Official Statutory Badges Row */}
        <div className="pt-4 border-t border-slate-200 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-red-600" />
              <span>Direct Statutory Accreditation &amp; Royalty Governance</span>
            </span>
            <button
              onClick={() => onNavigate('statutory')}
              className="text-xs font-mono font-semibold text-red-600 hover:text-red-800 flex items-center gap-1"
            >
              <span>Explore Collection Mechanics</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button
              onClick={() => onNavigate('statutory')}
              className="p-4 bg-white rounded-xl border border-slate-200 hover:border-red-500/50 shadow-2xs hover:shadow-xs transition-all flex items-center justify-center cursor-pointer group"
            >
              <StatutoryLogo acronym="SAMRO" size="md" />
            </button>

            <button
              onClick={() => onNavigate('statutory')}
              className="p-4 bg-white rounded-xl border border-slate-200 hover:border-red-500/50 shadow-2xs hover:shadow-xs transition-all flex items-center justify-center cursor-pointer group"
            >
              <StatutoryLogo acronym="CAPASSO" size="md" />
            </button>

            <button
              onClick={() => onNavigate('statutory')}
              className="p-4 bg-white rounded-xl border border-slate-200 hover:border-red-500/50 shadow-2xs hover:shadow-xs transition-all flex items-center justify-center cursor-pointer group"
            >
              <StatutoryLogo acronym="RISA" size="md" />
            </button>

            <button
              onClick={() => onNavigate('statutory')}
              className="p-4 bg-white rounded-xl border border-slate-200 hover:border-red-500/50 shadow-2xs hover:shadow-xs transition-all flex items-center justify-center cursor-pointer group"
            >
              <StatutoryLogo acronym="SAMPRA" size="md" />
            </button>
          </div>
        </div>

        {/* Key Metrics / Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">
              4 of 4
            </div>
            <div className="text-xs font-bold text-slate-800">
              Statutory Bodies
            </div>
            <p className="text-[11px] text-slate-500">
              Direct institutional membership with SAMRO, CAPASSO, RISA &amp; SAMPRA.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-red-600 font-mono">
              100%
            </div>
            <div className="text-xs font-bold text-slate-800">
              One-Stop Control
            </div>
            <p className="text-[11px] text-slate-500">
              Both Master Recording and Musical Work Publishing cleared simultaneously.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">
              24-48h
            </div>
            <div className="text-xs font-bold text-slate-800">
              Licensing Turnaround
            </div>
            <p className="text-[11px] text-slate-500">
              Fast-track contract execution for film, television drama, and commercial sync.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-red-600 font-mono">
              54
            </div>
            <div className="text-xs font-bold text-slate-800">
              African &amp; Global DSPs
            </div>
            <p className="text-[11px] text-slate-500">
              Multi-territory digital mechanical and performing rights administration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
