import React, { useState } from 'react';
import { REPERTOIRE_CATALOG } from '../data/musicData';
import { RepertoireTrack, SubGenre } from '../types';
import { 
  FileText, 
  Search, 
  Filter, 
  SlidersHorizontal, 
  CheckCircle2, 
  Layers, 
  Tag, 
  ExternalLink, 
  ArrowUpRight,
  Disc3,
  Copy,
  Check,
  ShieldCheck,
  Sparkles,
  Music2,
  Tv,
  X
} from 'lucide-react';

interface RepertoireCatalogProps {
  onRequestSync?: (trackId: string) => void;
  onViewCueSheet?: (track: RepertoireTrack) => void;
}

export const RepertoireCatalog: React.FC<RepertoireCatalogProps> = ({
  onRequestSync,
  onViewCueSheet
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string>('All');
  const [bpmFilter, setBpmFilter] = useState<string>('all');
  const [selectedTrackModal, setSelectedTrackModal] = useState<RepertoireTrack | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const genres: (string | SubGenre)[] = ['All', 'Deep House', 'Afro House', 'Tech House'];

  const filteredTracks = REPERTOIRE_CATALOG.filter((track) => {
    const matchesSearch = 
      track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.catalogNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.isrc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.iswc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.moods.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase())) ||
      track.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesGenre = selectedGenre === 'All' || track.genre === selectedGenre;

    let matchesBpm = true;
    if (bpmFilter === 'slow') matchesBpm = track.bpm < 120;
    else if (bpmFilter === 'mid') matchesBpm = track.bpm >= 120 && track.bpm <= 122;
    else if (bpmFilter === 'fast') matchesBpm = track.bpm > 122;

    return matchesSearch && matchesGenre && matchesBpm;
  });

  const copyToClipboard = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="repertoire-catalog" className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Header */}
      <div className="border-b border-slate-200 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-red-100 text-red-900 border border-red-300 mb-3">
          <Disc3 className="w-3.5 h-3.5 text-red-700" />
          <span>Sanelow Label Repertoire &amp; Publishing Administration</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Sanelow Label Music Catalog
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl leading-relaxed">
              Official South African electronic and deep house catalog from Sanelow Label PTY Ltd Music Publishing. 100% Pre-cleared one-stop synchronization licensing for global cinema, television, commercials, and digital media.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-500">
              Displaying <strong>{filteredTracks.length}</strong> of <strong>{REPERTOIRE_CATALOG.length}</strong> Sanelow master releases
            </span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {/* Search */}
          <div className="relative sm:col-span-2">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by track title, artist (e.g. Themetique, Sanque), ISRC, ISWC, or mood..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Genre */}
          <div>
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="w-full py-2 px-3 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 font-medium focus:outline-hidden focus:ring-2 focus:ring-red-500"
            >
              {genres.map((g) => (
                <option key={g} value={g}>
                  Genre: {g}
                </option>
              ))}
            </select>
          </div>

          {/* Tempo BPM */}
          <div>
            <select
              value={bpmFilter}
              onChange={(e) => setBpmFilter(e.target.value)}
              className="w-full py-2 px-3 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 font-medium focus:outline-hidden focus:ring-2 focus:ring-red-500"
            >
              <option value="all">Tempo: All BPMs</option>
              <option value="slow">Deep Tempo (&lt; 120 BPM)</option>
              <option value="mid">Mid Tempo (120 - 122 BPM)</option>
              <option value="fast">Peak Tech (&gt; 122 BPM)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Repertoire Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredTracks.map((track) => (
          <div
            key={track.id}
            id={`repertoire-card-${track.catalogNumber.toLowerCase()}`}
            className="bg-white rounded-2xl border border-slate-200 hover:border-red-500/50 shadow-2xs hover:shadow-md transition-all p-6 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              {/* Header row with Real Cover Art */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-slate-200 shadow-sm shrink-0 bg-black">
                    <img
                      src={track.coverUrl}
                      alt={`${track.title} - Sanelow Label Cover`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = `/covers/${track.id}.svg`;
                      }}
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                        {track.catalogNumber}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500">
                        {track.genre}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug mt-1">
                      {track.title}
                    </h3>
                    <div className="text-xs text-slate-600 font-semibold">
                      {track.artist} {track.featuredArtists && <span className="text-slate-400 font-normal">{track.featuredArtists}</span>}
                    </div>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-300">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>100% One-Stop</span>
                  </span>
                  <div className="text-[11px] font-mono text-slate-500 mt-1">
                    {track.bpm} BPM • {track.key} • {track.duration}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                {track.description}
              </p>

              {/* Moods & Tags */}
              <div className="flex flex-wrap gap-1.5">
                {track.moods.map((m) => (
                  <span key={m} className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-700">
                    {m}
                  </span>
                ))}
              </div>

              {/* Statutory Metadata Specs Grid */}
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 grid grid-cols-2 gap-2 text-[11px] font-mono">
                <div>
                  <span className="text-slate-400">ISRC: </span>
                  <span className="text-slate-800 font-semibold">{track.isrc}</span>
                </div>
                <div>
                  <span className="text-slate-400">ISWC: </span>
                  <span className="text-slate-800 font-semibold">{track.iswc}</span>
                </div>
                <div className="col-span-2 truncate">
                  <span className="text-slate-400">Composers: </span>
                  <span className="text-slate-800">{track.composers.join(', ')}</span>
                </div>
                <div className="col-span-2 truncate">
                  <span className="text-slate-400">Publisher: </span>
                  <span className="text-slate-800 font-semibold">{track.publishers[0]}</span>
                </div>
              </div>

              {/* Sync Placement reference */}
              {track.syncedIn && track.syncedIn.length > 0 && (
                <div className="flex items-center gap-2 text-[11px] text-slate-600 bg-red-50/50 p-2 rounded-lg border border-red-200/60">
                  <Tv className="w-3.5 h-3.5 text-red-700 shrink-0" />
                  <span className="truncate">
                    Prior Sync Usage: <strong className="text-slate-900">{track.syncedIn[0]}</strong>
                  </span>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setSelectedTrackModal(track)}
                className="text-xs font-semibold text-slate-700 hover:text-red-700 flex items-center gap-1.5 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-red-600" />
                <span>Full Legal Cue Sheet &amp; Splits</span>
              </button>

              <div className="flex items-center gap-2">
                {onRequestSync && (
                  <button
                    type="button"
                    onClick={() => onRequestSync(track.id)}
                    className="py-1.5 px-3.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-2xs transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Request Sync License</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full Cue Sheet & Rights Modal */}
      {selectedTrackModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto space-y-6">
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
              <div className="flex items-center gap-3">
                <img
                  src={selectedTrackModal.coverUrl}
                  alt={selectedTrackModal.title}
                  className="w-16 h-16 rounded-xl object-cover border border-slate-200 shadow-sm"
                  onError={(e) => {
                    e.currentTarget.src = `/covers/${selectedTrackModal.id}.svg`;
                  }}
                />
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                      {selectedTrackModal.catalogNumber}
                    </span>
                    <span className="text-slate-500">{selectedTrackModal.genre}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    {selectedTrackModal.title}
                  </h3>
                  <div className="text-xs text-slate-600 font-semibold">{selectedTrackModal.artist}</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedTrackModal(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cue Sheet Table */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase text-slate-500">
                Official Production Cue Sheet Specifications
              </h4>

              <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden text-xs">
                <div className="grid grid-cols-3 p-3 border-b border-slate-200 font-mono font-bold text-slate-700 bg-slate-100">
                  <span>Parameter</span>
                  <span className="col-span-2">Registered Statutory Value</span>
                </div>
                <div className="divide-y divide-slate-200 font-mono">
                  <div className="grid grid-cols-3 p-3">
                    <span className="text-slate-500">Track Title</span>
                    <span className="col-span-2 font-bold text-slate-900">{selectedTrackModal.title}</span>
                  </div>
                  <div className="grid grid-cols-3 p-3">
                    <span className="text-slate-500">Catalog Number</span>
                    <span className="col-span-2 text-slate-800">{selectedTrackModal.catalogNumber}</span>
                  </div>
                  <div className="grid grid-cols-3 p-3">
                    <span className="text-slate-500">ISRC Code (Master)</span>
                    <div className="col-span-2 flex items-center justify-between">
                      <span className="font-bold text-slate-900">{selectedTrackModal.isrc}</span>
                      <button
                        onClick={() => copyToClipboard(selectedTrackModal.isrc, 'isrc')}
                        className="text-red-700 hover:text-red-900 font-sans text-[11px] flex items-center gap-1"
                      >
                        {copiedField === 'isrc' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedField === 'isrc' ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 p-3">
                    <span className="text-slate-500">ISWC Code (Work)</span>
                    <div className="col-span-2 flex items-center justify-between">
                      <span className="font-bold text-slate-900">{selectedTrackModal.iswc}</span>
                      <button
                        onClick={() => copyToClipboard(selectedTrackModal.iswc, 'iswc')}
                        className="text-red-700 hover:text-red-900 font-sans text-[11px] flex items-center gap-1"
                      >
                        {copiedField === 'iswc' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedField === 'iswc' ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 p-3">
                    <span className="text-slate-500">Composer(s)</span>
                    <span className="col-span-2 text-slate-900">{selectedTrackModal.composers.join(', ')}</span>
                  </div>
                  <div className="grid grid-cols-3 p-3">
                    <span className="text-slate-500">Publisher</span>
                    <span className="col-span-2 text-slate-900">Sanelow Label PTY Ltd Music Publishing (100% Admin)</span>
                  </div>
                  <div className="grid grid-cols-3 p-3">
                    <span className="text-slate-500">Master Owner</span>
                    <span className="col-span-2 text-slate-900">Sanelow Label PTY Ltd Music Publishing (100%)</span>
                  </div>
                  <div className="grid grid-cols-3 p-3">
                    <span className="text-slate-500">SAMRO CAE</span>
                    <span className="col-span-2 text-slate-900">00928410294</span>
                  </div>
                  <div className="grid grid-cols-3 p-3">
                    <span className="text-slate-500">CAPASSO Publisher</span>
                    <span className="col-span-2 text-slate-900">PUB-ZA-88219</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Available Stems */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase text-slate-500">
                Audio Deliverables &amp; Production Stems Available
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {selectedTrackModal.stemsAvailable.map((stem, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{stem}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedTrackModal(null)}
                className="py-2 px-4 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Close
              </button>
              {onRequestSync && (
                <button
                  type="button"
                  onClick={() => {
                    const id = selectedTrackModal.id;
                    setSelectedTrackModal(null);
                    onRequestSync(id);
                  }}
                  className="py-2 px-5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-xs flex items-center gap-1.5"
                >
                  <span>License This Track</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
