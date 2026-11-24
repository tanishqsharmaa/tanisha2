import { TextileRecord } from '../types/archive';

export const TEXTILES: TextileRecord[] = [
  // ==========================================
  // FULL SECTION 8 A–J VERIFIED ARCHIVE RECORD
  // ==========================================
  {
    slug: 'patan-patola',
    name: 'Patan Patola',
    subtitle: 'The Double Ikat Silk Tradition of Gujarat',
    stateSlug: 'gujarat',
    stateName: 'Gujarat',
    regionId: 'west',
    centre: 'Patan, Gujarat',
    isFullyDeveloped: true,
    categorySlugs: [
      'ikat-tie-dye-and-block-printed-textiles',
      'silk-and-silk-based-textiles',
      'traditional-regional-sarees-and-ethnic-wear',
    ],
    technique: 'Double Ikat',
    techniques: ['Double Ikat', 'Resist Dyeing', 'Handloom Weaving', 'Natural Dyeing'],
    material: 'Pure Mulberry Silk',
    materials: ['Silk', 'Natural Dyes'],
    tags: ['Gujarat', 'Patan', 'Silk', 'Double Ikat', 'Handwoven'],
    shortDescription:
      'Patan Patola is a legendary double-ikat woven saree crafted from pure silk in Patan, Gujarat. Both warp and weft threads are individually resist-dyed prior to weaving, producing identical geometric precision and vibrant coloration on both sides of the fabric.',
    heroImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Patola_weaving_Patan_Gujarat.jpg/1280px-Patola_weaving_Patan_Gujarat.jpg',
    motifPattern: 'patola',
    pluralNote:
      'Patola is the plural form referring to the textile tradition, whereas a single textile is called Patolu.',
    overview: [
      "Patan Patola is recognized as one of the world's most technically demanding and revered double ikat weaving traditions. Originating in the historic royal city of Patan in northern Gujarat, Patola sarees are distinguished by their extraordinary precision, where both the warp and weft yarns are meticulously tied and resist-dyed before being mounted on a traditional slanted loom.",
      'The word Patola is the plural term denoting these precious heirloom textiles, while a single piece is traditionally known as Patolu. Because the design is engineered directly into the yarns before weaving, the finished fabric has no reverse side: both faces exhibit identical vibrancy, clarity, and texture.',
      'Historically treasured by royalty and aristocratic families across Gujarat and Maharashtra, Patola textiles were also exported as sacred prestige cloths across Southeast Asia—particularly to the Indonesian archipelago—along the ancient Spice Route. Today, this master craft is practiced by a very small number of traditional Salvi weaver families who carry forward centuries of mathematical and artisanal knowledge.',
    ],
    types: [
      'Traditional Handwoven Sari',
      'Double Ikat Textile',
      'Silk-Based Heirloom Textile',
    ],
    materialDetails: [
      'Primary Material: Pure Mulberry Silk Yarn (twisted 8-ply silk for warp and weft)',
      'Dyeing Mediums: Natural and traditional mordant dyes including madder root, turmeric, pomegranate rind, and indigo',
      'Textile Properties: Reversible (identical on both faces), lustrous silk drape, high tensile resilience with colours lasting centuries ("Padi Patole Bhaat, Phate Pan Fite Nahin" — the design never fades even if the cloth wears away)',
    ],
    techniqueHeading: 'The Art of Double Ikat',
    techniqueSteps: [
      {
        stepNumber: 1,
        title: 'Design Planning',
        description:
          'The pattern is planned on graph/grid before the weaving process begins, calculating exact warp and weft alignments.',
      },
      {
        stepNumber: 2,
        title: 'Thread Preparation',
        description:
          'Silk yarns are arranged and divided into warp and weft bundles according to the design.',
      },
      {
        stepNumber: 3,
        title: 'Tying',
        description:
          'Selected sections of both warp and weft threads are tightly tied with cotton thread to resist dye.',
      },
      {
        stepNumber: 4,
        title: 'Dyeing',
        description:
          'Threads are dyed in carefully planned stages; different sections are tied and dyed to create multiple colours.',
      },
      {
        stepNumber: 5,
        title: 'Setting the Loom',
        description:
          'The prepared warp and weft threads are meticulously arranged on the traditional slant loom.',
      },
      {
        stepNumber: 6,
        title: 'Weaving',
        description:
          'Both sets of dyed threads must align precisely at every intersection during weaving to form the final double-ikat pattern.',
      },
    ],
    motifs: [
      {
        id: 'nari-kunjar',
        name: 'Nari Kunjar',
        meaning: 'Woman & Elephant',
        description:
          'Figurative elephant and female dancer motif symbolizing royalty, grace, and festival celebration.',
        patternType: 'figurative',
      },
      {
        id: 'ratan-chowk',
        name: 'Ratan Chowk',
        meaning: 'Jeweled Square',
        description:
          'Geometric jewel-square and floral arrangement reflecting cosmic harmony and auspicious protection.',
        patternType: 'geometric',
      },
      {
        id: 'chhabdi',
        name: 'Chhabdi',
        meaning: 'Floral Basket',
        description:
          'Octagonal basket-inspired pattern representing sacred floral offerings to deities.',
        patternType: 'floral',
      },
      {
        id: 'paan',
        name: 'Paan',
        meaning: 'Betel Leaf (Paan Bhat)',
        description:
          'Sacred heart-shaped betel leaf motif representing prosperity, hospitality, and marital blessings.',
        patternType: 'botanical',
      },
      {
        id: 'phul',
        name: 'Phul',
        meaning: 'Floral Rosette',
        description:
          'Symmetrical multi-petalled flower motif repeated in diagonal geometric diapers.',
        patternType: 'floral',
      },
      {
        id: 'geometric-diamonds',
        name: 'Geometric Diamonds',
        meaning: 'Diamond Grid',
        description:
          'Repeated symmetrical stepped diamond patterns with blurred ikat edges characteristic of double ikat.',
        patternType: 'geometric',
      },
    ],
    centreDescription:
      'Patan is an ancient royal capital in northern Gujarat famed for its Solanki dynasty architectural wonders like Rani ki Vav. Master Salvi weavers settled here in the 12th century under King Kumarapala, establishing an unbroken hereditary guild that endures today.',
    culturalSignificance: [
      'Regarded as the pinnacle of Gujarati bridal trousseaus, Patola sarees are treasured family heirlooms passed through generations as symbols of prosperity and protective blessings.',
      'Preserved exclusively by a handful of master Salvi families in Patan who maintain centuries-old hereditary techniques without mechanical automation.',
      'Historic role in Southeast Asian maritime trade, where Gujarati Patola cloths were prized as sacred talismanic textiles (kain patola) by Indonesian royalty.',
      'Celebrated in Gujarati folklore with the proverbial praise: "Padi Patole Bhaat, Phate Pan Fite Nahin" (The design laid in Patola will never fade, even if the fabric tears).',
    ],
    relatedTextileSlugs: [
      'bandhani',
      'mashru',
      'pochampally-ikat',
      'odisha-ikat',
    ],
    sources: [
      {
        title: 'Patan Patola — Incredible India',
        publisher: 'Ministry of Tourism, Government of India',
        url: 'https://www.incredibleindia.gov.in/en/gujarat/patan-patola',
      },
      {
        title: 'Patola Weaving Heritage — Patan District',
        publisher: 'Government of Gujarat NIC',
        url: 'https://patan.nic.in/tourist-place/patola/',
      },
      {
        title: 'Gujarat Handlooms & Crafts: Patola of Patan',
        publisher: 'Gujarat Tourism',
        url: 'https://gujarattourism.com/north-zone/patan/patola.html',
      },
      {
        title: 'Geographical Indications Application No. 232: Patan Patola',
        publisher: 'Intellectual Property India (GI Registry)',
        url: 'https://search.ipindia.gov.in/GIRPublicSearch/Application/Details/232',
      },
    ],
  },

  // ==========================================
  // GUJARAT PREVIEW TEXTILES (isFullyDeveloped: false)
  // ==========================================
  {
    slug: 'bandhani',
    name: 'Bandhani',
    subtitle: 'The Celestial Tie-Dye Art of Jamnagar & Kutch',
    stateSlug: 'gujarat',
    stateName: 'Gujarat',
    regionId: 'west',
    centre: 'Jamnagar & Kutch, Gujarat',
    isFullyDeveloped: false,
    categorySlugs: [
      'ikat-tie-dye-and-block-printed-textiles',
      'traditional-regional-sarees-and-ethnic-wear',
    ],
    technique: 'Tie-Dye (Bandhej)',
    techniques: ['Plucking', 'Resist Tying', 'Natural Dyeing'],
    material: 'Fine Silk & Georgette',
    materials: ['Silk', 'Cotton'],
    tags: ['Gujarat', 'Bandhani', 'Tie-Dye', 'Silk', 'Handmade'],
    shortDescription:
      'Bandhani is an ancient resist-dyeing art practiced by Khatri artisans where minute fabric pinches are tightly tied with thread before dyeing to create constellations of sacred dots.',
    heroImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Bandhani_fabric_Gujarat.jpg/1280px-Bandhani_fabric_Gujarat.jpg',
    motifPattern: 'bandhani',
  },
  {
    slug: 'mashru',
    name: 'Mashru',
    subtitle: 'Lustrous Silk-Cotton Permitted Weave',
    stateSlug: 'gujarat',
    stateName: 'Gujarat',
    regionId: 'west',
    centre: 'Patan & Mandvi, Gujarat',
    isFullyDeveloped: false,
    categorySlugs: [
      'silk-and-silk-based-textiles',
      'traditional-regional-sarees-and-ethnic-wear',
    ],
    technique: 'Mixed Warp-Weft Satin Weave',
    techniques: ['Satin Weaving', 'Ikat Dyeing'],
    material: 'Silk (Exterior) & Cotton (Interior)',
    materials: ['Silk', 'Cotton'],
    tags: ['Gujarat', 'Mashru', 'Silk-Cotton', 'Weave'],
    shortDescription:
      'Mashru is a luxurious woven fabric featuring a radiant silk surface on the face and soft, cooling cotton against the skin, traditionally created to conform with religious prohibitions against wearing pure silk.',
    heroImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Mashru_fabric_Patan_Gujarat.jpg/1280px-Mashru_fabric_Patan_Gujarat.jpg',
    motifPattern: 'weave',
  },
  {
    slug: 'tangaliya',
    name: 'Tangaliya',
    subtitle: 'The 700-Year-Old Bead-Weaving Craft of Surendranagar',
    stateSlug: 'gujarat',
    stateName: 'Gujarat',
    regionId: 'west',
    centre: 'Surendranagar, Gujarat',
    isFullyDeveloped: false,
    categorySlugs: ['tribal-and-indigenous-weaves'],
    technique: 'Daana (Bead) Knotting',
    techniques: ['Supplementary Weft Wrapping', 'Pit Loom Weaving'],
    material: 'Indigenous Desi Wool & Cotton',
    materials: ['Wool', 'Cotton'],
    tags: ['Gujarat', 'Tangaliya', 'Dangasia', 'Handloom'],
    shortDescription:
      'Tangaliya is an indigenous handloom technique of the Dangasia pastoralist community where microscopic fiber beads (daana) are manually twisted into the warp during weaving to produce geometric animal and tribal patterns.',
    heroImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Tangaliya_shawl_Gujarat.jpg/1280px-Tangaliya_shawl_Gujarat.jpg',
    motifPattern: 'weave',
  },
  {
    slug: 'kutch-embroidery',
    name: 'Kutch Embroidery',
    subtitle: 'Vibrant Needlework, Mirrorwork & Tribal Stitch Traditions',
    stateSlug: 'gujarat',
    stateName: 'Gujarat',
    regionId: 'west',
    centre: 'Kutch District, Gujarat',
    isFullyDeveloped: false,
    categorySlugs: ['embroidered-textiles'],
    technique: 'Surface Embroidery & Abhla (Mirrorwork)',
    techniques: ['Suf', 'Khaarek', 'Paako', 'Rabari Stitch', 'Mutava'],
    material: 'Handloom Cotton & Silk with Real Mirrors',
    materials: ['Cotton', 'Silk', 'Glass Mirrors'],
    tags: ['Gujarat', 'Kutch', 'Embroidery', 'Mirrorwork'],
    shortDescription:
      'Kutch embroidery encompasses an extraordinary mosaic of tribal needlecrafts—including Suf, Rabari, and Ahir styles—distinguished by shimmering mirrors and dense geometric stitching.',
    heroImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Kutch_embroidery_detail.jpg/1280px-Kutch_embroidery_detail.jpg',
    motifPattern: 'bandhani',
  },
  {
    slug: 'ajrakh',
    name: 'Ajrakh',
    subtitle: 'Ancient Natural Block Printing of Kutch & Dhamadka',
    stateSlug: 'gujarat',
    stateName: 'Gujarat',
    regionId: 'west',
    centre: 'Ajrakhpur & Dhamadka, Gujarat',
    isFullyDeveloped: false,
    categorySlugs: ['ikat-tie-dye-and-block-printed-textiles'],
    technique: 'Double-Sided Block Printing & Resist Dyeing',
    techniques: ['Carved Wood Blocks', 'Mordant Printing', 'River Washing'],
    material: 'Natural Cotton & Vegetable Dyes',
    materials: ['Cotton', 'Indigo', 'Madder', 'Iron Rust'],
    tags: ['Gujarat', 'Ajrakh', 'Block Print', 'Natural Dye'],
    shortDescription:
      'Ajrakh is an intricate 16-stage block-printing tradition characterized by symmetrical stars and cosmic grids dyed with natural indigo, madder root, and mineral mordants on both sides of the cloth.',
    heroImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Ajrakh_block_print_fabric.jpg/1280px-Ajrakh_block_print_fabric.jpg',
    motifPattern: 'blockprint',
  },
  {
    slug: 'gharchola',
    name: 'Gharchola',
    subtitle: 'Sacred Zari Grid Wedding Sari of Gujarat',
    stateSlug: 'gujarat',
    stateName: 'Gujarat',
    regionId: 'west',
    centre: 'Porbandar & Rajkot, Gujarat',
    isFullyDeveloped: false,
    categorySlugs: [
      'brocades-and-zari-weaves',
      'traditional-regional-sarees-and-ethnic-wear',
      'ritual-and-ceremonial-textiles',
    ],
    technique: 'Zari Grid Weave & Bandhani Tie-Dye',
    techniques: ['Supplementary Zari', 'Resist Knotting', 'Bridal Dyeing'],
    material: 'Pure Silk with Real Zari Threads',
    materials: ['Silk', 'Zari (Gold/Silver Metallic Thread)'],
    tags: ['Gujarat', 'Gharchola', 'Zari', 'Bridal'],
    shortDescription:
      'Gharchola is an auspicious Gujarati bridal textile woven with a golden zari check grid (chowk) of 52 or 108 squares, inside each of which intricate Bandhani motifs are meticulously tied and dyed.',
    heroImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Gharchola_sari_detail.jpg/1280px-Gharchola_sari_detail.jpg',
    motifPattern: 'brocade',
  },

  // ==========================================
  // RELATED IKAT TEXTILES (isFullyDeveloped: false)
  // ==========================================
  {
    slug: 'pochampally-ikat',
    name: 'Pochampally Ikat',
    subtitle: 'The Geometric Pagdu Bandhu of Telangana',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    regionId: 'south',
    centre: 'Bhoodan Pochampally, Telangana',
    isFullyDeveloped: false,
    categorySlugs: ['ikat-tie-dye-and-block-printed-textiles'],
    technique: 'Single & Double Ikat Weaving',
    techniques: ['Resist Tie-Dye', 'Handloom Weaving'],
    material: 'Mulberry Silk & Fine Cotton',
    materials: ['Silk', 'Cotton'],
    tags: ['Telangana', 'Ikat', 'Pochampally', 'Silk'],
    shortDescription:
      'Pochampally Ikat, known as Pagdu Bandhu, is a renowned resist-dyeing tradition from Telangana featuring modern geometric and traditional temple motifs with sharp, crisp contours.',
    heroImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Pochampally_saree.jpg/1280px-Pochampally_saree.jpg',
    motifPattern: 'ikat',
  },
  {
    slug: 'odisha-ikat',
    name: 'Odisha Ikat',
    subtitle: 'The Sacred Curvilinear Bandha of Sambalpur & Bargarh',
    stateSlug: 'odisha',
    stateName: 'Odisha',
    regionId: 'east',
    centre: 'Sambalpur & Nuapatna, Odisha',
    isFullyDeveloped: false,
    categorySlugs: ['ikat-tie-dye-and-block-printed-textiles'],
    technique: 'Bandha (Curvilinear Single & Double Ikat)',
    techniques: ['Resist Dyeing', 'Temple Motifs', 'Tussar Weaving'],
    material: 'Mulberry Silk, Tussar & Cotton',
    materials: ['Silk', 'Cotton', 'Tussar'],
    tags: ['Odisha', 'Bandha', 'Ikat', 'Sambalpuri'],
    shortDescription:
      'Odisha Ikat, known locally as Bandha, is celebrated for its graceful feathered edges and lyrical curved motifs inspired by temple architecture, sea conches, and sacred lotus flowers.',
    heroImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sambalpuri_sari.jpg/1280px-Sambalpuri_sari.jpg',
    motifPattern: 'ikat',
  },
];
