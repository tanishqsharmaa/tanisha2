import { RegionId, RegionInfo, StateEntity, TextileCategory, TextileRecord } from '../types/archive';
import { REGIONS, STATES_AND_UTS } from './regionsAndStates';
import { TEXTILE_CATEGORIES } from './categories';
import { TEXTILES } from './textiles';

// Re-export core datasets
export * from './regionsAndStates';
export * from './categories';
export * from './textiles';

/**
 * Retrieve state or UT entity by slug
 */
export function getStateBySlug(slug: string): StateEntity | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim();
  return STATES_AND_UTS.find((s) => s.slug === normalized);
}

/**
 * Retrieve all states and UTs belonging to a specific region
 */
export function getStatesByRegion(regionId: RegionId): StateEntity[] {
  return STATES_AND_UTS.filter((s) => s.regionId === regionId);
}

/**
 * Retrieve region metadata by region ID
 */
export function getRegionById(regionId: RegionId): RegionInfo | undefined {
  return REGIONS.find((r) => r.id === regionId);
}

/**
 * Retrieve textile record by slug
 */
export function getTextileBySlug(slug: string): TextileRecord | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim();
  return TEXTILES.find((t) => t.slug === normalized);
}

/**
 * Retrieve textile category by slug
 */
export function getCategoryBySlug(slug: string): TextileCategory | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim();
  return TEXTILE_CATEGORIES.find((c) => c.slug === normalized);
}

/**
 * Retrieve textiles associated with a category
 */
export function getTextilesByCategory(categorySlug: string): TextileRecord[] {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return [];
  return TEXTILES.filter((t) => category.textileSlugs.includes(t.slug) || t.categorySlugs.includes(categorySlug));
}

/**
 * Search and filter textiles across query string and specific dimensions
 */
export function searchTextiles(
  query: string = '',
  filters?: {
    textile?: string;
    state?: string;
    technique?: string;
    material?: string;
  }
): TextileRecord[] {
  const q = query.toLowerCase().trim();
  const filterTextile = filters?.textile?.toLowerCase().trim();
  const filterState = filters?.state?.toLowerCase().trim();
  const filterTechnique = filters?.technique?.toLowerCase().trim();
  const filterMaterial = filters?.material?.toLowerCase().trim();

  return TEXTILES.filter((t) => {
    // 1. Text Search query matching
    if (q) {
      const matchName = t.name.toLowerCase().includes(q);
      const matchSubtitle = t.subtitle.toLowerCase().includes(q);
      const matchDesc = t.shortDescription.toLowerCase().includes(q);
      const matchState = t.stateName.toLowerCase().includes(q);
      const matchTech = t.technique.toLowerCase().includes(q) || t.techniques.some((tech) => tech.toLowerCase().includes(q));
      const matchMat = t.material.toLowerCase().includes(q) || t.materials.some((m) => m.toLowerCase().includes(q));
      const matchTags = t.tags.some((tag) => tag.toLowerCase().includes(q));

      if (!matchName && !matchSubtitle && !matchDesc && !matchState && !matchTech && !matchMat && !matchTags) {
        return false;
      }
    }

    // 2. Specific Dimension Filters
    if (filterTextile && filterTextile !== 'all') {
      const matchesTextile = t.name.toLowerCase().includes(filterTextile) || t.slug.toLowerCase().includes(filterTextile);
      if (!matchesTextile) return false;
    }

    if (filterState && filterState !== 'all') {
      const matchesState = t.stateSlug.toLowerCase() === filterState || t.stateName.toLowerCase().includes(filterState);
      if (!matchesState) return false;
    }

    if (filterTechnique && filterTechnique !== 'all') {
      const matchesTechnique =
        t.technique.toLowerCase().includes(filterTechnique) ||
        t.techniques.some((tech) => tech.toLowerCase().includes(filterTechnique));
      if (!matchesTechnique) return false;
    }

    if (filterMaterial && filterMaterial !== 'all') {
      const matchesMaterial =
        t.material.toLowerCase().includes(filterMaterial) ||
        t.materials.some((m) => m.toLowerCase().includes(filterMaterial));
      if (!matchesMaterial) return false;
    }

    return true;
  });
}
