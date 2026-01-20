import coinFlip from "../assets/coin.mp4";
//import coinFlip from "../assets/coinFlip.gif";
export default function AboutSection() {
  return (
    <section className="bg-black text-white pt-40 pb-32">
      <div className="max-w-5xl mx-auto px-6 text-center">
        

        {/* TITLE */}
       <h1 className="text-yellow-400 text-6xl md:text-7xl lg:text-8xl font-extrabold mb-12 leading-none drop-shadow-[0_0_25px_rgba(250,204,21,0.6)]">
  $SLOPY 2.0
</h1>

        {/* COIN FLIP GIF */}
 <video
  src={coinFlip}
  autoPlay
  loop
  muted
  playsInline
  className="w-48 h-48 mb-6 mx-auto pointer-events-none"
/>




        <p className="text-gray-300 mb-6">
          SOLPUPY ($SLOPY 2.0) By Mr Abhijit (Indias top Blockchain Developer)
        </p>

        <a
          href="https://www.solpupy.tech"
          className="text-yellow-400 underline text-lg font-semibold"
        >
          www.solpupy.tech
        </a>

        {/* INTRO */}
        <p className="text-gray-300 mt-10 max-w-3xl mx-auto leading-relaxed">
          Below is the professional, premium-grade “About Us” content written specially for the $SLOPY 2.0 website, based fully on your whitepaper details  
          external assumptions.
        </p>

        {/* ABOUT US */}
        <h2 className="text-4xl md:text-5xl font-extrabold mt-24 mb-8">
          ABOUT US – $SLOPY 2.0
        </h2>

        <p className="text-gray-300 leading-relaxed mb-6">
         $SLOPY 2.0 (SolPupy) is not another meme coin — it is a  <span className="text-white font-semibold">
           utility-powered digital asset ecosystem
          </span>, engineered to redefine the future of Web3 finance. Built on the ultra-fast Solana blockchain and designed by India’s top blockchain innovator 
          <span className="text-white font-semibold">
          Abhijit Biswas,
          </span>
           $SLOPY 2.0 stands at the intersection of
           <span className="text-white font-semibold">
         meme culture, decentralized technology, real-world financial utility, and next-generation safety systems.


          </span>
        </p>

        <p className="text-gray-300 leading-relaxed mb-6">
         With audited smart contracts, guaranteed user protection layers, exclusive utilities, and a global expansion roadmap, $SLOPY 2.0 is positioned to become the
          <span className="text-white font-semibold">
           most powerful, transformative, and secure meme-utility project in crypto history.
          </span>.
        </p>

        {/* OUR MISSION */}
        <h2 className="text-4xl md:text-5xl font-extrabold mt-24 mb-6">
          OUR MISSION
        </h2>

        <p className="text-gray-300 max-w-3xl mx-auto mb-8">
          To build a fearless crypto economy where every individual — beginner
          or expert — can transact, earn, trade, pay bills, shop, and interact
          with Web3 safely, quickly, and without barriers.
        </p>

        <ul className="space-y-3 text-left max-w-md mx-auto">
          {[
            "Real-world applications",
            "True decentralization",
            "Investor protection & transparency",
            "Global accessibility",
            "Community-first growth",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="text-green-400">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* WHY */}
        <h2 className="text-4xl md:text-5xl font-extrabold mt-28 mb-6">
          WHY $SLOPY 2.0 EXISTS
        </h2>

        <p className="text-gray-300 max-w-3xl mx-auto mb-6">
          Crypto should empower, not intimidate. Most meme coins rely on hype,
          but offer <span className="text-white font-semibold">
            zero real value or user safety
          </span>.
        </p>

        <ul className="space-y-3 max-w-xl mx-auto text-left">
          {[
            "Up to $100 Guaranteed Holder Protection",
            "Lightning-fast Solana network performance",
            "Crypto Debit Card with global auto-conversion",
            "Real BTC-mining-backed stability pool",
            "AI-driven risk & fraud prevention wallet tech",
            "15+ chain interoperability support",
            "Non-custodial exchange with P2P banking",
            "Utility bill payment ecosystem",
            "DAO governance & decentralized identity",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      

     {/* text */}
<div className="mt-20">
  <p className="text-gray-300 max-w-3xl mx-auto mb-6">
    $SLOPY is not just a token — it’s a{" "}
    <span className="text-white font-semibold">
      complete digital financial universe.
    </span>
  </p>
</div>

         {/* DIFFERENCE */}
        <h2 className="text-4xl md:text-5xl font-extrabold mt-28 mb-6">
         WHAT MAKES US DIFFERENT
        </h2>

        <p className="text-gray-300 max-w-3xl mx-auto mb-6">
          Unlike typical meme coins, $SLOPY 2.0 is built with
           <span className="text-white font-semibold">
           industrial-grade infrastructure:
          </span>.
        </p>

        <ul className="space-y-3 max-w-xl mx-auto text-left">
          {[
            "🚀 Pioneering Meme-to-Utility Ecosystem",
            "🪙 Certified and audited (CertiK & HashLock)",
            "🔐 Dual-Layer Insurance (DeFi + SLOPY Shield Protocol)",
            "👛 Coinsnomic — Our own global non-custodial exchange",
            "⚙️ Crypto debit card & real-world spending capability",
            "📈 Mining-powered price stability & liquidity buffer",
            "🔥 90% supply burn at launch for true scarcity",
            "💸 48-month community airdrop system",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* ROADMAP */}
        <h2 className="text-4xl md:text-5xl font-extrabold mt-28 mb-6">
          A FUTURE-READY ROADMAP
        </h2>

        <ul className="space-y-3 max-w-xl mx-auto text-left">
          {[
            "📍 Phase 1 – Token Launch, CEX/DEX listings",
            "📲 Phase 2 – Utility apps, bill payment, airdrops",
            "🛠 Phase 3 – Coinsnomic non-custodial exchange beta",
            "🌐 Phase 4 – Ecosystem expansion, debit card launch",
            "⛏ Phase 5 – BTC mining farms & Web3 mining platform",
            "♾ Phase 6 – Global adoption & continuous innovation",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* COMMITMENT */}
        <h2 className="text-4xl md:text-5xl font-extrabold mt-28 mb-6">
          OUR COMMITMENT
        </h2>

 {/* text */}
<div className="mt-10 mb-16">
  <p className="text-gray-300 max-w-3xl mx-auto">
    We believe in:
  </p>
</div>

        <ul className="space-y-3 max-w-md mx-auto text-left">
          {[
            "Community empowerment",
            "Real-world adoption",
            "Transparency and security",
            "Fair access, no gatekeeping",
            "Protecting investor confidence",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="text-green-400">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {/* text */}
<div className="mt-10 mb-16">
  <p className="text-gray-300 max-w-3xl mx-auto">
  The meme revolution now has logic, safety, and real-world value.
  </p>
</div>

{/* text */}
<div className="10">
  <p className="text-gray-300 max-w-3xl mx-auto mb-6">
    <span className="text-white font-semibold">
      complete digital financial universe.
    </span>
  </p>
</div>

        {/* FINAL */}
        <h2 className="text-4xl md:text-5xl font-extrabold mt-24">
          JOIN THE SLOPY ERA
        </h2>

        <p className="text-gray-300 mt-6 max-w-3xl mx-auto">
          $SLOPY 2.0 is more than a token — it’s a movement.
          <p>A movement built on technology, community, trust, and evolution.</p>
        </p>

<div className=" mt-10 mb-16">
  <p className="text-gray-300 max-w-3xl mx-auto mb-6">
   Welcome to a future where meme energy fuels global fintech innovation.


  </p>
</div>
        <p className="text-yellow-400 mt-8 font-semibold">
          Welcome to $SLOPY 2.0.
          <p>Where security meets speed, and memes meet utility.</p>
        </p>
        <div className="text-yellow ">
           <p >$SLOPY 2.0 Hand Crafted by DEV CryptoAbhi</p>
        </div>
       

      </div>
    </section>
  );
}
