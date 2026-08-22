import React from 'react';
import { Link } from 'wouter';
import { Instagram, Linkedin, Github, Mail } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center mb-12">
          
          <div className="flex flex-col items-start">
            <Link href="/" className="text-3xl font-display font-bold tracking-tighter text-foreground mb-4">
              RM<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Designing experiences that feel alive. UI/UX, Frontend & Digital Art.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-center">
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          <div className="flex justify-start md:justify-end gap-4">
            <a href="https://linkedin.com/in/rubina-m/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href="https://instagram.com/art_with_rubina" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
              <Instagram size={18} />
            </a>
            <a href="mailto:rubinamollah012@gmail.com" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
              <Mail size={18} />
            </a>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50 text-xs text-muted-foreground">
          <p>© {year} Rubina Mollah. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">
            Made with <span className="text-primary">♥</span> in Navi Mumbai
          </p>
        </div>
      </div>
    </footer>
  );
}
