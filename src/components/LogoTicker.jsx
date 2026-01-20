import { useEffect, useState } from "react";

// ⬇️ replace these with YOUR images
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";
// import logo8 from "../assets/logo8.png";
// import logo9 from "../assets/logo9.png";

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
//   logo8,
//   logo9,
];

export default function LogoRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % logos.length);
    }, 1500); // speed (1.5s)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-28 flex items-center justify-center overflow-hidden">

      {logos.map((logo, i) => (
        <img
          key={i}
          src={logo}
          alt={`logo-${i}`}
          className={`
            absolute
            max-h-80 w-auto
            transition-all
            duration-500
            ease-in-out
            ${i === index ? "opacity-100 scale-100" : "opacity-0 scale-75"}
          `}
        />
      ))}
    </div>
  );
}
