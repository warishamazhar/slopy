import { useState } from "react";
import slopyLogo from "../assets/hero-dog2.png";
import arrow from "../assets/arrow.mp4";

export default function InvestmentSection() {
  const CURRENT_PRICE = 0.17;
  const EXPECTED_PRICE = 0.29;

  const [investment, setInvestment] = useState(100);

  const coins = investment / CURRENT_PRICE;
  const futureValue = coins * EXPECTED_PRICE;
  const profit = futureValue - investment;
  const profitPercent = (profit / investment) * 100;

  return (
    <section className="bg-black py-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT – CALCULATOR */}
        <div className="bg-[#1b1b1b] rounded-2xl p-8 border border-neutral-800">
          <h2 className="text-green-400 text-3xl font-extrabold mb-2">
            $SLOPY 2.0 Investment Calculator
          </h2>
          <p className="text-neutral-400 mb-6">
            Calculate your potential returns by Jan 26, 2026
          </p>

          <div className="space-y-4">

            <div className="bg-[#213328] rounded-lg px-5 py-3 flex justify-between">
              <span className="text-white">Current Price:</span>
              <span className="text-white font-bold">${CURRENT_PRICE} per coin</span>
            </div>

            <div className="bg-[#213328] rounded-lg px-5 py-3 flex justify-between">
              <span className="text-white">Expected Price on Launch:</span>
              <span className="text-white font-bold">${EXPECTED_PRICE} per coin</span>
            </div>

            <div>
              <label className="block text-white mb-2">
                Your Investment Amount (USD)
              </label>
              <input
                type="number"
                min="0"
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                className="w-full bg-[#2a2a2a] text-white px-4 py-3 rounded-lg outline-none border border-green-400"
              />
            </div>

            <div className="bg-[#1f2f26] rounded-lg p-4 space-y-2 mt-4">
              <div className="flex justify-between">
                <span className="text-white">You would own:</span>
                <span className="text-green-400 font-bold">
                  {coins.toFixed(2)} SLOPY
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-white">Potential value:</span>
                <span className="text-green-400 font-bold">
                  ${futureValue.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-white">Potential profit:</span>
                <span className="text-green-400 font-bold">
                  ${profit.toFixed(2)} ({profitPercent.toFixed(2)}%)
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-500 mt-4">
              This is a hypothetical projection and not financial advice
            </p>

          </div>
        </div>

        {/* RIGHT – TEXT */}
      <div className="flex flex-col items-center justify-center text-center">

         <img
  src={slopyLogo}
  alt="SLOPY"
  className="w-[220px] md:w-[260px] lg:w-[300px] mb-10"
/>


          <h2 className="text-white text-4xl md:text-5xl font-extrabold leading-tight">
            FROM MEMES TO REAL-WORLD UTILITY:
            <br />
            PAYMENTS, TRADING,
            <br />
            MINING, AND GLOBAL
            <br />
            ADOPTION — POWERED
            <br />
            BY <span className="text-yellow-400">$SLOPY 2.0</span>
          </h2>
          <div className="mt-10 flex flex-col items-center">
  {/* ARROW */}
 <video
  src={arrow}
  autoPlay
  loop
  muted
  playsInline
  className="w-36 md:w-48 lg:w-56 mb-6 opacity-90 pointer-events-none"
/>



  {/* BUTTON */}
  <button className="bg-yellow px-10 py-3 rounded-full text-black font-bold tracking-[0.25em] text-sm hover:bg-[#f2c94c] transition">
    WHITE PAPER
  </button>
</div>

        </div>

      </div>
    </section>
  );
}
