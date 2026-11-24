export type RegionId = 'north' | 'south' | 'east' | 'west' | 'northeast';

export interface RegionInfo {
  id: RegionId;
  name: string;
  tagline: string;
  description: string;
  states: string[];
}

export interface StateEntity {
  slug: string;
  name: string;
  code: string;
  regionId: RegionId;
  regionName: string;
  isUnionTerritory: boolean;
  isFullyDeveloped: boolean;
  heroHeading?: string;
  heroSubtitle?: string;
  introduction?: string[];
  textileSlugs: string[];
  placeholderNote: string;
}

export interface TextileCategory {
  slug: string;
  number: number;
  title: string;
  shortDescription: string;
  motifType: 'patola' | 'bandhani' | 'ikat' | 'blockprint' | 'brocade' | 'weave';
  textileSlugs: string[];
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface TextileMotif {
  id: string;
  name: string;
  meaning: string;
  description: string;
  patternType: string;
}

export interface TextileSource {
  title: string;
  publisher: string;
  url: string;
}

export interface TextileRecord {
  slug: string;
  name: string;
  subtitle: string;
  stateSlug: string;
  stateName: string;
  regionId: RegionId;
  centre: string;
  isFullyDeveloped: boolean;
  categorySlugs: string[];
  technique: string;
  techniques: string[];
  material: string;
  materials: string[];
  tags: string[];
  shortDescription: string;
  heroImage: string;
  motifPattern: 'patola' | 'bandhani' | 'ikat' | 'blockprint' | 'brocade' | 'weave';
  overview?: string[];
  pluralNote?: string;
  types?: string[];
  materialDetails?: string[];
  techniqueHeading?: string;
  techniqueSteps?: ProcessStep[];
  motifs?: TextileMotif[];
  centreDescription?: string;
  culturalSignificance?: string[];
  relatedTextileSlugs?: string[];
  sources?: TextileSource[];
}
