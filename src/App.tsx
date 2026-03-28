import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import SignatureMenu from "./components/SignatureMenu";
import SocialProof from "./components/SocialProof";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-accent selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[60]"
        style={{ scaleX }}
      />

      <Header />

      <main className="pt-20">
        <Hero />
        <BentoGrid />
        <SignatureMenu />
        <SocialProof />
        
        {/* Final CTA Section */}
        <section className="section-padding py-section text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-accent text-white p-10 md:p-20 rounded-[40px] md:rounded-[60px]"
          >
            <span className="label-text text-white/80 mb-4 block">Ready for a cup?</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl mb-10">Experience COCA Today.</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="https://wa.me/6288233665174" 
                target="_blank" 
                rel="noreferrer"
                className="bg-white text-accent px-12 py-6 rounded-full font-label uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-all duration-300"
              >
                Chat via WhatsApp
              </a>
              <a 
                href="https://www.google.com/maps/place/COCA+Coffee+Shop+%26+Roastery/@-7.3304423,110.502092,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a79005999f87d:0xa3b6bbe91420075!8m2!3d-7.3304476!4d110.5069629!16s%2Fg%2F11ywpfpy8v?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noreferrer"
                className="bg-black/20 backdrop-blur-md text-white border border-white/20 px-12 py-6 rounded-full font-label uppercase tracking-widest text-sm hover:bg-white hover:text-accent transition-all duration-300"
              >
                Visit Salatiga
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
