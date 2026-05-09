import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-corporate-black py-12">
      <div className="max-w-6xl mx-auto px-8">
        {/* Footer Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <button
            onClick={scrollToTop}
            className="text-corporate-lightGray hover:text-corporate-orange hover:underline transition-colors font-medium"
          >
            Back to Top
          </button>
          <a
            href="/assets/React_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-corporate-lightGray hover:text-corporate-orange hover:underline transition-colors font-medium"
          >
            Resume PDF
          </a>
          <a
            href="/privacy-policy.html"
            className="text-corporate-lightGray hover:text-corporate-orange hover:underline transition-colors font-medium"
          >
            Privacy Policy
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mb-6">
          <a
            href="https://github.com/Shanmuka-p"
            target="_blank"
            rel="noopener noreferrer"
            className="text-corporate-gray hover:text-corporate-orange hover:scale-110 transition-all duration-200"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/padala-shanmuka-reddy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-corporate-gray hover:text-corporate-orange hover:scale-110 transition-all duration-200"
          >
            <Linkedin size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-corporate-gray">
          © 2025 Padala Shanmuka Reddy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
