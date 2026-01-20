// import topDiagram from "../assets/phone.gif"; // your phone gif
 import arrowImg from "../assets/arrow.png"; 
import phoneGif from "../assets/phone.mp4"; 

export default function WhitePaper() {
  return (
    <section className="bg-black py-28">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">

        {/* LEFT CONTENT */}
        <div className="flex flex-col items-start">

          {/* TOP DIAGRAM */}
          {/* <img
            src={topDiagram}
            alt="Knowledge Diagram"
            className="w-64 mb-10"
          /> */}

          {/* MAIN HEADING */}
          <h2 className="text-yellow-400 text-5xl md:text-6xl font-extrabold italic leading-tight">
            DOWNLOAD WHITE <br /> PAPER HERE
          </h2>

          {/* DOUBLE ARROW */}
          <div className="w-full flex justify-center my-8">
  <img
    src={arrowImg}
    alt="Arrow"
    className="w-16 -translate-x-16"
  />
</div>




          {/* CTA BUTTON */}
          <button
            className="
              bg-yellow-400
              hover:bg-[#f2c94c]
              transition
              text-black
              font-bold
              tracking-widest
              text-sm
              px-10
              py-4
              rounded-full
              shadow-[0_8px_30px_rgba(246,205,91,0.4)]
            "
          >
            DOWNLOAD $SLOPY2.0 WHITEPAPER
          </button>
        </div>

        {/* RIGHT – PHONE + ARROWS */}
        <div className="relative flex justify-center">

          {/* PHONE GIF */}
          <video
  src={phoneGif}
  autoPlay
  loop
  muted
  playsInline
  className="w-[360px] md:w-[400px] relative z-10"
 />

          {/* LEFT ARROW
          <img
            src={arrowImg}
            alt="Arrow Left"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-16"
          />

          {/* RIGHT ARROW */}
          {/* <img
            src={arrowImg}
            alt="Arrow Right"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-16 rotate-180"
          /> */} 
        </div>

      </div>
    </section>
  );
}
