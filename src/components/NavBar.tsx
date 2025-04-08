
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-intelekt-primary/90 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-xl font-bold text-white tracking-tight">
                intelekt<span className="text-intelekt-accent">AI</span>
              </span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#case-study" className="text-gray-300 hover:text-white transition-colors">
              Case Study
            </a>
            <a href="#architecture" className="text-gray-300 hover:text-white transition-colors">
              Architecture
            </a>
          </div>
          
          <div>
            <Button 
              className={cn(
                "bg-intelekt-cta hover:bg-intelekt-cta/90 text-intelekt-primary font-medium",
                "rounded-lg transition-all duration-200 shadow-lg",
                "hover:shadow-intelekt-cta/20 hover:shadow-xl"
              )}
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
