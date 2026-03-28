import { motion } from "motion/react";
import { MapPin, Star, Instagram, MessageCircle } from "lucide-react";

export default function SocialProof() {
  return (
    <section className="section-padding py-section overflow-hidden">
      <div className="asymmetrical-grid items-center">
        <div className="col-span-12 lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface p-6 sm:p-8 md:p-12 lg:p-20 rounded-[30px] md:rounded-[40px] shadow-sm border border-black/5 overflow-hidden"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl mb-8 leading-tight break-words">
              "The best coffee spot in Salatiga. The mid century vibes are unmatched."
            </h2>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center font-label text-accent shrink-0">
                4.9
              </div>
              <div>
                <p className="font-bold text-base md:text-lg">Google Maps Rating</p>
                <p className="text-text-2 text-xs md:text-sm">Based on 500+ reviews</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="col-span-12 lg:col-span-6 lg:pl-20 mt-12 lg:mt-0">
          <span className="label-text text-accent mb-4 block">Find Us</span>
          <h2 className="text-3xl md:text-5xl mb-6">Jl. Kalinyamat No.22, Salatiga</h2>
          <p className="text-text-2 mb-10 text-base md:text-lg">
            Located in the heart of Salatiga, our roastery is a sanctuary for those who appreciate the finer details of coffee and design.
          </p>
          
          <div className="flex flex-col gap-6">
            <a 
              href="https://www.google.com/maps/place/COCA+Coffee+Shop+%26+Roastery/@-7.3304423,110.502092,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a79005999f87d:0xa3b6bbe91420075!8m2!3d-7.3304476!4d110.5069629!16s%2Fg%2F11ywpfpy8v?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-accent transition-colors">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="font-label uppercase tracking-widest text-sm">Open in Google Maps</span>
            </a>
            
            <a 
              href="https://wa.me/6288233665174" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-accent transition-colors">
                <MessageCircle className="w-6 h-6" />
              </div>
              <span className="font-label uppercase tracking-widest text-sm">Chat via WhatsApp</span>
            </a>

            <a 
              href="https://www.instagram.com/coca.coffeeshoproastery/" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-accent transition-colors">
                <Instagram className="w-6 h-6" />
              </div>
              <span className="font-label uppercase tracking-widest text-sm">Follow on Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
