import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="section-padding py-20 border-t border-black/5">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-heading mb-4">COCA Coffee & Roastery</h2>
          <p className="text-text-2 text-sm max-w-xs">
            Salatiga's premier mid-century digital experience. Roasting daily, serving always.
          </p>
        </div>
        
        <div className="flex gap-12">
          <div>
            <span className="label-text text-accent mb-4 block">Hours</span>
            <p className="text-sm">Mon — Sun</p>
            <p className="text-sm font-bold">08:00 — 22:00</p>
          </div>
          <div>
            <span className="label-text text-accent mb-4 block">Social</span>
            <a 
              href="https://www.instagram.com/coca.coffeeshoproastery/" 
              target="_blank" 
              rel="noreferrer" 
              className="text-sm block hover:text-accent py-2"
            >
              Instagram
            </a>
            <a 
              href="https://www.tiktok.com/@coca.coffeeshoproastery?_r=1&_t=zs-92b2vamt7qo" 
              target="_blank" 
              rel="noreferrer" 
              className="text-sm block hover:text-accent py-2"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-20 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between gap-4">
        <p className="text-[10px] uppercase tracking-widest text-text-2">
          © 2026 COCA Coffee & Roastery. All rights reserved.
        </p>
        <p className="text-[10px] uppercase tracking-widest text-text-2">
          Designed for Mid Century Lovers.
        </p>
      </div>
    </footer>
  );
}
