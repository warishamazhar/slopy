import heroDog from "../assets/hero-dog1.png";
import featureBlocktop from "../assets/feature-stack-top.png";
import featureBlockbottom from "../assets/feature-stack-bottom.png";
//import file from "../assets/fileee.mp4";
import CryptoTicker from "../components/CryptoTicker";
import InvestmentSection from "../components/InvestmentSection";
import RocketQuoteSection from "../components/RocketQuoteSection";
//import LogoTicker from "../components/LogoTicker";
import LaunchCountdown from "../components/LaunchCountdown";
//import Footer from "../components/Footer";
import fileVideo from "../assets/file1.mp4";


export default function Home() {
  return (
      <>
   <section className="pt-[200px] pb-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1.05fr_0.95fr] gap-4 items-start">

        {/* LEFT CONTENT */}
        <div className="relative">
          <h1 className="text-white font-extrabold text-4xl md:text-5xl leading-tight">
            SOLPUPY{" "}
            <span className="text-yellow-400">
              (<span className="text-red-500">$SLOPY 2.0</span>)
            </span>
            <br />
            <span className="block mt-2">— THE MEME COIN</span>
            <span className="block">REVOLUTION ON</span>
            <span className="block">SOLANA BLOCKCHAIN</span>
          </h1>

          {/* ICON ROW */}
          <div className="flex items-center gap-3 mt-6">
            {/* <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center">
              ⚙️
            </div> */}
            {/* <span className="text-neutral-400 text-sm">
              Built for speed & scalability
            </span> */}
          </div>

          {/* 🔥 FEATURE BLOCK (MATCHES SCREENSHOT) */}
         <div className="mt-10 flex flex-col items-center">

            {/* TOP IMAGE */}
            <img
              src={featureBlocktop}
              alt="Feature"
              className="w-48 mb-6"
            />
{/* CENTER BOX */}
<div
  className="
    w-[280px]
    rounded-xl
    px-4
    py-3
    flex justify-center
  "
>
  <button
    className="
      bg-yellow-400
      hover:bg-[#f2c94c]
      transition
      text-black
      font-bold
      tracking-[0.22em]
      text-xs
      px-12
      py-3
      rounded-full
      shadow-[0_6px_20px_rgba(246,205,91,0.35)]
      whitespace-nowrap
    "
  >
    KNOW MORE ABOUT $SLOPY 2.0
  </button>
</div>


            {/* BOTTOM IMAGE */}
            <video
  src={fileVideo}
  autoPlay
  loop
  muted
  playsInline
  className="w-44 mt-4"
 />

          </div>
        </div>

       <div className="relative -mt-2 flex justify-center">

  {/* YELLOW GLOW BACKGROUND */}
  <div
    className="
      absolute
      w-[420px]
      h-[420px]
      md:w-[480px]
      md:h-[480px]
      lg:w-[520px]
      lg:h-[520px]
      bg-yellow-400/50
      blur-3xl
      rounded-full
      top-1/2
      -translate-y-1/2
      z-0
      pointer-events-none
    "

  />

  {/* HERO DOG (HOVER FLOAT) */}
  <img
    src={heroDog}
    alt="SLOPY 2.0"
    className="
      relative
      z-10
      w-[460px]
      md:w-[500px]
      lg:w-[520px]
      transition-transform
      duration-500
      ease-out
      hover:-translate-y-4
    "
  />

</div>






      </div>
    </section>
    <CryptoTicker />
    <InvestmentSection />
    <RocketQuoteSection />
    <LaunchCountdown />
     {/* <Footer /> */}
    </>
    
  );
}
