
import React from 'react';

const Education = () => {
  const educationData = [
    {
      year: '2023 – 2027',
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Aditya College of Engineering & Technology',
      details: 'Currently pursuing; GPA: –'
    },
    {
      year: '2021 – 2023',
      degree: 'Intermediate (MPC)',
      institution: 'Gamyam Junior College, Kakinada',
      details: '95%'
    },
    {
      year: '2020',
      degree: 'SSC',
      institution: 'Gamyam',
      details: '98%'
    }
  ];

  const certifications = [
    'NPTEL Java Certification',
    'GeeksforGeeks CSS Certificate',
    'GeeksforGeeks SQL Certificate'
  ];

  return (
    <section id="education" className="bg-gray-50 py-24">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-4xl font-semibold text-gray-900 text-center mb-16">
          Education & Certifications
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div className="animate-slide-in-left">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              
              {educationData.map((item, index) => (
                <div key={index} className="relative flex items-start mb-8 last:mb-0">
                  {/* Circle Marker */}
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center mr-6">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="flex-grow">
                    <span className="text-blue-700 font-medium text-sm">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 mt-1">
                      {item.degree}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      {item.institution}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="animate-slide-in-right">
            <h3 className="text-xl font-medium text-gray-900 mb-6">Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-200 text-gray-700 px-4 py-3 rounded-xl text-sm font-medium hover:bg-gray-300 hover:scale-105 transition-all duration-200 cursor-default"
                >
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
