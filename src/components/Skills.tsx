
import React from 'react';
import { Code, Database, Globe, Palette } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Java', icon: Code },
    { name: 'Python', icon: Code },
    { name: 'C', icon: Code },
    { name: 'HTML & CSS', icon: Globe },
    { name: 'JavaScript', icon: Code },
    { name: 'ReactJS', icon: Code },
    { name: 'Bootstrap', icon: Palette },
    { name: 'MySQL', icon: Database },
    { name: 'MongoDB', icon: Database },
    { name: 'ExpressJS', icon: Code },
  ];

  const softSkills = [
    'Problem Solving (AI Tools)',
    'Communication',
    'Creativity',
    'Project Management',
  ];

  return (
    <section id="skills" className="bg-gradient-to-br from-corporate-pearl to-corporate-platinum py-24">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-4xl font-semibold text-corporate-navy text-center mb-16">Skills</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="animate-slide-in-left">
            <h3 className="text-xl font-medium text-corporate-navy mb-6">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="inline-flex items-center bg-white text-corporate-charcoal px-3 py-2 rounded-lg text-sm font-medium hover:bg-corporate-gold hover:text-white hover:scale-105 transition-all duration-200 cursor-default shadow-sm border border-corporate-silver"
                >
                  <skill.icon size={16} className="mr-2" />
                  {skill.name}
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="animate-slide-in-right">
            <h3 className="text-xl font-medium text-corporate-navy mb-6">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-corporate-navy text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-corporate-gold transition-colors duration-200"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
