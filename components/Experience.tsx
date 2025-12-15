import React from 'react';
import { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Researcher",
    company: "EduLink",
    startDate: "December 5, 2025",
    endDate: "Present",
    description: "Conducting in-depth research to support educational initiatives. Engaging in data analysis and content development to foster learning opportunities."
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-bhutan-dark mb-4">My Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Starting young, aiming high. Here is my professional path so far.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 pb-12 border-l-2 border-bhutan-orange last:border-0 last:pb-0">
              {/* Timeline Dot */}
              <div className="absolute top-0 left-[-9px] w-4 h-4 bg-bhutan-red rounded-full border-2 border-white shadow-md"></div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                  <span className="text-sm text-bhutan-red font-medium bg-red-50 px-3 py-1 rounded-full">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <h4 className="text-lg text-bhutan-orange mb-4">{exp.company}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;