import React, { useState } from 'react';
import { 
  Building2, 
  BookOpen, 
  Disc, 
  Tv, 
  Globe2, 
  Layers, 
  Cpu, 
  HelpCircle, 
  ArrowRight, 
  CheckCircle2, 
  FileCheck, 
  Database,
  Share2,
  Music,
  Zap,
  ShieldCheck,
  TrendingUp,
  Percent,
  Sparkles,
  Calculator,
  Search,
  ChevronDown,
  ChevronUp,
  Radio,
  FileSpreadsheet,
  AlertTriangle,
  ExternalLink,
  Laptop,
  Smartphone,
  Clapperboard,
  RefreshCw,
  Sliders
} from 'lucide-react';
import { StatutoryLogo } from './StatutoryLogos';

interface AboutPublishingSectionProps {
  onNavigateToSync?: () => void;
  onNavigateToStatutory?: () => void;
  onNavigateToRepertoire?: () => void;
}

export type PublishingSubTab = 
  | 'streaming-dsp' 
  | 'ugc-social' 
  | 'ddex-metadata' 
  | 'sync-digital' 
  | 'reciprocity-global'
  | 'faq-glossary'
  | 'about-heritage';

export const AboutPublishingSection: React.FC<AboutPublishingSectionProps> = ({
  onNavigateToSync,
  onNavigateToStatutory,
  onNavigateToRepertoire
}) => {
  const [activeSubTab, setActiveSubTab] = useState<PublishingSubTab>('streaming-dsp');

  // Interactive Streaming Calculator State
  const [streamCount, setStreamCount] = useState<number>(250000);
  const [selectedDsp, setSelectedDsp] = useState<'spotify' | 'apple' | 'youtube' | 'deezer' | 'tidal'>('spotify');
  const [currency, setCurrency] = useState<'ZAR' | 'USD'>('ZAR');

  // Interactive FAQ State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Platform Per-Stream Estimated blended payout rates (USD)
  const dspRates: Record<string, { name: string; rateUSD: number; color: string; notes: string }> = {
    spotify: { name: 'Spotify', rateUSD: 0.0038, color: '#1DB954', notes: 'Blended average across Free and Premium tiers. Pro-rata pool model with 1,000-stream annual threshold.' },
    apple: { name: 'Apple Music', rateUSD: 0.0078, color: '#FC3C44', notes: '100% subscription-based service with no free ad-supported tier, delivering industry-leading per-stream rates.' },
    youtube: { name: 'YouTube Music (Audio)', rateUSD: 0.0024, color: '#FF0000', notes: 'Blended rate for audio streaming on YouTube Music. Excludes YouTube Content ID and video ad revenue.' },
    deezer: { name: 'Deezer', rateUSD: 0.0058, color: '#A238FF', notes: 'Pioneer of user-centric artist-centric payment systems (UCPS) in select European territories.' },
    tidal: { name: 'Tidal', rateUSD: 0.0105, color: '#00FFFF', notes: 'HiFi and Master Quality Audio (MQA) tiers offering premium payouts directly to master rightsholders.' }
  };

  const exchangeRateUSDToZAR = 18.5; // Approx current ZAR per USD

  const activeDspConfig = dspRates[selectedDsp];
  const grossUsd = streamCount * activeDspConfig.rateUSD;
  const grossFormatted = currency === 'ZAR' 
    ? `R ${(grossUsd * exchangeRateUSDToZAR).toLocaleString(undefined, { maximumFractionDigits: 0 })}`
    : `$ ${grossUsd.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;

  // Economic waterfall percentages
  const dspRetentionPct = 30; // DSP keeps ~30%
  const masterPoolPct = 55; // Master Rightsholder / Record Label pool ~55%
  const publishingPoolPct = 15; // Music Publishing pool ~15%

  const masterAmountUSD = grossUsd * (masterPoolPct / 100);
  const publishingAmountUSD = grossUsd * (publishingPoolPct / 100);
  const dspRetentionUSD = grossUsd * (dspRetentionPct / 100);

  // Mechanical vs Performance in Publishing Pool (50/50 split of the 15%)
  const mechanicalAmountUSD = publishingAmountUSD * 0.50; // CAPASSO
  const performanceAmountUSD = publishingAmountUSD * 0.50; // SAMRO

  const formatMoney = (valUSD: number) => {
    const val = currency === 'ZAR' ? valUSD * exchangeRateUSDToZAR : valUSD;
    const symbol = currency === 'ZAR' ? 'R ' : '$ ';
    return `${symbol}${val.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  };

  const faqs = [
    {
      q: 'Why does streaming generate BOTH Mechanical and Performance royalties?',
      a: 'Unlike physical vinyl sales (which are 100% mechanical reproduction) or traditional radio airplay (which is 100% public performance), an interactive stream over the internet (Spotify, Apple Music, Deezer) legally constitutes a dual exploitation under the South African Copyright Act No. 98 of 1978 and international WIPO treaties. When a user streams a track, the audio file is both transmitted to the public (triggering a Public Performance royalty administered by SAMRO) and temporarily reproduced/buffered into local device cache RAM or downloaded for offline listening (triggering a Mechanical Reproduction royalty administered by CAPASSO). Both pools must be licensed and accounted for separately.'
    },
    {
      q: 'What is the difference between Master Rights and Publishing Rights on streaming platforms?',
      a: 'Master rights govern the actual physical sound recording (the phonogram file mastered in the studio, tracked with an ISRC code). Sanelow Label PTY Ltd owns and administers 100% of master rights for our catalog, collecting master streaming royalties from DSPs (approx 55% of total revenue). Publishing rights govern the underlying composition—the chords, basslines, melodies, arrangement, and lyrics (tracked with an ISWC code). Sanelow Label PTY Ltd Music Publishing acts as the statutory publisher administering composition rights, collecting the mechanical royalties via CAPASSO and publisher performance shares via SAMRO.'
    },
    {
      q: 'How does YouTube Content ID monetize music uploaded by other users?',
      a: 'Sanelow Label ingests reference audio files of every release into Google\'s YouTube Content ID database upon release. The algorithm scans billions of user-uploaded videos per minute across the platform. When a creator, vlogger, or DJ uses a Sanelow track in their video (even in the background or pitch-shifted), Content ID places an automatic copyright claim on our behalf. Instead of blocking the video, we monetize it: ads are placed on the video, and the ad revenue is routed directly to Sanelow. The master revenue goes to the label/artist, while the publishing reproduction share is accounted through CAPASSO and digital societies.'
    },
    {
      q: 'What are "Black Box" royalties and how does Sanelow prevent metadata leakage?',
      a: 'Black Box royalties are billions of dollars in global digital royalties collected by DSPs and international CMOs that cannot be matched to rightsholders due to incomplete, misspelled, or missing metadata (such as missing ISRC codes, missing ISWC registrations, or unmatched composer CAE numbers). After a statutory retention window (typically 3 years), CMOs distribute these unmatched funds pro-rata to major domestic labels. Sanelow Label prevents black box leakage through 100% rigorous pre-distribution registration via DDEX ERN standards and direct CWR electronic work lodgment with SAMRO and CAPASSO.'
    },
    {
      q: 'What is DDEX and why is it essential for modern online music distribution?',
      a: 'DDEX (Digital Data Exchange) is the global music industry consortium establishing XML/JSON metadata standards for digital supply chains. Sanelow employs DDEX ERN (Electronic Release Notification) to communicate release dates, high-resolution artwork, explicit tags, ISRC codes, and writer splits directly to global DSPs. When DSPs report monthly usage back to collection societies, they use DDEX DSR (Digital Sales Report), enabling automated, penny-accurate royalty identification.'
    },
    {
      q: 'How do royalties from international streaming in the UK, USA, or Europe flow back to South Africa?',
      a: 'Through CISAC (International Confederation of Societies of Authors and Composers) and BIEM reciprocal representation agreements. When a listener in London or New York streams a Sanelow track, the local CMOs (PRS for Music and MCPS in the UK; ASCAP, BMI, and The MLC in the US) collect the statutory publishing fraction from the DSP. Under reciprocal international treaties, those societies wire the foreign royalties to SAMRO and CAPASSO in South Africa, which then distribute the funds directly to Sanelow Label Music Publishing and our composers.'
    },
    {
      q: 'What is Micro-Sync licensing on TikTok, Instagram Reels, and YouTube Shorts?',
      a: 'Micro-sync refers to short-form audiovisual synchronizations on social platforms where users create millions of organic videos utilizing licensed library tracks. Traditional sync requires individual contracts for every single production (e.g. film or TV show). Micro-sync utilizes blanket platform agreements negotiated between labels, publishers, CMOs, and tech giants (ByteDance/Meta/Google), paying per-creation fees or pooling video views into monthly algorithmic payout distributions.'
    }
  ];

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Flagship Header Banner */}
      <div className="bg-slate-950 text-white rounded-2xl p-8 sm:p-12 border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-red-600/10 blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 p-8 opacity-10 hidden lg:block pointer-events-none">
          <img src="/sanelow-logo.jpg" alt="Sanelow watermark" className="w-72 h-72 object-contain rounded-2xl" />
        </div>

        <div className="max-w-3xl relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-red-400" />
            <span>Digital Rights Administration &amp; Online Distribution</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans">
            Music Publishing &amp; <br />
            <span className="text-red-500">Online Licensing Intelligence</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            The definitive guide to digital music publishing, streaming economics, and statutory rights administration for modern electronic music. Learn how <strong className="text-white">Sanelow Label PTY Ltd Music Publishing</strong> monetizes sound recordings and compositions across global DSPs, social UGC platforms, and international collection networks.
          </p>

          {/* Sub-Navigation Tabs */}
          <div className="flex flex-wrap gap-2 pt-4">
            <button
              onClick={() => setActiveSubTab('streaming-dsp')}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeSubTab === 'streaming-dsp'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Streaming &amp; DSP Economics</span>
            </button>

            <button
              onClick={() => setActiveSubTab('ugc-social')}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeSubTab === 'ugc-social'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>YouTube Content ID &amp; Social UGC</span>
            </button>

            <button
              onClick={() => setActiveSubTab('ddex-metadata')}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeSubTab === 'ddex-metadata'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>DDEX Standards &amp; Metadata</span>
            </button>

            <button
              onClick={() => setActiveSubTab('sync-digital')}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeSubTab === 'sync-digital'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <Clapperboard className="w-3.5 h-3.5" />
              <span>Digital Sync &amp; OTT Media</span>
            </button>

            <button
              onClick={() => setActiveSubTab('reciprocity-global')}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeSubTab === 'reciprocity-global'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <Globe2 className="w-3.5 h-3.5" />
              <span>Global Reciprocity (CISAC/BIEM)</span>
            </button>

            <button
              onClick={() => setActiveSubTab('faq-glossary')}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeSubTab === 'faq-glossary'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Digital Publishing FAQ</span>
            </button>

            <button
              onClick={() => setActiveSubTab('about-heritage')}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeSubTab === 'about-heritage'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Label Heritage &amp; Governance</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: STREAMING & DSP ECONOMICS (WITH INTERACTIVE CALCULATOR) */}
      {/* ========================================================================= */}
      {activeSubTab === 'streaming-dsp' && (
        <div className="space-y-10 animate-in fade-in duration-300">
          {/* Conceptual Foundation */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-700">
                Interactive Streaming Fundamentals
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                How Online Music Streaming Generates Royalties
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                When a user clicks play on an interactive digital service provider (DSP) like Spotify, Apple Music, or Deezer, the law views this action as fundamentally different from terrestrial radio or physical record purchases. Interactive streaming embodies a <strong className="text-slate-900">dual exploitation of copyright</strong>, activating both recording ownership and musical publishing rights simultaneously.
              </p>
            </div>

            {/* The 3 Payout Buckets Diagram */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-slate-600">BUCKET 1</span>
                  <span className="font-mono font-extrabold text-lg text-slate-700">~30%</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">DSP Platform Retention</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Retained by the streaming company (Spotify, Apple, Amazon) to cover server architecture, bandwidth, consumer apps, payment processing fees, and profit margin.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900 text-white border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-emerald-400">BUCKET 2</span>
                  <span className="font-mono font-extrabold text-lg text-emerald-400">~55%</span>
                </div>
                <h4 className="text-sm font-bold text-white">Master Sound Recording Pool</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Paid to the phonogram master rightsholder (Sanelow Label PTY Ltd). This pool compensates audio mixing, production costs, and producer/artist recording points.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-red-50 border-2 border-red-300 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-red-700">BUCKET 3</span>
                  <span className="font-mono font-extrabold text-lg text-red-700">~15%</span>
                </div>
                <h4 className="text-sm font-bold text-red-950">Publishing (Composition) Pool</h4>
                <p className="text-xs text-red-900 leading-relaxed">
                  Statutory royalty pool divided equally between <strong>Mechanical Reproduction (CAPASSO)</strong> and <strong>Public Performance (SAMRO)</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* INTERACTIVE DIGITAL STREAMING ROYALTY SIMULATOR */}
          <div className="bg-white rounded-2xl border-2 border-slate-300 shadow-lg overflow-hidden">
            <div className="bg-slate-900 text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <Calculator className="w-3.5 h-3.5 text-red-400" />
                  <span>Interactive Financial Model</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Digital Streaming Royalty Split Calculator
                </h3>
                <p className="text-xs text-slate-400 max-w-xl">
                  Simulate gross revenue and statutory rights distribution across Master Recording, Mechanical Publishing, Performance Publishing, and DSP retention.
                </p>
              </div>

              {/* Currency Toggle */}
              <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800 self-start md:self-center">
                <span className="text-xs font-mono text-slate-400 px-2">Currency:</span>
                <button
                  type="button"
                  onClick={() => setCurrency('ZAR')}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-bold cursor-pointer transition-all ${
                    currency === 'ZAR' ? 'bg-red-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  ZAR (R)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency('USD')}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-bold cursor-pointer transition-all ${
                    currency === 'USD' ? 'bg-red-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  USD ($)
                </button>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-8">
              {/* Controls */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                {/* Stream Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-mono font-bold uppercase text-slate-700">
                      Accumulated Stream Count
                    </label>
                    <span className="text-lg font-mono font-extrabold text-red-700 bg-white px-3 py-1 rounded-lg border border-slate-200 shadow-2xs">
                      {streamCount.toLocaleString()} streams
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="5000000"
                    step="10000"
                    value={streamCount}
                    onChange={(e) => setStreamCount(Number(e.target.value))}
                    className="w-full accent-red-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>10,000 (Indie Single)</span>
                    <span>1,000,000 (Milestone Hit)</span>
                    <span>5,000,000 (Continental Anthem)</span>
                  </div>
                </div>

                {/* DSP Selection */}
                <div className="space-y-3">
                  <label className="text-xs font-mono font-bold uppercase text-slate-700 block">
                    Streaming Service Provider (DSP)
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(Object.keys(dspRates) as Array<keyof typeof dspRates>).map((key) => {
                      const dsp = dspRates[key];
                      const isSelected = selectedDsp === key;
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setSelectedDsp(key as 'spotify' | 'apple' | 'youtube' | 'deezer' | 'tidal')}
                          className={`p-2.5 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                            isSelected
                              ? 'border-red-600 bg-red-50 text-red-950 font-bold shadow-2xs ring-1 ring-red-500'
                              : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <div className="truncate">{dsp.name}</div>
                          <div className="text-[10px] font-mono text-slate-400 mt-0.5">
                            ~${dsp.rateUSD}/stream
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Total Gross Estimation Display */}
              <div className="bg-red-50/80 p-5 rounded-2xl border border-red-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase font-bold text-red-800">
                    Total Estimated Gross Revenue Generated
                  </span>
                  <div className="text-xs text-slate-600">
                    Based on {streamCount.toLocaleString()} streams on {activeDspConfig.name} at industry average payout rate
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-extrabold text-slate-900 font-mono tracking-tight">
                    {grossFormatted}
                  </span>
                </div>
              </div>

              {/* Breakdown Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Master Recording Pool */}
                <div className="bg-slate-900 text-white rounded-xl p-5 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-emerald-400 uppercase">Master Recording Pool</span>
                    <span className="text-xs font-mono font-bold bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800">55%</span>
                  </div>
                  <div className="text-2xl font-bold font-mono text-emerald-400">
                    {formatMoney(masterAmountUSD)}
                  </div>
                  <div className="text-[11px] text-slate-300 space-y-1 border-t border-slate-800 pt-2">
                    <div><strong>Payee:</strong> Sanelow Label PTY Ltd (Master Owner)</div>
                    <div><strong>Includes:</strong> Master profits, artist recording royalties, studio recoupment</div>
                  </div>
                </div>

                {/* Mechanical Reproduction Pool */}
                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-teal-700 uppercase">Mechanical Publishing</span>
                    <span className="text-xs font-mono font-bold bg-teal-50 text-teal-700 px-2 py-0.5 rounded border border-teal-200">7.5%</span>
                  </div>
                  <div className="text-2xl font-bold font-mono text-teal-700">
                    {formatMoney(mechanicalAmountUSD)}
                  </div>
                  <div className="text-[11px] text-slate-600 space-y-1 border-t border-slate-100 pt-2">
                    <div><strong>Collecting CMO:</strong> CAPASSO (South Africa)</div>
                    <div><strong>Legal Basis:</strong> Digital buffer reproduction &amp; download copies</div>
                    <div><strong>Distribution:</strong> 100% to Sanelow Publishing for writer accounting</div>
                  </div>
                </div>

                {/* Public Performance Pool */}
                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-red-700 uppercase">Performance Publishing</span>
                    <span className="text-xs font-mono font-bold bg-red-50 text-red-700 px-2 py-0.5 rounded border border-red-200">7.5%</span>
                  </div>
                  <div className="text-2xl font-bold font-mono text-red-700">
                    {formatMoney(performanceAmountUSD)}
                  </div>
                  <div className="text-[11px] text-slate-600 space-y-1 border-t border-slate-100 pt-2">
                    <div><strong>Collecting CMO:</strong> SAMRO (South Africa)</div>
                    <div><strong>Legal Basis:</strong> Public communication &amp; transmission to listeners</div>
                    <div><strong>Distribution:</strong> 50% Songwriter direct / 50% Sanelow Publishing</div>
                  </div>
                </div>
              </div>

              {/* Explanatory Footnote */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-red-600" />
                  <span>Important Note on Pro-Rata vs User-Centric Streaming Models:</span>
                </div>
                <p className="leading-relaxed">
                  Major DSPs utilize a <strong>"Stream-Share" (Pro-Rata) system</strong>. All subscription and ad revenues collected in a specific territory are pooled into a single monthly fund. The DSP deducts its ~30% cut, then divides the remaining 70% based on an artist's share of total platform plays that month. Consequently, rates fluctuate month-to-month depending on subscriber growth, territory mix (e.g. US/UK vs Sub-Saharan Africa streams), and user tier (ad-supported vs premium).
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: USER GENERATED CONTENT (UGC) & YOUTUBE CONTENT ID */}
      {/* ========================================================================= */}
      {activeSubTab === 'ugc-social' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-700">
                Social Platform Monetization &amp; Audio Fingerprinting
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                User Generated Content (UGC) &amp; Social Synchronization
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                In the modern music ecosystem, a vast percentage of track consumption occurs not inside traditional streaming playlists, but as background soundtracks to user-created videos on <strong className="text-slate-900">YouTube, TikTok, Instagram Reels, Facebook Stories, and Twitch</strong>. Sanelow Label PTY Ltd Music Publishing maintains automated, algorithmic ingestion across all major social fingerprinting networks.
              </p>
            </div>

            {/* Platform Matrix */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
              {/* YouTube Content ID Deep Dive */}
              <div className="p-6 rounded-2xl bg-slate-950 text-white border border-slate-800 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center font-bold text-white text-xs">
                      YT
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white">YouTube Content ID Architecture</h4>
                      <span className="text-[10px] font-mono text-red-400">Automated Asset Management</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono bg-red-950 text-red-300 px-2 py-0.5 rounded border border-red-800">
                    Fingerprint Reference
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Upon creation of every Sanelow release, we deliver lossless audio files to Google’s Content ID system. A cryptographic acoustic fingerprint is minted.
                </p>

                <div className="space-y-2 text-xs font-mono">
                  <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-red-400 font-bold">1. Video Detection:</span> When any user uploads a video containing our audio, YouTube automatically detects the match in seconds.
                  </div>
                  <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-red-400 font-bold">2. Monetization Claim:</span> Rather than issuing a DMCA takedown, we claim the video to run pre-roll, mid-roll, and display ads.
                  </div>
                  <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-red-400 font-bold">3. AdSense Split:</span> Google allocates ~55% of the ad revenue to Sanelow (split between Master and Publishing micro-sync fractions).
                  </div>
                  <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-red-400 font-bold">4. Shorts Revenue Pool:</span> Short-form plays are compensated through the YouTube Shorts Creator Music Pool.
                  </div>
                </div>
              </div>

              {/* TikTok & Meta (ByteDance / Instagram) */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-bold text-xs">
                      TT
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">TikTok &amp; Meta Sound Libraries</h4>
                      <span className="text-[10px] font-mono text-slate-500">Commercial Sound Ingestion</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded border border-emerald-300 font-bold">
                    Blanket Ingested
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  TikTok and Meta utilize distinct licensing structures combining per-video creation payments with overall engagement pool distributions.
                </p>

                <div className="space-y-2 text-xs font-mono">
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-slate-900 font-bold">ByteDance Commercial Library:</span> Sanelow masters are pre-cleared for global brand and creator video creations.
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-slate-900 font-bold">Meta Rights Manager:</span> Audio fingerprinting on Instagram Reels &amp; Facebook Stories tracks billions of impressions.
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-slate-900 font-bold">Publishing Micro-Sync:</span> CAPASSO collects digital mechanical royalties from Meta and ByteDance for African songwriters.
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-slate-900 font-bold">Audible Magic Registry:</span> Third-party fingerprint validation across SoundCloud, Twitch, and audio platforms.
                  </div>
                </div>
              </div>
            </div>

            {/* Twitch, Podcasts & Livestreaming Warning */}
            <div className="p-5 rounded-xl bg-amber-50 border border-amber-200 space-y-2">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-xs font-mono uppercase">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Notice on Twitch, Discord &amp; Podcasts (No Blanket Licenses)</span>
              </div>
              <p className="text-xs text-amber-900 leading-relaxed">
                Unlike Spotify or YouTube, podcast hosts and livestreaming platforms like Twitch generally <strong>do NOT have blanket mechanical licenses</strong> covering South African commercial music. Content creators and podcasters who play un-cleared music risk DMCA strikes or VOD muting. Sanelow Label PTY Ltd Music Publishing offers direct, customized one-stop micro-sync clearance for podcast theme music and livestream broadcasts.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: DDEX STANDARDS, METADATA & BLACK BOX PREVENTION */}
      {/* ========================================================================= */}
      {activeSubTab === 'ddex-metadata' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-700">
                Data Infrastructure &amp; Standardized Identifiers
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                DDEX Protocols &amp; Eradicating "Black Box" Lost Royalties
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                In online music distribution, metadata is currency. Globally, an estimated <strong>$2.5 Billion in streaming royalties</strong> sits trapped in "Black Box" unallocated accounts because DSPs cannot match audio stream logs to the correct underlying composers and publishers. Sanelow Label PTY Ltd Music Publishing utilizes strict DDEX standards to guarantee 100% metadata hygiene.
              </p>
            </div>

            {/* Holy Trinity of Metadata Codes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
              {/* ISRC */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-red-700">MASTER IDENTIFIER</span>
                  <span className="text-[10px] font-mono bg-red-100 text-red-900 px-2 py-0.5 rounded font-bold">ISO 3901</span>
                </div>
                <h4 className="text-base font-bold text-slate-900">ISRC Code</h4>
                <div className="font-mono text-xs font-bold text-slate-800 bg-white p-2 rounded border border-slate-200">
                  ZA-SNL-26-00048
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  International Standard Recording Code. Assigned by RiSA in South Africa to the master sound recording. Stamped onto WAV audio files before digital ingestion.
                </p>
              </div>

              {/* ISWC */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-teal-700">WORK IDENTIFIER</span>
                  <span className="text-[10px] font-mono bg-teal-100 text-teal-900 px-2 py-0.5 rounded font-bold">ISO 15707</span>
                </div>
                <h4 className="text-base font-bold text-slate-900">ISWC Code</h4>
                <div className="font-mono text-xs font-bold text-slate-800 bg-white p-2 rounded border border-slate-200">
                  T-314.920.104-2
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  International Standard Musical Work Code. Issued by CISAC/SAMRO to the musical composition, lyrics, and arrangement created by songwriters and publishers.
                </p>
              </div>

              {/* CAE / IPI */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-purple-700">PARTY IDENTIFIER</span>
                  <span className="text-[10px] font-mono bg-purple-100 text-purple-900 px-2 py-0.5 rounded font-bold">CISAC Global</span>
                </div>
                <h4 className="text-base font-bold text-slate-900">CAE / IPI Number</h4>
                <div className="font-mono text-xs font-bold text-slate-800 bg-white p-2 rounded border border-slate-200">
                  00928410294 (Sanelow)
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Interested Parties Information (IPI). A unique global identifier assigned to every professional songwriter, composer, and music publisher worldwide.
                </p>
              </div>
            </div>

            {/* DDEX Standards Suite */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-800">
              <div className="space-y-1">
                <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider">
                  Digital Data Exchange (DDEX) Protocols
                </span>
                <h4 className="text-xl font-bold text-white">
                  The Universal Language of Global Music Distribution
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="font-bold text-red-400">DDEX ERN</span>
                    <span className="text-slate-500">Electronic Release Notification</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Automates delivery of sound recording metadata, contributors, territory rights, genre taxonomy, and high-resolution cover artwork from Sanelow to DSPs.
                  </p>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="font-bold text-red-400">DDEX DSR</span>
                    <span className="text-slate-500">Digital Sales Report</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Standardizes how streaming platforms report millions of monthly stream counts back to CAPASSO and SAMRO, ensuring zero discrepancy in payout accounting.
                  </p>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="font-bold text-red-400">CWR (v2.2 / v3.0)</span>
                    <span className="text-slate-500">Common Works Registration</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    The CISAC standard file format enabling Sanelow Publishing to electronically bulk-register musical works directly into CMO databases worldwide in real-time.
                  </p>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="font-bold text-red-400">MEAD Standard</span>
                    <span className="text-slate-500">Musical Work &amp; Recording Data</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Enables enhanced credits (session musicians, sound engineers, vocalists, remixers) to flow cleanly across search engines and streaming user interfaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: DIGITAL SYNC, VOD & OTT MEDIA */}
      {/* ========================================================================= */}
      {activeSubTab === 'sync-digital' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-700">
                Synchronization in the Streaming Age
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Online Synchronization, OTT Media &amp; Web Advertising
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Traditional synchronization licensing was built for linear television broadcasts and theatrical cinema releases. Today, over 70% of sync licensing demands stem from <strong className="text-slate-900">Over-The-Top (OTT) streaming platforms (Netflix, Showmax, Amazon Prime Video), digital brand campaigns, social media advertisements, and mobile games</strong>.
              </p>
            </div>

            {/* Linear vs Digital Sync Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <span className="text-xs font-mono font-bold uppercase text-slate-500">TRADITIONAL BROADCAST SYNC</span>
                <h4 className="text-base font-bold text-slate-900">Linear Broadcast (DStv, SABC, Cinema)</h4>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1 shrink-0" />
                    <span>Fixed territorial airplay (e.g. South Africa only or SADC region).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1 shrink-0" />
                    <span>Quarterly broadcast cue sheet reporting to SAMRO &amp; CAPASSO.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1 shrink-0" />
                    <span>Upfront sync fee + ongoing backend broadcast royalties per airing.</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-red-50/70 border-2 border-red-200 space-y-4">
                <span className="text-xs font-mono font-bold uppercase text-red-700">DIGITAL &amp; VOD SYNC (MODERN)</span>
                <h4 className="text-base font-bold text-red-950">OTT &amp; Online Media (Netflix, Web Ads, YouTube)</h4>
                <ul className="space-y-2.5 text-xs text-red-900">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Worldwide in Perpetuity:</strong> Digital streaming video is inherently global without geographic airwave borders.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Direct One-Stop Requirement:</strong> Digital editors operate on 24-hour turnaround deadlines and cannot await months of split approvals.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Digital Fingerprint Whitelisting:</strong> Licensed channels are whitelisted on YouTube Content ID to prevent wrongful ad copyright claims.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* The One-Stop Advantage Callout */}
            <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center font-bold">
                  100%
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">The Sanelow One-Stop Clearance Guarantee</h4>
                  <span className="text-xs font-mono text-slate-400">Eliminating Production Friction for Global Music Supervisors</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                When licensing commercial music, music supervisors frequently encounter "split-ownership hell"—where 4 different publishers and 2 record labels hold fragmented percentage shares in a single track, requiring 6 separate contracts. <strong className="text-white">Sanelow Label PTY Ltd controls 100% of both Master Recording rights and Musical Work publishing rights</strong> across our entire catalog, enabling instant one-signature licensing execution.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={onNavigateToSync}
                  className="py-2.5 px-5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <Clapperboard className="w-3.5 h-3.5" />
                  <span>Access One-Stop Sync Desk</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 5: GLOBAL RECIPROCITY & INTERNATIONAL ROYALTIES */}
      {/* ========================================================================= */}
      {activeSubTab === 'reciprocity-global' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-700">
                Cross-Border Royalty Repatriation
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                How Foreign Digital Streams Flow Back to South Africa
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                South African electronic house music is celebrated globally, with millions of streams originating in the United Kingdom, Germany, France, the United States, Japan, and the Netherlands. Under international treaties established by <strong className="text-slate-900">CISAC, BIEM, and IFPI</strong>, SAMRO and CAPASSO maintain reciprocal representation pacts with over 120 foreign collective management organisations.
              </p>
            </div>

            {/* Step-by-Step Flow */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-mono text-[10px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200">STAGE 1</span>
                <h4 className="text-xs font-bold text-slate-900">Foreign Consumer Stream</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  A listener in Berlin or London streams a Sanelow track on Spotify UK or Apple Music DE.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-mono text-[10px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200">STAGE 2</span>
                <h4 className="text-xs font-bold text-slate-900">Foreign CMO Collection</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Local societies (PRS for Music in UK, GEMA in Germany, SACEM in France) collect publishing fractions.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-mono text-[10px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200">STAGE 3</span>
                <h4 className="text-xs font-bold text-slate-900">Reciprocal Wire</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Foreign societies wire royalties to SAMRO (Performance) &amp; CAPASSO (Mechanical) under CISAC agreements.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-mono text-[10px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200">STAGE 4</span>
                <h4 className="text-xs font-bold text-slate-900">Repatriation &amp; Disbursal</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  SAMRO &amp; CAPASSO disburse funds to Sanelow Label Music Publishing and songwriters in South African Rand (ZAR).
                </p>
              </div>
            </div>

            {/* Global CMO Partners Table */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
              <div className="p-4 bg-slate-100 border-b border-slate-200 flex justify-between items-center">
                <span className="font-mono text-xs font-bold text-slate-800 uppercase">
                  Primary International Reciprocal Societies
                </span>
                <span className="text-[11px] font-mono text-slate-500">CISAC &amp; BIEM Accredited</span>
              </div>
              <div className="divide-y divide-slate-200 text-xs">
                <div className="p-3.5 grid grid-cols-3 sm:grid-cols-4 font-mono">
                  <span className="font-bold text-slate-900">PRS for Music &amp; MCPS</span>
                  <span className="text-slate-600">United Kingdom</span>
                  <span className="text-slate-500 hidden sm:block">Performance &amp; Mechanical</span>
                  <span className="text-emerald-700 font-bold text-right">Reciprocal Active</span>
                </div>
                <div className="p-3.5 grid grid-cols-3 sm:grid-cols-4 font-mono">
                  <span className="font-bold text-slate-900">ASCAP &amp; BMI &amp; The MLC</span>
                  <span className="text-slate-600">United States</span>
                  <span className="text-slate-500 hidden sm:block">Performance &amp; Digital Mechanical</span>
                  <span className="text-emerald-700 font-bold text-right">Reciprocal Active</span>
                </div>
                <div className="p-3.5 grid grid-cols-3 sm:grid-cols-4 font-mono">
                  <span className="font-bold text-slate-900">GEMA</span>
                  <span className="text-slate-600">Germany</span>
                  <span className="text-slate-500 hidden sm:block">Combined Performance &amp; Mechanical</span>
                  <span className="text-emerald-700 font-bold text-right">Reciprocal Active</span>
                </div>
                <div className="p-3.5 grid grid-cols-3 sm:grid-cols-4 font-mono">
                  <span className="font-bold text-slate-900">SACEM &amp; SDRM</span>
                  <span className="text-slate-600">France</span>
                  <span className="text-slate-500 hidden sm:block">European Hub Direct</span>
                  <span className="text-emerald-700 font-bold text-right">Reciprocal Active</span>
                </div>
                <div className="p-3.5 grid grid-cols-3 sm:grid-cols-4 font-mono">
                  <span className="font-bold text-slate-900">BUMA / STEMRA</span>
                  <span className="text-slate-600">Netherlands</span>
                  <span className="text-slate-500 hidden sm:block">Benelux Electronic Hub</span>
                  <span className="text-emerald-700 font-bold text-right">Reciprocal Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 6: DIGITAL PUBLISHING FAQ & GLOSSARY */}
      {/* ========================================================================= */}
      {activeSubTab === 'faq-glossary' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-700">
                Knowledge Base &amp; Legal Clarity
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Frequently Asked Questions on Online Music Licensing
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Clear, authoritative answers to common legal and financial questions surrounding digital streaming rights, composition copyright, and synchronization licensing.
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-3 pt-2">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-xl overflow-hidden transition-all bg-white"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full p-4 sm:p-5 text-left font-bold text-sm text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50 cursor-pointer"
                    >
                      <span className="leading-snug">{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-red-600 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 7: ABOUT SANELOW HERITAGE & GOVERNANCE */}
      {/* ========================================================================= */}
      {activeSubTab === 'about-heritage' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600">
                    <Music className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Our Sonic Heritage &amp; Core Mission
                    </h3>
                    <p className="text-xs text-slate-500 font-mono">
                      Founded in early 2015 • Johannesburg &amp; Gauteng, South Africa
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed text-sm">
                  Sanelow Label PTY Ltd was established with a singular, uncompromising vision: to discover, nurture, and champion authentic underground electronic and deep house music from South Africa. In an industry dominated by commercial dance formulas, Sanelow has cultivated an institutional reputation for artistic integrity, sophisticated sound engineering, and rich musicality.
                </p>

                <p className="text-slate-600 leading-relaxed text-sm">
                  Our catalog has welcomed visionary producers and composers such as <strong className="text-slate-900">Themetique, Sanque, Dex Outro, Marcus Watkins, Thaps De Producer, Da Conist, Avenue Deep, Spaceman &amp; DJ Asi</strong>, as well as our benchmark compilation anthologies like the <span className="text-red-700 font-semibold font-mono">Sanelow Dark</span> series and <span className="text-red-700 font-semibold font-mono">Ready Made Grooves</span>.
                </p>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-red-600" />
                    <span>The Dual Structure: Record Label + Music Publishing</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Unlike standard record labels that solely exploit sound recordings, <strong className="text-slate-900">Sanelow Label PTY Ltd Music Publishing operates across both essential dimensions of music copyright</strong>. We own and license master sound recordings (phonograms), while simultaneously acting as the registered, accredited music publisher administering composition copyrights (lyrics, melody, and musical arrangements) with direct domestic and worldwide collection societies.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar Corporate Profile */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center overflow-hidden shrink-0">
                    <img src="/sanelow-logo.jpg" alt="Sanelow Logo" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-900">
                      Sanelow Label PTY Ltd
                    </h4>
                    <span className="text-[11px] font-mono text-red-600 font-bold uppercase tracking-wide">
                      Music Publishers
                    </span>
                  </div>
                </div>

                <div className="space-y-3 text-xs border-t border-slate-100 pt-4">
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="text-slate-500 font-mono">CIPC Registration</span>
                    <span className="font-mono font-bold text-slate-900">2021/784920/07</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="text-slate-500 font-mono">Founding Year</span>
                    <span className="font-mono font-bold text-slate-900">2015</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="text-slate-500 font-mono">ISRC Code Prefix</span>
                    <span className="font-mono font-bold text-red-700">ZA-SNL</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="text-slate-500 font-mono">SAMRO Publisher CAE</span>
                    <span className="font-mono font-bold text-slate-900">00928410294</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500 font-mono">CAPASSO Publisher Code</span>
                    <span className="font-mono font-bold text-slate-900">PUB-ZA-88219</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={onNavigateToSync}
                    className="w-full py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>Request Sync Clearance</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
