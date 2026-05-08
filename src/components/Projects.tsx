
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Multi-Tenant SaaS Backend Platform',
      description: 'Engineered a scalable multi-tenant architecture ensuring strict data isolation. Implemented RBAC and optimized database schemas for high concurrent request volumes.',
      tech: ['Node.js', 'PostgreSQL', 'REST APIs', 'JWT'],
      link: 'https://github.com/Shanmuka-p/Multi_Tenant_SaaS_23P31A05H8.git',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=180&fit=crop'
    },
    {
      title: 'Payment Gateway Integration Service',
      description: 'Developed a secure payment processing microservice featuring webhook integrations and an asynchronous event-driven notification service using GCP Pub/Sub.',
      tech: ['Node.js', 'GCP Pub/Sub', 'Webhooks'],
      link: 'https://github.com/Shanmuka-p/PaymentGateway-23P31A05H8.git',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=180&fit=crop'
    },

  ];

  return (
    <section id="projects" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-semibold text-corporate-black text-center mb-16">Projects</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in hover:border-corporate-orange"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                className="w-full h-44 object-cover rounded-2xl mb-4"
              />
              
              <h3 className="text-lg font-semibold text-corporate-black mb-2">
                {project.title}
              </h3>
              
              <p className="text-sm text-corporate-gray mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-corporate-cream text-corporate-darkGray px-2 py-1 rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full border-corporate-black text-corporate-black hover:bg-corporate-orange hover:text-white hover:border-corporate-orange"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Github size={16} className="mr-2" />
                  View Code
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
