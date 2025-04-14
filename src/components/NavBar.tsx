import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-intelekt-primary/95 backdrop-blur-md border-b border-white/10 py-2"
          : "bg-transparent py-4 "
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center group">
              <img
                src="/lovable-uploads/3ef42f29-a1d2-4d00-aff5-bfd80740e0b4.png"
                alt="Intelekt AI"
                className="h-8 mr-2"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <button
              onClick={() => scrollToSection("features")}
              className="text-white/80 hover:text-white transition-colors border-b-2 border-transparent hover:border-intelekt-accent/40 py-1"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-white/80 hover:text-white transition-colors border-b-2 border-transparent hover:border-intelekt-accent/40 py-1"
            >
              IVR to AI Agents
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-white/80 hover:text-white transition-colors border-b-2 border-transparent hover:border-intelekt-accent/40 py-1"
            >
              Human VS AI Agents
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* CTA button (hidden on small screens, shown in mobile menu) */}
          <div className="hidden md:block">
            <Button
              className={cn(
                "bg-intelekt-cta hover:bg-intelekt-cta/90 text-intelekt-primary font-medium",
                "rounded-lg transition-all duration-300 shadow-lg",
                "hover:shadow-intelekt-cta/20 hover:shadow-xl transform hover:-translate-y-0.5"
              )}
              onClick={() =>
                window.open(
                  "https://calendly.com/getintelekt-sales/30min",
                  "_blank"
                )
              }
            >
              Book a Demo
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden absolute left-0 right-0 px-4 pt-2 pb-4 bg-intelekt-primary/98 backdrop-blur-lg border-b border-white/10 shadow-lg transition-all duration-300 ease-in-out bg-[#000315]",
            mobileMenuOpen
              ? "top-full opacity-100 h-screen"
              : "-top-96 opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-4 justify-between h-[90%]">
            <div className="flex flex-col space-y-8">
              <button
                onClick={() => scrollToSection("features")}
                className="text-white/90 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-white/80 hover:text-white transition-colors border-b-2 border-transparent hover:border-intelekt-accent/40 py-1"
              >
                IVR to AI Agents
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-white/80 hover:text-white transition-colors border-b-2 border-transparent hover:border-intelekt-accent/40 py-1"
              >
                Human VS AI Agents
              </button>
            </div>
            <div className="pt-2">
              <Button
                className={cn(
                  "w-full bg-intelekt-cta hover:bg-intelekt-cta/90 text-intelekt-primary font-medium",
                  "rounded-lg transition-all duration-200 shadow-lg py-6",
                  "hover:shadow-intelekt-cta/20 hover:shadow-xl"
                )}
                onClick={() =>
                  window.open(
                    "https://calendly.com/getintelekt-sales/30min",
                    "_blank"
                  )
                }
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
