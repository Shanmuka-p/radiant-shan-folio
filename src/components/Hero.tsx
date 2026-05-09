
import { Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-corporate-cream to-white pt-16">
      <div className="max-w-6xl mx-auto px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-corporate-black mb-4">
              Padala Shanmuka Reddy
            </h1>
            <h2 className="text-2xl lg:text-3xl font-medium text-corporate-darkGray mb-6">
              Full Stack Developer
            </h2>
            <p className="text-lg text-corporate-gray italic mb-8 max-w-xl leading-relaxed">
              Result-oriented Computer Science undergraduate with strong expertise in backend development, distributed systems, and scalable SaaS architectures.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-corporate-darkGray">
                <Mail size={16} className="mr-3 text-corporate-orange" />
                <span className="text-sm">shanmukareddypadala@gmail.com</span>
              </div>
              <div className="flex items-center text-corporate-darkGray">
                <Phone size={16} className="mr-3 text-corporate-orange" />
                <span className="text-sm">+91 62813 15915</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              asChild
              className="bg-corporate-orange hover:bg-corporate-darkOrange text-white px-6 py-3 rounded-xl text-base font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <a href="/assets/React_Resume.pdf" target="_blank" rel="noopener noreferrer">
                Download Résumé
              </a>
            </Button>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-corporate-orange to-corporate-amber rounded-full blur-lg opacity-20"></div>
              <img
                src="/profile1.jpg"
                alt="Profile picture of Padala Shanmuka Reddy"
                className="relative w-64 h-64 rounded-full object-cover border-4 border-corporate-orange shadow-xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
