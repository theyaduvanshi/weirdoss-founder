import { motion } from 'framer-motion';
import { Mail, Linkedin, Globe, Droplet, Wind, Sparkles, Feather } from 'lucide-react';
import React, { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-screen px-6 text-center z-10">
      <FadeIn delay={0.2}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light tracking-tighter text-white mb-6">
          Himanshu Yadav
        </h1>
      </FadeIn>
      <FadeIn delay={0.4}>
        <p className="text-xl md:text-2xl font-sans tracking-[0.2em] text-[#00E5FF] uppercase mb-8">
          Founder of Weirdoss
        </p>
      </FadeIn>
      <FadeIn delay={0.6}>
        <p className="max-w-2xl text-lg md:text-xl text-gray-400 font-light mb-12 leading-relaxed">
          Building a fragrance brand designed to stand apart — where creativity, identity, and scent meet.
        </p>
      </FadeIn>
      <FadeIn delay={0.8} className="flex flex-col sm:flex-row gap-6">
        <a 
          href="https://weirdoss.com" 
          target="_blank" 
          rel="noreferrer" 
          className="px-8 py-4 text-sm tracking-widest uppercase bg-white text-black hover:bg-gray-200 transition-colors rounded-full font-medium"
        >
          Explore Weirdoss
        </a>
        <a 
          href="#connect" 
          className="px-8 py-4 text-sm tracking-widest uppercase border border-white/20 hover:bg-white/10 transition-colors rounded-full font-medium backdrop-blur-sm"
        >
          Connect With Me
        </a>
      </FadeIn>
    </section>
  );
};

export const AboutSection = () => {
  return (
    <section className="w-full max-w-5xl px-6 py-32 mx-auto z-10 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-display font-light tracking-tight mb-6 leading-tight">
            The Mind Behind <br/><span className="text-[#00E5FF]">The Scent</span>
          </h2>
          <div className="w-20 h-[1px] bg-white/30 mb-8"></div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg text-gray-400 font-light leading-relaxed mb-6">
            As the Founder & CEO of Weirdoss, I lead the brand’s vision, product development, and overall growth strategy. My passion lies in creating unique, long-lasting perfumes that defy expectations.
          </p>
          <p className="text-lg text-gray-400 font-light leading-relaxed">
            I believe that fragrance is more than just a pleasant smell; it is a profound form of identity. Every scent we create is designed to meet the highest standards of quality, creativity, and luxury.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export const VisionSection = () => {
  return (
    <section className="w-full px-6 py-32 bg-white/[0.02] border-y border-white/5 relative z-10 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <Sparkles className="w-12 h-12 mx-auto text-[#00E5FF] mb-8 opacity-80" />
          <h2 className="text-3xl md:text-5xl font-display font-light tracking-tight mb-8">
            A Vision to Stand Apart
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed italic">
            "Weirdoss is built on the belief that a fragrance should be bold, memorable, and personal. We are breaking traditional norms to craft scents that represent true individuality."
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export const StorySection = () => {
  return (
    <section className="w-full max-w-6xl px-6 py-32 mx-auto z-10 relative">
      <FadeIn>
        <h2 className="text-3xl md:text-5xl font-display font-light tracking-tight mb-16 text-center">
          The Story of Weirdoss
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Concept Creation", desc: "Taking full ownership of shaping the experience from an abstract concept to the final product." },
          { title: "Brand Identity", desc: "Overseeing packaging design and marketing direction to ensure a cohesive, premium standard." },
          { title: "The Mission", desc: "Collaborating with top suppliers to maintain the luxury and creativity that define Weirdoss." }
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.2} className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            <h3 className="text-xl font-display font-medium mb-4 text-white">{item.title}</h3>
            <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export const PhilosophySection = () => {
  const philosophies = [
    { icon: <Feather className="w-6 h-6" />, title: 'Individuality', desc: 'Fragrance as a unique signature of your personal identity.' },
    { icon: <Sparkles className="w-6 h-6" />, title: 'Confidence', desc: 'Bold scents designed to empower and leave a lasting impression.' },
    { icon: <Droplet className="w-6 h-6" />, title: 'Creativity', desc: 'Breaking traditional norms to craft unexpected olfactory experiences.' },
    { icon: <Wind className="w-6 h-6" />, title: 'Uniqueness', desc: 'Standing apart in a world of conventional perfumery.' },
  ];

  return (
    <section className="w-full px-6 py-32 bg-gradient-to-b from-transparent to-white/[0.02] relative z-10">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-display font-light tracking-tight mb-16 text-center">
            Brand Philosophy
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophies.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1} className="flex flex-col items-center text-center p-8">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-[#00E5FF]/20 flex items-center justify-center mb-6 text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.1)]">
                {item.icon}
              </div>
              <h3 className="text-lg font-display tracking-wide mb-3">{item.title}</h3>
              <p className="text-sm text-gray-400 font-light">{item.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FragrancesSection = () => {
  const fragrances = [
    { name: 'Sea Wood', top: 'Marine, Bergamot', heart: 'Driftwood, Sage', base: 'Amber, Cedar' },
    { name: 'Applewood', top: 'Crisp Apple, Lemon', heart: 'Cedarwood, Jasmine', base: 'Vetiver, Musk' },
    { name: 'Aqua Berg', top: 'Bergamot, Sea Salt', heart: 'Lotus, Rosemary', base: 'White Musk, Oakmoss' },
    { name: 'Dark Roast', top: 'Coffee Bean, Pink Pepper', heart: 'Vanilla, Rose', base: 'Patchouli, Leather' },
    { name: 'Bloom Air', top: 'White Rose, Peony', heart: 'Jasmine, Lily', base: 'Sandalwood, Vanilla' },
    { name: 'Veloura', top: 'Saffron, Plum', heart: 'Velvet Woods, Iris', base: 'Leather, Amber' },
  ];

  return (
    <section className="w-full max-w-7xl px-6 py-32 mx-auto relative z-10">
      <FadeIn>
        <h2 className="text-3xl md:text-5xl font-display font-light tracking-tight mb-4 text-center">
          The Collection
        </h2>
        <p className="text-center text-[#00E5FF] mb-16 tracking-widest uppercase text-sm font-medium">Olfactory Concepts</p>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {fragrances.map((frag, i) => (
          <FadeIn key={i} delay={i * 0.1} className="group relative p-8 bg-black/40 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md hover:border-[#00E5FF]/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/0 to-[#00E5FF]/0 group-hover:from-[#00E5FF]/5 group-hover:to-transparent transition-all duration-500"></div>
            <h3 className="text-2xl font-display font-light tracking-wide mb-6 text-white group-hover:text-[#00E5FF] transition-colors relative z-10">{frag.name}</h3>
            <div className="space-y-4 relative z-10">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Top Notes</p>
                <p className="text-sm text-gray-300 font-light">{frag.top}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Heart Notes</p>
                <p className="text-sm text-gray-300 font-light">{frag.heart}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Base Notes</p>
                <p className="text-sm text-gray-300 font-light">{frag.base}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export const FutureSection = () => {
  return (
    <section className="w-full px-6 py-32 bg-white/[0.02] border-y border-white/5 relative z-10 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-display font-light tracking-tight mb-8">
            The Future of Weirdoss
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-8">
            We are on a journey to expand our fragrance line, push creative boundaries, and build a recognizable global brand that redefines modern luxury. The future smells extraordinary.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export const ConnectSection = () => {
  return (
    <section id="connect" className="w-full max-w-4xl px-6 py-32 mx-auto text-center relative z-10">
      <FadeIn>
        <h2 className="text-4xl md:text-6xl font-display font-light tracking-tight mb-6">
          Let's Build Something <br/><span className="text-[#00E5FF]">Extraordinary</span>
        </h2>
        <p className="text-lg text-gray-400 font-light mb-12">
          If you’re passionate about brands, creativity, or the future of fragrance, let’s connect.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="mailto:himanshuyadav8646@gmail.com" 
            className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full text-sm font-medium tracking-widest uppercase hover:bg-gray-200 transition-colors w-full sm:w-auto justify-center"
          >
            <Mail className="w-4 h-4" /> Email Me
          </a>
          <a 
            href="https://www.linkedin.com/in/himanshu-yadav-025226281/" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-white/10 transition-colors w-full sm:w-auto justify-center backdrop-blur-sm"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a 
            href="https://weirdoss.com" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-3 px-8 py-4 border border-[#00E5FF]/30 text-[#00E5FF] rounded-full text-sm font-medium tracking-widest uppercase hover:bg-[#00E5FF]/10 transition-colors w-full sm:w-auto justify-center backdrop-blur-sm shadow-[0_0_15px_rgba(0,229,255,0.1)]"
          >
            <Globe className="w-4 h-4" /> Visit Weirdoss
          </a>
        </div>
      </FadeIn>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="w-full px-6 py-12 border-t border-white/10 bg-black relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-display tracking-widest uppercase text-white mb-1">Himanshu Yadav</h3>
          <p className="text-xs text-gray-500 tracking-widest uppercase">Founder of Weirdoss</p>
        </div>
        <div className="flex items-center gap-6 text-sm text-gray-400">
          <a href="mailto:himanshuyadav8646@gmail.com" className="hover:text-white transition-colors">Email</a>
          <a href="https://www.linkedin.com/in/himanshu-yadav-025226281/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://weirdoss.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Weirdoss</a>
        </div>
      </div>
    </footer>
  );
};
