import { NavLink } from "react-router-dom";
import logo from "../assets/hero-dog.png";

export default function Navbar() {
  const baseLink =
    "relative uppercase tracking-[0.28em] text-sm font-semibold transition-all duration-300";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        {/* BIG NAVBAR HEIGHT */}
        <div className="relative flex items-center justify-center h-40">

          {/* LOGO — LEFT */}
          <div className="absolute left-0 flex items-center">
            <img
              src={logo}
              alt="SLOPY 2.0"
              className="w-40 h-40 object-contain"
            />
          </div>

          {/* CENTER MENU */}
          <div className="hidden md:flex items-center gap-20">
            {[
              { name: "HOME", path: "/" },
              { name: "ABOUT", path: "/about" },
              { name: "WHITE PAPER", path: "/whitepaper" },
              { name: "$SLOPY CRYPTO CARD", path: "/crypto-card" },
              { name: "CONTACT", path: "/contact" },
            ].map((item) => (
              <NavLink
  key={item.name}
  to={item.path}
  className={({ isActive }) =>
    `${baseLink} relative
     ${isActive ? "text-yellow" : "text-white hover:!text-yellow-400"}
     after:absolute after:left-0 after:-bottom-2
     after:h-[2px] after:bg-yellow-400
     after:w-0 after:transition-all after:duration-300
     ${isActive ? "after:w-full" : "hover:after:w-full"}`
  }
>
  {item.name}
</NavLink>

            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
