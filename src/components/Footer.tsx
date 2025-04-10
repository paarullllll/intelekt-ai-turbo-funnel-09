
import React from 'react';
import { cn } from "@/lib/utils";
import { Linkedin, Twitter, Youtube, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-intelekt-primary border-t border-white/10 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <img src="/lovable-uploads/57d214e7-f5b8-495c-b62d-88db0cd8ef2a.png" alt="Intelekt AI" className="h-7 mr-2" />
            </div>
            <p className="text-white/70 mb-4 max-w-xs text-center md:text-left">
              Agentic AI platform built for lenders to automate loan disbursals.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Globe className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="pt-6 border-t border-white/10 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2025 Intelekt AI. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a href="mailto:sales@getintelekt.ai" className="text-intelekt-cta hover:text-intelekt-cta/80 text-sm font-medium transition-colors">
                sales@getintelekt.ai
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
