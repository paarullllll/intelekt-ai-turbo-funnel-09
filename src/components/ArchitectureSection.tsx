
import React from 'react';
import { motion } from 'framer-motion';

const ArchitectureSection = () => {
  return (
    <section id="architecture" className="py-20 bg-intelekt-primary relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMjIxQUEiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgOGgydjJoLTJ2LTJ6bTIwLTIwaDJ2MmgtMnYtMnptLTIgNGgydjJoLTJ2LTJ6bTQtOGgtMnYyaDJ2LTJ6bTIgMGgydjJoLTJ2LTJ6bS00IDhoMnYyaC0ydi0yem0yLTRoMnYyaC0ydi0yem0yIDhoMnYyaC0ydi0yem0tNCAxMmgydjJoLTJ2LTJ6bTAgOGgydjJoLTJ2LTJ6bS00LTEyaDJ2MmgtMnYtMnptMC04aDJ2MmgtMnYtMnptLTggMTZoMnYyaC0ydi0yem0tOCAwaDJ2MmgtMnYtMnptOC04aDJ2MmgtMnYtMnptLTgtOGgydjJoLTJ2LTJ6bS04IDhoMnYyaC0ydi0yem0wIDhoMnYyaC0ydi0yen0iLz48L2c+PC9nPjwvc3ZnPg==')]
          opacity-30 z-0"></div>
          
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 animate-fade-in"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-intelekt-accent/10 border border-intelekt-accent/20 text-sm text-white/80 mb-4">
            Platform Architecture
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Visual Platform Architecture
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Seamlessly integrate with your existing systems and workflows.
          </p>
        </motion.div>
        
        {/* Flow Diagram */}
        <div className="max-w-4xl mx-auto mb-16 overflow-visible">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-intelekt-accent/30 via-intelekt-cta/50 to-green-400/50 transform -translate-y-1/2 z-0"></div>
            
            {/* Flow Steps */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
              {/* Step 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="bg-intelekt-primary border-2 border-intelekt-accent h-16 w-16 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-intelekt-accent/20">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center w-full h-full">
                  <h3 className="text-lg font-semibold text-white mb-2">Lead Source</h3>
                  <p className="text-sm text-white/70">Multiple acquisition channels integrated</p>
                </div>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="bg-intelekt-primary border-2 border-intelekt-cta h-16 w-16 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-intelekt-cta/20">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center w-full h-full">
                  <h3 className="text-lg font-semibold text-white mb-2">AI Qualification</h3>
                  <p className="text-sm text-white/70">Automated assessment & scoring</p>
                </div>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="bg-intelekt-primary border-2 border-blue-400 h-16 w-16 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-blue-400/20">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center w-full h-full">
                  <h3 className="text-lg font-semibold text-white mb-2">Onboarding</h3>
                  <p className="text-sm text-white/70">Guided KYC and document verification</p>
                </div>
              </motion.div>
              
              {/* Step 4 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="bg-intelekt-primary border-2 border-green-400 h-16 w-16 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-green-400/20">
                  <span className="text-white font-bold">4</span>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center w-full h-full">
                  <h3 className="text-lg font-semibold text-white mb-2">Disbursal</h3>
                  <p className="text-sm text-white/70">Automated approval and fund transfer</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Integrations */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-12"
        >
          <h3 className="text-xl font-semibold text-white mb-6 text-center">Key Integrations</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['CRM Systems', 'Loan Origination Systems', 'Loan Management Systems', 
              'Payment Gateways', 'eKYC Providers', 'Credit Bureaus'].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
              >
                <span className="text-white">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Callout */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto rounded-xl bg-gradient-to-r from-intelekt-accent/20 to-intelekt-cta/20 p-8"
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Go live in 3 days. No dev needed.</h3>
          <p className="text-white/80">Our platform is designed for rapid deployment with minimal integration effort.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
