import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="section-padding pt-32 pb-20 overflow-hidden">
      <div className="asymmetrical-grid">
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="label-text text-accent mb-6 block text-center lg:text-left">Est. 2023 — Salatiga</span>
            <h1 className="text-5xl md:text-6xl lg:text-[5vw] leading-[1.1] mb-6 text-center lg:text-left">
              Inspired by <br />
              <span className="italic">Mid-century</span> Charm.
            </h1>
            <p className="text-text-2 max-w-md mx-auto lg:mx-0 text-center lg:text-left text-base md:text-lg">
              COCA Coffee is made to be a cozy place to enjoy good coffee. Clean lines, warm tones, and a relaxed atmosphere.
            </p>
            
            <motion.div 
              className="mt-10 flex justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a 
                href="https://www.google.com/maps/place/COCA+Coffee+Shop+%26+Roastery/@-7.3304423,110.502092,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a79005999f87d:0xa3b6bbe91420075!8m2!3d-7.3304476!4d110.5069629!16s%2Fg%2F11ywpfpy8v?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noreferrer"
                className="inline-block bg-black text-white px-10 py-5 rounded-full font-label uppercase tracking-widest text-sm hover:bg-accent transition-colors duration-300"
              >
                Visit Us in Salatiga
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="col-span-12 lg:col-span-5 relative mt-12 lg:mt-0">
          <motion.div
            className="bg-surface overflow-hidden rounded-2xl shadow-2xl"
            initial={{ opacity: 0, scale: 1.1, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <img 
              src="https://lh3.googleusercontent.com/d/1huslGcYiU0w5WBvkaPKGgFwu4vyjCAu-" 
              alt="COCA Coffee Shop Salatiga" 
              className="w-full h-auto object-contain"
              referrerPolicy="no-referrer"
              fetchPriority="high"
              width={913}
              height={1223}
            />
          </motion.div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent rounded-full -z-10 opacity-20 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
