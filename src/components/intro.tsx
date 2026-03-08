import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <div className="relative flex items-center justify-center w-24 h-24 mb-8">
          {/* Luxury glowing rings */}
          <div className="absolute inset-0 border border-white/20 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
          <div className="absolute inset-2 border border-[#00E5FF]/40 rounded-full animate-pulse"></div>
          
          {/* Monogram */}
          <span className="text-4xl font-display font-light tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500">
            HY
          </span>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-2xl font-display font-light tracking-[0.2em] uppercase text-white mb-2">
            Himanshu Yadav
          </h1>
          <p className="text-sm font-sans tracking-[0.3em] text-[#00E5FF] uppercase opacity-80">
            Founder of Weirdoss
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
