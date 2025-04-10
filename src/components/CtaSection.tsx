
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from 'framer-motion';

const CtaSection = () => {
  return (
    <section className="py-24 bg-intelekt-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-intelekt-primary/20 to-intelekt-primary/40"></div>
      
      {/* Accent circles */}
      <div className="absolute -left-32 bottom-0 w-64 h-64 rounded-full bg-intelekt-accent/20 blur-3xl opacity-30"></div>
      <div className="absolute -right-32 bottom-1/3 w-80 h-80 rounded-full bg-intelekt-cta/20 blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="bg-gradient-to-br from-intelekt-primary/90 to-intelekt-primary/70 backdrop-blur-md border border-white/10 rounded-2xl p-8 sm:p-12 shadow-2xl"
          >
            <div className="text-center mb-10">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 rounded-full bg-intelekt-cta/10 border border-intelekt-cta/30 text-intelekt-cta font-medium text-sm mb-6"
              >
                Get Started Today
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
              >
                Turn Missed Leads into Opportunities
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
              >
                Let's bring agentic AI into your funnel — and start disbursing faster.
              </motion.p>
              
              <div className="flex justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Button 
                    size="custom"
                    className={cn(
                      "bg-intelekt-cta hover:bg-intelekt-cta/90 text-intelekt-primary",
                      "text-lg px-8 font-medium rounded-xl",
                      "transition-all duration-300 shadow-lg group",
                      "hover:shadow-intelekt-cta/20 hover:shadow-xl"
                    )}
                  >
                    Talk to Our Team
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 pt-8 border-t border-white/10"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="h-12 w-12 rounded-full bg-intelekt-accent/20 flex items-center justify-center mr-4"
                  >
                    <Calendar className="h-6 w-6 text-intelekt-cta" />
                  </motion.div>
                  <div>
                    <p className="text-white font-medium">30-Minute Demo</p>
                    <p className="text-white/60 text-sm">See Intelekt AI in action</p>
                  </div>
                </div>
                
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button 
                    size="custom"
                    className={cn(
                      "bg-white/10 hover:bg-white/15 text-white border border-white/20",
                      "rounded-lg transition-all duration-200 px-6",
                      "hover:border-white/30 group"
                    )}
                  >
                    Schedule Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
