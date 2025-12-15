import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-bhutan-yellow/10 skew-x-12 translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-bhutan-red/5 -skew-x-12 -translate-x-10"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h2 className="text-bhutan-red font-bold uppercase tracking-widest text-sm mb-2">
            Trashi Yangtse, Bhutan
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-bhutan-dark mb-4 leading-tight">
            Hello, I'm <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bhutan-red to-bhutan-orange">
              Jigdral Namgyal
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
            A 15-year-old researcher and culture enthusiast dedicated to preserving traditions and exploring new knowledge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#about" 
              className="px-8 py-3 bg-bhutan-dark text-white rounded-full font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
            >
              My Story
            </a>
            <a 
              href="#experience" 
              className="px-8 py-3 border-2 border-bhutan-dark text-bhutan-dark rounded-full font-semibold hover:bg-bhutan-dark hover:text-white transition-all"
            >
              My Work
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-bhutan-orange rounded-full opacity-20 animate-pulse"></div>
            <img 
              src="https://picsum.photos/seed/jigdral/400/400" 
              alt="Jigdral Namgyal" 
              className="rounded-full w-full h-full object-cover border-4 border-white shadow-2xl relative z-10"
            />
            {/* Decorative Icon */}
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-full shadow-lg z-20">
              <i className="fas fa-dragon text-bhutan-red text-2xl"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;