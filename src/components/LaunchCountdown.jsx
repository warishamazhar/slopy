import { useEffect, useState } from "react";
import phoneVideo from "../assets/homephone.mp4"; 

export default function LaunchCountdown() {
  const launchDate = new Date("2026-01-26T00:00:00").getTime();
  const [time, setTime] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = launchDate - now;

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-black py-24 relative pb-48">
      {/* TITLE */}
      <h2 className="text-neon text-4xl md:text-5xl font-extrabold text-center drop-shadow-[0_0_20px_#00ff9c]">
        $SLOPY 2.0 LAUNCH COUNTDOWN
      </h2>

      <p className="text-center text-gray-300 mt-3">
        Mark your calendars for the global exchange launch
      </p>
      {/* UNDERLINE */}
<div className="w-full max-w-6xl mx-auto mt-6">
  <div className="h-[2px] bg-neon shadow-[0_0_12px_rgba(0,255,156,0.8)]" />
</div>

      {/* MOVING EXCHANGE CARDS */}
      <div className="mt-12 border border-neon rounded-xl py-6 overflow-hidden shadow-neon">
        <div className="flex gap-6 animate-marquee whitespace-nowrap px-6">
          {["SARWA", "MUDREX", "COINDCX", "HUOBI", "GEMINI"].map((name, i) => (
            <div
              key={i}
              className="px-6 py-3 bg-[#0d1f17] text-neon rounded-lg font-bold flex items-center gap-2"
            >
              ↔ {name}
            </div>
          ))}
          <span className="text-neon font-bold ml-10">
            📣 DEAR HOLDERS INVESTORS AND MENTORS OF $SLOPY 2.0
          </span>
        </div>
      </div>

      {/* COUNTDOWN BOX */}
<div className="relative max-w-6xl mx-auto mt-16 border border-neon rounded-xl py-10 shadow-neon">

  {/* FLOATING PHONE IMAGE */}
  <video
  src={phoneVideo}
  autoPlay
  loop
  muted
  playsInline
  className="
    absolute
    left-6
    -bottom-24
    w-[220px]
    md:w-[260px]
    pointer-events-none
  "
/>


  <h3 className="text-neon text-2xl md:text-3xl font-extrabold text-center mb-8">
    COUNTDOWN TO LAUNCH
  </h3>

  <div className="flex justify-center items-center gap-6 px-6">

    {[
      { label: "DAYS", value: time.days },
      { label: "HOURS", value: time.hours },
      { label: "MINUTES", value: time.minutes },
      { label: "SECONDS", value: time.seconds },
    ].map((item, i) => (
      <div
        key={i}
        className="
          flex-1
          max-w-[120px]
          h-[96px]
          bg-[#0d1f17]
          rounded-lg
          flex
          flex-col
          items-center
          justify-center
          shadow-neon
        "
      >
        <span className="text-neon text-3xl font-extrabold leading-none">
          {item.value}
        </span>
        <span className="text-gray-300 text-xs mt-1 tracking-wide">
          {item.label}
        </span>
      </div>
    ))}
  </div>
</div>

    </section>
  );
}
