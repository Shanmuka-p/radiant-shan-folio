
import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-corporate-pearl to-white pt-16">
      <div className="max-w-6xl mx-auto px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-corporate-navy mb-4">
              Padala Shanmuka Reddy
            </h1>
            <h2 className="text-2xl lg:text-3xl font-medium text-corporate-slate mb-6">
              Computer Science Engineering Student (2023 – 2027)
            </h2>
            <p className="text-lg text-corporate-charcoal italic mb-8 max-w-xl leading-relaxed">
              Aspiring Full-Stack Developer & Problem Solver
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-corporate-slate">
                <Mail size={16} className="mr-3 text-corporate-gold" />
                <span className="text-sm">shanmukareddypadala@gmail.com</span>
              </div>
              <div className="flex items-center text-corporate-slate">
                <Phone size={16} className="mr-3 text-corporate-gold" />
                <span className="text-sm">+91 62813 15915</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              asChild
              className="bg-corporate-navy hover:bg-corporate-darkNavy text-white px-6 py-3 rounded-xl text-base font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <a href="/Resume3.pdf" target="_blank" rel="noopener noreferrer">
                Download Résumé
              </a>
            </Button>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-corporate-gold to-corporate-lightNavy rounded-full blur-lg opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                alt="Profile picture of Padala Shanmuka Reddy"
                className="relative w-64 h-64 rounded-full object-cover border-4 border-corporate-gold shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
