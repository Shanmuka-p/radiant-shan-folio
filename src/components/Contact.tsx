
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { toast } = useToast();

  const validateField = (name: string, value: string) => {
    const newErrors = { ...errors };

    switch (name) {
      case 'name':
        if (value.length < 2) {
          newErrors.name = 'Name must be at least 2 characters';
        } else {
          delete newErrors.name;
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          newErrors.email = 'Please enter a valid email address.';
        } else {
          delete newErrors.email;
        }
        break;
      case 'message':
        if (value.length < 20) {
          newErrors.message = 'Message must be at least 20 characters.';
        } else {
          delete newErrors.message;
        }
        break;
    }

    setErrors(newErrors);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    Object.entries(formData).forEach(([name, value]) => {
      validateField(name, value);
    });

    // Check if there are any errors
    if (Object.keys(errors).length > 0 || !formData.name || !formData.email || !formData.message) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Success!",
        description: "Thank you! Your message has been sent.",
        variant: "default",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Oops! Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = !Object.keys(errors).length && formData.name && formData.email && formData.message;

  return (
    <section id="contact" className="bg-corporate-lightGray py-24">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-4xl font-semibold text-corporate-black text-center mb-16">
          Get in Touch
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-slide-in-left">
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail size={20} className="mr-4 text-corporate-orange" />
                <span className="text-corporate-darkGray">shanmukareddypadala@gmail.com</span>
              </div>
              
              <div className="flex items-center">
                <Phone size={20} className="mr-4 text-corporate-orange" />
                <span className="text-corporate-darkGray">+91 62813 15915</span>
              </div>
              
              <div className="flex items-center">
                <Github size={20} className="mr-4 text-corporate-orange" />
                <a 
                  href="https://github.com/Shanmuka-p" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-corporate-orange hover:underline"
                >
                  github.com/Shanmuka-p
                </a>
              </div>
              
              <div className="flex items-center">
                <Linkedin size={20} className="mr-4 text-corporate-orange" />
                <a 
                  href="https://www.linkedin.com/in/padala-shanmuka-reddy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-corporate-orange hover:underline"
                >
                  linkedin.com/in/padala-shanmuka-reddy
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-corporate-darkGray mb-2 block">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className="w-full border-gray-300 rounded-lg p-3 focus:outline-none focus:border-corporate-orange focus:ring-2 focus:ring-corporate-orange/20"
                    required
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1" aria-live="polite">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-corporate-darkGray mb-2 block">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className="w-full border-gray-300 rounded-lg p-3 focus:outline-none focus:border-corporate-orange focus:ring-2 focus:ring-corporate-orange/20"
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1" aria-live="polite">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-corporate-darkGray mb-2 block">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Your message (min 20 characters)"
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className="w-full border-gray-300 rounded-lg p-3 focus:outline-none focus:border-corporate-orange focus:ring-2 focus:ring-corporate-orange/20 resize-none"
                    required
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1" aria-live="polite">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full bg-corporate-orange hover:bg-corporate-darkOrange text-white py-3 rounded-xl text-base font-medium transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
