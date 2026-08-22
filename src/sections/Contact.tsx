import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedText } from '@/components/AnimatedText';
import { GlassCard } from '@/components/GlassCard';
import { MagneticButton } from '@/components/MagneticButton';
import { Mail, Linkedin, Github, Instagram, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
          
          <div>
            <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Get in touch</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <AnimatedText text="Let's build something beautiful." />
            </h2>
            <p className="text-foreground/70 mb-10 text-lg">
              Whether you have a project in mind, need a designer, or just want to say HI - I'd love to hear from you.
            </p>

            <div className="space-y-6">
              <a href="mailto:rubinamollah012@gmail.com" className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <span className="text-lg font-medium">rubinamollah012@gmail.com</span>
              </a>
              
              <div className="flex gap-4 pt-4">
                <a href="https://linkedin.com/in/rubina-m/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-foreground/80 hover:text-primary hover:-translate-y-1 transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-foreground/80 hover:text-primary hover:-translate-y-1 transition-all">
                  <Github size={20} />
                </a>
                <a href="https://instagram.com/art_with_rubina" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-foreground/80 hover:text-primary hover:-translate-y-1 transition-all">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          <GlassCard className="p-8 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-background/50 backdrop-blur-sm z-20"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-20 h-20 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-6"
                  >
                    <CheckCircle2 size={40} />
                  </motion.div>
                  <h3 className="text-2xl font-display font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="relative">
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      className="peer w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-primary transition-colors placeholder-transparent"
                      placeholder="Name"
                    />
                    <label htmlFor="name" className="absolute left-0 top-3 text-muted-foreground transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-4 peer-valid:text-xs">
                      Your Name
                    </label>
                  </div>
                  
                  <div className="relative">
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      className="peer w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-primary transition-colors placeholder-transparent"
                      placeholder="Email"
                    />
                    <label htmlFor="email" className="absolute left-0 top-3 text-muted-foreground transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-4 peer-valid:text-xs">
                      Your Email
                    </label>
                  </div>
                  
                  <div className="relative pt-4">
                    <textarea 
                      id="message" 
                      required 
                      rows={4}
                      className="peer w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-primary transition-colors placeholder-transparent resize-none"
                      placeholder="Message"
                    />
                    <label htmlFor="message" className="absolute left-0 top-7 text-muted-foreground transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary peer-valid:top-0 peer-valid:text-xs">
                      Your Message
                    </label>
                  </div>

                  <MagneticButton 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-foreground text-background font-bold rounded-xl mt-4 hover:bg-primary transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </MagneticButton>
                </motion.form>
              )}
            </AnimatePresence>
          </GlassCard>

        </div>
      </div>
    </section>
  );
}
