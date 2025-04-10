
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Play, ChevronDown, Phone, User } from "lucide-react";
import { motion } from 'framer-motion';
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";

type FormValues = {
  name: string;
  phone: string;
};

const HeroSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Demo Requested",
        description: `Thanks ${data.name}, we'll call you at ${data.phone} to schedule your demo.`,
      });
      form.reset();
    }, 1500);
  };

  const scrollToNextSection = () => {
    const caseStudySection = document.getElementById('case-study');
    if (caseStudySection) {
      caseStudySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="relative pt-20 md:pt-28 lg:pt-32 pb-20 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-intelekt-primary via-intelekt-primary to-intelekt-background z-0"></div>
      
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMjIxQUEiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgOGgydjJoLTJ2LTJ6bTIwLTIwaDJ2MmgtMnYtMnptLTIgNGgydjJoLTJ2LTJ6bTQtOGgtMnYyaDJ2LTJ6bTIgMGgydjJoLTJ2LTJ6bS00IDhoMnYyaC0ydi0yem0yLTRoMnYyaC0ydi0yem0yIDhoMnYyaC0ydi0yem0tNCAxMmgydjJoLTJ2LTJ6bTAgOGgydjJoLTJ2LTJ6bS00LTEyaDJ2MmgtMnYtMnptMC04aDJ2MmgtMnYtMnptLTggMTZoMnYyaC0ydi0yem0tOCAwaDJ2MmgtMnYtMnptOC04aDJ2MmgtMnYtMnptLTgtOGgydjJoLTJ2LTJ6bS04IDhoMnYyaC0ydi0yem0wIDhoMnYyaC0ydi0yen0iLz48L2c+PC9nPjwvc3ZnPg==')]
          opacity-70 z-0"></div>
      
      {/* Accent circles */}
      <div className="absolute -left-32 bottom-0 w-64 h-64 rounded-full bg-intelekt-accent/10 blur-3xl opacity-30"></div>
      <div className="absolute -right-32 top-1/3 w-80 h-80 rounded-full bg-intelekt-cta/10 blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12">
          {/* Left content */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="w-full lg:w-3/5 space-y-6 md:space-y-8"
          >
            <motion.div
              variants={fadeInUp} 
              className="inline-block px-4 py-2 rounded-full bg-intelekt-accent/10 border border-intelekt-accent/20 text-sm font-medium text-white/90 mb-2 transform transition-transform hover:scale-105"
            >
              Deployed in 2 days. Results in 7.
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-[44px] font-bold leading-tight text-gradient tracking-tight"
            >
              How Rupeeq increased their MQL to SQL conversions by 80% using Intelekt AI Voice Agents
            </motion.h1>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 md:gap-5 pt-4 md:pt-6"
            >
              <Button 
                size="custom"
                className={cn(
                  "bg-intelekt-cta hover:bg-intelekt-cta/90 text-intelekt-primary",
                  "text-lg px-6 md:px-8 font-medium rounded-xl",
                  "transition-all duration-300 shadow-lg",
                  "hover:shadow-intelekt-cta/20 hover:shadow-xl transform hover:-translate-y-1"
                )}
              >
                Book a Demo
              </Button>
              
              <Button 
                variant="outline" 
                size="custom"
                className={cn(
                  "border-white/20 hover:bg-white/5 text-white",
                  "text-lg px-6 md:px-8 rounded-xl",
                  "inline-flex items-center gap-3",
                  "transition-all duration-300 hover:border-white/30 transform hover:-translate-y-1"
                )}
              >
                <Play className="h-5 w-5" />
                Watch How It Works
              </Button>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="pt-6 md:pt-10"
            >
              <p className="text-sm text-white/70 mb-4">Trusted by digital-first lenders across India</p>
              <div className="flex flex-wrap gap-6 md:gap-8 items-center">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="h-9 bg-gradient-to-r from-white/20 to-white/10 w-28 rounded-md"
                ></motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="h-9 bg-gradient-to-r from-white/20 to-white/10 w-32 rounded-md"
                ></motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="h-9 bg-gradient-to-r from-white/20 to-white/10 w-24 rounded-md"
                ></motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right content - Interactive card only */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full lg:w-2/5 flex justify-center lg:justify-end relative"
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                boxShadow: [
                  "0 10px 30px rgba(18, 33, 170, 0.2)",
                  "0 20px 40px rgba(18, 33, 170, 0.4)",
                  "0 10px 30px rgba(18, 33, 170, 0.2)"
                ]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 6, 
                ease: "easeInOut" 
              }}
              className="bg-gradient-to-br from-intelekt-primary/80 to-intelekt-primary/40 
                      backdrop-blur-md border border-white/10 rounded-xl p-6 
                      hover:shadow-intelekt-cta/20 transform hover:-translate-y-1 transition-all duration-300
                      w-full max-w-sm"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white mb-2">See our AI voice agent in action</h3>
                <div className="w-full h-0.5 bg-gradient-to-r from-intelekt-accent/50 to-intelekt-cta/50"></div>
              </div>
              
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <User className="h-4 w-4 text-intelekt-cta mr-2" />
                    <Label htmlFor="name" className="text-white/90 text-sm">Your Name</Label>
                  </div>
                  <Input
                    id="name"
                    {...form.register("name", { required: true })}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-intelekt-cta/50 focus:ring-intelekt-cta/30"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-intelekt-cta mr-2" />
                    <Label htmlFor="phone" className="text-white/90 text-sm">Phone Number</Label>
                  </div>
                  <Input
                    id="phone"
                    {...form.register("phone", { required: true })}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-intelekt-cta/50 focus:ring-intelekt-cta/30"
                    placeholder="+91 98765 43210"
                    type="tel"
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full bg-intelekt-cta hover:bg-intelekt-cta/90 text-intelekt-primary",
                    "text-sm font-medium h-9 rounded-lg",
                    "transition-all duration-300",
                    "flex items-center justify-center",
                    isSubmitting && "opacity-70"
                  )}
                >
                  {isSubmitting ? "Submitting..." : "Request Demo Call"}
                </Button>
              </form>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer" 
          onClick={scrollToNextSection}
        >
          <span className="text-white/60 text-sm mb-2">Scroll to learn more</span>
          <ChevronDown className="h-6 w-6 text-white/60" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
