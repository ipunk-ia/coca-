import { motion } from "motion/react";

const signatures = [
  { name: "Cocaaren", price: "25k", desc: "Our signature palm sugar latte.", img: "https://lh3.googleusercontent.com/d/1mNMzf0CeQCWCKW_YMcaoIhlCNLaMnW-b" },
  { name: "Cocamisu", price: "27k", desc: "Creamy tiramisu inspired coffee.", img: "https://lh3.googleusercontent.com/d/1qMWHO-uFH1xNofm4SUu0auBL4EaX8-CF" },
  { name: "Coca Brûlée", price: "26k", desc: "Torched caramel top with smooth espresso.", img: "https://lh3.googleusercontent.com/d/1nWhx7I7Fhkjy8zNGY_KUn-LCYjvaPSzb" },
];

const secrets = [
  { name: "Cocarind", price: "Secret", desc: "Tamarind Peach Espresso" },
  { name: "Colepon", price: "Secret", desc: "Aren Pandan Coconut" },
];

export default function SignatureMenu() {
  return (
    <section className="section-padding py-section bg-black text-white rounded-[40px] md:rounded-[60px] mx-4 md:mx-8 lg:mx-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 md:mb-20 gap-8">
          <div className="w-full text-center lg:text-left">
            <span className="label-text text-[#FF8A4C] mb-4 block">The Roastery</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl mb-4">Signature Menu</h2>
          </div>
          <p className="text-white/60 max-w-sm text-center lg:text-right mx-auto lg:mx-0 text-sm md:text-base">
            Crafted with precision, inspired by the timeless elegance of mid-century coffee culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {signatures.map((item, idx) => (
            <motion.div
              key={item.name}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <div className="overflow-hidden rounded-2xl mb-6 bg-white/5 p-3 md:p-4 flex justify-center items-center aspect-[4/3]">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                  width={1250}
                  height={975}
                  loading="lazy"
                />
              </div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-2xl font-heading">{item.name}</h3>
                <span className="font-label text-[#FF8A4C]">{item.price}</span>
              </div>
              <p className="text-white/70 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <a 
            href="https://drive.google.com/drive/folders/1TU8hestPxPRqxsP_FxY4WAA8p8UCsGox" 
            target="_blank"
            rel="noreferrer"
            className="bg-white text-black px-12 py-6 rounded-full font-label uppercase tracking-widest text-sm hover:bg-[#FF8A4C] hover:text-white transition-all duration-300"
          >
            View Full Menu
          </a>
        </div>

        <div className="mt-16 md:mt-32 pt-10 md:pt-20 border-t border-white/10">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[1px] flex-1 bg-white/10"></div>
            <span className="label-text text-[#FF8A4C]">Secret Menu</span>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {secrets.map((item) => (
              <div key={item.name} className="flex justify-between items-center p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                <div>
                  <h4 className="text-xl mb-1">{item.name}</h4>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
