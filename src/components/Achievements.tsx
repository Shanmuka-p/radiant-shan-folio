
import React from 'react';
import { Trophy, Code, Calendar, Users } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Code,
      title: 'CodeChef Streak',
      subtitle: '100+ days, 1000+ problems solved'
    },
    {
      icon: Calendar,
      title: 'Campus Events',
      subtitle: 'Managed multiple cultural & technical events'
    },
    {
      icon: Trophy,
      title: 'Quizzes Participant',
      subtitle: 'Participated in numerous tech quizzes'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      subtitle: 'Cross-functional team projects & coordination'
    }
  ];

  return (
    <section id="achievements" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-semibold text-corporate-black text-center mb-16">
          Achievements & Extracurriculars
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-corporate-cream to-white p-8 rounded-3xl text-center hover:from-corporate-black hover:to-corporate-darkBlack hover:-translate-y-1 transition-all duration-300 cursor-default animate-fade-in shadow-lg border border-gray-200 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <achievement.icon 
                size={48} 
                className="mx-auto mb-4 text-corporate-orange group-hover:text-corporate-orange transition-colors"
              />
              <h3 className="text-lg font-semibold text-corporate-black group-hover:text-white mb-2 transition-colors">
                {achievement.title}
              </h3>
              <p className="text-sm text-corporate-gray group-hover:text-corporate-lightGray leading-relaxed transition-colors">
                {achievement.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
