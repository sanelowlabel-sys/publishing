import React, { useState } from 'react';
import { 
  STATUTORY_ORGANIZATIONS 
} from '../data/musicData';
import { StatutoryAcronym, StatutoryOrganization } from '../types';
import { 
  ShieldCheck, 
  Scale, 
  Coins, 
  FileSpreadsheet, 
  ExternalLink, 
  Building2, 
  Globe2, 
  CheckCircle2, 
  Layers, 
  BookOpen,
  ArrowRight,
  Info,
  Radio,
  Tv,
  Disc,
  Headphones,
  FileCheck,
  Calculator,
  Percent,
  Sparkles,
  Zap
} from 'lucide-react';
import { StatutoryLogo } from './StatutoryLogos';

interface StatutoryRightsSectionProps {
  initialOrg?: StatutoryAcronym;
}

export const StatutoryRightsSection: React.FC<StatutoryRightsSectionProps> = ({
  initialOrg = 'SAMRO'
}) => {
  const [selectedAcronym, setSelectedAcronym] = useState<StatutoryAcronym>(initialOrg);
  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'royalties' | 'collection' | 'splits' | 'simulator'>('overview');

  // Interactive Simulator State
  const [simulationScenario, setSimulationScenario] = useState<'streaming' | 'tv-sync' | 'radio' | 'commercial' | 'downloads'>('streaming');

  const currentOrg: StatutoryOrganization = STATUTORY_ORGANIZATIONS.find(
    (o) => o.acronym === selectedAcronym
  ) || STATUTORY_ORGANIZATIONS[0];

  return (
    <section id="statutory-rights-section" className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="border-b border-slate-200 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-red-100 text-red-900 border border-red-300 mb-3">
          <Scale className="w-3.5 h-3.5 text-red-700" />
          <span>Statutory Regulatory Framework &amp; Rights Administration</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          South African Music Rights Regulatory Bodies
        </h2>
        <p className="mt-3 text-base text-slate-600 max-w-3xl leading-relaxed">
          <strong className="text-slate-900">Sanelow Label PTY Ltd Music Publishing</strong> operates with absolute statutory rigor under the South African Copyright Act No. 98 of 1978 and Performers' Protection Act No. 11 of 1967. Below is a comprehensive breakdown of our direct affiliations with <strong className="text-red-700">SAMRO</strong>, <strong className="text-teal-700">CAPASSO</strong>, <strong className="text-amber-700">RISA</strong>, and <strong className="text-purple-700">SAMPRA</strong>, illustrating how each organisation collects and distributes royalties across broadcasting, digital streaming, and synchronization.
        </p>
      </div>

      {/* Dual Copyright Architecture Infographic */}
      <div className="bg-slate-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono text-red-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-red-400" />
              <span>Legal Architecture of Music Rights in South Africa</span>
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">
              The Dual-Copyright Structure (Under Act 98 of 1978)
            </h3>
          </div>
          <div className="text-xs text-slate-400 font-mono">
            Every recorded song embodies two distinct, legally protected copyrights:
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Side A: Composition */}
          <div className="bg-slate-900/90 rounded-xl p-6 border border-slate-700/80 space-y-4">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-red-400 bg-red-950/80 px-2.5 py-1 rounded border border-red-800">
                <BookOpen className="w-3.5 h-3.5" />
                <span>COPYRIGHT #1: MUSICAL COMPOSITION &amp; LYRICS</span>
              </span>
              <span className="text-xs font-mono text-slate-400">Underlying Musical Work</span>
            </div>
            
            <p className="text-sm text-slate-300">
              The musical arrangement, chords, melodies, rhythms, and lyrics conceived by the composer, author, and beatmaker.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="bg-white px-2.5 py-1.5 rounded-lg flex items-center justify-center shadow-xs">
                    <StatutoryLogo acronym="SAMRO" size="sm" />
                  </div>
                </div>
                <div className="text-xs font-bold text-slate-200">Performing Rights</div>
                <p className="text-[11px] text-slate-400">
                  Royalties when compositions are broadcast on radio, TV, digital streaming, or performed live in venues.
                </p>
                <div className="text-[10px] font-mono text-red-400 font-bold pt-1 border-t border-slate-800">
                  Split: 50% Author / 50% Publisher
                </div>
              </div>

              <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="bg-white px-2.5 py-1.5 rounded-lg flex items-center justify-center shadow-xs">
                    <StatutoryLogo acronym="CAPASSO" size="sm" />
                  </div>
                </div>
                <div className="text-xs font-bold text-teal-200">Mechanical Rights</div>
                <p className="text-[11px] text-slate-400">
                  Royalties when compositions are pressed, reproduced, downloaded, or streamed on-demand on DSPs.
                </p>
                <div className="text-[10px] font-mono text-teal-400 font-bold pt-1 border-t border-slate-800">
                  100% to Music Publisher
                </div>
              </div>
            </div>
          </div>

          {/* Side B: Sound Recording */}
          <div className="bg-slate-900/90 rounded-xl p-6 border border-slate-700/80 space-y-4">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-red-400 bg-red-950/80 px-2.5 py-1 rounded border border-red-800">
                <Disc className="w-3.5 h-3.5" />
                <span>COPYRIGHT #2: THE SOUND RECORDING (MASTER)</span>
              </span>
              <span className="text-xs font-mono text-slate-400">Phonogram Master</span>
            </div>

            <p className="text-sm text-slate-300">
              The recorded performance captured on audio tape/digital files, including production, mixing, and mastering.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="bg-white px-2.5 py-1.5 rounded-lg flex items-center justify-center shadow-xs">
                    <StatutoryLogo acronym="RISA" size="sm" />
                  </div>
                </div>
                <div className="text-xs font-bold text-amber-200">Master Association &amp; ISRC</div>
                <p className="text-[11px] text-slate-400">
                  ISRC allocator (ZA-SNL), official stream/sales certifications (Gold/Platinum), and anti-piracy enforcement.
                </p>
                <div className="text-[10px] font-mono text-amber-400 font-bold pt-1 border-t border-slate-800">
                  100% Master Owner Protection
                </div>
              </div>

              <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="bg-white px-2.5 py-1.5 rounded-lg flex items-center justify-center shadow-xs">
                    <StatutoryLogo acronym="SAMPRA" size="sm" />
                  </div>
                </div>
                <div className="text-xs font-bold text-purple-200">Needletime / Neighbouring</div>
                <p className="text-[11px] text-slate-400">
                  Royalties when master sound recordings are played on radio, television, hospitality venues, and retail.
                </p>
                <div className="text-[10px] font-mono text-purple-400 font-bold pt-1 border-t border-slate-800">
                  Split: 50% Master / 50% Performer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Tabs for the 4 Organisations */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h3 className="text-xl font-extrabold text-slate-900">
            Select Statutory Body to Inspect Operations &amp; Royalty Collections
          </h3>
          <span className="text-xs font-mono text-slate-500">
            Regulated by CIPC &amp; SA Copyright Act
          </span>
        </div>

        {/* Organisation Selector Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {STATUTORY_ORGANIZATIONS.map((org) => {
            const isSelected = selectedAcronym === org.acronym;
            return (
              <button
                key={org.acronym}
                type="button"
                onClick={() => setSelectedAcronym(org.acronym)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                  isSelected
                    ? 'bg-white border-red-600 shadow-md ring-2 ring-red-500/20'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white shadow-2xs'
                }`}
              >
                <div className="w-full flex items-center justify-between">
                  <StatutoryLogo acronym={org.acronym} size="sm" />
                  {isSelected && (
                    <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
                  )}
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">{org.acronym}</div>
                  <div className="text-[10px] text-slate-500 font-mono truncate">{org.rightsType.split('(')[0]}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Organisation Detail Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <StatutoryLogo acronym={currentOrg.acronym} size="md" />
                <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-mono font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Sanelow Registered Member</span>
                </span>
              </div>
              <h4 className="text-xl font-extrabold text-slate-900">
                {currentOrg.fullName}
              </h4>
              <p className="text-xs text-slate-600 font-mono">
                Statutory Grounding: {currentOrg.regulatoryStatute}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <a
                href={currentOrg.website}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 rounded-xl border border-slate-300 hover:border-slate-400 text-xs font-semibold text-slate-700 flex items-center gap-1.5 transition-colors"
              >
                <span>Visit {currentOrg.acronym} Official Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Sub Navigation */}
          <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-3">
            <button
              onClick={() => setActiveSubTab('overview')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeSubTab === 'overview'
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Mandate &amp; Coverage
            </button>
            <button
              onClick={() => setActiveSubTab('royalties')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeSubTab === 'royalties'
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              How Royalties are Calculated
            </button>
            <button
              onClick={() => setActiveSubTab('collection')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeSubTab === 'collection'
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Collection Sources
            </button>
            <button
              onClick={() => setActiveSubTab('splits')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeSubTab === 'splits'
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Statutory Split Formulas
            </button>
            <button
              onClick={() => setActiveSubTab('simulator')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeSubTab === 'simulator'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Interactive Royalty Simulator
            </button>
          </div>

          {/* Content Views */}
          {activeSubTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h5 className="text-xs font-mono font-bold uppercase text-slate-500">Primary Mandate</h5>
                  <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                    {currentOrg.primaryMandate}
                  </p>
                </div>
                <div className="space-y-3">
                  <h5 className="text-xs font-mono font-bold uppercase text-slate-500">Who It Protects</h5>
                  <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                    {currentOrg.whoItProtects}
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h5 className="text-xs font-mono font-bold uppercase text-slate-500">Key Functions &amp; Powers</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentOrg.keyFunctions.map((fn, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{fn}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSubTab === 'royalties' && (
            <div className="space-y-6">
              <div className="bg-red-50/50 p-6 rounded-xl border border-red-200 space-y-3">
                <h5 className="text-xs font-mono font-bold uppercase text-red-900 flex items-center gap-2">
                  <Coins className="w-4 h-4 text-red-600" />
                  <span>Calculation Methodology &amp; Airplay Detection</span>
                </h5>
                <p className="text-sm text-slate-800 leading-relaxed">
                  {currentOrg.howRoyaltiesAreCalculated}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <h6 className="text-xs font-bold text-slate-900">International Reciprocal Alliances</h6>
                  <ul className="text-xs text-slate-600 space-y-1">
                    {currentOrg.internationalAffiliations.map((affil, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <Globe2 className="w-3.5 h-3.5 text-slate-400" />
                        <span>{affil}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <h6 className="text-xs font-bold text-slate-900">Forensic Audit Standards</h6>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {currentOrg.auditStandards}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeSubTab === 'collection' && (
            <div className="space-y-4">
              <h5 className="text-xs font-mono font-bold uppercase text-slate-500">
                Entities Licensed by {currentOrg.acronym}
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentOrg.whoItCollectsFrom.map((source, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs text-slate-800 font-medium">
                    <span className="w-6 h-6 rounded-lg bg-red-100 text-red-700 flex items-center justify-center font-mono font-bold text-[10px] shrink-0">
                      {idx + 1}
                    </span>
                    <span>{source}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSubTab === 'splits' && (
            <div className="space-y-6">
              <div className="bg-slate-900 text-white p-6 rounded-xl space-y-3">
                <h5 className="text-xs font-mono font-bold uppercase text-red-400">
                  Mandatory Statutory Split Formula
                </h5>
                <p className="text-base text-slate-200 font-medium leading-relaxed">
                  {currentOrg.splitFormula}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <h6 className="font-bold text-slate-900">Sanelow Label PTY Ltd Registration Credential:</h6>
                <p className="font-mono text-slate-700 bg-white p-3 rounded-lg border border-slate-200">
                  {currentOrg.sanelowRegistrationDetail}
                </p>
              </div>
            </div>
          )}

          {activeSubTab === 'simulator' && (
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-mono font-bold text-red-700 uppercase">Interactive Simulation</span>
                    <h5 className="text-lg font-extrabold text-slate-900">
                      Select Commercial Scenario to Trace Multi-Society Royalty Flow
                    </h5>
                  </div>
                  <span className="text-xs font-mono bg-white px-3 py-1 rounded-full border border-slate-200 text-slate-600">
                    Live Calculation
                  </span>
                </div>

                {/* Scenario Selector */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  <button
                    onClick={() => setSimulationScenario('streaming')}
                    className={`p-2.5 rounded-lg text-xs font-semibold text-center transition-all ${
                      simulationScenario === 'streaming'
                        ? 'bg-red-600 text-white shadow-xs font-bold'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    1M Spotify Streams
                  </button>
                  <button
                    onClick={() => setSimulationScenario('tv-sync')}
                    className={`p-2.5 rounded-lg text-xs font-semibold text-center transition-all ${
                      simulationScenario === 'tv-sync'
                        ? 'bg-red-600 text-white shadow-xs font-bold'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    SABC TV Drama Cue
                  </button>
                  <button
                    onClick={() => setSimulationScenario('commercial')}
                    className={`p-2.5 rounded-lg text-xs font-semibold text-center transition-all ${
                      simulationScenario === 'commercial'
                        ? 'bg-red-600 text-white shadow-xs font-bold'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    DStv Ad Campaign
                  </button>
                  <button
                    onClick={() => setSimulationScenario('radio')}
                    className={`p-2.5 rounded-lg text-xs font-semibold text-center transition-all ${
                      simulationScenario === 'radio'
                        ? 'bg-red-600 text-white shadow-xs font-bold'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    Metro FM Radio Play
                  </button>
                  <button
                    onClick={() => setSimulationScenario('downloads')}
                    className={`p-2.5 rounded-lg text-xs font-semibold text-center transition-all ${
                      simulationScenario === 'downloads'
                        ? 'bg-red-600 text-white shadow-xs font-bold'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    Traxsource Sales
                  </button>
                </div>

                {/* Scenario Result Table */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* SAMRO Flow */}
                    <div className="p-3.5 rounded-lg bg-blue-50/50 border border-blue-200 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-xs text-blue-900">SAMRO</span>
                        <span className="text-[10px] font-mono text-blue-700 font-semibold">PERFORMING</span>
                      </div>
                      <div className="text-xs text-slate-700">
                        {simulationScenario === 'streaming' && 'Collects public performance streaming fraction (~6% to 7.5% of pool).'}
                        {simulationScenario === 'tv-sync' && 'Collects quarterly broadcast performance royalties per SABC cue sheet.'}
                        {simulationScenario === 'commercial' && 'Collects terrestrial broadcast performance tariffs.'}
                        {simulationScenario === 'radio' && 'Collects station broadcast performance fees per logged minute.'}
                        {simulationScenario === 'downloads' && 'N/A (Downloads are pure mechanical reproductions).'}
                      </div>
                      <div className="text-[10px] font-mono text-blue-800 font-bold pt-1">
                        50% Composer / 50% Sanelow Publishing
                      </div>
                    </div>

                    {/* CAPASSO Flow */}
                    <div className="p-3.5 rounded-lg bg-teal-50/50 border border-teal-200 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-xs text-teal-900">CAPASSO</span>
                        <span className="text-[10px] font-mono text-teal-700 font-semibold">MECHANICAL</span>
                      </div>
                      <div className="text-xs text-slate-700">
                        {simulationScenario === 'streaming' && 'Collects digital interactive mechanical reproduction fees directly from DSPs.'}
                        {simulationScenario === 'tv-sync' && 'Licenses audiovisual transcription reproduction right for broadcast copy.'}
                        {simulationScenario === 'commercial' && 'Licenses sync transcription mechanical reproduction.'}
                        {simulationScenario === 'radio' && 'Collects broadcast mechanical archiving license fees.'}
                        {simulationScenario === 'downloads' && 'Collects per-download mechanical rate (Beatport & Traxsource).'}
                      </div>
                      <div className="text-[10px] font-mono text-teal-800 font-bold pt-1">
                        100% to Sanelow Publishing Desk
                      </div>
                    </div>

                    {/* RISA Flow */}
                    <div className="p-3.5 rounded-lg bg-amber-50/50 border border-amber-200 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-xs text-amber-900">RISA</span>
                        <span className="text-[10px] font-mono text-amber-700 font-semibold">MASTER / ISRC</span>
                      </div>
                      <div className="text-xs text-slate-700">
                        {simulationScenario === 'streaming' && 'Ingests verified streams for official Gold (3M) & Platinum (6M) certifications.'}
                        {simulationScenario === 'tv-sync' && 'Protects master phonogram against unauthorized broadcast exploitation.'}
                        {simulationScenario === 'commercial' && 'Enforces master rights warranties under RiSA ethical standards.'}
                        {simulationScenario === 'radio' && 'Audits official ISRC airplay tracking for South African Top 100.'}
                        {simulationScenario === 'downloads' && 'Tracks sales units toward verified sales certifications.'}
                      </div>
                      <div className="text-[10px] font-mono text-amber-800 font-bold pt-1">
                        100% Master Owner Protection
                      </div>
                    </div>

                    {/* SAMPRA Flow */}
                    <div className="p-3.5 rounded-lg bg-purple-50/50 border border-purple-200 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-xs text-purple-900">SAMPRA</span>
                        <span className="text-[10px] font-mono text-purple-700 font-semibold">NEEDLETIME</span>
                      </div>
                      <div className="text-xs text-slate-700">
                        {simulationScenario === 'streaming' && 'N/A (Interactive streaming does not generate Section 9A needletime in SA).'}
                        {simulationScenario === 'tv-sync' && 'Collects needletime for the sound recording broadcast on TV airwaves.'}
                        {simulationScenario === 'commercial' && 'Collects commercial background sound recording airplay tariffs.'}
                        {simulationScenario === 'radio' && 'Collects station needletime fees for playing the recorded sound file.'}
                        {simulationScenario === 'downloads' && 'N/A (Digital sales do not trigger needletime).'}
                      </div>
                      <div className="text-[10px] font-mono text-purple-800 font-bold pt-1">
                        50% Master / 50% Performers
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
