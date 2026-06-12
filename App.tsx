import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  UserPlus,
  CalendarRange,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Mail,
  Compass,
  TreePine,
  Phone
} from "lucide-react";

const CONFIG = {
  topBarText: "🌿 INDIVIDUALISIERT & PROFESSIONELL: DER ENTWURF FÜR DEIN PROJEKT",
  brandName: "GRUNER UND WURM",
  brandSubtitle: "GARTEN- & LANDSCHAFTSBAU MEISTERBETRIEB",
  badgeText: "EXKLUSIVER DESIGN-ENTWURF",
  headlinePart1: "Kreative Gartenplanung. ",
  headlinePart2: "Präzises Handwerk.",
  subheadline: "Ein maßgeschneidertes, digitales System für gruner und wurm Garten- und Landschaftsbau. Entwickelt, um anspruchsvolle Außenanlagen online sichtbar zu machen, neue Fachkräfte zu gewinnen und Projektanfragen digital zu organisieren.",
  primaryCtaText: "Projekt anfragen",
  secondaryCtaText: "Erstgespräch buchen",
  imageUrl: "/bild.jpg" 
};

export default function App() {
  const [demoActive, setDemoActive] = useState<boolean>(false);
  const [applicantCount, setApplicantCount] = useState<number>(19);
  
  // 3D Tilt Effekt States für das Mockup
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMoveCard = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const element = cardRef.current;
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    setRotateX(-y / 12);
    setRotateY(x / 12);
  };

  const handleMouseLeaveCard = () => {
    setRotateX(0);
    setRotateY(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setApplicantCount((prev) => prev + (Math.random() > 0.90 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFDFB] text-neutral-900 font-sans antialiased selection:bg-[#FCE7F3] selection:text-[#166534]">
      
      {/* 1. TOP BAR BANNER */}
      <div className="bg-[#166534] text-white py-2.5 text-[10px] font-mono tracking-[0.2em] text-center px-4 relative z-50 shadow-xs">
        {CONFIG.topBarText}
      </div>

      {/* 2. HEADER & NAVIGATION */}
      <header className="border-b border-[#FCE7F3] bg-white/80 backdrop-blur-md sticky top-0 z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <TreePine className="w-5 h-5 text-[#166534]" />
              <span className="font-sans text-lg font-bold tracking-wider text-neutral-900">{CONFIG.brandName}</span>
            </div>
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#F472B6] font-semibold mt-0.5">
              {CONFIG.brandSubtitle}
            </span>
          </div>

          <nav className="hidden md:flex space-x-8 text-xs uppercase tracking-widest text-neutral-400 font-medium">
            <span className="text-[#F472B6] font-semibold cursor-default flex items-center gap-1">
              <Sparkles className="w-3 h-3 animate-pulse" /> Live Prototyp
            </span>
            <span className="opacity-40 cursor-not-allowed">Gärten</span>
            <span className="opacity-40 cursor-not-allowed">Leistungen</span>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden sm:inline-flex items-center gap-1.5 bg-[#FDF2F8] border border-[#FCE7F3] px-3 py-1 rounded-full text-[10px] font-mono text-[#166534]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F472B6] animate-ping"></span>
              PROTOTYP
            </div>
            <button 
              onClick={() => setDemoActive(true)}
              className="bg-[#166534] text-white uppercase text-[10px] tracking-widest font-semibold px-5 py-3 hover:bg-green-800 active:scale-98 transition-all duration-200 shadow-sm cursor-pointer"
            >
              Konzept öffnen
            </button>
          </div>

        </div>
      </header>

      {/* 3. MAIN HERO SECTION */}
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-24 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Links: Text & Features */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-white border border-[#FCE7F3] px-3 py-1.5 rounded-full text-[10px] font-mono tracking-widest text-[#166534] uppercase shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F472B6]" />
              <span>{CONFIG.badgeText}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.1]">
              {CONFIG.headlinePart1} <br />
              <span className="bg-gradient-to-r from-[#F472B6] to-[#166534] bg-clip-text text-transparent italic font-serif font-normal">
                {CONFIG.headlinePart2}
              </span>
            </h1>
            
            <p className="text-neutral-500 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
              {CONFIG.subheadline}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button 
                onClick={() => setDemoActive(true)}
                className="group w-full sm:w-auto bg-[#166534] hover:bg-green-800 text-white text-xs uppercase tracking-widest font-bold px-8 py-4.5 text-center transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg active:scale-98 cursor-pointer"
              >
                <span>{CONFIG.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button 
                onClick={() => setDemoActive(true)}
                className="w-full sm:w-auto bg-white border border-[#FCE7F3] text-[#166534] hover:bg-[#FFF1F2] hover:border-[#FBCFE8] text-xs uppercase tracking-widest font-bold px-8 py-4.5 text-center transition-all duration-200 flex items-center justify-center space-x-2 shadow-xs active:scale-98 cursor-pointer"
              >
                <span>{CONFIG.secondaryCtaText}</span>
                <Mail className="w-4 h-4 text-neutral-400" />
              </button>
            </div>

            {/* Feature-Karten */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-[#FCE7F3] max-w-xl">
              {[
                {
                  icon: <UserPlus className="w-4 h-4 text-[#F472B6]" />,
                  title: "Express-Recruitingtool",
                  desc: "Landschaftsgärtner, Helfer oder Azubis bewerben sich mobil in 60 Sekunden – komplett digital per Smartphone und ohne lästige Bewerbungsmappen."
                },
                {
                  icon: <CalendarRange className="w-4 h-4 text-[#166534]" />,
                  title: "Digitaler Projektplaner",
                  desc: "Interessenten übermitteln Maße, Fotos und Wünsche für Gartenneu- oder Umgestaltungen bequem online. Filtert Anfragen strukturiert vor."
                }
              ].map((feat, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -4, borderColor: "rgba(244, 114, 182, 0.4)" }}
                  className="p-5 bg-white border border-[#FCE7F3] rounded-2xl shadow-xs transition-all duration-300"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-neutral-800 uppercase tracking-wider">
                    {feat.icon}
                    <span>{feat.title}</span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-2 leading-relaxed">{feat.desc}</p>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* Rechts: Interaktives 3D-Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-5 w-full flex justify-center"
            style={{ perspective: 1000 }}
          >
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMoveCard}
              onMouseLeave={handleMouseLeaveCard}
              animate={{ rotateX, rotateY }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="w-full max-w-md bg-white border border-[#FCE7F3] rounded-3xl p-5 shadow-[0_25px_60px_-15px_rgba(22,101,52,0.08)] space-y-4 backface-visible transform-gpu"
            >
              
              {/* Browser Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#FDF2F8]">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FCE7F3]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FCE7F3]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FCE7F3]" />
                </div>
                <div className="text-[9px] font-mono text-neutral-400 bg-[#FDF2F8] px-3 py-0.5 border border-[#FCE7F3] rounded-md">
                  gruner-wurm-entwurf.de
                </div>
                <ChevronRight className="w-3 h-3 text-neutral-300" />
              </div>

              {/* Bild-Bereich */}
              <div className="relative rounded-2xl overflow-hidden shadow-inner border border-[#FCE7F3] aspect-[4/3] bg-neutral-50 group">
                {CONFIG.imageUrl ? (
                  <img 
                    src={CONFIG.imageUrl} 
                    alt="Gruner und Wurm Gartenbau" 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#FDF2F8] flex items-center justify-center text-neutral-400">
                    <span className="text-[10px] font-mono uppercase tracking-wider">[ Visueller Platzhalter ]</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#166534]/40 via-black/0 to-transparent opacity-80 pointer-events-none" />
                <div className="absolute bottom-3 left-3 text-white pointer-events-none">
                  <span className="text-[8px] font-mono text-neutral-200 uppercase tracking-widest block">Vercel Live-Vorschau</span>
                  <span className="text-xs font-semibold tracking-wide">Moderne Garten- & Landschaftsarchitektur</span>
                </div>
              </div>

              {/* Interaktiver Live-Zähler */}
              <div className="p-4 bg-[#FDF2F8]/60 border border-[#FCE7F3] rounded-2xl flex items-center justify-between shadow-xs">
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider">System-Aktivität</span>
                  <div className="text-xs font-bold text-neutral-800 flex items-center gap-2">
                    <span>{applicantCount} aktive Klicks & Anfragen</span>
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F472B6] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F472B6]"></span>
                    </span>
                  </div>
                </div>
                <div className="w-8 h-8 bg-white border border-[#FCE7F3] rounded-full flex items-center justify-center text-[#166534]">
                  <Phone className="w-4 h-4" />
                </div>
              </div>

            </motion.div>
          </motion.div>

        </div>
      </main>

      {/* 4. MODAL DETAILED CONCEPT */}
      <AnimatePresence>
        {demoActive && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDemoActive(false)}
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="max-w-md w-full bg-white border border-[#FCE7F3] p-6 rounded-3xl relative z-10 shadow-2xl"
            >
              <div className="space-y-4 text-center">
                <div className="w-12 h-12 rounded-full bg-[#FDF2F8] text-[#166534] flex items-center justify-center mx-auto border border-[#FCE7F3]">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold">Hinweis zum Prototyp</h3>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  Dieses System befindet sich im exklusiven Demo-Modus für gruner und wurm. Nach Freischaltung werden alle Formulare, Materialauswahlen und Recruiting-Tools voll funktionsfähig hinterlegt.
                </p>
                
                <div className="p-3.5 bg-[#FDF2F8] rounded-xl border border-[#FCE7F3] text-left font-mono text-[10px] text-[#166534] space-y-1">
                  <div className="text-[#F472B6] font-bold">// Geplante Integrationen:</div>
                  <div className="text-neutral-800 font-semibold">- Automatisierter WhatsApp-Bewerbungskanal für Azubis/Fachkräfte</div>
                  <div className="text-neutral-800 font-semibold">- Schnittstelle für Schadens- und Sturmmeldungen</div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setDemoActive(false)}
                    className="w-full py-3 rounded-xl text-xs font-semibold bg-[#166534] hover:bg-green-800 active:scale-98 text-white transition-all duration-200 cursor-pointer shadow-sm"
                  >
                    Schließen
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
