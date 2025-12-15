import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-bhutan-dark mb-4">About Me</h2>
          <div className="w-20 h-1 bg-bhutan-red mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/seed/bhutan/600/400" 
              alt="Scenery of Bhutan" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              From Trashi Yangtse to the World
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Tashi Delek! I am Jigdral Namgyal, a dedicated 15-year-old from the beautiful eastern Bhutanese region of Trashi Yangtse. Growing up amidst the serene mountains and rich heritage of my homeland has deeply influenced who I am today.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I believe in the perfect balance between modern education and traditional values. While I am passionate about academic research and professional growth, I hold a special place in my heart for the customs that define our unique Bhutanese identity.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-bhutan-yellow">
                <span className="block text-3xl font-bold text-bhutan-dark mb-1">15</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Years Old</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-bhutan-red">
                <span className="block text-3xl font-bold text-bhutan-dark mb-1">2025</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Research Start</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;