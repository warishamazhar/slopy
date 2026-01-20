import facebook from "../assets/facebook.png"; 
import x from "../assets/x.png";
import telegram from "../assets/telegram.png";

export default function Footer() {
  return (
    <footer className="bg-yellow-400 py-6">
      <div className="max-w-7xl mx-auto px-10">

        
<div className="grid grid-cols-3 items-center">

          {/* LEFT */}
          <div>
            <h3 className="text-black text-xl font-extrabold">
              SOLPUPY ($SLOPY 2.0)
            </h3>

            <div className="flex gap-8 mt-4">
              <img src={facebook} alt="Facebook" className="w-9 h-9 cursor-pointer" />
              <img src={x} alt="X" className="w-9 h-9 cursor-pointer" />
              <img src={telegram} alt="Telegram" className="w-9 h-9 cursor-pointer" />
            </div>
          </div>

          {/* CENTER */}
          <div className="text-center text-black font-semibold italic">
            © 2025 SOLPUPY All Rights Reserved
          </div>

          {/* RIGHT */}
          <div className="text-right">
            <h3 className="text-black text-xl font-extrabold">
              CONTACTS
            </h3>
            <p className="text-black mt-2">
              hello@solpupy.tech
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
