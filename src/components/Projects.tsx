
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Spotify Replica',
      description: 'A pixel-perfect clone of Spotify\'s UI using pure HTML & CSS.',
      tech: ['HTML', 'CSS'],
      link: 'https://github.com/yourusername/spotify-replica',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=180&fit=crop'
    },
    {
      title: 'Responsive Calculator',
      description: 'A fully responsive calculator app built with HTML, CSS, and JavaScript.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/yourusername/calculator-app',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=180&fit=crop'
    },
    {
      title: 'To-Do Application',
      description: 'CRUD-enabled to-do list using local storage with interactive UI.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      link: 'https://github.com/yourusername/todo-app',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=180&fit=crop'
    },
    {
      title: 'Rental Management System',
      description: 'Full-stack property listing & booking system with ReactJS, Express, and MongoDB.',
      tech: ['ReactJS', 'Bootstrap', 'ExpressJS', 'MongoDB', 'MySQL'],
      link: 'https://github.com/yourusername/rental-management-system',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=180&fit=crop'
    },
  ];

  return (
    <section id="projects" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-semibold text-corporate-navy text-center mb-16">Projects</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-lg border border-corporate-silver hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in hover:border-corporate-gold"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                className="w-full h-44 object-cover rounded-2xl mb-4"
              />
              
              <h3 className="text-lg font-semibold text-corporate-navy mb-2">
                {project.title}
              </h3>
              
              <p className="text-sm text-corporate-slate mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-corporate-platinum text-corporate-charcoal px-2 py-1 rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full border-corporate-navy text-corporate-navy hover:bg-corporate-navy hover:text-white"
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
