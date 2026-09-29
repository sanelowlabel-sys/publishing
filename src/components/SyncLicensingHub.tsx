import React, { useState } from 'react';
import { 
  SYNC_RATE_BRACKETS, 
  REPERTOIRE_CATALOG 
} from '../data/musicData';
import { SyncRateBracket, RepertoireTrack } from '../types';
import { 
  Clapperboard, 
  Calculator, 
  CheckCircle2, 
  Layers, 
  FileText, 
  Clock, 
  ShieldCheck, 
  Send, 
  Sparkles, 
  Sliders, 
  Tv, 
  Film, 
  Gamepad2, 
  Radio, 
  Check, 
  ChevronRight,
  Download,
  AlertCircle
} from 'lucide-react';

interface SyncLicensingHubProps {
  onSelectTrackForSync?: (trackId: string) => void;
  preselectedTrackId?: string;
}

export const SyncLicensingHub: React.FC<SyncLicensingHubProps> = ({
  preselectedTrackId
}) => {
  // Sync Calculator State
  const [selectedMediaType, setSelectedMediaType] = useState<string>('tv-series');
  const [selectedUsage, setSelectedUsage] = useState<string>('background-instrumental');
  const [selectedTerritory, setSelectedTerritory] = useState<string>('worldwide');
  const [selectedTerm, setSelectedTerm] = useState<string>('in-perpetuity');
  const [selectedTrackId, setSelectedTrackId] = useState<string>(preselectedTrackId || REPERTOIRE_CATALOG[0].id);
  const [includeStems, setIncludeStems] = useState<boolean>(true);

  // Sync Form State
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [applicationRef, setApplicationRef] = useState<string>('');
  const [formData, setFormData] = useState({
    productionTitle: '',
    productionCompany: '',
    supervisorName: '',
    supervisorEmail: '',
    supervisorPhone: '',
    targetAirDate: '',
    projectDescription: '',
    budgetRange: 'R25,000 - R50,000'
  });

  // Calculate estimated fee
  const calculateFee = () => {
    let baseZAR = 25000;
    let baseUSD = 1500;

    switch (selectedMediaType) {
      case 'feature-film':
        baseZAR = 55000;
        baseUSD = 3200;
        break;
      case 'commercial-advertising':
        baseZAR = 75000;
        baseUSD = 4500;
        break;
      case 'video-games':
        baseZAR = 40000;
        baseUSD = 2400;
        break;
      case 'documentary-podcast':
        baseZAR = 15000;
        baseUSD = 950;
        break;
      case 'tv-series':
      default:
        baseZAR = 30000;
        baseUSD = 1800;
        break;
    }

    // Usage multipliers
    let usageMult = 1.0;
    if (selectedUsage === 'main-title') usageMult = 1.8;
    else if (selectedUsage === 'visual-vocal') usageMult = 1.4;
    else if (selectedUsage === 'end-credits') usageMult = 1.3;
    else if (selectedUsage === 'trailer') usageMult = 1.5;

    // Territory multipliers
    let terrMult = 1.0;
    if (selectedTerritory === 'worldwide') terrMult = 1.5;
    else if (selectedTerritory === 'pan-africa') terrMult = 1.2;
    else if (selectedTerritory === 'north-america-europe') terrMult = 1.4;

    // Term multipliers
    let termMult = 1.0;
    if (selectedTerm === 'in-perpetuity') termMult = 1.3;
    else if (selectedTerm === '5-years') termMult = 1.15;
    else if (selectedTerm === '1-year') termMult = 0.85;

    const stemsAddZAR = includeStems ? 5000 : 0;
    const stemsAddUSD = includeStems ? 300 : 0;

    const finalZAR = Math.round((baseZAR * usageMult * terrMult * termMult) + stemsAddZAR);
    const finalUSD = Math.round((baseUSD * usageMult * terrMult * termMult) + stemsAddUSD);

    return {
      zar: finalZAR.toLocaleString(),
      usd: finalUSD.toLocaleString()
    };
  };

  const estimated = calculateFee();
  const activeTrack = REPERTOIRE_CATALOG.find((t) => t.id === selectedTrackId) || REPERTOIRE_CATALOG[0];

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `SYNC-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
    setApplicationRef(ref);
    setFormSubmitted(true);
  };

  return (
    <section id="sync-licensing-hub" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="border-b border-slate-200 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-red-100 text-red-900 border border-red-300 mb-3">
          <Clapperboard className="w-3.5 h-3.5 text-red-700" />
          <span>Sync & Master Rights Licensing Department</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Music Supervision & Pre-Cleared Synchronization
        </h2>
        <p className="mt-3 text-base text-slate-600 max-w-3xl leading-relaxed">
          Sanelow Label PTY Ltd Music Publishing offers music supervisors, advertising directors, and film producers direct access to an elite catalog of authentic South African Deep House, Afro House, Tech House, and Vocal House. Every single track is <strong className="text-slate-900">100% One-Stop Master & Publishing Pre-Cleared</strong> with zero third-party approval hurdles.
        </p>
      </div>

      {/* The 100% One-Stop Advantage Card */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-xl border border-slate-700 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-mono text-red-400 uppercase tracking-wider font-semibold">
              Music Supervision Guarantee
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Why Supervisors Choose Sanelow One-Stop Licensing
            </h3>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-950/80 text-emerald-300 border border-emerald-700 text-xs font-mono font-bold">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>100% CONTROLLED MASTER + PUBLISHING</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-700/80">
          <div className="space-y-2">
            <div className="text-red-400 font-mono text-sm font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>Zero Clearance Friction</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              We own and administer both the Sound Recording Master (100%) and the Musical Composition Publishing (100%). You execute a single all-in agreement with zero split-publisher delays.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-red-400 font-mono text-sm font-bold flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>24-Hour Express Turnaround</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Working against tight picture lock? We deliver signed sync licenses, full indemnification warranties, and 24-bit broadcast deliverables within 24 hours of agreement.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-red-400 font-mono text-sm font-bold flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              <span>Full Audio Stem Suites</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every track includes discrete stems (Drums, Bass, Synths, FX, A Cappella, Instrumental, TV Track, 30s / 15s Cutdowns) for seamless scene editing and dialogue ducking.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Sync Fee Estimator & Rate Calculator */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-700 uppercase tracking-wider">
              <Calculator className="w-4 h-4 text-red-600" />
              <span>Interactive Sync Licensing Estimator</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              Estimate Your Production Licensing Quote
            </h3>
          </div>
          <p className="text-xs text-slate-500 max-w-sm">
            All estimates include both Master Rights and Publishing Rights (All-In One-Stop Fee).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Controls Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Media Type */}
            <div>
              <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2">
                1. Media Type & Production Format
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'tv-series', label: 'TV Series / VOD', icon: Tv },
                  { id: 'feature-film', label: 'Feature Film', icon: Film },
                  { id: 'commercial-advertising', label: 'Commercial Ad', icon: Sparkles },
                  { id: 'video-games', label: 'Video Game', icon: Gamepad2 },
                  { id: 'documentary-podcast', label: 'Documentary', icon: Radio }
                ].map((type) => {
                  const Icon = type.icon;
                  const isSelected = selectedMediaType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedMediaType(type.id)}
                      className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all ${
                        isSelected
                          ? 'border-red-600 bg-red-50/50 text-slate-900 ring-2 ring-red-500/20 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-red-700' : 'text-slate-400'}`} />
                      <span className="text-xs font-semibold">{type.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Usage Placement */}
            <div>
              <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2">
                2. Cue Placement & Usage Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'background-instrumental', label: 'Background Instrumental' },
                  { id: 'visual-vocal', label: 'Visual Vocal / Performance' },
                  { id: 'main-title', label: 'Opening Main Title Theme' },
                  { id: 'end-credits', label: 'End Credits Crawl' },
                  { id: 'trailer', label: 'Trailer & Promo' }
                ].map((u) => {
                  const isSelected = selectedUsage === u.id;
                  return (
                    <button
                      key={u.id}
                      type="button"
                      onClick={() => setSelectedUsage(u.id)}
                      className={`p-2.5 rounded-lg border text-left text-xs font-medium transition-all ${
                        isSelected
                          ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                      }`}
                    >
                      {u.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Territory & Term */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2">
                  3. Geographic Territory
                </label>
                <select
                  value={selectedTerritory}
                  onChange={(e) => setSelectedTerritory(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900 font-medium focus:ring-2 focus:ring-red-500 focus:outline-hidden"
                >
                  <option value="south-africa">South Africa & SADC Region</option>
                  <option value="pan-africa">Sub-Saharan / Pan-Africa</option>
                  <option value="north-america-europe">North America & Europe</option>
                  <option value="worldwide">Worldwide / Global Distribution</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2">
                  4. License Term Duration
                </label>
                <select
                  value={selectedTerm}
                  onChange={(e) => setSelectedTerm(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900 font-medium focus:ring-2 focus:ring-red-500 focus:outline-hidden"
                >
                  <option value="1-year">1 Year / Festival Run</option>
                  <option value="3-years">3 Years (Broadcast Window)</option>
                  <option value="5-years">5 Years</option>
                  <option value="in-perpetuity">In Perpetuity (Standard for Film/VOD)</option>
                </select>
              </div>
            </div>

            {/* Select Repertoire Track */}
            <div>
              <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2">
                5. Select Track from Repertoire
              </label>
              <select
                value={selectedTrackId}
                onChange={(e) => setSelectedTrackId(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900 font-medium focus:ring-2 focus:ring-red-500 focus:outline-hidden"
              >
                {REPERTOIRE_CATALOG.map((track) => (
                  <option key={track.id} value={track.id}>
                    {track.catalogNumber} - "{track.title}" by {track.artist} ({track.genre} • {track.bpm} BPM)
                  </option>
                ))}
              </select>
            </div>

            {/* Stems Toggle */}
            <div className="flex items-center justify-between p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
              <div>
                <div className="text-xs font-bold text-slate-900">Include Complete Multi-Track Stems</div>
                <div className="text-[11px] text-slate-500">Includes Drums, Bass, Synths, Vocals & Instrumental cutdowns</div>
              </div>
              <button
                type="button"
                onClick={() => setIncludeStems(!includeStems)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                  includeStems ? 'bg-red-600' : 'bg-slate-300'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                    includeStems ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Quote Preview Column */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="text-xs font-mono font-bold text-slate-500 uppercase">Estimated Quote</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-red-100 text-red-900 border border-red-300">
                  All-In One-Stop
                </span>
              </div>

              <div>
                <div className="text-3xl font-extrabold text-slate-900 font-mono">
                  R{estimated.zar}
                </div>
                <div className="text-sm text-slate-600 font-mono mt-0.5">
                  Approx. ${estimated.usd} USD
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  Covers 100% Master & 100% Publishing rights
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 space-y-2 text-xs">
                <div className="font-semibold text-slate-800">Selected Work:</div>
                <div className="p-2.5 bg-white rounded-lg border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900">{activeTrack.title}</div>
                  <div className="text-slate-600">{activeTrack.artist}</div>
                  <div className="font-mono text-[10px] text-slate-500">ISRC: {activeTrack.isrc}</div>
                  <div className="font-mono text-[10px] text-emerald-700 font-semibold">{activeTrack.clearanceStatus}</div>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>24-bit / 48kHz Broadcast Master WAV</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Full Instrumental & TV Mix</span>
                </div>
                {includeStems && (
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Complete Multi-Track Stems Archive</span>
                  </div>
                )}
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Pre-filled SAMRO/CAPASSO Cue Sheet Line</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Signed Master & Sync Indemnity Warranty</span>
                </div>
              </div>
            </div>

            <a
              href="#sync-application-form"
              className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold text-xs text-center transition-colors flex items-center justify-center gap-2"
            >
              <span>Proceed to Formal License Request</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Sync Rate Matrix Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900">
            Standard Sync Rate Card & Turnaround Parameters
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Indicative standard commercial rates for pre-cleared Sanelow catalog compositions.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-300 bg-slate-50">
                <th className="py-3 px-4 font-mono font-bold text-slate-800">Media Category</th>
                <th className="py-3 px-4 font-mono font-bold text-slate-800">Typical Scope</th>
                <th className="py-3 px-4 font-mono font-bold text-slate-800">ZAR Range (All-In)</th>
                <th className="py-3 px-4 font-mono font-bold text-slate-800">USD Range</th>
                <th className="py-3 px-4 font-mono font-bold text-slate-800">Execution Window</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {SYNC_RATE_BRACKETS.map((bracket) => (
                <tr key={bracket.id} className="hover:bg-slate-50/70">
                  <td className="py-3.5 px-4 font-bold text-slate-900">
                    {bracket.mediaType}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 max-w-xs">
                    {bracket.description}
                  </td>
                  <td className="py-3.5 px-4 font-mono font-semibold text-slate-900">
                    {bracket.rateRangeZAR}
                  </td>
                  <td className="py-3.5 px-4 font-mono text-slate-600">
                    {bracket.rateRangeUSD}
                  </td>
                  <td className="py-3.5 px-4 font-mono text-emerald-700 font-medium">
                    {bracket.turnaroundTime}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sync Licensing Workflow Steps */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-mono font-bold text-red-800 uppercase tracking-widest">
            Step-by-Step Protocol
          </span>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">
            The 5-Step Sync Clearance Workflow
          </h3>
          <p className="text-xs text-slate-600 mt-2">
            Engineered specifically for production houses, agencies, and studio music supervisors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            {
              step: '01',
              title: 'Spotting & Selection',
              desc: 'Select preferred cues from our repertoire or request tailored music supervision recommendations.'
            },
            {
              step: '02',
              title: 'Term Sheet Issuance',
              desc: 'We issue an immediate binding quote covering media, territory, term duration, and stem deliverable specs.'
            },
            {
              step: '03',
              title: 'Agreement Execution',
              desc: 'Dual Master & Sync contract signed with full legal warranty and copyright indemnification.'
            },
            {
              step: '04',
              title: 'High-Res Delivery',
              desc: 'Direct secure delivery of 24-bit/48kHz master audio, instrumentals, and discrete multi-track stems.'
            },
            {
              step: '05',
              title: 'Cue Sheet Lodgement',
              desc: 'Pre-formatted SAMRO & CAPASSO cue sheets provided for seamless statutory broadcaster compliance.'
            }
          ].map((item) => (
            <div key={item.step} className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 relative">
              <span className="font-mono text-xl font-extrabold text-red-700">
                {item.step}
              </span>
              <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Formal Sync License Request Form */}
      <div id="sync-application-form" className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8">
        <div className="border-b border-slate-200 pb-6">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-800 uppercase tracking-wider">
            <FileText className="w-4 h-4 text-red-600" />
            <span>Direct Licensing Desk</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">
            Submit a Formal Sync Clearance Request
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Directly routed to the Sanelow Label Legal & Sync Licensing Department in Sandton. Response guaranteed within 24 hours.
          </p>
        </div>

        {formSubmitted ? (
          <div className="p-8 bg-emerald-50 border border-emerald-300 rounded-xl space-y-4 text-center">
            <div className="inline-flex p-3 rounded-full bg-emerald-100 text-emerald-800">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">
              Sync Clearance Request Received
            </h4>
            <div className="text-xs font-mono text-emerald-900 bg-white inline-block px-4 py-2 rounded-lg border border-emerald-300">
              Reference Tracking Code: <strong>{applicationRef}</strong>
            </div>
            <p className="text-xs text-slate-700 max-w-lg mx-auto leading-relaxed">
              Thank you, {formData.supervisorName}. Our Sync & Master Rights Director has received your application for "{formData.productionTitle}". A formal quote sheet, cue sheet draft, and temporary evaluation WAV will be dispatched to <strong className="text-slate-900">{formData.supervisorEmail}</strong> within 24 business hours.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setFormSubmitted(false)}
                className="text-xs font-semibold text-slate-700 hover:text-slate-900 underline"
              >
                Submit another licensing application
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmitApplication} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Production Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Gauteng Nights (Feature Film) or Brand TV Spot"
                  value={formData.productionTitle}
                  onChange={(e) => setFormData({ ...formData, productionTitle: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-red-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Production Company / Agency *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Black River Films or Ogilvy Johannesburg"
                  value={formData.productionCompany}
                  onChange={(e) => setFormData({ ...formData, productionCompany: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-red-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Music Supervisor / Producer Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.supervisorName}
                  onChange={(e) => setFormData({ ...formData, supervisorName: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-red-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Supervisor Corporate Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. sarah@productionhouse.co.za"
                  value={formData.supervisorEmail}
                  onChange={(e) => setFormData({ ...formData, supervisorEmail: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-red-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Direct Phone / Mobile
                </label>
                <input
                  type="tel"
                  placeholder="+27 82 000 0000"
                  value={formData.supervisorPhone}
                  onChange={(e) => setFormData({ ...formData, supervisorPhone: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-red-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Target Broadcast / Premiere Date
                </label>
                <input
                  type="date"
                  value={formData.targetAirDate}
                  onChange={(e) => setFormData({ ...formData, targetAirDate: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs text-slate-900 focus:ring-2 focus:ring-red-500 focus:outline-hidden"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2">
                Scene Context, Duration & Specific Placement Description *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Describe how the track will be integrated into the scene (e.g., 90-second nightclub dialogue sequence, protagonist entering festival, or brand reveal sequence)."
                value={formData.projectDescription}
                onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-red-500 focus:outline-hidden"
              />
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-xs font-bold text-slate-900">
                  Target Work: {activeTrack.title} ({activeTrack.catalogNumber})
                </div>
                <div className="text-[11px] text-slate-500 font-mono">
                  Clearance: 100% Master & Publishing pre-cleared by Sanelow Label PTY Ltd Music Publishing
                </div>
              </div>
              <button
                type="submit"
                className="py-3 px-6 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Sync Application</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
