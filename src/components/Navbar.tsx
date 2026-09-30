import React, { useState } from 'react';
import { ActiveTab } from '../types';
import { 
  ShieldCheck, 
  Scale, 
  Clapperboard, 
  Disc3, 
  FileSpreadsheet, 
  Building2, 
  Menu, 
  X,
  BookOpen,
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  activeTab: ActiveTab;
  onNavigate: (tab: ActiveTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ActiveTab; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'overview', label: 'Overview', icon: Building2 },
    { id: 'about', label: 'Online Publishing & Streaming', icon: BookOpen },
    { id: 'statutory', label: 'SAMRO • CAPASSO • RISA • SAMPRA', icon: Scale },
    { id: 'sync', label: 'Sync & Digital Licensing', icon: Clapperboard },
    { id: 'cuesheet', label: 'Cue Sheet Generator', icon: FileSpreadsheet },
    { id: 'governance', label: 'Corporate & Legal', icon: ShieldCheck },
    { id: 'repertoire', label: 'Repertoire Index', icon: Disc3 }
  ];

  const handleNavClick = (tab: ActiveTab) => {
    onNavigate(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo & Name with Uploaded Real Logo */}
          <button
            type="button"
            onClick={() => handleNavClick('overview')}
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-slate-200 shadow-sm group-hover:border-red-600 transition-colors bg-white flex items-center justify-center shrink-0">
              <img
                src="/sanelow-logo.jpg"
                alt="Sanelow Label PTY Ltd Music Publishers Logo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to text initials if image fails
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    target.parentElement.innerHTML = '<span class="font-bold font-mono text-red-500 text-sm">SL</span>';
                  }
                }}
              />
            </div>

            <div>
              <div className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight flex items-center gap-1.5 leading-none">
                <span>SANELOW LABEL</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded font-mono font-bold bg-red-100 text-red-800 border border-red-200">
                  PTY LTD
                </span>
              </div>
              <div className="text-[11px] font-mono font-bold text-red-600 uppercase tracking-wider mt-1">
                Music Publishers &amp; Rights Administration
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-red-50 text-red-900 font-bold border border-red-200 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-red-600' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Quick CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleNavClick('sync')}
              className="py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-sm hover:shadow transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Clapperboard className="w-3.5 h-3.5" />
              <span>One-Stop Sync Desk</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex xl:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="p-3 bg-red-50 rounded-xl border border-red-200 flex items-center gap-3 mb-2">
            <img src="/sanelow-logo.jpg" alt="Logo" className="w-9 h-9 rounded-lg object-cover" />
            <div>
              <div className="font-bold text-xs text-red-950">Sanelow Label PTY Ltd</div>
              <div className="text-[10px] text-red-700 font-mono">Music Publishing Administration</div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full px-3 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-2.5 transition-colors text-left ${
                    isActive
                      ? 'bg-red-50 text-red-900 font-bold border border-red-200'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-red-600' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200">
            <button
              type="button"
              onClick={() => handleNavClick('sync')}
              className="w-full py-3 px-4 rounded-xl bg-red-600 text-white font-bold text-xs shadow-sm flex items-center justify-center gap-2"
            >
              <Clapperboard className="w-4 h-4" />
              <span>Open Sync Clearance Desk</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
