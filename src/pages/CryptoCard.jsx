// import cardImg from "../assets/mastercard.png";
 import cardImg from "../assets/mastercard.png";
import masterImg from "../assets/mastercard1.png";
import liveVideo from "../assets/livevideo.mp4";

export default function CryptoCard() {
  return (
    <section className="bg-black pt-[180px] pb-32">

      {/* ================= HERO SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <div>
          <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight">
            $SLOPY CRYPTO CARD <br />
            YOUR GATEWAY TO <br />
            <span className="text-yellow-400">REAL-WORLD CRYPTO UTILITY</span>
          </h1>

          <p className="text-gray-300 mt-6 max-w-xl">
            The <span className="text-white font-semibold">$SLOPY Crypto Card</span> bridges
            the gap between digital assets and real-world spending. Designed
            exclusively for $SLOPY holders, this card lets you use your crypto
            anytime, anywhere — just like a traditional debit or credit card.
          </p>

          <h3 className="text-white text-xl font-bold mt-10">
            With the $SLOPY Card, you can:
          </h3>

          <ul className="mt-4 space-y-3 text-gray-300">
            <li>• Shop online or in-store worldwide</li>
            <li>• Withdraw cash from supported ATMs</li>
            <li>• Automatic crypto-to-fiat conversion</li>
            <li>• Holder benefits & cashback rewards</li>
            <li>• Global Mastercard acceptance</li>
          </ul>
        </div>

        {/* RIGHT CARD IMAGE */}
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-yellow-400/30 blur-3xl rounded-full" />
         <img
  src={cardImg}
  alt="SLOPY Crypto Card"
  className="
    relative z-10 w-[420px]
    rotate-[-6deg]
    hover:rotate-0 hover:-translate-y-3
    transition duration-500
  "
/>

        </div>
      </div>

      {/* ================= ISSUER SECTION ================= */}
      <div className="mt-32 text-center">
        <h2 className="text-white text-4xl font-extrabold">
          $SLOPY 2.0 CRYPTO <br /> CARD ISSUER
        </h2>

        <div className="flex justify-center gap-10 mt-10">
          <img src={masterImg} alt="MasterCard" className="h-20" />
        </div>
      </div>

      {/* ================= LIVE CODE SECTION ================= */}
      <div className="mt-32 max-w-7xl mx-auto px-6">

        <div className="border border-neon rounded-2xl p-10 bg-gradient-to-br from-[#050b1a] to-[#02040a] shadow-neon">

          <h2 className="text-neon text-4xl font-extrabold text-center">
            SLOPY 2.0 Live Code
          </h2>

          <p className="text-gray-300 text-center mt-3">
            Real-time visualization of crypto card technology
          </p>

          {/* TABS */}
          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            {["Smart Contract", "Transaction", "Security", "Conversion"].map(
              (tab) => (
                <button
                  key={tab}
                  className="
                    px-6 py-2 rounded-lg
                    border border-neon
                    text-neon
                    hover:bg-neon hover:text-black
                    transition text-sm
                  "
                >
                  {tab}
                </button>
              )
            )}
          </div>

          {/* CONTENT */}
          <div className="mt-12 grid md:grid-cols-[0.9fr_1.1fr] gap-8 items-start">

            {/* LEFT – LIVE VIDEO */}
            <div className="relative rounded-xl overflow-hidden border border-neon shadow-neon">
              <video
                src={liveVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* RIGHT – CODE BOX */}
            <div className="bg-[#0b1022] rounded-xl p-6 text-left overflow-auto text-sm text-gray-200 font-mono shadow-inner">

              <div className="mb-3 text-xs text-gray-400">
                slopy-card.sol
                <span className="float-right">Solana Smart Contract</span>
              </div>

              <pre className="leading-relaxed">
{`function convertCrypto(uint amount, string currency)
internal view returns (uint256) {

  if (compareStrings(currency, "USD")) {
    return amount * conversionRate;
  }

  revert("Unsupported currency");
}

function compareStrings(
  string memory a,
  string memory b
) internal pure returns (bool) {

  return keccak256(abi.encodePacked(a)) ==
         keccak256(abi.encodePacked(b));
}`}
              </pre>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
