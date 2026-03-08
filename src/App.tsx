import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Intro from './components/Intro';
import AnimatedBackground from './components/AnimatedBackground';
import {
  HeroSection,
  AboutSection,
  VisionSection,
  StorySection,
  PhilosophySection,
  FragrancesSection,
  FutureSection,
  ConnectSection,
  Footer
} from './components/Sections';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // 1.5 seconds intro duration
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 1500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-[#00E5FF]/30">
      <AnimatePresence mode="wait">
        {showIntro && <Intro key="intro" />}
      </AnimatePresence>

      {!showIntro && (
        <>
          <AnimatedBackground />
          <main className="relative z-10 flex flex-col items-center w-full overflow-hidden">
            <HeroSection />
            <AboutSection />
            <VisionSection />
            <StorySection />
            <PhilosophySection />
            <FragrancesSection />
            <FutureSection />
            <ConnectSection />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
