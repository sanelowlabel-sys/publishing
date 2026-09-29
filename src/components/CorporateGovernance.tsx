import React, { useState } from 'react';
import { CORPORATE_GOVERNANCE, STATUTORY_ORGANIZATIONS } from '../data/musicData';
import { 
  Building2, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  FileText, 
  CheckCircle2, 
  Scale, 
  Send,
  ExternalLink,
  Award,
  Sparkles
} from 'lucide-react';
import { StatutoryLogo } from './StatutoryLogos';

export const CorporateGovernance: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    organization: '',
    email: '',
    subject: 'Licensing & Rights Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="corporate-governance" className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="border-b border-slate-200 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-red-100 text-red-900 border border-red-300 mb-3">
          <Building2 className="w-3.5 h-3.5 text-red-700" />
          <span>Institutional Registration &amp; Fiduciary Governance</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Corporate Information &amp; Legal Compliance
        </h2>
        <p className="mt-2 text-base text-slate-600 max-w-3xl leading-relaxed">
          <strong className="text-slate-900">Sanelow Label PTY Ltd Music Publishers</strong> is a registered South African proprietary limited company dedicated to sound recording production, music publishing administration, and international master rights commercialization under South African statutory regulations.
        </p>
      </div>

      {/* Main Corporate Profile Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Company Registration Card */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-black p-0.5 border border-slate-200 shadow-xs flex items-center justify-center overflow-hidden shrink-0">
              <img src="/sanelow-logo.jpg" alt="Sanelow Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                Statutory Enterprise
              </span>
              <h3 className="text-base font-bold text-slate-900">
                CIPC Incorporation
              </h3>
            </div>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between py-1.5 border-b border-slate-100">
              <span className="text-slate-500">Legal Entity:</span>
              <span className="font-bold text-slate-900">{CORPORATE_GOVERNANCE.legalEntity}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-slate-100 font-mono">
              <span className="text-slate-500">CIPC Reg No:</span>
              <span className="font-bold text-red-700">{CORPORATE_GOVERNANCE.cipcRegistrationNumber}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-slate-100 font-mono">
              <span className="text-slate-500">Incorporation Date:</span>
              <span className="text-slate-700">{CORPORATE_GOVERNANCE.incorporationDate}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-slate-100">
              <span className="text-slate-500">Jurisdiction:</span>
              <span className="text-slate-700">{CORPORATE_GOVERNANCE.jurisdiction}</span>
            </div>
            <div className="flex justify-between py-1.5 font-mono">
              <span className="text-slate-500">SARS Tax Ref:</span>
              <span className="text-slate-700">{CORPORATE_GOVERNANCE.taxRegistrationNumber}</span>
            </div>
          </div>
        </div>

        {/* Regulatory Society Membership Codes */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs space-y-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-red-50 text-red-700">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-red-700 uppercase tracking-wider font-semibold">
                Official Rightsholder Codes
              </span>
              <h3 className="text-base font-bold text-slate-900">
                CMO &amp; Trade Registry
              </h3>
            </div>
          </div>

          <div className="space-y-3 text-xs font-mono">
            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex justify-between items-center">
              <span className="text-slate-600 font-bold">SAMRO Publisher:</span>
              <span className="font-extrabold text-red-700">{CORPORATE_GOVERNANCE.regulatoryBodyRegistrations.samroPublisherId}</span>
            </div>
            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex justify-between items-center">
              <span className="text-slate-600 font-bold">CAPASSO Mechanical:</span>
              <span className="font-extrabold text-teal-700">{CORPORATE_GOVERNANCE.regulatoryBodyRegistrations.capassoPublisherCode}</span>
            </div>
            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex justify-between items-center">
              <span className="text-slate-600 font-bold">RISA Record Label:</span>
              <span className="font-extrabold text-amber-700">{CORPORATE_GOVERNANCE.regulatoryBodyRegistrations.risaRecordLabelId}</span>
            </div>
            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex justify-between items-center">
              <span className="text-slate-600 font-bold">SAMPRA Master:</span>
              <span className="font-extrabold text-purple-700">{CORPORATE_GOVERNANCE.regulatoryBodyRegistrations.sampraMasterHolderId}</span>
            </div>
          </div>
        </div>

        {/* Registered Office & Contacts */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs space-y-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-slate-100 text-slate-800">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                Headquarters
              </span>
              <h3 className="text-base font-bold text-slate-900">
                Sandton Office
              </h3>
            </div>
          </div>

          <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
            <div className="font-bold text-slate-900">
              {CORPORATE_GOVERNANCE.registeredOffice.building}
            </div>
            <div>{CORPORATE_GOVERNANCE.registeredOffice.floor}</div>
            <div>{CORPORATE_GOVERNANCE.registeredOffice.street}</div>
            <div>{CORPORATE_GOVERNANCE.registeredOffice.suburb}</div>
            <div>{CORPORATE_GOVERNANCE.registeredOffice.city}, {CORPORATE_GOVERNANCE.registeredOffice.postalCode}</div>
            <div className="pt-2 font-mono text-slate-900 font-semibold flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-red-600" />
              <span>{CORPORATE_GOVERNANCE.executiveContacts.directTelephone}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Official CMO Badges Display */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
          <div>
            <h3 className="text-lg font-bold text-white">
              Official South African Collective Management Organisations
            </h3>
            <p className="text-xs text-slate-400">
              Direct institutional membership and statutory licensing credentials
            </p>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-800 flex items-center gap-1.5 self-start sm:self-auto">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Fully Verified</span>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
            <div className="bg-white p-2.5 rounded-lg flex items-center justify-center shadow-xs">
              <StatutoryLogo acronym="SAMRO" size="md" />
            </div>
            <p className="text-[11px] text-slate-400">Performing rights administration for all underlying Sanelow musical compositions.</p>
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
            <div className="bg-white p-2.5 rounded-lg flex items-center justify-center shadow-xs">
              <StatutoryLogo acronym="CAPASSO" size="md" />
            </div>
            <p className="text-[11px] text-slate-400">Digital mechanical reproduction licensing across global interactive DSPs and downloads.</p>
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
            <div className="bg-white p-2.5 rounded-lg flex items-center justify-center shadow-xs">
              <StatutoryLogo acronym="RISA" size="md" />
            </div>
            <p className="text-[11px] text-slate-400">National ISRC issuer (ZA-SNL) and master sound recording trade association governance.</p>
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
            <div className="bg-white p-2.5 rounded-lg flex items-center justify-center shadow-xs">
              <StatutoryLogo acronym="SAMPRA" size="md" />
            </div>
            <p className="text-[11px] text-slate-400">Needletime neighbouring rights collection for performers and master owners.</p>
          </div>
        </div>
      </div>

      {/* Corporate Inquiries & Legal Form */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h3 className="text-xl font-bold text-slate-900">
            Corporate &amp; Legal Affairs Inquiry
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Direct communication channel for broadcasters, DSP audit teams, international collecting societies, and legal representatives.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 bg-emerald-50 border border-emerald-300 rounded-xl text-center space-y-2">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
            <h4 className="text-base font-bold text-slate-900">Inquiry Logged</h4>
            <p className="text-xs text-slate-600 max-w-md mx-auto">
              Your communication has been dispatched to Sanelow Label Legal &amp; Compliance. You will receive an official acknowledgment within 12 business hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <label className="block text-slate-700 font-mono mb-1 font-semibold">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Adv. Thabo Ndlovu"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-mono mb-1 font-semibold">Entity / Broadcaster *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. SABC Television, MultiChoice or Netflix"
                  value={contactForm.organization}
                  onChange={(e) => setContactForm({ ...contactForm, organization: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-mono mb-1 font-semibold">Official Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="name@organization.com"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-700 font-mono text-xs mb-1 font-semibold">Inquiry Details *</label>
              <textarea
                required
                rows={4}
                placeholder="State your compliance inquiry, statutory royalty distribution audit, or institutional licensing query."
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="py-2.5 px-6 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Legal Communication</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
