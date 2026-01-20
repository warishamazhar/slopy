import { useState } from "react";
import rocketImg from "../assets/rocket.png";
import heroDog from "../assets/hero-dog.png";
import LogoTicker from "../components/LogoTicker";
import coinVideo from "../assets/coinVideo.mp4";

export default function RocketQuoteSection() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!email || !email.includes("@gmail.com")) {
      setError("This field is required");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section className="bg-black pt-10 pb-16 -mt-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT – TEXT + NEWSLETTER */}
        <div className="pl-12">

          {/* COIN VIDEO ABOVE TEXT */}
          <div className="flex justify-center -mt-16 mb-10">
  <video
    src={coinVideo}
    autoPlay
    loop
    muted
    playsInline
    className="
      w-[180px]
      md:w-[220px]
      lg:w-[260px]
      pointer-events-none
    "
  />
</div>

          <h2 className="text-white text-4xl md:text-5xl font-extrabold leading-tight italic">
            <span className="block">
              "ONLY THE LEGENDS
            </span>

            <span className="block">
              HAVE SEEN <span className="text-yellow-400">THE END</span>
            </span>

            <span className="block text-yellow-400 text-center">
              OF WAR."
            </span>
          </h2>

          {/* NEWSLETTER */}
          <div className="mt-20 max-w-md text-center">
            <h3 className="text-white font-bold tracking-wide mb-6">
              SUBSCRIBE TO OUR NEWSLETTER
            </h3>

            {!submitted ? (
              <>
                <label className="block text-neutral-400 mb-2">
                  Email address
                </label>

                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full bg-[#2a2a2a] text-white px-4 py-3 rounded-md outline-none border ${
                    error ? "border-red-500" : "border-neutral-600"
                  } focus:border-yellow-400 transition`}
                />

                {error && (
                  <p className="text-red-500 text-sm mt-1">
                    {error}
                  </p>
                )}

                <button
                  onClick={handleSubmit}
                  className="mt-4 bg-yellow-400 px-8 py-3 rounded-md text-black font-bold tracking-widest text-sm hover:bg-[#f2c94c] transition"
                >
                  SUBMIT
                </button>

                {/* LOGO ROTATOR */}
                <div className="mt-6">
                  <LogoTicker />
                </div>
              </>
            ) : (
              <p className="text-white italic mt-6">Thank you!</p>
            )}
          </div>
        </div>

        {/* RIGHT – ROCKET + DOG STACK */}
        <div className="relative flex flex-col items-center">

          {/* ROCKET */}
          <img
            src={rocketImg}
            alt="Rocket"
            className="w-[300px] md:w-[340px] mb-28"
          />

          {/* DOG */}
          <img
            src={heroDog}
            alt="SLOPY"
            className="w-[520px] md:w-[580px]"
          />
        </div>

      </div>
    </section>
  );
}
