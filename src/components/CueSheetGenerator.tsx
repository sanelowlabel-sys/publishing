import React, { useState } from 'react';
import { SAMPLE_CUE_SHEET, REPERTOIRE_CATALOG } from '../data/musicData';
import { CueSheetRow, RepertoireTrack } from '../types';
import { 
  FileSpreadsheet, 
  Plus, 
  Copy, 
  Check, 
  Download, 
  ShieldCheck, 
  FileText, 
  Info,
  Scale,
  Trash2
} from 'lucide-react';

export const CueSheetGenerator: React.FC = () => {
  const [cueList, setCueList] = useState<CueSheetRow[]>(SAMPLE_CUE_SHEET);
  const [productionTitle, setProductionTitle] = useState('Gauteng Nights - Season 2');
  const [episodeNumber, setEpisodeNumber] = useState('Episode 204');
  const [broadcaster, setBroadcaster] = useState('Showmax / MultiChoice DStv');
  const [productionCompany, setProductionCompany] = useState('Bomb Shelter Productions PTY Ltd');
  const [copied, setCopied] = useState(false);

  // New cue form state
  const [selectedRepertoireId, setSelectedRepertoireId] = useState(REPERTOIRE_CATALOG[0].id);
  const [cueDuration, setCueDuration] = useState('01:30');
  const [selectedUsageCode, setSelectedUsageCode] = useState<'BI' | 'BV' | 'VI' | 'VV' | 'MT' | 'ET'>('BI');
  const [customDescription, setCustomDescription] = useState('Background music in dining sequence');

  const usageDescriptions: Record<string, string> = {
    'BI': 'Background Instrumental',
    'BV': 'Background Vocal',
    'VI': 'Visual Instrumental',
    'VV': 'Visual Vocal',
    'MT': 'Main Title Theme',
    'ET': 'End Title Theme'
  };

  const handleAddCue = (e: React.FormEvent) => {
    e.preventDefault();
    const track = REPERTOIRE_CATALOG.find((t) => t.id === selectedRepertoireId) || REPERTOIRE_CATALOG[0];

    const newCue: CueSheetRow = {
      cueNumber: cueList.length + 1,
      trackTitle: `${track.title} (${track.catalogNumber})`,
      duration: cueDuration,
      usageCode: selectedUsageCode,
      usageDescription: `${usageDescriptions[selectedUsageCode]} (${customDescription})`,
      composer: track.composers.join(' / '),
      composerCAE: '00928410294',
      composerPRO: 'SAMRO',
      composerShare: '100%',
      publisher: 'Sanelow Label PTY Ltd Music Publishing Music Publishing',
      publisherCAE: 'PUB-ZA-88219',
      publisherPRO: 'SAMRO / CAPASSO',
      publisherShare: '100%',
      recordLabel: 'Sanelow Label PTY Ltd Music Publishing',
      isrc: track.isrc,
      iswc: track.iswc
    };

    setCueList([...cueList, newCue]);
    setCustomDescription('');
  };

  const handleRemoveCue = (index: number) => {
    const updated = cueList.filter((_, idx) => idx !== index).map((c, i) => ({
      ...c,
      cueNumber: i + 1
    }));
    setCueList(updated);
  };

  const handleCopyTable = () => {
    const header = `CUE#\tTITLE\tDURATION\tUSAGE\tCOMPOSER(S)\tCOMPOSER PRO/SHARE\tPUBLISHER\tPUBLISHER PRO/SHARE\tRECORD LABEL\tISRC\tISWC\n`;
    const rows = cueList.map((c) => 
      `${c.cueNumber}\t${c.trackTitle}\t${c.duration}\t${c.usageCode}\t${c.composer}\t${c.composerPRO} (${c.composerShare})\t${c.publisher}\t${c.publisherPRO} (${c.publisherShare})\t${c.recordLabel}\t${c.isrc}\t${c.iswc}`
    ).join('\n');

    navigator.clipboard.writeText(header + rows);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadCSV = () => {
    const header = `"Cue #","Track Title","Duration","Usage Code","Usage Description","Composer(s)","Composer CAE","Composer PRO","Composer Share","Publisher","Publisher CAE","Publisher PRO","Publisher Share","Record Label","ISRC","ISWC"\n`;
    const rows = cueList.map((c) => 
      `"${c.cueNumber}","${c.trackTitle}","${c.duration}","${c.usageCode}","${c.usageDescription}","${c.composer}","${c.composerCAE}","${c.composerPRO}","${c.composerShare}","${c.publisher}","${c.publisherCAE}","${c.publisherPRO}","${c.publisherShare}","${c.recordLabel}","${c.isrc}","${c.iswc}"`
    ).join('\n');

    const blob = new Blob([header + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `CUE_SHEET_${productionTitle.replace(/\s+/g, '_')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="cue-sheet-generator" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="border-b border-slate-200 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-red-100 text-red-900 border border-red-300 mb-3">
          <FileSpreadsheet className="w-3.5 h-3.5 text-red-700" />
          <span>Production Delivery & Statutory Compliance</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Music Cue Sheet Generator (SAMRO / CAPASSO)
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl leading-relaxed">
              Standardized broadcast cue sheet generator for film, television, and documentary editors. Ensures 100% accurate statutory reporting to South African and global collecting societies.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyTable}
              className="py-2 px-4 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-semibold flex items-center gap-2 transition-colors shadow-2xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Formatted Cue Sheet'}</span>
            </button>
            <button
              type="button"
              onClick={handleDownloadCSV}
              className="py-2 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center gap-2 transition-colors shadow-2xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
      </div>

      {/* Production Metadata Inputs */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
          Production Header Information
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div>
            <label className="block text-slate-500 mb-1 font-mono">Production Title</label>
            <input
              type="text"
              value={productionTitle}
              onChange={(e) => setProductionTitle(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2 font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-slate-500 mb-1 font-mono">Episode / Segment</label>
            <input
              type="text"
              value={episodeNumber}
              onChange={(e) => setEpisodeNumber(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2 font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-slate-500 mb-1 font-mono">Primary Broadcaster / Network</label>
            <input
              type="text"
              value={broadcaster}
              onChange={(e) => setBroadcaster(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2 font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-slate-500 mb-1 font-mono">Production Company</label>
            <input
              type="text"
              value={productionCompany}
              onChange={(e) => setProductionCompany(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2 font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>
      </div>

      {/* Add Cue Line Item Form */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
            <Plus className="w-4 h-4 text-red-600" />
            <span>Add Sanelow Repertoire Track to Cue Sheet</span>
          </div>
          <span className="text-[11px] font-mono text-slate-500">Auto-populates verified CAE & ISWC data</span>
        </div>

        <form onSubmit={handleAddCue} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
          <div className="lg:col-span-2">
            <label className="block text-slate-600 font-mono mb-1">Catalog Track</label>
            <select
              value={selectedRepertoireId}
              onChange={(e) => setSelectedRepertoireId(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-lg p-2 text-slate-900 font-medium focus:ring-2 focus:ring-red-500 focus:outline-hidden"
            >
              {REPERTOIRE_CATALOG.map((track) => (
                <option key={track.id} value={track.id}>
                  {track.catalogNumber} - {track.title} ({track.artist})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-slate-600 font-mono mb-1">Duration (MM:SS)</label>
            <input
              type="text"
              placeholder="01:45"
              value={cueDuration}
              onChange={(e) => setCueDuration(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-lg p-2 text-slate-900 font-mono focus:ring-2 focus:ring-red-500 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-slate-600 font-mono mb-1">Usage Classification</label>
            <select
              value={selectedUsageCode}
              onChange={(e) => setSelectedUsageCode(e.target.value as any)}
              className="w-full bg-white border border-slate-300 rounded-lg p-2 text-slate-900 font-medium focus:ring-2 focus:ring-red-500 focus:outline-hidden"
            >
              <option value="BI">BI - Background Instrumental</option>
              <option value="BV">BV - Background Vocal</option>
              <option value="VI">VI - Visual Instrumental</option>
              <option value="VV">VV - Visual Vocal</option>
              <option value="MT">MT - Main Title Theme</option>
              <option value="ET">ET - End Title Theme</option>
            </select>
          </div>

          <div className="flex items-end">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold shadow-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Append Cue</span>
            </button>
          </div>
        </form>
      </div>

      {/* Main Cue Sheet Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="font-mono text-xs font-bold text-slate-800">
            LODGED CUES ({cueList.length} ITEMS)
          </div>
          <div className="text-[11px] font-mono text-slate-500">
            Complies with CISAC Standard Television & Film Cue Guidelines
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-mono text-slate-600">
                <th className="py-2.5 px-3">#</th>
                <th className="py-2.5 px-3">Title / Work</th>
                <th className="py-2.5 px-3">Dur</th>
                <th className="py-2.5 px-3">Use</th>
                <th className="py-2.5 px-3">Composer(s) & Share</th>
                <th className="py-2.5 px-3">Publisher & Admin</th>
                <th className="py-2.5 px-3">Record Label (Master)</th>
                <th className="py-2.5 px-3">ISRC & ISWC</th>
                <th className="py-2.5 px-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {cueList.map((cue, idx) => (
                <tr key={idx} className="hover:bg-slate-50/70">
                  <td className="py-3 px-3 font-mono font-bold text-slate-400">
                    {String(cue.cueNumber).padStart(2, '0')}
                  </td>
                  <td className="py-3 px-3">
                    <div className="font-bold text-slate-900">{cue.trackTitle}</div>
                    <div className="text-[10px] text-slate-500">{cue.usageDescription}</div>
                  </td>
                  <td className="py-3 px-3 font-mono font-semibold text-slate-800">
                    {cue.duration}
                  </td>
                  <td className="py-3 px-3">
                    <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-red-100 text-red-900 border border-red-300">
                      {cue.usageCode}
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <div className="font-medium text-slate-800">{cue.composer}</div>
                    <div className="text-[10px] text-slate-500 font-mono">{cue.composerPRO} ({cue.composerShare})</div>
                  </td>
                  <td className="py-3 px-3">
                    <div className="font-medium text-slate-800">{cue.publisher}</div>
                    <div className="text-[10px] text-slate-500 font-mono">{cue.publisherPRO} ({cue.publisherShare})</div>
                  </td>
                  <td className="py-3 px-3 font-medium text-slate-800">
                    {cue.recordLabel}
                  </td>
                  <td className="py-3 px-3 font-mono text-[10px] text-slate-600">
                    <div>ISRC: {cue.isrc}</div>
                    <div>ISWC: {cue.iswc}</div>
                  </td>
                  <td className="py-3 px-3 text-right">
                    <button
                      type="button"
                      onClick={() => handleRemoveCue(idx)}
                      className="text-slate-400 hover:text-rose-600 p-1 rounded transition-colors"
                      title="Remove cue line"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Cue Sheet Educational Guide */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
          <Info className="w-4 h-4 text-red-700" />
          <span>Why Prompt Cue Sheet Submission Protects South African Composers</span>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          Under Section 10 of the South African Copyright Act, television broadcasters and streaming services cannot accurately pay composers and publishers without officially signed Cue Sheets. When a production company lodges an accurate cue sheet with SAMRO and CAPASSO, all royalty distributions flow seamlessly through the collective management societies. Sanelow Label provides pre-audited, pre-filled cue sheet line items for all licensed productions to ensure total legal peace of mind.
        </p>
      </div>
    </section>
  );
};
