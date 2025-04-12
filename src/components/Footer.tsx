import React from "react";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="bg-intelekt-primary border-t border-white/10 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              {/* <span className="text-xl font-bold text-white tracking-tight">
                intelekt<span className="text-intelekt-accent">AI</span>
              </span> */}

              <img
                src="/lovable-uploads/3ef42f29-a1d2-4d00-aff5-bfd80740e0b4.png"
                alt="Intelekt AI"
                className="h-6 mr-2"
              />
            </div>
            <p className="text-white/70 mb-4 max-w-xs text-xs">
              Agentic AI platform built for lenders to automate lending
              processes.
            </p>
            <div className="flex space-x-4">
              {/* <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a> */}

              {[
                {
                  link: "https://www.linkedin.com/company/get-intelekt-ai/",
                  img: "/assets/linkedin.webp",
                },
                {
                  link: "https://x.com/intelektai?s=21",
                  img: "/assets/twitter.webp",
                },
                {
                  link: "https://youtube.com/@intelektai?si=JngfXcWxtA-RyFhj",
                  img: "/assets/youtube.webp",
                },
              ].map((link) => (
                <a
                  key={link.img}
                  href={link.link}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <img src={link.img} alt="Image 5" className="h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            {/* <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#case-study" className="text-white/70 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Documentation</a></li>
            </ul> */}
          </div>

          <div>
            {/* <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul> */}
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.getintelekt.ai/privacypolicy"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.getintelekt.ai/terms-conditions"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2025 Intelekt AI. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a
                href="mailto:sales@getintelekt.ai"
                className="text-intelekt-cta hover:text-intelekt-cta/80 text-sm font-medium transition-colors"
              >
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
