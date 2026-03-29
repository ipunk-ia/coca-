import { motion } from "motion/react";

const bites = [
  { name: "Donat Klasik", price: "7k", size: "col-span-12 md:col-span-6 lg:col-span-4", img: "https://lh3.googleusercontent.com/d/14rLRjSqIN40d9nPL_TwXbtpJAkvjJiTp" },
  { name: "Butter Croissant", price: "24k", size: "col-span-12 md:col-span-6 lg:col-span-8", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1926&auto=format&fit=crop" },
  { name: "Tahu Bakso", price: "13k", size: "col-span-12 md:col-span-6 lg:col-span-7", img: "https://lh3.googleusercontent.com/d/1DcOM6ISVrj5iwxXiTK6r2zgukD7E_HDT" },
  { name: "Risol Mayo", price: "17k", size: "col-span-12 md:col-span-6 lg:col-span-5", img: "https://lh3.googleusercontent.com/d/1OQW_lL2riqidaeerHfgmqJpKD3pmwXf7" },
];

export default function BentoGrid() {
  return (
    <section className="section-padding py-section">
      <div className="mb-12 md:mb-16">
        <span className="label-text text-accent mb-4 block">Freshly Baked</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl">Today's Bites</h2>
      </div>
      
      <div className="grid grid-cols-12 gap-6">
        {bites.map((item, idx) => (
          <motion.div
            key={item.name}
            className={`${item.size} group relative overflow-hidden rounded-3xl aspect-video md:aspect-auto md:h-[400px] bg-surface`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
          >
            <img 
              src={item.img} 
              alt={item.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
              width={item.name === "Donat Klasik" ? 1200 : item.name === "Butter Croissant" ? 1926 : item.name === "Tahu Bakso" ? 1000 : 1200}
              height={item.name === "Donat Klasik" ? 676 : item.name === "Butter Croissant" ? 1284 : item.name === "Tahu Bakso" ? 563 : 675}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-white text-2xl mb-1">{item.name}</h3>
                  <p className="text-white/60 font-label">{item.price}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xl">+</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <a 
          href="https://drive.google.com/drive/folders/1TU8hestPxPRqxsP_FxY4WAA8p8UCsGox" 
          target="_blank"
          rel="noreferrer"
          className="bg-black text-white px-12 py-6 rounded-full font-label uppercase tracking-widest text-sm hover:bg-accent transition-all duration-300"
        >
          View All Bites
        </a>
      </div>
    </section>
  );
}
