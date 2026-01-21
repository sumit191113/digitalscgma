import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Optimized Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" 
          alt="Samrat Chandra Gupta Maurya Academy Campus - Best School in Barabanki" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/40 to-white/10 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-yellow-500/90 text-blue-900 text-xs font-bold tracking-widest shadow-lg animate-bounce">
            <Sparkles size={14} /> ADMISSIONS OPEN 2024-25
          </span>
        </div>
        
        {/* Semantic H1 for SEO */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-xl">
          Welcome to <br/>
          <span className="text-yellow-400">Samrat Chandra Gupta Maurya Academy</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
          Leading the way in <strong>Digital Schooling</strong> and academic excellence in Barabanki. 
          Empowering the next generation with modern tools and timeless values.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="#admissions" className="bg-yellow-500 text-blue-900 hover:bg-white hover:text-blue-900 px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2 group">
            Apply for Admission <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#about" className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 px-10 py-4 rounded-full font-bold transition-all text-white flex items-center justify-center shadow-lg">
            Explore Campus
          </a>
        </div>
      </div>

      {/* Modern Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-[60px] md:h-[120px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-gray-50"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;