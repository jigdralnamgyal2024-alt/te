import React from 'react';
import { HobbyItem } from '../types';

const hobbies: HobbyItem[] = [
  {
    id: 1,
    title: "Traditional Games",
    description: "Playing Bhutanese games like Khuru (darts) and Digor fosters community and keeps our history alive.",
    icon: "fa-bullseye"
  },
  {
    id: 2,
    title: "Dancing",
    description: "Expressing joy and storytelling through traditional Cham and folk dances.",
    icon: "fa-music"
  },
  {
    id: 3,
    title: "Singing",
    description: "Preserving the oral traditions of our ancestors through song.",
    icon: "fa-microphone"
  },
  {
    id: 4,
    title: "Music",
    description: "Relaxing and finding inspiration by listening to a diverse range of music.",
    icon: "fa-headphones"
  }
];

const Hobbies: React.FC = () => {
  return (
    <section id="hobbies" className="py-20 bg-bhutan-dark text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Passions & Hobbies</h2>
                <div className="w-20 h-1 bg-bhutan-yellow"></div>
            </div>
            <p className="text-gray-300 mt-4 md:mt-0 max-w-md text-right">
                "Preserving our culture is not just a duty, but a joy."
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby) => (
            <div key={hobby.id} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-all group">
              <div className="w-12 h-12 bg-bhutan-orange rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i className={`fas ${hobby.icon} text-white text-xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{hobby.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {hobby.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;