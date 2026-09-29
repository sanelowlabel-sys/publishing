export type SubGenre = 'Deep House' | 'Afro House' | 'Tech House' | 'Vocal House';

export type ClearanceStatus = '100% One-Stop Master & Publishing' | 'Co-Publishing Admin' | 'Direct Master License';

export interface RepertoireTrack {
  id: string;
  catalogNumber: string;
  title: string;
  artist: string;
  featuredArtists?: string;
  genre: SubGenre;
  releaseDate: string;
  bpm: number;
  key: string;
  duration: string;
  coverUrl: string;
  isrc: string;
  iswc: string;
  composers: string[];
  publishers: string[];
  masterOwner: string;
  clearanceStatus: ClearanceStatus;
  stemsAvailable: string[];
  moods: string[];
  tags: string[];
  description: string;
  syncedIn?: string[];
}

export type StatutoryAcronym = 'SAMRO' | 'CAPASSO' | 'RISA' | 'SAMPRA';

export interface StatutoryOrganization {
  acronym: StatutoryAcronym;
  name: string;
  fullName: string;
  establishedYear: number;
  regulatoryStatute: string;
  primaryMandate: string;
  rightsType: string;
  whoItProtects: string;
  whoItCollectsFrom: string[];
  howRoyaltiesAreCalculated: string;
  splitFormula: string;
  sanelowRegistrationDetail: string;
  keyFunctions: string[];
  internationalAffiliations: string[];
  auditStandards: string;
  website: string;
}

export interface SyncRateBracket {
  id: string;
  mediaType: string;
  description: string;
  typicalUsage: string;
  territoryOptions: string[];
  termOptions: string[];
  rateRangeZAR: string;
  rateRangeUSD: string;
  turnaroundTime: string;
  deliverables: string[];
}

export interface SyncLicenseApplication {
  id: string;
  productionTitle: string;
  productionCompany: string;
  musicSupervisor: string;
  supervisorEmail: string;
  supervisorPhone?: string;
  mediaType: string;
  trackId: string;
  trackTitle: string;
  usageType: string;
  timingDuration: string;
  territory: string;
  term: string;
  sceneDescription: string;
  needsStems: boolean;
  budgetCurrency: 'ZAR' | 'USD' | 'EUR' | 'GBP';
  budgetAmount: string;
  requestedAirDate: string;
  submittedAt: string;
}

export interface CueSheetRow {
  cueNumber: number;
  trackTitle: string;
  duration: string;
  usageCode: 'BI' | 'BV' | 'VI' | 'VV' | 'MT' | 'ET';
  usageDescription: string;
  composer: string;
  composerCAE: string;
  composerPRO: string;
  composerShare: string;
  publisher: string;
  publisherCAE: string;
  publisherPRO: string;
  publisherShare: string;
  recordLabel: string;
  isrc: string;
  iswc: string;
}

export type ActiveTab = 'overview' | 'about' | 'statutory' | 'sync' | 'repertoire' | 'cuesheet' | 'governance';
