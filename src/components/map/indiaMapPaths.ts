import { RegionId } from '../../types/archive';

export interface StateMapPath {
  slug: string;
  name: string;
  shortLabel?: string;
  regionId: RegionId;
  path: string;
  center: [number, number];
  isUnionTerritory: boolean;
  isSmallEntity?: boolean;
  callout?: {
    x: number;
    y: number;
    lineStart: [number, number];
    lineEnd: [number, number];
  };
}

/**
 * Geographical SVG path definitions and coordinates for all 36 Indian States and Union Territories.
 * Standard viewBox: 0 0 1000 1000
 *
 * Counts:
 * - North: 9 (Haryana, Himachal Pradesh, Punjab, Uttarakhand, Uttar Pradesh, Delhi, Chandigarh, Jammu & Kashmir, Ladakh)
 * - South: 8 (Tamil Nadu, Andhra Pradesh, Telangana, Karnataka, Kerala, Puducherry, Andaman & Nicobar Islands, Lakshadweep)
 * - East: 5 (Bihar, West Bengal, Odisha, Jharkhand, Chhattisgarh)
 * - West: 6 (Madhya Pradesh, Gujarat, Maharashtra, Rajasthan, Goa, Dadra & Nagar Haveli and Daman & Diu)
 * - Northeast: 8 (Assam, Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, Tripura)
 * Total: 36
 */
export const INDIA_MAP_PATHS: StateMapPath[] = [
  // ==========================================
  // NORTH (9 entities)
  // ==========================================
  {
    slug: 'ladakh',
    name: 'Ladakh',
    regionId: 'north',
    path: 'M 350,45 L 450,40 L 485,95 L 455,160 L 390,165 L 340,125 Z',
    center: [415, 95],
    isUnionTerritory: true,
  },
  {
    slug: 'jammu-and-kashmir',
    name: 'Jammu and Kashmir',
    regionId: 'north',
    path: 'M 290,95 L 350,45 L 340,125 L 335,165 L 280,165 L 265,120 Z',
    center: [305, 125],
    isUnionTerritory: true,
  },
  {
    slug: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    regionId: 'north',
    path: 'M 335,165 L 390,165 L 430,195 L 390,230 L 340,215 L 325,185 Z',
    center: [365, 195],
    isUnionTerritory: false,
  },
  {
    slug: 'punjab',
    name: 'Punjab',
    regionId: 'north',
    path: 'M 280,165 L 335,165 L 325,185 L 330,215 L 315,255 L 255,245 L 265,195 Z',
    center: [290, 210],
    isUnionTerritory: false,
  },
  {
    slug: 'chandigarh',
    name: 'Chandigarh',
    shortLabel: 'Chandigarh',
    regionId: 'north',
    path: 'M 324,206 h 12 v 12 h -12 Z',
    center: [330, 212],
    isUnionTerritory: true,
    isSmallEntity: true,
    callout: {
      x: 210,
      y: 195,
      lineStart: [324, 212],
      lineEnd: [285, 195],
    },
  },
  {
    slug: 'uttarakhand',
    name: 'Uttarakhand',
    regionId: 'north',
    path: 'M 430,195 L 475,215 L 465,260 L 410,255 L 390,230 Z',
    center: [430, 225],
    isUnionTerritory: false,
  },
  {
    slug: 'haryana',
    name: 'Haryana',
    regionId: 'north',
    path: 'M 315,220 L 345,215 L 360,235 L 375,255 L 365,290 L 320,300 L 290,260 L 315,255 Z',
    center: [330, 265],
    isUnionTerritory: false,
  },
  {
    slug: 'delhi',
    name: 'Delhi',
    shortLabel: 'Delhi',
    regionId: 'north',
    path: 'M 356,258 h 10 v 10 h -10 Z',
    center: [361, 263],
    isUnionTerritory: true,
    isSmallEntity: true,
    callout: {
      x: 260,
      y: 270,
      lineStart: [356, 263],
      lineEnd: [305, 270],
    },
  },
  {
    slug: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    regionId: 'north',
    path: 'M 375,240 L 455,260 L 535,300 L 585,350 L 525,395 L 465,380 L 415,385 L 375,320 L 370,265 Z',
    center: [470, 325],
    isUnionTerritory: false,
  },

  // ==========================================
  // WEST (6 entities)
  // ==========================================
  {
    slug: 'rajasthan',
    name: 'Rajasthan',
    regionId: 'west',
    path: 'M 220,240 L 290,230 L 340,270 L 370,310 L 360,380 L 300,390 L 240,380 L 175,330 L 180,280 Z',
    center: [265, 315],
    isUnionTerritory: false,
  },
  {
    slug: 'gujarat',
    name: 'Gujarat',
    regionId: 'west',
    path: 'M 145,380 L 230,370 L 280,420 L 275,485 L 230,495 L 190,490 L 175,460 L 210,450 L 190,430 L 140,420 Z',
    center: [215, 435],
    isUnionTerritory: false,
  },
  {
    slug: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    regionId: 'west',
    path: 'M 330,375 L 430,360 L 520,380 L 530,440 L 490,490 L 390,495 L 320,455 Z',
    center: [425, 430],
    isUnionTerritory: false,
  },
  {
    slug: 'maharashtra',
    name: 'Maharashtra',
    regionId: 'west',
    path: 'M 240,490 L 320,475 L 420,490 L 480,520 L 450,600 L 370,615 L 290,600 L 260,550 Z',
    center: [350, 550],
    isUnionTerritory: false,
  },
  {
    slug: 'goa',
    name: 'Goa',
    shortLabel: 'Goa',
    regionId: 'west',
    path: 'M 276,620 L 294,620 L 294,642 L 276,642 Z',
    center: [285, 631],
    isUnionTerritory: false,
    isSmallEntity: true,
    callout: {
      x: 180,
      y: 630,
      lineStart: [276, 631],
      lineEnd: [225, 630],
    },
  },
  {
    slug: 'dadra-and-nagar-haveli-and-daman-and-diu',
    name: 'Dadra and Nagar Haveli and Daman and Diu',
    shortLabel: 'DNH & DD',
    regionId: 'west',
    path: 'M 236,478 h 10 v 10 h -10 Z',
    center: [241, 483],
    isUnionTerritory: true,
    isSmallEntity: true,
    callout: {
      x: 90,
      y: 510,
      lineStart: [236, 483],
      lineEnd: [170, 510],
    },
  },

  // ==========================================
  // EAST (5 entities)
  // ==========================================
  {
    slug: 'bihar',
    name: 'Bihar',
    regionId: 'east',
    path: 'M 535,305 L 625,315 L 635,365 L 570,375 L 530,350 Z',
    center: [580, 340],
    isUnionTerritory: false,
  },
  {
    slug: 'jharkhand',
    name: 'Jharkhand',
    regionId: 'east',
    path: 'M 540,375 L 620,370 L 630,435 L 575,450 L 535,420 Z',
    center: [580, 410],
    isUnionTerritory: false,
  },
  {
    slug: 'west-bengal',
    name: 'West Bengal',
    regionId: 'east',
    path: 'M 645,300 L 665,300 L 655,360 L 675,420 L 670,500 L 620,490 L 625,420 L 640,360 Z',
    center: [650, 430],
    isUnionTerritory: false,
  },
  {
    slug: 'odisha',
    name: 'Odisha',
    regionId: 'east',
    path: 'M 570,455 L 645,475 L 625,570 L 560,560 L 545,505 Z',
    center: [590, 515],
    isUnionTerritory: false,
  },
  {
    slug: 'chhattisgarh',
    name: 'Chhattisgarh',
    regionId: 'east',
    path: 'M 490,420 L 540,410 L 545,520 L 510,580 L 470,530 L 485,470 Z',
    center: [510, 495],
    isUnionTerritory: false,
  },

  // ==========================================
  // SOUTH (8 entities)
  // ==========================================
  {
    slug: 'telangana',
    name: 'Telangana',
    regionId: 'south',
    path: 'M 395,565 L 470,550 L 490,605 L 445,645 L 390,625 Z',
    center: [440, 600],
    isUnionTerritory: false,
  },
  {
    slug: 'andhra-pradesh',
    name: 'Andhra Pradesh',
    regionId: 'south',
    path: 'M 480,580 L 550,555 L 515,675 L 465,750 L 425,740 L 435,680 L 475,640 L 455,600 Z',
    center: [480, 670],
    isUnionTerritory: false,
  },
  {
    slug: 'karnataka',
    name: 'Karnataka',
    regionId: 'south',
    path: 'M 310,590 L 390,595 L 410,685 L 410,765 L 355,770 L 320,690 Z',
    center: [365, 680],
    isUnionTerritory: false,
  },
  {
    slug: 'kerala',
    name: 'Kerala',
    regionId: 'south',
    path: 'M 325,765 L 355,765 L 370,830 L 365,890 L 340,880 L 325,810 Z',
    center: [345, 830],
    isUnionTerritory: false,
  },
  {
    slug: 'tamil-nadu',
    name: 'Tamil Nadu',
    regionId: 'south',
    path: 'M 375,745 L 445,740 L 460,800 L 440,880 L 390,915 L 365,880 L 370,810 Z',
    center: [415, 825],
    isUnionTerritory: false,
  },
  {
    slug: 'puducherry',
    name: 'Puducherry',
    shortLabel: 'Puducherry',
    regionId: 'south',
    path: 'M 454,785 h 12 v 12 h -12 Z',
    center: [460, 791],
    isUnionTerritory: true,
    isSmallEntity: true,
    callout: {
      x: 490,
      y: 790,
      lineStart: [466, 791],
      lineEnd: [486, 790],
    },
  },
  {
    slug: 'lakshadweep',
    name: 'Lakshadweep',
    shortLabel: 'Lakshadweep',
    regionId: 'south',
    path: 'M 225,830 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0 M 230,860 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0 M 235,885 a 4,4 0 1,0 8,0 a 4,4 0 1,0 -8,0',
    center: [235, 855],
    isUnionTerritory: true,
    isSmallEntity: true,
    callout: {
      x: 100,
      y: 855,
      lineStart: [225, 855],
      lineEnd: [180, 855],
    },
  },
  {
    slug: 'andaman-and-nicobar-islands',
    name: 'Andaman and Nicobar Islands',
    shortLabel: 'Andaman & Nicobar',
    regionId: 'south',
    path: 'M 830,700 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0 M 832,740 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0 M 834,780 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0 M 838,825 a 7,7 0 1,0 14,0 a 7,7 0 1,0 -14,0',
    center: [836, 765],
    isUnionTerritory: true,
    isSmallEntity: true,
    callout: {
      x: 640,
      y: 760,
      lineStart: [830, 760],
      lineEnd: [785, 760],
    },
  },

  // ==========================================
  // NORTHEAST (8 entities)
  // ==========================================
  {
    slug: 'sikkim',
    name: 'Sikkim',
    shortLabel: 'Sikkim',
    regionId: 'northeast',
    path: 'M 648,260 L 675,260 L 675,295 L 648,295 Z',
    center: [661, 277],
    isUnionTerritory: false,
    isSmallEntity: true,
    callout: {
      x: 615,
      y: 235,
      lineStart: [661, 260],
      lineEnd: [655, 235],
    },
  },
  {
    slug: 'arunachal-pradesh',
    name: 'Arunachal Pradesh',
    regionId: 'northeast',
    path: 'M 760,240 L 880,245 L 920,295 L 870,325 L 800,295 Z',
    center: [840, 275],
    isUnionTerritory: false,
  },
  {
    slug: 'assam',
    name: 'Assam',
    regionId: 'northeast',
    path: 'M 710,310 L 790,305 L 850,335 L 840,385 L 785,380 L 770,420 L 740,400 L 710,350 Z',
    center: [780, 345],
    isUnionTerritory: false,
  },
  {
    slug: 'nagaland',
    name: 'Nagaland',
    shortLabel: 'Nagaland',
    regionId: 'northeast',
    path: 'M 855,325 L 895,335 L 885,385 L 850,375 Z',
    center: [870, 355],
    isUnionTerritory: false,
    isSmallEntity: true,
    callout: {
      x: 900,
      y: 350,
      lineStart: [895, 350],
      lineEnd: [900, 350],
    },
  },
  {
    slug: 'manipur',
    name: 'Manipur',
    shortLabel: 'Manipur',
    regionId: 'northeast',
    path: 'M 850,385 L 890,390 L 885,445 L 845,435 Z',
    center: [868, 415],
    isUnionTerritory: false,
    isSmallEntity: true,
    callout: {
      x: 895,
      y: 415,
      lineStart: [890, 415],
      lineEnd: [895, 415],
    },
  },
  {
    slug: 'mizoram',
    name: 'Mizoram',
    shortLabel: 'Mizoram',
    regionId: 'northeast',
    path: 'M 835,445 L 875,445 L 870,520 L 835,510 Z',
    center: [852, 480],
    isUnionTerritory: false,
    isSmallEntity: true,
    callout: {
      x: 885,
      y: 485,
      lineStart: [870, 480],
      lineEnd: [885, 485],
    },
  },
  {
    slug: 'tripura',
    name: 'Tripura',
    shortLabel: 'Tripura',
    regionId: 'northeast',
    path: 'M 795,430 L 830,430 L 825,485 L 795,480 Z',
    center: [812, 455],
    isUnionTerritory: false,
    isSmallEntity: true,
    callout: {
      x: 730,
      y: 470,
      lineStart: [795, 455],
      lineEnd: [775, 470],
    },
  },
  {
    slug: 'meghalaya',
    name: 'Meghalaya',
    regionId: 'northeast',
    path: 'M 720,360 L 780,360 L 780,395 L 720,395 Z',
    center: [750, 377],
    isUnionTerritory: false,
  },
];

export const INDIA_MAP_PATHS_BY_SLUG: Record<string, StateMapPath> = INDIA_MAP_PATHS.reduce(
  (acc, item) => {
    acc[item.slug] = item;
    return acc;
  },
  {} as Record<string, StateMapPath>
);
