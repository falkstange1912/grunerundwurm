/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Scissors,
  Droplets,
  MapPin,
  Globe,
  ChevronRight,
  ChevronLeft,
  Star,
  Quote,
  Check,
  Clock,
  Calendar,
  Instagram,
  Facebook,
  User,
  ChevronDown,
  Sparkle,
  Phone,
  ArrowRight,
  Eye,
  Info
} from "lucide-react";

// Types
type Language = "DE" | "EN";

// Translation dictionary matching reference branding exactly
const dict = {
  DE: {
    nav: {
      exclusive: "Exklusiv",
      styleIn: "Style In",
      colorWorld: "Color World",
      salonLocator: "Salon Locator",
      aboutUs: "Über uns",
      career: "Karriere",
      artisticTeam: "Artistic Team",
      press: "Presse",
    },
    hook: {
      tag: "AVANTGARDE HAIRDRESSING",
      title: "Dein Haar ist kein Zufall.",
      titleHighlight: "Es ist Kunst.",
      subtitle: "Die nahtlose Verschmelzung von skulpturaler Schnittführung und moderner Ästhetik. Ein stilles Refugium für deine unverwechselbare Persönlichkeit.",
      btnPrimary: "Termin buchen",
      btnSecondary: "Style Profiler",
      learnMore: "Nach unten scrollen und entdecken",
      colorWorldAlert: "Bundy Bundy Color World x ALIVE",
    },
    promise: {
      preTitle: "DIE PHILOSOPHIE",
      title: "UNSER VERSPRECHEN DER EXZELLENZ",
      subtitle: "Dein Typ. Dein Stil. Deine Farbe.",
      desc1: "Tritt ein in ein Atelier der Besinnung, fernab des täglichen Getriebes. Ein intellektueller Rückzugsort für deinen Geist, deine Seele und dein Haar. Hier begreifen wir das Friseurhandwerk nicht als bloßen Dienst, sondern als Skulptur.",
      desc2: "Jede Behandlung bei ALIVE beginnt mit einer umfassenden Charakterstudie deines Haares, deiner Gesichtsgeometrie und deines Stiltyps. Wir kreieren einen organischen Fluss, der absolut authentisch wirkt und mühelos zu Hause sitzt.",
      gridLabel1: "ALIVE CONCEPT STUDIO",
      gridLabel2: "DAS REFUGE",
      gridLabel3: "REGERINGSGATAN 87, STHLM",
      modeToggle: "Visual Filter: Wechsle zwischen Schwarz-Weiß (ALIVE Art) und Color World (Bundy Bundy)",
      activeMono: "Schwarz-Weiß Modus",
      activeColor: "Color World Modus",
    },
    details: {
      title: "DIE SÄULEN UNSERER KUNST",
      subtitle: "Konkrete Perfektion in drei ausformulierten Kapiteln.",
      p1: {
        title: "Schnitt als Skulptur",
        short: "Präzise Kanten-Schnitttechnik und maßgeschneiderter natürlicher Fall.",
        desc: "Durch die Technik des architektonischen Schneidens berücksichtigen wir die natürliche Fallrichtung deines Wirbels. Der Schnitt fällt auch nach Wochen ohne Zutun perfekt.",
        duration: "Dauer: ca. 60 - 75 Min.",
        stylist: "Master Stylist empfohlen",
      },
      p2: {
        title: "Farbe als Alchemie",
        short: "Individuell entwickelte Rezepturen für facettenreichen Tiefenglanz.",
        desc: "Schonende Pigmentierung, die Struktur und Glanz nährt. Keine flachen Farben – jede Nuance wird wie ein Gemälde aus verschiedenen Reflexen komponiert.",
        duration: "Dauer: ca. 90 - 150 Min.",
        stylist: "Colorist / Art Director empfohlen",
      },
      p3: {
        title: "Holistisches Ritual",
        short: "Tiefenentspannung und sensorische Regeneration für Geist und Kopfhaut.",
        desc: "Warme Kompressen, reine ätherische Öle nach Jahreszeit und eine revitalisierende Kopfhaut-Akupressur in schallreduzierten Waschbeckenbereichen.",
        duration: "Dauer: ca. 30 Min. (Zusatz)",
        stylist: "Spa Specialist",
      },
      revealText: "Konzept-Details einblenden",
      hideText: "Konzept-Details verbergen",
    },
    profiler: {
      title: "Erstelle dein Style-Profil",
      subtitle: "„My type. My style. My color.“ – Konfiguriere deinen Look vorab für unser Atelier-Team.",
      typeLabel: "1. Dein Archetyp (Typ)",
      styleLabel: "2. Dein Schwerpunkt (Stil)",
      colorLabel: "3. Deine Nuance (Farbe)",
      types: [
        { id: "avantgarde", name: "Avantgarde", desc: "Mutig, skulptural, ausdrucksstark, asymmetrisch" },
        { id: "minimalist", name: "Minimalistisch", desc: "Clean, schlicht, präzise, zeitlos" },
        { id: "classic", name: "Classic Elegance", desc: "Weich, fließend, glamourös, harmonisch" },
        { id: "textured", name: "Textured Art", desc: "Wild, lebendig, gelebt, unkonventionell" }
      ],
      styles: [
        { id: "bob", name: "Blunt Bob", desc: "Strenger, schnurgerader Kanten-Schnitt direkt auf Kinn- oder Schulterhöhe" },
        { id: "shag", name: "Modern Shag", desc: "Lässige, federleichte Stufung mit viel natürlicher Bewegung" },
        { id: "pixie", name: "Sculpted Pixie", desc: "Kurzer, filigraner Haarschnitt, der Konturen perfekt betont" },
        { id: "layers", name: "Soft Layers", desc: "Sanft fließende Längen für maximales, weiches Volumen" }
      ],
      colors: [
        { id: "platinum", name: "Ice Platinum", desc: "Kühles, beinahe weißes Silber-Blond mit multidimensionaler Leuchtkraft" },
        { id: "espresso", name: "Dark Espresso", desc: "Tiefes, geheimnisvolles Dunkelbraun mit seidig glänzendem Reflex" },
        { id: "copper", name: "Velvet Copper", desc: "Warm glühendes, lebendiges Kupfer-Zimt, das das Licht bricht" },
        { id: "gloss", name: "Crystal Nude Gloss", desc: "Transparente Kristall-Veredelung für reinen, natürlichen Diamantglanz" }
      ]
    },
    proof: {
      title: "RESONANZ & PRESTIGE",
      subtitle: "Stimmen aus Gesellschaft und Design.",
      quotes: [
        {
          text: "Endlich ein Salon, der Haarcrafts als bildende Kunst versteht. Mein Blunt Bob sitzt auch Wochen danach absolut vollkommen. Das minimalistische Ambiente strahlt pure kontemplative Ruhe aus.",
          author: "Dr. Elena Vasari",
          role: "Moderne Kunstkuratorin, Stockholm"
        },
        {
          text: "Die Farbabstimmung war eine absolute Offenbarung. Die Nuancen wurden so präzise auf meine Augenfarbe abgestimmt, dass die Wirkung überwältigend ist. Ein Meisterwerk.",
          author: "Maximilian K.",
          role: "Creative Director & Publizist"
        },
        {
          text: "Kein oberflächlicher Smalltalk, keine lauten Föhngeräusche. Nur absolute Stille, beruhigende sensorische Reize und weltklasse Handwerk. Der beste Salon Skandinaviens.",
          author: "Sophie Lindqvist",
          role: "Designerin, Atelier Lindqvist"
        }
      ],
      partnerTitle: "STILLE PARTNER & AUSZEICHNUNGEN",
      awards: [
        { pub: "Vogue Germany", text: "„Top 10 Avantgarde-Ateliers in ganz Europa“" },
        { pub: "Salon Design Award", text: "„Bestes minimalistisches Raum- & Lichtkonzept“" },
        { pub: "L'Oréal Pro Elite", text: "„Gold-Standard für schadensfreie Blondierung“" }
      ]
    },
    ctaForm: {
      title: "DEINEN BESUCH ANFRAGEN",
      subtitle: "Tritt ein in die Welt von Design, Geometrie und purer Entschleunigung.",
      labelName: "Premium Gast Name",
      placeholderName: "z.B. Clara Lindemann",
      labelPhone: "Telefon für Rückfragen",
      placeholderPhone: "z.B. +49 170 1234567",
      labelDate: "Bevorzugter Tag",
      labelTime: "Bevorzugtes Zeitfenster",
      btnSubmit: "Als Gast anfragen & Profil übertragen",
      btnLoading: "Daten werden verschlüsselt an das Atelier gesendet...",
      successTitle: "Deine Anfrage wurde registriert!",
      successText: "Ein persönlicher Liaison-Manager unseres Ateliers wird dich innerhalb der nächsten 15 Minuten kontaktieren, um deine Haaranalyse telefonisch vorzubereiten und den Termin zu finalen Konditionen einzubuchen.",
      ticketLabel: "ALIVE ATELIER BOARDING PASS",
      ticketType: "Architekt-Typus",
      ticketStyle: "Gewählter Schnitt",
      ticketColor: "Farbakzent",
      bookingCode: "BUCHUNGS-REKLAMATION",
    }
  },
  EN: {
    nav: {
      exclusive: "Exclusive",
      styleIn: "Style In",
      colorWorld: "Color World",
      salonLocator: "Salon Locator",
      aboutUs: "About us",
      career: "Career",
      artisticTeam: "Artistic Team",
      press: "Press",
    },
    hook: {
      tag: "AVANT GARDE HAIRDRESSING",
      title: "Your hair is not an accident.",
      titleHighlight: "It is fine art.",
      subtitle: "The seamless integration of architectural haircutting and contemporary aesthetics. A quiet sanctuary designed for your distinctive personality.",
      btnPrimary: "Request Appointment",
      btnSecondary: "Style Profiler",
      learnMore: "Scroll down to discover our world",
      colorWorldAlert: "Bundy Bundy Color World x ALIVE",
    },
    promise: {
      preTitle: "THE PHILOSOPHY",
      title: "OUR PROMISE OF VALUE",
      subtitle: "Your type. Your style. Your color.",
      desc1: "Step into an atelier designed for contemplation, detached from the exhausting pace of everyday life. Ready to become an intellectual refuge for your mind, soul, and hair. Here, we never treat styling as a simple chore—it is custom sculpture.",
      desc2: "Every single session at ALIVE is anchored by an exhaustive character study of your hair fibers, structural facial frame, and stylistic persona. We execute an organic fall that feels completely original and styles beautifully at home.",
      gridLabel1: "ALIVE CONCEPT STUDIO",
      gridLabel2: "THE REFUGE",
      gridLabel3: "REGERINGSGATAN 87, STHLM",
      modeToggle: "Visual Filter: Switch between Monochrome (ALIVE Art) and Color World (Bundy Bundy)",
      activeMono: "Monochrome Mode",
      activeColor: "Color World Edition",
    },
    details: {
      title: "THE PILLARS OF OUR CRAFT",
      subtitle: "A triple architectural system engineered down to the millimeter.",
      p1: {
        title: "Sculptural Cuts",
        short: "Ultra-precise geometric cut boundaries and adaptive natural fall.",
        desc: "By utilizing structural razor and shear geometry, we trace your natural growth lines. Your style organic maintains its pristine silhouette for weeks without intervention.",
        duration: "Timeframe: approx. 60 - 75 min",
        stylist: "Master Stylist recommended",
      },
      p2: {
        title: "Color Chemistry",
        short: "Bespoke tone blends crafted for holographic, deep fiber radiance.",
        desc: "Pure structural pigmenting designed to respect and nourish. No flat tones – every hue is a canvas layered with reflecting micro-elements.",
        duration: "Timeframe: approx. 90 - 150 min",
        stylist: "Colorist / Art Director recommended",
      },
      p3: {
        title: "Holistic Serenity",
        short: "Deep emotional deceleration and sensory scalp revitalization.",
        desc: "Seasonal herbal compresses, pure organic oil aromatherapy, and a deep acupressure cleanse in acoustics-buffered washing cabins.",
        duration: "Timeframe: approx. 30 min (Add-on)",
        stylist: "Spa Specialist",
      },
      revealText: "Show Concept Details",
      hideText: "Hide Concept Details",
    },
    profiler: {
      title: "Design Your Style Profile",
      subtitle: "“My type. My style. My color.” – Pre-configure your custom aesthetic alignment for our creative directors.",
      typeLabel: "1. Your Archetype (Type)",
      styleLabel: "2. Your Focus Silhouette (Style)",
      colorLabel: "3. Your Pigment Tone (Color)",
      types: [
        { id: "avantgarde", name: "Avant-Garde", desc: "Bold, structural, expressive, asymmetric styling statements" },
        { id: "minimalist", name: "Minimalist", desc: "Clean, razor-sharp, elegant, completely timeless" },
        { id: "classic", name: "Classic Elegance", desc: "Soft, cascading, glamorous, and fully proportioned" },
        { id: "textured", name: "Textured Art", desc: "Wild, piecey, organic, lived-in, elegantly raw" }
      ],
      styles: [
        { id: "bob", name: "Blunt Bob", desc: "A strict razor-flat uniform edge hitting parallel to jawline or shoulder" },
        { id: "shag", name: "Modern Shag", desc: "Relaxed feathered tiers with an expressive textured fringe" },
        { id: "pixie", name: "Sculpted Pixie", desc: "Artfully short, cropped look focusing all weight on skeletal frame" },
        { id: "layers", name: "Soft Layers", desc: "Gently sweeping fluid cascades providing natural, soft body" }
      ],
      colors: [
        { id: "platinum", name: "Ice Platinum", desc: "Breathtaking pearlescent white blonde with metallic micro-dimension" },
        { id: "espresso", name: "Dark Espresso", desc: "Deep rich velvet dark brown glowing with silky, warm undercurrents" },
        { id: "copper", name: "Velvet Copper", desc: "Bright warm spiced metallic ginger that plays beautifully with daylight" },
        { id: "gloss", name: "Crystal Nude Gloss", desc: "Completely transparent glass gloss layer to seal fibers with brilliant glaze" }
      ]
    },
    proof: {
      title: "RESONANCE & SOCIETY",
      subtitle: "Praise from the creative class and design authorities.",
      quotes: [
        {
          text: "At last, a concept studio that respects hairdressing as an actual visual art. My blunt bob is sculpted with such accuracy that it retains shape for weeks. The interior is pure contemplation.",
          author: "Dr. Elena Vasari",
          role: "Modern Art Curator, Stockholm"
        },
        {
          text: "The personalized tone configuration process was revolutionary. Every layer of light was mapped onto my natural eye iris tone to create a mesmerizing result.",
          author: "Maximilian K.",
          role: "Creative Director & Publisher"
        },
        {
          text: "No meaningless chat, no deafening hair-dryer pollution. Just absolute luxury silence, beautiful essential scents, and world-class craft. The single finest studio in Northern Europe.",
          author: "Sophie Lindqvist",
          role: "Fashion Designer, Studio Lindqvist"
        }
      ],
      partnerTitle: "SILENT ALLIES & LAURELS",
      awards: [
        { pub: "Vogue Germany", text: "“Ranked amongst Top 10 Avant-garde Ateliers in Europe”" },
        { pub: "Salon Design Award", text: "“Winner: Outstanding Architectural Space & Light Architecture”" },
        { pub: "L'Oréal Pro Elite", text: "“Gold Seal Certified for structural-harmless avant-garde coloring”" }
      ]
    },
    ctaForm: {
      title: "REQUEST YOUR ATELIER GATEWAY",
      subtitle: "Welcome to a physical realm of design, meticulous geometry, and calm.",
      labelName: "Premium Guest Name",
      placeholderName: "e.g., Clara Lindemann",
      labelPhone: "Direct Phone Number",
      placeholderPhone: "e.g., +46 8 123 45 67",
      labelDate: "Preferred Date",
      labelTime: "Preferred Hour Band",
      btnSubmit: "Submit Booking Intent & Style Profile",
      btnLoading: "Transmitting encrypted records to the atelier...",
      successTitle: "Your request has been filed!",
      successText: "A personal atelier coordinator will contact you by telephone within the next 15 minutes to review your pre-selected profile, run initial analysis, and lock down your suite reservations.",
      ticketLabel: "ALIVE ATELIER BOARDING PASS",
      ticketType: "Aesthetic Archetype",
      ticketStyle: "Custom Cut Choice",
      ticketColor: "Pigment Array",
      bookingCode: "BOOKING REFERENCE",
    }
  }
};

export default function App() {
  const [lang, setLang] = useState<Language>("DE");
  const [monochromeMode, setMonochromeMode] = useState<boolean>(true);

  // Style Profiler States
  const [selectedType, setSelectedType] = useState<string>("minimalist");
  const [selectedStyle, setSelectedStyle] = useState<string>("bob");
  const [selectedColor, setSelectedColor] = useState<string>("platinum");

  // Detailed points expansion
  const [activeDetail, setActiveDetail] = useState<number | null>(null);

  // Testimonials Navigation
  const [activeQuoteIdx, setActiveQuoteIdx] = useState<number>(0);

  // Booking Form States
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [bookingCode, setBookingCode] = useState("");

  const t = dict[lang];

  // Random booking code generation
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !bookingDate || !bookingTime) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      const randomCode = "ALV-" + Math.floor(100000 + Math.random() * 900000);
      setBookingCode(randomCode);
    }, 1500);
  };

  const currentTypeObj = t.profiler.types.find(x => x.id === selectedType);
  const currentStyleObj = t.profiler.styles.find(x => x.id === selectedStyle);
  const currentColorObj = t.profiler.colors.find(x => x.id === selectedColor);

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1a1f2c] font-sans selection:bg-[#041f3e]/10 selection:text-[#041f3e] antialiased">
      
      {/* 1. TOP HEADER & NAVIGATION (Inspired by Bundy Bundy & ALIVE structures) */}
      <header className="border-b border-[#e2dfd9] sticky top-0 bg-[#faf9f6]/95 backdrop-blur-md z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Nav Left - Desktop */}
            <nav className="hidden lg:flex space-x-6 text-xs uppercase tracking-widest text-[#5c574f] font-medium">
              <a href="#philosophy" className="hover:text-[#041f3e] transition-colors" id="nav-exklusiv">{t.nav.exclusive}</a>
              <a href="#profiler" className="hover:text-[#041f3e] transition-colors" id="nav-style-in">{t.nav.styleIn}</a>
              <a href="#philosophy" className="hover:text-[#041f3e] transition-colors" id="nav-color-world">{t.nav.colorWorld}</a>
              <a href="#booking" className="hover:text-[#041f3e] transition-colors" id="nav-salon-locator">{t.nav.salonLocator}</a>
            </nav>

            {/* Logo Center */}
            <div className="flex flex-col items-center justify-center text-center select-none py-2" id="brand-logo-container">
              <div className="border border-[#041f3e] px-4 py-1.5 flex flex-col items-center justify-center">
                <span className="font-serif text-lg tracking-[0.35em] font-bold text-[#041f3e] leading-none">ALIVE</span>
                <span className="text-[7px] uppercase tracking-[0.5em] text-[#041f3e] font-semibold mt-0.5">COPENHAGEN &bull; STOCKHOLM</span>
              </div>
            </div>

            {/* Nav Right - Desktop */}
            <nav className="hidden lg:flex space-x-6 text-xs uppercase tracking-widest text-[#5c574f] font-medium">
              <a href="#philosophy" className="hover:text-[#041f3e] transition-colors" id="nav-about-us">{t.nav.aboutUs}</a>
              <a href="#details" className="hover:text-[#041f3e] transition-colors" id="nav-career">{t.nav.career}</a>
              <a href="#proof" className="hover:text-[#041f3e] transition-colors" id="nav-artistic-team">{t.nav.artisticTeam}</a>
              <a href="#booking" className="hover:text-[#041f3e] transition-colors" id="nav-press">{t.nav.press}</a>
            </nav>

            {/* Language and Utility (Mobile friendly) */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-[#e2dfd9] rounded-sm p-1 text-[11px] font-mono" id="language-switcher">
                <button 
                  onClick={() => setLang("DE")}
                  className={`px-2 py-0.5 rounded-xs transition-all ${lang === "DE" ? "bg-[#041f3e] text-white" : "text-[#5c574f] hover:text-black"}`}
                  id="lang-btn-de"
                >
                  DE
                </button>
                <span className="text-[#e2dfd9] mx-0.5">|</span>
                <button 
                  onClick={() => setLang("EN")}
                  className={`px-2 py-0.5 rounded-xs transition-all ${lang === "EN" ? "bg-[#041f3e] text-white" : "text-[#5c574f] hover:text-black"}`}
                  id="lang-btn-en"
                >
                  EN
                </button>
              </div>
              
              <a 
                href="#booking" 
                className="hidden sm:inline-block bg-[#041f3e] text-white uppercase text-[10px] tracking-widest font-semibold px-4 py-2 hover:bg-[#0b2d54] transition-colors duration-200"
                id="header-booking-link"
              >
                {t.hook.btnPrimary}
              </a>
            </div>

          </div>
        </div>
      </header>

      {/* Social / Info ribbon (From Bundy Bundy reference top-left widget) */}
      <div className="bg-[#faf9f6] border-b border-[#e2dfd9] py-2 text-[11px] text-[#7c7569] transition-colors duration-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center font-mono">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1 hover:text-black transition-colors" id="fb-link">
              <Facebook className="w-3.5 h-3.5 text-[#041f3e]" />
              <span className="text-[10px] uppercase tracking-wider hidden sm:inline">{t.hook.colorWorldAlert}</span>
            </span>
            <span className="w-px h-3 bg-[#e2dfd9]"></span>
            <span className="flex items-center space-x-1 hover:text-black transition-colors" id="insta-link">
              <Instagram className="w-3.5 h-3.5 text-[#041f3e]" />
              <span className="text-[10px] uppercase tracking-wider hidden sm:inline">@alivehairart</span>
            </span>
          </div>
          <div className="flex items-center space-x-3 text-[10px] uppercase tracking-widest" id="running-locator">
            <MapPin className="w-3 h-3 text-[#041f3e]" />
            <span>Stockholm &bull; Regeringsgatan 87</span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-24">
        
        {/* SECTION 1: THE HOOK (At the very top, eye-catching, responsive alignment) */}
        <section className="py-6 lg:py-12" id="visual-hook">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col (Text hook and description) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-[#041f3e]/5 border border-[#041f3e]/10 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest text-[#041f3e] uppercase" id="hook-badge">
                <Sparkle className="w-3 h-3 animate-pulse" />
                <span>{t.hook.tag}</span>
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-light text-[#041f3e] leading-[1.1] tracking-tight" id="hook-title">
                {t.hook.title} <br />
                <span className="italic font-normal font-serif border-b-2 border-[#041f3e]/20 tracking-normal pb-1">
                  {t.hook.titleHighlight}
                </span>
              </h1>
              
              <p className="text-[#5c574f] text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto lg:mx-0" id="hook-subtitle">
                {t.hook.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4" id="hook-actions-wrapper">
                <a 
                  href="#booking"
                  className="w-full sm:w-auto bg-[#041f3e] hover:bg-[#0b2d54] text-white text-xs uppercase tracking-widest font-semibold px-8 py-4 text-center transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
                  id="hook-primary-btn"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{t.hook.btnPrimary}</span>
                </a>
                <a 
                  href="#profiler"
                  className="w-full sm:w-auto border border-[#041f3e] text-[#041f3e] hover:bg-[#041f3e] hover:text-white text-xs uppercase tracking-widest font-semibold px-8 py-4 text-center transition-all duration-300 flex items-center justify-center space-x-2"
                  id="hook-secondary-btn"
                >
                  <Scissors className="w-4 h-4" />
                  <span>{t.hook.btnSecondary}</span>
                </a>
              </div>

              {/* Aesthetic indicator mirroring Bundy Bundy scroll marker */}
              <div className="hidden lg:flex items-center space-x-3 pt-12 text-[10px] uppercase tracking-widest text-stone-400 font-mono" id="scroll-discover-hint">
                <div className="w-8 h-px bg-stone-300"></div>
                <span>{t.hook.learnMore}</span>
                <ChevronDown className="w-3 h-3 animate-bounce" />
              </div>
            </div>

            {/* Right Col (Stunning high fashion portrait matching Bundy Bundy look) */}
            <div className="lg:col-span-5 relative" id="hook-portrait-wrapper">
              <div className="absolute -inset-1 border border-stone-200 pointer-events-none mt-2 ml-2 transition-transform duration-300 rounded-sm"></div>
              <div className="relative border border-stone-300 p-2 bg-white rounded-sm overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1595959183075-c1d09e77b34b?auto=format&fit=crop&q=80&w=800" 
                  alt="Avant-Garde Hair Model" 
                  className="w-full h-[360px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  id="hero-main-fashion-image"
                />
                
                {/* Vintage caption box from image layout models */}
                <div className="absolute bottom-4 left-4 bg-[#faf9f6]/90 backdrop-blur-md border border-stone-200 px-3 py-2 text-[10px] font-mono uppercase tracking-widest" id="hero-image-caption">
                  <span className="block font-semibold text-black">Aura Styling &bull; V.01</span>
                  <span className="text-stone-500">Bundy &copy; Art Library</span>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* SECTION 2: PROMISE OF VALUE (Wertversprechen with stunning staggered photo grid 'Bildverteilung') */}
        <section className="pt-8 border-t border-[#e2dfd9]" id="philosophy">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-stone-400 block" id="promise-pretitle">
              {t.promise.preTitle}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#041f3e] uppercase tracking-wider" id="promise-title">
              {t.promise.title}
            </h2>
            <div className="w-16 h-px bg-[#041f3e] mx-auto"></div>
            <p className="font-serif italic text-lg text-stone-500" id="promise-subtitle">
              {t.promise.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content column: text values & filter toggle */}
            <div className="lg:col-span-5 space-y-8 flex flex-col justify-center" id="promise-description-col">
              
              <div className="space-y-6 text-[#5c574f] font-light leading-relaxed">
                <p className="text-lg text-stone-900 font-normal font-serif italic" id="promise-text-lead">
                  {t.promise.desc1}
                </p>
                <p className="text-sm" id="promise-text-desc">
                  {t.promise.desc2}
                </p>
              </div>

              {/* Responsive photo filters toggle representing 'Bundy Color World' vs 'ALIVE Art' */}
              <div className="p-4 bg-stone-100 border border-stone-200 rounded-sm" id="promise-mode-toggle-card">
                <p className="text-[11px] font-mono text-stone-500 uppercase tracking-wider mb-3 leading-tight">
                  {t.promise.modeToggle}
                </p>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setMonochromeMode(true)}
                    className={`flex-1 text-center py-2 text-xs uppercase font-mono tracking-widest text-[#1a1f2c] transition-all duration-300 border ${monochromeMode ? "bg-white border-[#041f3e] font-semibold text-[#041f3e] shadow-xs" : "bg-transparent border-stone-300 text-stone-500 hover:border-stone-400"}`}
                    id="mono-mode-btn"
                  >
                    {t.promise.activeMono}
                  </button>
                  <button
                    onClick={() => setMonochromeMode(false)}
                    className={`flex-1 text-center py-2 text-xs uppercase font-mono tracking-widest text-[#1a1f2c] transition-all duration-300 border ${!monochromeMode ? "bg-white border-[#041f3e] font-semibold text-[#041f3e] shadow-xs" : "bg-transparent border-stone-300 text-stone-500 hover:border-stone-400"}`}
                    id="color-mode-btn"
                  >
                    {t.promise.activeColor}
                  </button>
                </div>
              </div>

              {/* Decorative block replicating the ALIVE label structure */}
              <div className="border-t border-[#e2dfd9] pt-6 grid grid-cols-3 gap-2 text-center" id="promise-micro-labels">
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-stone-400">{t.promise.gridLabel1}</span>
                  <span className="text-xs font-serif italic text-stone-800">Premium</span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-stone-400">{t.promise.gridLabel2}</span>
                  <span className="text-xs font-serif italic text-stone-800">Tranquility</span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-stone-400">{t.promise.gridLabel3}</span>
                  <span className="text-xs font-serif italic text-stone-800">Studio</span>
                </div>
              </div>

            </div>

            {/* Right Column: Staggered, asymmetrical grid reflecting the 'Bildverteilung' of Image 2 & 3 */}
            <div className="lg:col-span-7 text-stone-800" id="staggered-art-grid">
              
              {/* Grid block representation of Image 2 asymmetry */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative" id="grid-collage-wrapper">
                
                {/* Image A: Blonde/Art Portrait (Top left) */}
                <div className="sm:mt-0 space-y-2 group" id="collage-img-a-wrap">
                  <div className="border border-stone-200 p-1.5 bg-white shadow-xs overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=600" 
                      alt="Artist Hair"
                      className={`w-full h-72 object-cover transition-all duration-700 group-hover:scale-105 ${monochromeMode ? "grayscale contrast-110" : ""}`}
                      referrerPolicy="no-referrer"
                      id="collage-img-a"
                    />
                  </div>
                  <div className="flex justify-between items-center px-1 font-mono text-[9px] uppercase tracking-widest text-stone-400">
                    <span>Aura Model Type_A</span>
                    <span>ALIVE Stockholm</span>
                  </div>
                </div>

                {/* Image B: Wash Cabinet/Styling Overhead (Top Right) */}
                <div className="sm:mt-8 space-y-2 group" id="collage-img-b-wrap">
                  <div className="border border-stone-200 p-1.5 bg-white shadow-xs overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600" 
                      alt="Scalp acupuncture care"
                      className={`w-full h-56 object-cover transition-all duration-700 group-hover:scale-105 ${monochromeMode ? "grayscale contrast-105" : ""}`}
                      referrerPolicy="no-referrer"
                      id="collage-img-b"
                    />
                  </div>
                  <div className="flex justify-between items-center px-1 font-mono text-[9px] uppercase tracking-widest text-stone-400">
                    <span>Treatment Suite #2</span>
                    <span>Deceleration</span>
                  </div>
                </div>

                {/* Image D: Studio team B&W portrait (Bottom Left) */}
                <div className="sm:-mt-12 space-y-2 group" id="collage-img-d-wrap">
                  <div className="border border-stone-200 p-1.5 bg-white shadow-xs overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600" 
                      alt="Stylist creators"
                      className={`w-full h-64 object-cover transition-all duration-700 group-hover:scale-105 ${monochromeMode ? "grayscale contrast-115" : ""}`}
                      referrerPolicy="no-referrer"
                      id="collage-img-d"
                    />
                  </div>
                  <div className="flex justify-between items-center px-1 font-mono text-[9px] uppercase tracking-widest text-stone-400">
                    <span>Artistic Leads</span>
                    <span>@alicehairart.se</span>
                  </div>
                </div>

                {/* Image C: Golden/Red Hair wave texture (Bottom Right - Tall block) */}
                <div className="space-y-2 group" id="collage-img-c-wrap">
                  <div className="border border-stone-200 p-1.5 bg-white shadow-xs overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=600" 
                      alt="Organic hair flow dynamics"
                      className={`w-full h-80 object-cover transition-all duration-700 group-hover:scale-105 ${monochromeMode ? "grayscale contrast-110" : ""}`}
                      referrerPolicy="no-referrer"
                      id="collage-img-c"
                    />
                  </div>
                  <div className="flex justify-between items-center px-1 font-mono text-[9px] uppercase tracking-widest text-stone-400">
                    <span>Sculpted Weave C_09</span>
                    <span>Color Pigment</span>
                  </div>
                </div>

              </div>
              
            </div>

          </div>

        </section>


        {/* SECTION 3: DETAILS OF THE PROMISE (3 concrete pillars, cleanly structured with expansion micro-interactions) */}
        <section className="pt-8 border-t border-[#e2dfd9]" id="details">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-stone-400 block" id="details-pretitle">
              PILLARS
            </span>
            <h2 className="font-serif text-3xl font-light text-[#041f3e]" id="details-title">
              {t.details.title}
            </h2>
            <p className="text-xs uppercase tracking-widest text-stone-500 font-mono" id="details-subtitle">
              {t.details.subtitle}
            </p>
            <div className="w-12 h-px bg-stone-300 mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="details-pillars-container">
            
            {/* Pillar 1 */}
            <div 
              className={`border p-6 bg-white transition-all duration-300 flex flex-col justify-between ${activeDetail === 1 ? "border-[#041f3e] ring-1 ring-[#041f3e]/20" : "border-[#e2dfd9]/80 hover:border-stone-400"}`}
              id="pillar-card-1"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 bg-[#041f3e]/5 rounded-sm flex items-center justify-center text-[#041f3e]" id="icon-container-1">
                  <Scissors className="w-5 h-5" />
                </div>
                
                <h3 className="font-serif text-xl font-normal text-[#041f3e] tracking-tight">{t.details.p1.title}</h3>
                
                <p className="text-xs font-mono text-stone-400 uppercase tracking-wider">{t.details.p1.short}</p>
                
                <p className="text-[13px] text-stone-600 font-light leading-relaxed">{t.details.p1.desc}</p>

                <AnimatePresence>
                  {activeDetail === 1 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden pt-4 border-t border-stone-100 text-stone-600 space-y-2 text-xs"
                      id="pillar-expanded-1"
                    >
                      <p className="italic bg-stone-50 p-2.5 rounded-xs border-l-2 border-[#041f3e]/30">
                        {t.details.p1.extra}
                      </p>
                      <div className="flex justify-between items-center text-[10px] font-mono text-stone-400 uppercase pt-2">
                        <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {t.details.p1.duration}</span>
                        <span>{t.details.p1.stylist}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100">
                <button
                  onClick={() => setActiveDetail(activeDetail === 1 ? null : 1)}
                  className="text-[11px] font-mono uppercase tracking-widest text-[#041f3e] hover:text-[#0b2d54] font-semibold flex items-center"
                  id="pillar-btn-1"
                >
                  <span>{activeDetail === 1 ? t.details.hideText : t.details.revealText}</span>
                  <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform ${activeDetail === 1 ? "rotate-180" : ""}`} />
                </button>
              </div>
            </div>

            {/* Pillar 2 */}
            <div 
              className={`border p-6 bg-white transition-all duration-300 flex flex-col justify-between ${activeDetail === 2 ? "border-[#041f3e] ring-1 ring-[#041f3e]/20" : "border-[#e2dfd9]/80 hover:border-stone-400"}`}
              id="pillar-card-2"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 bg-[#041f3e]/5 rounded-sm flex items-center justify-center text-[#041f3e]" id="icon-container-2">
                  <Droplets className="w-5 h-5" />
                </div>
                
                <h3 className="font-serif text-xl font-normal text-[#041f3e] tracking-tight">{t.details.p2.title}</h3>
                
                <p className="text-xs font-mono text-stone-400 uppercase tracking-wider">{t.details.p2.short}</p>
                
                <p className="text-[13px] text-stone-600 font-light leading-relaxed">{t.details.p2.desc}</p>

                <AnimatePresence>
                  {activeDetail === 2 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden pt-4 border-t border-stone-100 text-stone-600 space-y-2 text-xs"
                      id="pillar-expanded-2"
                    >
                      <p className="italic bg-stone-50 p-2.5 rounded-xs border-l-2 border-[#041f3e]/30">
                        {t.details.p2.extra}
                      </p>
                      <div className="flex justify-between items-center text-[10px] font-mono text-stone-400 uppercase pt-2">
                        <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {t.details.p2.duration}</span>
                        <span>{t.details.p2.stylist}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100">
                <button
                  onClick={() => setActiveDetail(activeDetail === 2 ? null : 2)}
                  className="text-[11px] font-mono uppercase tracking-widest text-[#041f3e] hover:text-[#0b2d54] font-semibold flex items-center"
                  id="pillar-btn-2"
                >
                  <span>{activeDetail === 2 ? t.details.hideText : t.details.revealText}</span>
                  <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform ${activeDetail === 2 ? "rotate-180" : ""}`} />
                </button>
              </div>
            </div>

            {/* Pillar 3 */}
            <div 
              className={`border p-6 bg-white transition-all duration-300 flex flex-col justify-between ${activeDetail === 3 ? "border-[#041f3e] ring-1 ring-[#041f3e]/20" : "border-[#e2dfd9]/80 hover:border-stone-400"}`}
              id="pillar-card-3"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 bg-[#041f3e]/5 rounded-sm flex items-center justify-center text-[#041f3e]" id="icon-container-3">
                  <Sparkles className="w-5 h-5" />
                </div>
                
                <h3 className="font-serif text-xl font-normal text-[#041f3e] tracking-tight">{t.details.p3.title}</h3>
                
                <p className="text-xs font-mono text-stone-400 uppercase tracking-wider">{t.details.p3.short}</p>
                
                <p className="text-[13px] text-stone-600 font-light leading-relaxed">{t.details.p3.desc}</p>

                <AnimatePresence>
                  {activeDetail === 3 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden pt-4 border-t border-stone-100 text-stone-600 space-y-2 text-xs"
                      id="pillar-expanded-3"
                    >
                      <p className="italic bg-stone-50 p-2.5 rounded-xs border-l-2 border-[#041f3e]/30">
                        {t.details.p3.extra}
                      </p>
                      <div className="flex justify-between items-center text-[10px] font-mono text-stone-400 uppercase pt-2">
                        <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {t.details.p3.duration}</span>
                        <span>{t.details.p3.stylist}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100">
                <button
                  onClick={() => setActiveDetail(activeDetail === 3 ? null : 3)}
                  className="text-[11px] font-mono uppercase tracking-widest text-[#041f3e] hover:text-[#0b2d54] font-semibold flex items-center"
                  id="pillar-btn-3"
                >
                  <span>{activeDetail === 3 ? t.details.hideText : t.details.revealText}</span>
                  <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform ${activeDetail === 3 ? "rotate-180" : ""}`} />
                </button>
              </div>
            </div>

          </div>

        </section>


        {/* INTERACTIVE COMPONENT: "MY TYPE. MY STYLE. MY COLOR." (Connecting reference image tags into actual user gameplay/simulation) */}
        <section className="pt-12 pb-12 px-6 sm:px-10 bg-stone-900 border border-stone-850 rounded-sm text-stone-100 relative overflow-hidden" id="profiler">
          
          {/* Decorative faint background vector design elements */}
          <div className="absolute right-0 top-0 w-80 h-80 bg-[#041f3e]/10 blur-3xl pointer-events-none rounded-full"></div>
          
          <div className="relative space-y-8">
            
            {/* Header portion */}
            <div className="space-y-2 max-w-2xl border-b border-stone-800 pb-6">
              <span className="font-mono text-[10px] text-[#041f3e] tracking-[0.4em] font-bold block">AESTHETIC BUILDER</span>
              <h2 className="font-serif text-3xl font-light text-stone-100">{t.profiler.title}</h2>
              <p className="text-stone-400 text-xs sm:text-sm font-light italic">{t.profiler.subtitle}</p>
            </div>

            {/* Configurator Steps */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
              
              {/* Option step 1: Type Selection */}
              <div className="space-y-4" id="step-type-wrapper">
                <label className="block text-[11px] font-mono uppercase tracking-widest text-stone-400 font-bold border-l-2 border-[#041f3e] pl-2">
                  {t.profiler.typeLabel}
                </label>
                <div className="space-y-2">
                  {t.profiler.types.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`w-full text-left p-3 border rounded-xs transition-all flex justify-between items-center ${selectedType === type.id ? "bg-stone-100 text-stone-900 border-[#041f3e] shadow-xs" : "border-stone-805 hover:bg-stone-800 text-stone-300 hover:border-stone-700"}`}
                      id={`type-btn-${type.id}`}
                    >
                      <div>
                        <span className="block text-xs uppercase font-mono tracking-wider font-semibold">{type.name}</span>
                        <span className="block text-[11px] text-stone-500 font-light mt-0.5 leading-tight">{type.desc}</span>
                      </div>
                      {selectedType === type.id && <Check className="w-4 h-4 text-[#041f3e] shrink-0 ml-2" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option step 2: Style Selection */}
              <div className="space-y-4" id="step-style-wrapper">
                <label className="block text-[11px] font-mono uppercase tracking-widest text-stone-400 font-bold border-l-2 border-[#041f3e] pl-2">
                  {t.profiler.styleLabel}
                </label>
                <div className="space-y-2">
                  {t.profiler.styles.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => setSelectedStyle(style.id)}
                      className={`w-full text-left p-3 border rounded-xs transition-all flex justify-between items-center ${selectedStyle === style.id ? "bg-stone-100 text-stone-900 border-[#041f3e] shadow-xs" : "border-stone-805 hover:bg-stone-800 text-stone-300 hover:border-stone-700"}`}
                      id={`style-btn-${style.id}`}
                    >
                      <div>
                        <span className="block text-xs uppercase font-mono tracking-wider font-semibold">{style.name}</span>
                        <span className="block text-[11px] text-stone-500 font-light mt-0.5 leading-tight">{style.desc}</span>
                      </div>
                      {selectedStyle === style.id && <Check className="w-4 h-4 text-[#041f3e] shrink-0 ml-2" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option step 3: Color Selection */}
              <div className="space-y-4" id="step-color-wrapper">
                <label className="block text-[11px] font-mono uppercase tracking-widest text-stone-400 font-bold border-l-2 border-[#041f3e] pl-2">
                  {t.profiler.colorLabel}
                </label>
                <div className="space-y-2">
                  {t.profiler.colors.map((colorObj) => (
                    <button
                      key={colorObj.id}
                      onClick={() => setSelectedColor(colorObj.id)}
                      className={`w-full text-left p-3 border rounded-xs transition-all flex justify-between items-center ${selectedColor === colorObj.id ? "bg-stone-100 text-stone-900 border-[#041f3e] shadow-xs" : "border-stone-805 hover:bg-stone-800 text-stone-300 hover:border-stone-700"}`}
                      id={`color-btn-${colorObj.id}`}
                    >
                      <div>
                        <span className="block text-xs uppercase font-mono tracking-wider font-semibold">{colorObj.name}</span>
                        <span className="block text-[11px] text-stone-500 font-light mt-0.5 leading-tight">{colorObj.desc}</span>
                      </div>
                      {selectedColor === colorObj.id && <Check className="w-4 h-4 text-[#041f3e] shrink-0 ml-2" />}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* LIVE CONFIGURATION BOARD (Showcasing aesthetic choice outputs dynamically) */}
            <div className="mt-8 border-t border-stone-800 pt-8" id="profile-assessment-panel">
              <div className="bg-stone-950 p-6 rounded-xs border border-stone-800 grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                
                <div className="md:col-span-3 space-y-3">
                  <span className="text-[10px] uppercase tracking-widest text-[#041f3e] font-mono font-bold block">
                    DYNAMIC SYSTEM VERIFICATION
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-stone-900 border border-stone-800 rounded-sm text-xs text-stone-200">
                      Typ: <strong className="text-white font-mono uppercase tracking-wider">{currentTypeObj?.name}</strong>
                    </span>
                    <span className="px-3 py-1 bg-stone-900 border border-stone-800 rounded-sm text-xs text-stone-200">
                      Schnitt: <strong className="text-white font-mono uppercase tracking-wider">{currentStyleObj?.name}</strong>
                    </span>
                    <span className="px-3 py-1 bg-stone-900 border border-stone-800 rounded-sm text-xs text-stone-200">
                      Nuance: <strong className="text-white font-mono uppercase tracking-wider">{currentColorObj?.name}</strong>
                    </span>
                  </div>
                  <p className="text-stone-400 text-xs font-light">
                    Diese Auswahl wird vollautomatisch verschlüsselt und als ästhetisches Rezept in das integrierte Buchungsformular unten geladen. Kein doppelter Aufwand erforderlich.
                  </p>
                </div>

                <div className="text-right" id="profile-cta-dock">
                  <a
                    href="#booking"
                    className="w-full md:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#041f3e] to-[#0b2d54] hover:from-[#0b2d54] hover:to-[#113a69] text-white uppercase text-[11px] tracking-widest font-bold px-6 py-4.5 rounded-sm transition-all duration-300 shadow-lg"
                    id="profiler-booking-bridge-btn"
                  >
                    <span>Rezept übertragen</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>

          </div>

        </section>


        {/* SECTION 4: PROOF (Social proof, reviews carousel & high-fashion editorial certifications) */}
        <section className="pt-8 border-t border-[#e2dfd9]" id="proof">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Box (Interactive quotes) */}
            <div className="lg:col-span-8 space-y-8" id="testimonials-wrapper">
              
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-stone-400 block">
                  {t.proof.title}
                </span>
                <h2 className="font-serif text-3xl font-light text-[#041f3e]">
                  {t.proof.subtitle}
                </h2>
              </div>

              {/* Reviews Card with slider controls */}
              <div className="border border-stone-200 bg-white p-8 rounded-sm relative" id="active-testimonial-card">
                
                <Quote className="absolute right-6 top-6 w-12 h-12 text-[#041f3e]/5 pointer-events-none" />

                <div className="space-y-6 min-h-[160px]" id="quote-content-container">
                  
                  {/* Rating Stars */}
                  <div className="flex space-x-1" id="stars-row">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#041f3e] text-[#041f3e]" />
                    ))}
                  </div>

                  <p className="font-serif text-lg text-stone-800 leading-relaxed italic">
                    „{t.proof.quotes[activeQuoteIdx].text}“
                  </p>

                  <div className="border-t border-stone-100 pt-4 flex items-center justify-between">
                    <div>
                      <span className="block font-semibold text-stone-900 text-sm">{t.proof.quotes[activeQuoteIdx].author}</span>
                      <span className="block text-xs text-stone-400 font-mono uppercase tracking-widest mt-0.5">{t.proof.quotes[activeQuoteIdx].role}</span>
                    </div>
                    
                    <div className="flex bg-stone-50 border border-stone-100 rounded-sm" id="carousel-arrows-overlay">
                      <button 
                        onClick={() => setActiveQuoteIdx((prev) => (prev > 0 ? prev - 1 : t.proof.quotes.length - 1))}
                        className="p-2 hover:bg-stone-100 text-[#041f3e] transition-colors"
                        id="testimonial-prev-arrow"
                        aria-label="Previous review"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => setActiveQuoteIdx((prev) => (prev < t.proof.quotes.length - 1 ? prev + 1 : 0))}
                        className="p-2 hover:bg-stone-100 border-l border-stone-100 text-[#041f3e] transition-colors"
                        id="testimonial-next-arrow"
                        aria-label="Next review"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                </div>

              </div>

            </div>

            {/* Right Box (Vogue & Industry Credentials) */}
            <div className="lg:col-span-4 space-y-6 flex flex-col justify-end" id="credentials-wrapper">
              
              <div className="border-l-2 border-[#041f3e] pl-4 py-1">
                <span className="block text-[11px] font-mono uppercase tracking-widest text-stone-400 font-bold">
                  {t.proof.partnerTitle}
                </span>
              </div>

              <div className="space-y-4" id="cred-items-stack">
                {t.proof.awards.map((award, i) => (
                  <div key={i} className="p-4 bg-white border border-stone-200/60 rounded-xs group hover:border-[#041f3e]/40 transition-colors" id={`award-card-${i}`}>
                    <span className="block font-serif font-bold text-[#041f3e] text-base group-hover:text-[#0b2d54] transition-colors">{award.pub}</span>
                    <span className="block text-xs text-stone-500 font-light mt-0.5">{award.text}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </section>


        {/* SECTION 5: CALL-TO-ACTION BOOKING ENGINE (Beautiful interactive final section) */}
        <section className="pt-8 border-t border-[#e2dfd9] pb-12" id="booking">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Form Info Box */}
            <div className="lg:col-span-4 space-y-6 flex flex-col justify-between" id="booking-info-panel">
              <div className="space-y-4">
                <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-stone-400 block" id="booking-pretitle">
                  RESERVATION
                </span>
                
                <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#041f3e]" id="booking-title">
                  {t.ctaForm.title}
                </h2>
                
                <p className="text-[#5c574f] text-sm font-light leading-relaxed">
                  {t.ctaForm.subtitle}
                </p>

                <div className="space-y-3 pt-6" id="salon-facts-stack">
                  <div className="flex items-center space-x-3 text-xs text-stone-600">
                    <Clock className="w-4 h-4 text-[#041f3e]" />
                    <span>Öffnungszeiten: Di - Sa, 09:00 - 20:00 Uhr</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-stone-600">
                    <Phone className="w-4 h-4 text-[#041f3e]" />
                    <span>Atelier Stockholm: +46 8 456 78 90</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-stone-600">
                    <MapPin className="w-4 h-4 text-[#041f3e]" />
                    <span>Lage: Regeringsgatan 87, Stockholm</span>
                  </div>
                </div>
              </div>

              {/* Secure Booking Notice */}
              <div className="bg-stone-50 p-4 border border-stone-200 text-xs text-stone-500 rounded-sm leading-relaxed" id="secure-notice">
                <Info className="w-4 h-4 text-[#041f3e] inline mr-1 mb-0.5" />
                <span>Datensicherheit &bull; Ihre Angaben werden verschlüsselt verarbeitet und ausschließlich zur Terminkoordination erhoben. Es werden keine Kundendaten an Dritte weitergegeben.</span>
              </div>
            </div>

            {/* Central / Right Form Box */}
            <div className="lg:col-span-8" id="booking-form-panel">
              <div className="bg-white border border-stone-200 p-6 sm:p-10 rounded-sm relative" id="booking-portal-card">
                
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form 
                      key="form"
                      onSubmit={handleBookingSubmit}
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      {/* Guest Details */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="block text-xs uppercase font-mono tracking-widest text-[#5c574f]" htmlFor="guest-name">
                            {t.ctaForm.labelName}
                          </label>
                          <input 
                            type="text" 
                            id="guest-name" 
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder={t.ctaForm.placeholderName}
                            className="w-full bg-stone-50 border border-stone-200 px-4 py-3 text-sm focus:border-[#041f3e] focus:bg-white focus:outline-hidden transition-all rounded-xs focus:ring-1 focus:ring-[#041f3e]/40"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-xs uppercase font-mono tracking-widest text-[#5c574f]" htmlFor="guest-phone">
                            {t.ctaForm.labelPhone}
                          </label>
                          <input 
                            type="tel" 
                            id="guest-phone" 
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder={t.ctaForm.placeholderPhone}
                            className="w-full bg-stone-50 border border-stone-200 px-4 py-3 text-sm focus:border-[#041f3e] focus:bg-white focus:outline-hidden transition-all rounded-xs focus:ring-1 focus:ring-[#041f3e]/40"
                          />
                        </div>
                      </div>

                      {/* Date & Time preferences */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="block text-xs uppercase font-mono tracking-widest text-[#5c574f]" htmlFor="booking-date">
                            {t.ctaForm.labelDate}
                          </label>
                          <input 
                            type="date" 
                            id="booking-date" 
                            required
                            value={bookingDate}
                            onChange={(e) => setBookingDate(e.target.value)}
                            className="w-full bg-stone-50 border border-stone-200 px-4 py-3 text-sm focus:border-[#041f3e] focus:bg-white focus:outline-hidden transition-all rounded-xs"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-xs uppercase font-mono tracking-widest text-[#5c574f]" htmlFor="booking-time">
                            {t.ctaForm.labelTime}
                          </label>
                          <select 
                            id="booking-time" 
                            required
                            value={bookingTime}
                            onChange={(e) => setBookingTime(e.target.value)}
                            className="w-full bg-stone-50 border border-stone-200 px-4 py-3 text-sm focus:border-[#041f3e] focus:bg-white focus:outline-hidden transition-all rounded-xs"
                          >
                            <option value="">-- {lang === "DE" ? "Bitte wählen" : "Select range"} --</option>
                            <option value="09:00 - 12:00">Vormittag (09:00 - 12:00)</option>
                            <option value="12:00 - 15:00">Mittag (12:00 - 15:00)</option>
                            <option value="15:00 - 18:00">Nachmittag (15:00 - 18:00)</option>
                            <option value="18:00 - 20:00">Abend (18:00 - 20:00)</option>
                          </select>
                        </div>
                      </div>

                      {/* Visual styling formula confirmation embedded inside form */}
                      <div className="bg-[#041f3e]/5 border border-[#041f3e]/15 p-4 rounded-xs text-xs space-y-1" id="embedded-style-banner">
                        <span className="font-semibold text-[#041f3e] flex items-center space-x-1 uppercase font-mono tracking-[0.1em]">
                          <Scissors className="w-3.5 h-3.5" />
                          <span>INTEGRIERTES STYLING-REZEPT (STYLE PROFILER)</span>
                        </span>
                        <p className="text-stone-500 font-light mt-1">
                          Typus: <strong className="text-stone-850">{currentTypeObj?.name}</strong> |
                          Schnitt-Silhouette: <strong className="text-stone-850">{currentStyleObj?.name}</strong> |
                          Nuancen-Anspruch: <strong className="text-stone-850">{currentColorObj?.name}</strong>
                        </p>
                      </div>

                      {/* Submit btn */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="w-full bg-[#041f3e] hover:bg-[#0b2d54] text-white text-xs uppercase tracking-widest font-bold py-4.5 transition-all text-center rounded-xs shadow-xs disabled:bg-stone-300"
                          id="submit-booking-action-btn"
                        >
                          {isLoading ? t.ctaForm.btnLoading : t.ctaForm.btnSubmit}
                        </button>
                      </div>

                    </motion.form>
                  ) : (
                    // Booking success board with custom ticket receipt
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="space-y-8"
                    >
                      <div className="text-center space-y-3" id="success-header">
                        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto" id="success-check-badge">
                          <Check className="w-8 h-8" />
                        </div>
                        <h3 className="font-serif text-2xl font-semibold text-[#041f3e]">{t.ctaForm.successTitle}</h3>
                        <p className="text-stone-600 text-sm max-w-lg mx-auto font-light leading-relaxed">
                          {t.ctaForm.successText}
                        </p>
                      </div>

                      {/* Physical Boarding Pass representation */}
                      <div className="border-2 border-dashed border-[#041f3e] bg-stone-50 p-6 rounded-sm space-y-6 relative overflow-hidden" id="luxury-receipt-ticket">
                        
                        {/* Cutouts on margins */}
                        <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#faf9f6] border-r-2 border-[#041f3e]/40 rounded-full pointer-events-none"></div>
                        <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#faf9f6]/95 border-l-2 border-[#041f3e]/40 rounded-full pointer-events-none"></div>

                        <div className="flex justify-between items-center border-b border-stone-200 pb-4">
                          <div>
                            <span className="block text-[10px] font-mono uppercase tracking-widest text-stone-400">{t.ctaForm.ticketLabel}</span>
                            <span className="text-lg font-serif font-bold text-[#041f3e]">ALIVE &bull; ATELIER STHLM</span>
                          </div>
                          <div className="text-right">
                            <span className="block text-[9px] font-mono uppercase tracking-widest text-stone-400">{t.ctaForm.bookingCode}</span>
                            <span className="font-mono text-base font-bold text-emerald-600 tracking-wider bg-white px-2 py-0.5 border rounded-sm shadow-2xs">
                              {bookingCode}
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs pt-1">
                          
                          <div>
                            <span className="block text-[10px] font-mono uppercase tracking-widest text-stone-400">GUEST</span>
                            <strong className="text-stone-800 text-[13px] block mt-0.5">{name}</strong>
                          </div>
                          
                          <div>
                            <span className="block text-[10px] font-mono uppercase tracking-widest text-stone-400">TELEPHONE</span>
                            <strong className="text-stone-800 text-[13px] block mt-0.5">{phone}</strong>
                          </div>
                          
                          <div>
                            <span className="block text-[10px] font-mono uppercase tracking-widest text-stone-400">DATE</span>
                            <strong className="text-[#041f3e] text-[13px] block mt-0.5">{bookingDate}</strong>
                          </div>
                          
                          <div>
                            <span className="block text-[10px] font-mono uppercase tracking-widest text-stone-400">TIME FRAME</span>
                            <strong className="text-[#041f3e] text-[13px] block mt-0.5">{bookingTime}</strong>
                          </div>

                        </div>

                        <div className="border-t border-stone-200 pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                          
                          <div>
                            <span className="block text-[9px] font-mono uppercase tracking-widest text-stone-400">{t.ctaForm.ticketType}</span>
                            <span className="inline-block mt-1 font-mono uppercase bg-stone-200/60 px-2 py-1 text-[11px] rounded-xs font-semibold text-stone-800">
                              {currentTypeObj?.name}
                            </span>
                          </div>

                          <div>
                            <span className="block text-[9px] font-mono uppercase tracking-widest text-stone-400">{t.ctaForm.ticketStyle}</span>
                            <span className="inline-block mt-1 font-mono uppercase bg-stone-200/60 px-2 py-1 text-[11px] rounded-xs font-semibold text-stone-800">
                              {currentStyleObj?.name}
                            </span>
                          </div>

                          <div>
                            <span className="block text-[9px] font-mono uppercase tracking-widest text-stone-400">{t.ctaForm.ticketColor}</span>
                            <span className="inline-block mt-1 font-mono uppercase bg-stone-200/60 px-2 py-1 text-[11px] rounded-xs font-semibold text-stone-800">
                              {currentColorObj?.name}
                            </span>
                          </div>

                        </div>

                      </div>

                      <div className="text-center pt-2">
                        <button 
                          onClick={() => {
                            setIsSubmitted(false);
                            setName("");
                            setPhone("");
                            setBookingDate("");
                            setBookingTime("");
                          }}
                          className="text-xs uppercase font-mono tracking-widest text-[#041f3e] hover:underline"
                          id="book-another-btn"
                        >
                          &larr; Weiteren Termin buchen
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 py-16 transition-colors duration-200" id="main-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            <div className="space-y-4">
              <div className="border border-stone-750 px-3 py-1 inline-flex flex-col items-center justify-center bg-stone-950">
                <span className="font-serif text-sm tracking-[0.35em] font-bold text-white leading-none">ALIVE</span>
                <span className="text-[6px] uppercase tracking-[0.5em] text-stone-400 font-semibold mt-0.5">COPENHAGEN &bull; STOCKHOLM</span>
              </div>
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                Kombination aus traditioneller deutscher Farbekompetenz und modernem skandinavischen Purismus. Ein Salon-Erlebnis wie kein anderes.
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-white font-semibold mb-4">STUDIO LOCATIONS</h4>
              <ul className="text-xs text-stone-400 space-y-2 leading-relaxed">
                <li>
                  <strong className="text-stone-300">Stockholm (Atelier)</strong>: <br />
                  Regeringsgatan 87, 111 39 Stockholm
                </li>
                <li>
                  <strong className="text-stone-300">Kopenhagen (Concept)</strong>: <br />
                  Gothersgade 44, 1123 K&oslash;benhavn
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-white font-semibold mb-4">RECHTLICHES</h4>
              <ul className="text-xs text-stone-400 space-y-2">
                <li><a href="#philosophy" className="hover:text-white transition-colors">Impressum</a></li>
                <li><a href="#philosophy" className="hover:text-white transition-colors">Datenschutzbestimmungen</a></li>
                <li><a href="#philosophy" className="hover:text-white transition-colors">AGB &amp; Widerruf</a></li>
                <li><a href="#philosophy" className="hover:text-white transition-colors">Zahlungsmethoden</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-white font-semibold mb-4">SOCIETY NEWSLETTER</h4>
              <p className="text-xs text-stone-400 mb-3 font-light leading-relaxed">
                Melden Sie sich an, um Einladungen zu unseren Afterwork Art Sessions und limitierten Lookbook-Kollektionen zu erhalten.
              </p>
              <div className="flex" id="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Deine E-Mail-Adresse" 
                  disabled
                  className="bg-stone-800 border border-stone-700 px-3 py-2 text-xs w-full text-white placeholder-stone-500 rounded-l-xs focus:outline-hidden"
                />
                <button 
                  disabled
                  className="bg-stone-700 border border-stone-700 text-stone-300 px-3 py-2 text-xs font-mono uppercase tracking-widest font-semibold rounded-r-xs hover:bg-stone-600 cursor-not-allowed"
                >
                  OK
                </button>
              </div>
            </div>

          </div>

          <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 font-mono" id="footer-legals">
            <span>&copy; {new Date().getFullYear()} ALIVE Hair &amp; Art. Alle Rechte vorbehalten.</span>
            <span className="mt-2 sm:mt-0 flex items-center space-x-1.5">
              <span>Bundy Bundy &amp; Alice Hair Art Hommage</span>
              <span>&bull;</span>
              <span>Made with AI Studio</span>
            </span>
          </div>

        </div>
      </footer>

    </div>
  );
}
