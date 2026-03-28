import { Coffee } from "lucide-react";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-bg/80 backdrop-blur-md border-b border-black/5 section-padding py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Coffee className="w-6 h-6 text-black" strokeWidth={2.5} />
        <span className="font-heading text-2xl font-bold tracking-tight text-black">COCA</span>
      </div>
      
      {/* Navigation Links & CTA */}
      <div className="flex items-center gap-4 md:gap-12">
        <div className="hidden md:flex gap-10">
          <a 
            href="https://drive.google.com/drive/folders/1TU8hestPxPRqxsP_FxY4WAA8p8UCsGox" 
            target="_blank"
            rel="noreferrer"
            className="label-text text-black/80 hover:text-accent transition-colors text-[11px]"
          >
            Menu
          </a>
          <a 
            href="https://drive.google.com/drive/folders/1TU8hestPxPRqxsP_FxY4WAA8p8UCsGox" 
            target="_blank"
            rel="noreferrer"
            className="label-text text-black/80 hover:text-accent transition-colors text-[11px]"
          >
            Bites
          </a>
        </div>
        
        <a 
          href="https://www.google.com/maps/place/COCA+Coffee+Shop+%26+Roastery/@-7.3304423,110.502092,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a79005999f87d:0xa3b6bbe91420075!8m2!3d-7.3304476!4d110.5069629!16s%2Fg%2F11ywpfpy8v?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D" 
          target="_blank" 
          rel="noreferrer"
          className="bg-accent text-white px-6 py-2.5 rounded-lg label-text text-[11px] hover:bg-black transition-all duration-300 shadow-sm"
        >
          Visit Us
        </a>
      </div>
    </nav>
  );
}
