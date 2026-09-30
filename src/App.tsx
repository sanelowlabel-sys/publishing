import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatutoryRightsSection } from './components/StatutoryRightsSection';
import { SyncLicensingHub } from './components/SyncLicensingHub';
import { RepertoireCatalog } from './components/RepertoireCatalog';
import { CueSheetGenerator } from './components/CueSheetGenerator';
import { CorporateGovernance } from './components/CorporateGovernance';
import { AffiliationBadges } from './components/AffiliationBadges';
import { AboutPublishingSection } from './components/AboutPublishingSection';
import { Footer } from './components/Footer';
import { ActiveTab, StatutoryAcronym } from './types';
import { 
  ShieldCheck, 
  Scale, 
  Clapperboard, 
  Disc3, 
  FileSpreadsheet, 
  Building2, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2,
  BookOpen,
  Cpu,
  Layers,
  Percent,
  Zap,
  Database
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('overview');
  const [selectedStatutoryOrg, setSelectedStatutoryOrg] = useState<StatutoryAcronym>('SAMRO');
  const [preselectedTrackId, setPreselectedTrackId] = useState<string | undefined>(undefined);

  const handleNavigate = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectStatutoryOrg = (acronym: StatutoryAcronym) => {
    setSelectedStatutoryOrg(acronym);
    setActiveTab('statutory');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRequestSync = (trackId: string) => {
    setPreselectedTrackId(trackId);
    setActiveTab('sync');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col antialiased">
      {/* Primary Header & Navigation */}
      <Navbar
        activeTab={activeTab}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-16 animate-in fade-in duration-300">
            {/* Hero Section */}
            <HeroSection onNavigate={handleNavigate} />

            {/* Statutory Affiliations & Governance Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AffiliationBadges onSelectOrg={handleSelectStatutoryOrg} />
            </div>

            {/* About & Digital Music Publishing Spotlight Banner */}
            <section className="py-12 bg-white border-y border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-red-100 text-red-900 border border-red-300">
                      <BookOpen className="w-3.5 h-3.5 text-red-700" />
                      <span>About &amp; Publishing Intelligence</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                      How Digital Music Publishing Works at Sanelow Label
                    </h2>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      Established in 2015, <strong className="text-slate-900">Sanelow Label PTY Ltd Music Publishing</strong> bridges the underground energy of South African electronic house with global digital service providers (Spotify, Apple Music, YouTube Music, Deezer) and international television synchronization.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                        <span className="font-bold text-xs text-slate-900 block">Performance Royalties</span>
                        <p className="text-[11px] text-slate-500">Collected via SAMRO from broadcast airplay, public venues, and interactive streaming performance fractions.</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                        <span className="font-bold text-xs text-slate-900 block">Mechanical Royalties</span>
                        <p className="text-[11px] text-slate-500">Administered via CAPASSO for interactive DSP reproductions, physical pressings, and digital downloads.</p>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => handleNavigate('about')}
                        className="py-2.5 px-5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Explore Full Publishing Guide &amp; Waterfall</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleNavigate('statutory')}
                        className="py-2.5 px-5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
                      >
                        <Scale className="w-3.5 h-3.5 text-red-400" />
                        <span>View 4 Statutory Bodies</span>
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-slate-950 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-5 shadow-lg">
                    <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                      <div className="w-12 h-12 rounded-xl bg-white border border-slate-700 shadow-sm flex items-center justify-center overflow-hidden shrink-0">
                        <img src="/sanelow-logo.jpg" alt="Sanelow Logo" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-red-400 font-bold uppercase">Pre-Cleared Catalog</span>
                        <h4 className="text-base font-bold text-white">100% One-Stop Master &amp; Publishing</h4>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      Eliminate delays of coordinating separated publishers and writers. Sanelow Label PTY Ltd Music Publishing controls 100% of worldwide master recordings and composition rights on all catalog releases.
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>24h Turnaround</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>ISWC &amp; ISRC Tagged</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Multi-Track Stems</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Global Indemnity</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => handleNavigate('sync')}
                        className="py-3 px-4 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-colors w-full text-center flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                      >
                        <Clapperboard className="w-4 h-4" />
                        <span>Launch One-Stop Sync Desk</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Digital Music Licensing & Online Distribution Operations Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-red-700">
                    <Cpu className="w-4 h-4 text-red-600" />
                    <span>Digital Rights Architecture &amp; Online Distribution</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                    Online Music Licensing &amp; Streaming Operations
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => handleNavigate('about')}
                  className="text-xs font-bold text-red-600 hover:text-red-800 flex items-center gap-1.5 cursor-pointer font-mono"
                >
                  <span>Launch Interactive Streaming Calculator</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* 3 Digital Licensing Pillar Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Pillar 1: DSP Economics */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                      <Percent className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900">
                      DSP Streaming Royalty Waterfall
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Interactive streams trigger dual royalties under Act 98 of 1978. Every stream allocates ~55% to Master Owners (Sanelow) and ~15% to Publishing split equally between CAPASSO (Mechanicals) and SAMRO (Performance).
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500">Master: <strong>55%</strong></span>
                    <span className="text-red-700">Publishing: <strong>15%</strong></span>
                  </div>
                </div>

                {/* Pillar 2: UGC & Fingerprinting */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">
                      <Zap className="w-5 h-5 text-red-400" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900">
                      YouTube Content ID &amp; Social UGC
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Every catalog release is acoustically fingerprinted and claimed across YouTube, TikTok, Instagram Reels, and Meta. Video usage is monetized via ad-revenue share without DMCA takedowns.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500">Automated Match</span>
                    <span className="text-emerald-700 font-bold">AdSense Monetized</span>
                  </div>
                </div>

                {/* Pillar 3: DDEX & Metadata */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-red-100/60 text-red-800 flex items-center justify-center font-bold">
                      <Database className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900">
                      Zero "Black Box" Lost Royalties
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      By delivering DDEX ERN release feeds and direct CWR work registrations with ISRC (ZA-SNL) and ISWC codes, we eradicate metadata mismatch and prevent unclaimed digital royalty leakage.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500">ISRC + ISWC</span>
                    <span className="text-slate-900 font-bold">DDEX Standard</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Compact Master Repertoire Registry Reference Strip */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
                <div>
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                    Master Catalog Reference
                  </span>
                  <h4 className="text-lg font-bold text-slate-900">
                    Representative Pre-Cleared Repertoire
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => handleNavigate('repertoire')}
                  className="text-xs font-bold text-red-600 hover:text-red-800 flex items-center gap-1.5 cursor-pointer font-mono"
                >
                  <span>Browse Full Repertoire Archive &amp; Stems</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Compact 3-card Preview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center gap-3">
                  <img src="/covers/real/snl-048.jpg" alt="SNL048" className="w-14 h-14 rounded-lg object-cover border border-slate-200 shrink-0" onError={(e) => { e.currentTarget.src = '/covers/snl-048.svg'; }} />
                  <div className="min-w-0">
                    <span className="font-mono text-[10px] font-bold text-red-700 bg-red-50 px-1.5 py-0.5 rounded border border-red-200">SNL048</span>
                    <div className="text-xs font-bold text-slate-900 truncate mt-1">Found (EP)</div>
                    <div className="text-[11px] text-slate-500 truncate">Themetique • Deep House</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center gap-3">
                  <img src="/covers/real/snl-046.jpg" alt="SNL046" className="w-14 h-14 rounded-lg object-cover border border-slate-200 shrink-0" onError={(e) => { e.currentTarget.src = '/covers/snl-046.svg'; }} />
                  <div className="min-w-0">
                    <span className="font-mono text-[10px] font-bold text-red-700 bg-red-50 px-1.5 py-0.5 rounded border border-red-200">SNL046</span>
                    <div className="text-xs font-bold text-slate-900 truncate mt-1">Sanelow Dark, Vol. 22</div>
                    <div className="text-[11px] text-slate-500 truncate">Various Artists • Tech House</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center gap-3">
                  <img src="/covers/real/snl-045.jpg" alt="SNL045" className="w-14 h-14 rounded-lg object-cover border border-slate-200 shrink-0" onError={(e) => { e.currentTarget.src = '/covers/snl-045.svg'; }} />
                  <div className="min-w-0">
                    <span className="font-mono text-[10px] font-bold text-red-700 bg-red-50 px-1.5 py-0.5 rounded border border-red-200">SNL045</span>
                    <div className="text-xs font-bold text-slate-900 truncate mt-1">Home Town</div>
                    <div className="text-[11px] text-slate-500 truncate">Thaps De Producer • Deep House</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Broadcaster Cue Sheet Banner */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
              <div className="bg-slate-950 text-white rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md border border-slate-800">
                <div className="space-y-2">
                  <span className="text-xs font-mono text-red-400 uppercase tracking-wider font-bold">
                    For Film Editors &amp; Television Networks
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    Need an Automated CISAC / SAMRO Cue Sheet?
                  </h3>
                  <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
                    Generate standardized broadcast cue sheet documentation formatted with official CAE/IPI numbers, registered ISWC codes, and verified composer splits in seconds.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleNavigate('cuesheet')}
                  className="py-3 px-6 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-colors shrink-0 flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>Open Cue Sheet Generator</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ABOUT & PUBLISHING GUIDE TAB */}
        {activeTab === 'about' && (
          <div className="animate-in fade-in duration-300">
            <AboutPublishingSection
              onNavigateToSync={() => handleNavigate('sync')}
              onNavigateToStatutory={() => handleNavigate('statutory')}
            />
          </div>
        )}

        {/* STATUTORY BODIES TAB */}
        {activeTab === 'statutory' && (
          <div className="animate-in fade-in duration-300">
            <StatutoryRightsSection initialOrg={selectedStatutoryOrg} />
          </div>
        )}

        {/* SYNC & LICENSING TAB */}
        {activeTab === 'sync' && (
          <div className="animate-in fade-in duration-300">
            <SyncLicensingHub preselectedTrackId={preselectedTrackId} />
          </div>
        )}

        {/* REPERTOIRE CATALOG TAB */}
        {activeTab === 'repertoire' && (
          <div className="animate-in fade-in duration-300">
            <RepertoireCatalog
              onRequestSync={handleRequestSync}
              onViewCueSheet={() => handleNavigate('cuesheet')}
            />
          </div>
        )}

        {/* CUE SHEET GENERATOR TAB */}
        {activeTab === 'cuesheet' && (
          <div className="animate-in fade-in duration-300">
            <CueSheetGenerator />
          </div>
        )}

        {/* CORPORATE & GOVERNANCE TAB */}
        {activeTab === 'governance' && (
          <div className="animate-in fade-in duration-300">
            <CorporateGovernance />
          </div>
        )}
      </main>

      {/* Primary Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectOrg={handleSelectStatutoryOrg}
      />
    </div>
  );
}
