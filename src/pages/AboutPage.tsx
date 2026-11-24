import React, { useState } from 'react';
import {
  Compass,
  Send,
  CheckCircle2,
  AlertCircle,
  Edit2,
  Check,
  Building2,
  GraduationCap,
  ExternalLink,
} from 'lucide-react';
import { TextileBorderDivider } from '../components/motifs/TextileMotifs';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  intro: string;
}

const INITIAL_TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Team Member 1',
    role: 'Information Architect & Project Lead',
    intro:
      'Structured the multi-tiered taxonomic hierarchy across 5 regions, 36 states/UTs, and 15 textile classifications with strict relational integrity.',
  },
  {
    id: '2',
    name: 'Team Member 2',
    role: 'Lead UX Researcher & Interaction Designer',
    intro:
      'Engineered canonical editorial user journeys, breadcrumb navigations, and verified preview states ensuring zero misleading historical claims.',
  },
  {
    id: '3',
    name: 'Team Member 3',
    role: 'Visual & Editorial System Designer',
    intro:
      'Crafted the museum-grade editorial aesthetic adhering to the 60-25-15 colour distribution, Playfair Display typography, and custom SVG motif plates.',
  },
  {
    id: '4',
    name: 'Team Member 4',
    role: 'Curatorial & Craft Documentation Specialist',
    intro:
      'Researched authentic primary records for the Patan Patola double-ikat tradition, Salvi guild lineages, and Geographical Indications registry data.',
  },
  {
    id: '5',
    name: 'Team Member 5',
    role: 'Front-End Engineer & Accessibility Specialist',
    intro:
      'Developed responsive React TypeScript components, accessible modal dialogs, and automated test coverage across full and preview states.',
  },
];

const CAREERS = [
  {
    title: 'Textile Design',
    category: 'Design & Loom Innovation',
    description:
      'Developing innovative weave structures, colour palettes, and sustainable yarn blends while integrating ancient handloom mechanisms with contemporary jacquard and dobby design software.',
    skills: ['CAD Weaving', 'Dobby & Jacquard Systems', 'Color Theory', 'Yarn Blending'],
  },
  {
    title: 'Handloom and Craft Research',
    category: 'Scholarship & Fieldwork',
    description:
      'Conducting ethnographic fieldwork across artisan clusters, documenting endangered loom setups, recording oral histories, and tracking hereditary craft knowledge transmission.',
    skills: ['Ethnographic Fieldwork', 'Craft Mapping', 'Oral History', 'Primary Source Archiving'],
  },
  {
    title: 'Fashion and Surface Design',
    category: 'Apparel & Surface Art',
    description:
      'Translating traditional block printing, resist-dyeing, and embroidery traditions into ethical, sustainable couture, luxury pret-a-porter, and contemporary silhouette construction.',
    skills: ['Resist Dyeing', 'Block Printing', 'Embroidery Direction', 'Sustainable Fashion'],
  },
  {
    title: 'Craft Documentation',
    category: 'Museum & Heritage Media',
    description:
      'Archiving vanishing craft practices through multi-sensory documentation, technical process diagrams, audio-visual storytelling, and institutional preservation archives.',
    skills: ['Technical Illustration', 'Video Ethnography', 'Cataloguing', 'Museum Standards'],
  },
  {
    title: 'Textile Conservation',
    category: 'Science & Heritage Restoration',
    description:
      'Preserving historic and sacred fabrics through non-destructive chemical cleaning, fiber microscopy, climate-controlled stabilization, and archival mount making for museums.',
    skills: ['Microscopy', 'Dye Chromatography', 'Climate Stabilization', 'Preventative Storage'],
  },
];

const RESOURCES = [
  {
    category: 'Government Portals',
    items: [
      {
        title: 'Ministry of Textiles, Government of India',
        desc: 'Apex national body formulating policy, development, and export promotion for Indian textiles.',
        url: 'https://texmin.nic.in/',
      },
      {
        title: 'Office of the Development Commissioner (Handlooms)',
        desc: 'National statutory programs, artisan welfare, Weaver Service Centres, and National Handloom Day.',
        url: 'https://handlooms.nic.in/',
      },
      {
        title: 'Incredible India — Craft & Textile Heritage',
        desc: 'Official tourism portal chronicling regional craft heritage, clusters, and living master traditions.',
        url: 'https://www.incredibleindia.gov.in/',
      },
    ],
  },
  {
    category: 'GI Registry & IP Repositories',
    items: [
      {
        title: 'Geographical Indications Registry, Intellectual Property India',
        desc: 'Official national registry of certified Geographical Indications, granting statutory heritage protection.',
        url: 'https://search.ipindia.gov.in/GIRPublicSearch/',
      },
      {
        title: 'Patan Patola GI Application No. 232',
        desc: 'Official legal specification covering raw materials, 8-ply silk, traditional slant looms, and Salvi guild methods.',
        url: 'https://search.ipindia.gov.in/GIRPublicSearch/Application/Details/232',
      },
    ],
  },
  {
    category: 'Museum Archives & Institutions',
    items: [
      {
        title: 'National Handicrafts and Handlooms Museum (National Crafts Museum)',
        desc: 'New Delhi — Renowned repository of village shrines, courtly textiles, folk embroidery, and master demonstrations.',
        url: 'https://nationalcraftsmuseum.nic.in/',
      },
      {
        title: 'The Calico Museum of Textiles',
        desc: 'Ahmedabad, Gujarat — Premier textile museum housing world-famous historic collections of courtly fabrics, Patolas, and trade cloths.',
        url: 'https://www.calicomuseum.org/',
      },
      {
        title: 'CSMVS Museum — Chhatrapati Shivaji Maharaj Vastu Sangrahalaya',
        desc: 'Mumbai — Significant archival holding of Western and Southern Indian textiles, brocades, and ceremonial hangings.',
        url: 'https://csmvs.in/',
      },
    ],
  },
  {
    category: 'Reference Literature',
    items: [
      {
        title: 'Handwoven Fabrics of India',
        desc: 'Edited by Jasleen Dhamija and Jyotindra Jain — Fundamental scholarly compendium on regional loom traditions.',
        url: 'https://archive.org/',
      },
      {
        title: 'The Patolas of Gujarat: Double Ikat in India',
        desc: 'By Alfred Bühler and Eberhard Fischer — Definitive multi-volume monumental study of Patan Patola technique and history.',
        url: 'https://www.calicomuseum.org/publications.html',
      },
      {
        title: 'The Sari: Styles, Patterns, History, Techniques',
        desc: 'By Linda Lynton — Exhaustive geographic atlas documenting regional weaves, border patterns, and unstitched drape cultures.',
        url: 'https://archive.org/',
      },
    ],
  },
];

const AboutPage: React.FC = () => {
  // Team of 5 editable fields
  const [team, setTeam] = useState<TeamMember[]>(INITIAL_TEAM);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<TeamMember>({ id: '', name: '', role: '', intro: '' });

  // Contact form state
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleStartEdit = (member: TeamMember) => {
    setEditingId(member.id);
    setEditForm({ ...member });
  };

  const handleSaveEdit = () => {
    if (!editingId) return;
    setTeam((prev) =>
      prev.map((m) => (m.id === editingId ? { ...editForm } : m))
    );
    setEditingId(null);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!contactName.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!contactEmail.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!contactMessage.trim()) {
      newErrors.message = 'Please enter your message.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitted(false);
      return;
    }

    // Validation passed
    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-ivory pb-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-16">
        {/* ==================================================== */}
        {/* 1. ABOUT THE PROJECT                                 */}
        {/* ==================================================== */}
        <section id="about-project" aria-label="About the Project" className="space-y-6">
          <div className="border-b border-beige/80 pb-6 space-y-2">
            <span className="text-xs uppercase tracking-widest text-madder font-semibold">
              Academic UX Architecture Monograph
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-indigo">
              Preserving Stories Woven in Fabric
            </h1>
            <p className="font-serif text-lg sm:text-xl text-charcoal/80 italic max-w-3xl">
              An interactive, responsive, museum-editorial prototype archiving India's vast handloom heritage through rigorous Information Architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-beige/20 rounded-2xl border border-beige p-6 sm:p-10">
            <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-charcoal/85 leading-relaxed font-sans">
              <p>
                <strong>INDIAN TEXTILES — Threads of Heritage</strong> is an academic Information Architecture and UX design research initiative dedicated to presenting India's handloom traditions with unyielding historical, geographic, and curatorial honesty.
              </p>
              <p>
                Rather than populating placeholders with fabricated histories or generic placeholder text, the archive strictly demarcates between fully documented monographs—specifically <strong>Patan Patola</strong> of Gujarat—and verified preliminary entries. Every state, union territory, technique, and motif is anchored in official records from the Development Commissioner (Handlooms), the Geographical Indications Registry, and district archives.
              </p>
              <div className="pt-2 flex flex-wrap gap-3 text-xs text-charcoal/70">
                <span className="px-3 py-1 bg-ivory rounded-full border border-beige">28 States & 8 UTs</span>
                <span className="px-3 py-1 bg-ivory rounded-full border border-beige">15 Classifications</span>
                <span className="px-3 py-1 bg-ivory rounded-full border border-beige">Patan Patola Double Ikat</span>
                <span className="px-3 py-1 bg-ivory rounded-full border border-beige">Zero Simulated Data</span>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 bg-ivory rounded-xl border border-beige space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo">
                <Compass className="w-4 h-4 text-madder" />
                <span>Design System Pillars</span>
              </div>
              <ul className="text-xs text-charcoal/80 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-madder" />
                  <span><strong>60% Dominant:</strong> Warm Ivory & Natural Beige</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo" />
                  <span><strong>25% Structural:</strong> Deep Indigo & Charcoal</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-turmeric" />
                  <span><strong>15% Accent:</strong> Madder Crimson & Turmeric</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                  <span><strong>Editorial Typography:</strong> Playfair Display & DM Sans</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <TextileBorderDivider title="Project Curators" />

        {/* ==================================================== */}
        {/* 2. ABOUT US — OUR TEAM OF 5 (EDITABLE FIELDS)         */}
        {/* ==================================================== */}
        <section id="about-team" aria-label="Our Team of 5" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-beige/80 pb-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-madder font-semibold">
                Multidisciplinary Collaboration
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-indigo">
                About Us — Our Team of 5
              </h2>
              <p className="text-xs sm:text-sm text-charcoal/70 font-serif italic mt-1">
                Academic contributors who designed and authored this interactive textile archive prototype.
              </p>
            </div>
            <div className="text-xs text-charcoal/60 bg-beige/40 px-3 py-1.5 rounded-lg border border-beige self-start sm:self-auto font-mono">
              5 Editable Profiles
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => {
              const isEditing = editingId === member.id;

              return (
                <div
                  key={member.id}
                  className="bg-ivory rounded-2xl border border-beige/90 overflow-hidden shadow-sm p-6 flex flex-col justify-between space-y-4 transition-all hover:border-terracotta/40"
                >
                  {isEditing ? (
                    /* Edit Mode Form */
                    <div className="space-y-4">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-charcoal/70 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          value={editForm.name}
                          onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                          className="w-full px-3 py-1.5 bg-beige/20 border border-beige rounded text-sm text-indigo font-bold focus:outline-none focus:border-indigo"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-charcoal/70 mb-1">
                          Role
                        </label>
                        <input
                          type="text"
                          value={editForm.role}
                          onChange={(e) => setEditForm({ ...editForm, role: e.target.value })}
                          className="w-full px-3 py-1.5 bg-beige/20 border border-beige rounded text-xs text-charcoal/90 focus:outline-none focus:border-indigo"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-charcoal/70 mb-1">
                          Short Introduction
                        </label>
                        <textarea
                          rows={3}
                          value={editForm.intro}
                          onChange={(e) => setEditForm({ ...editForm, intro: e.target.value })}
                          className="w-full px-3 py-1.5 bg-beige/20 border border-beige rounded text-xs text-charcoal/80 focus:outline-none focus:border-indigo"
                        />
                      </div>

                      <div className="flex items-center gap-2 pt-2">
                        <button
                          onClick={handleSaveEdit}
                          className="inline-flex items-center gap-1 px-3 py-1.5 bg-indigo text-ivory rounded text-xs font-semibold hover:bg-madder transition-colors"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>Save Changes</span>
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
                          className="px-3 py-1.5 bg-beige/40 text-charcoal/80 rounded text-xs font-semibold hover:bg-beige transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Display Mode */
                    <>
                      <div className="space-y-4">
                        <div className="flex items-start justify-between gap-3">
                          <div className="w-12 h-12 rounded-full bg-beige/50 border border-beige flex items-center justify-center text-indigo font-serif font-bold text-base flex-shrink-0">
                            {member.name.replace(/[^0-9]/g, '') ? `M${member.name.replace(/[^0-9]/g, '')}` : member.name.charAt(0)}
                          </div>
                          <button
                            onClick={() => handleStartEdit(member)}
                            className="text-xs text-charcoal/50 hover:text-madder p-1 transition-colors flex items-center gap-1"
                            title="Edit team member profile"
                          >
                            <Edit2 className="w-3 h-3" />
                            <span className="text-[11px]">Edit</span>
                          </button>
                        </div>

                        <div>
                          <h3 className="font-serif text-lg font-bold text-indigo">
                            {member.name}
                          </h3>
                          <p className="text-xs font-medium text-madder uppercase tracking-wider mt-0.5">
                            {member.role}
                          </p>
                        </div>

                        <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans">
                          {member.intro}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-beige/60 flex items-center justify-between text-[11px] text-charcoal/50">
                        <span>Academic Prototype Contributor</span>
                        <span className="font-mono">#0{member.id}</span>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <TextileBorderDivider title="Vocational Horizons" />

        {/* ==================================================== */}
        {/* 3. CAREERS IN INDIAN TEXTILES                        */}
        {/* ==================================================== */}
        <section id="careers" aria-label="Careers in Indian Textiles" className="space-y-6">
          <div className="border-b border-beige/80 pb-4">
            <span className="text-xs uppercase tracking-widest text-indigo font-semibold">
              Professional Pathways
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-indigo">
              Careers in Indian Textiles
            </h2>
            <p className="text-xs sm:text-sm text-charcoal/70 font-serif italic mt-1">
              Five strategic vocational domains revitalizing craft ecosystems, sustainable production, and cultural preservation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAREERS.map((career, idx) => (
              <div
                key={idx}
                className="bg-ivory rounded-2xl border border-beige/90 p-6 flex flex-col justify-between space-y-4 shadow-sm hover:border-terracotta/40 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-madder px-2.5 py-0.5 rounded-full bg-madder/10">
                      {career.category}
                    </span>
                    <GraduationCap className="w-4 h-4 text-charcoal/40" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-indigo">
                    {career.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans">
                    {career.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-beige/60 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal/60 block">
                    Core Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {career.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] px-2 py-0.5 bg-beige/40 text-charcoal/80 rounded border border-beige"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <TextileBorderDivider title="Knowledge Repositories" />

        {/* ==================================================== */}
        {/* 4. RESOURCES                                         */}
        {/* ==================================================== */}
        <section id="resources" aria-label="Resources" className="space-y-6">
          <div className="border-b border-beige/80 pb-4">
            <span className="text-xs uppercase tracking-widest text-forest font-semibold">
              Curatorial Bibliography & Portals
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-indigo">
              Resources & Authoritative Archives
            </h2>
            <p className="text-xs sm:text-sm text-charcoal/70 font-serif italic mt-1">
              Structured repositories, statutory registries, museum institutions, and seminal literature.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RESOURCES.map((group, gIdx) => (
              <div
                key={gIdx}
                className="bg-ivory rounded-2xl border border-beige/90 p-6 space-y-4 shadow-sm"
              >
                <div className="flex items-center gap-2 border-b border-beige/70 pb-3">
                  <Building2 className="w-4 h-4 text-madder" />
                  <h3 className="font-serif text-lg font-bold text-indigo">
                    {group.category}
                  </h3>
                </div>

                <div className="space-y-3">
                  {group.items.map((item, iIdx) => (
                    <a
                      key={iIdx}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block p-3 rounded-xl bg-beige/20 hover:bg-beige/40 border border-beige/60 transition-all"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-serif text-sm font-bold text-indigo group-hover:text-madder transition-colors">
                          {item.title}
                        </h4>
                        <ExternalLink className="w-3.5 h-3.5 text-charcoal/40 group-hover:text-madder flex-shrink-0" />
                      </div>
                      <p className="text-xs text-charcoal/70 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <TextileBorderDivider title="Inquiry & Feedback" />

        {/* ==================================================== */}
        {/* 5. CONTACT FORM (VALIDATED + PROTOTYPE NOTICE)       */}
        {/* ==================================================== */}
        <section id="contact" aria-label="Contact Us" className="bg-ivory rounded-2xl border border-beige/90 p-6 sm:p-10 space-y-8 shadow-sm">
          <div className="border-b border-beige/80 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs uppercase tracking-widest text-madder font-semibold">
                Communications & Curatorial Inquiry
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-indigo">
                Contact the Research Team
              </h2>
            </div>
            <span className="text-xs text-charcoal/60 font-mono">
              Interactive Prototype Form
            </span>
          </div>

          {/* Prototype Notice Alert on Submit */}
          {submitted && (
            <div
              role="alert"
              className="p-5 bg-forest/10 border border-forest/30 rounded-xl space-y-2 text-forest"
            >
              <div className="flex items-center gap-2 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>Message Validated Successfully</span>
              </div>
              <p className="text-xs sm:text-sm text-charcoal/90 leading-relaxed font-sans">
                Prototype Notice: No backend is connected — your message was validated locally in this academic prototype.
              </p>
            </div>
          )}

          <form onSubmit={handleContactSubmit} noValidate className="space-y-6 max-w-2xl">
            {/* Name Field */}
            <div className="space-y-1.5">
              <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-charcoal/80">
                Full Name <span className="text-madder">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={contactName}
                onChange={(e) => {
                  setContactName(e.target.value);
                  if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                }}
                placeholder="e.g. Ananya Sen"
                className={`w-full px-4 py-2.5 bg-beige/20 border rounded-lg text-sm text-charcoal placeholder-charcoal/40 focus:outline-none transition-colors ${
                  errors.name ? 'border-madder ring-1 ring-madder' : 'border-beige hover:border-indigo/40 focus:border-indigo'
                }`}
              />
              {errors.name && (
                <p className="text-xs text-madder flex items-center gap-1 pt-0.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-1.5">
              <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-charcoal/80">
                Email Address <span className="text-madder">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={contactEmail}
                onChange={(e) => {
                  setContactEmail(e.target.value);
                  if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                }}
                placeholder="e.g. ananya@research.ac.in"
                className={`w-full px-4 py-2.5 bg-beige/20 border rounded-lg text-sm text-charcoal placeholder-charcoal/40 focus:outline-none transition-colors ${
                  errors.email ? 'border-madder ring-1 ring-madder' : 'border-beige hover:border-indigo/40 focus:border-indigo'
                }`}
              />
              {errors.email && (
                <p className="text-xs text-madder flex items-center gap-1 pt-0.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            {/* Message Field */}
            <div className="space-y-1.5">
              <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-charcoal/80">
                Message / Curatorial Feedback <span className="text-madder">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                value={contactMessage}
                onChange={(e) => {
                  setContactMessage(e.target.value);
                  if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                }}
                placeholder="Enter your inquiry or research correspondence..."
                className={`w-full px-4 py-2.5 bg-beige/20 border rounded-lg text-sm text-charcoal placeholder-charcoal/40 focus:outline-none transition-colors ${
                  errors.message ? 'border-madder ring-1 ring-madder' : 'border-beige hover:border-indigo/40 focus:border-indigo'
                }`}
              />
              {errors.message && (
                <p className="text-xs text-madder flex items-center gap-1 pt-0.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex items-center gap-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-madder text-ivory rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-indigo transition-colors shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Inquiry</span>
              </button>

              <span className="text-xs text-charcoal/50 italic">
                * All fields are strictly validated before submission.
              </span>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
