import { useState } from "react";
import heroDog from "../assets/hero-dog1.png";
import letsGo from "../assets/letsgo.png";
import thanksGif from "../assets/thanks.gif";


export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.firstName || !form.email || !form.message) {
      alert("Please fill all required fields.");
      return;
    }

    setSubmitted(true);
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="min-h-screen bg-black pt-44 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT FORM */}
        <div>

          {/* HEADING BLOCK */}
          <div className="flex flex-col items-center mb-12 translate-x-6">

            {/* LET'S GO IMAGE */}
            <img
              src={letsGo}
              alt="Let's Go"
              className="w-36 mb-6"
            />

            {/* CONTACT US */}
            <h1 className="text-yellow-400 text-5xl font-extrabold italic text-center leading-tight drop-shadow-[0_0_25px_rgba(246,205,91,0.35)]">
              CONTACT
              <br />
              US
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* NAME */}
            <div>
              <label className="text-white font-semibold">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full mt-2 px-4 py-3 rounded-md bg-neutral-300 text-black focus:outline-none"
              />
            </div>

            {/* LAST NAME */}
            <div>
              <label className="text-white font-semibold">
                Last name
              </label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Your last name"
                className="w-full mt-2 px-4 py-3 rounded-md bg-neutral-300 text-black focus:outline-none"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-white font-semibold">
                Your email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email address"
                required
                className="w-full mt-2 px-4 py-3 rounded-md bg-neutral-300 text-black focus:outline-none"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-white font-semibold">
                Message<span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Enter your message"
                required
                rows={5}
                className="w-full mt-2 px-4 py-3 rounded-md bg-neutral-300 text-black focus:outline-none resize-none"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold px-12 py-3 rounded-md tracking-widest transition"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* RIGHT DOG IMAGE */}
       {/* RIGHT DOG + THANK YOU */}
<div className="relative flex flex-col items-center">
  {/* <div className="absolute inset-0 blur-3xl bg-yellow-400/20 rounded-full"></div> */}

  {/* DOG */}
 <img
  src={heroDog}
  alt="SLOPY 2.0"
  className="relative z-10 w-[430px] animate-float"
 />

  {/* THANK YOU GIF (BELOW DOG) */}
  <img
    src={thanksGif}
    alt="Thank You"
    className="relative z-10 w-[220px] md:w-[300px] mt-24"
  />
</div>

      </div>

      {/* THANK YOU MODAL */}
      {submitted && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-neutral-900 border border-yellow-400 rounded-xl px-10 py-8 text-center">
            <h2 className="text-yellow-400 text-3xl font-extrabold mb-4">
              Thank You!
            </h2>
            <p className="text-white mb-6">
              Your message has been successfully submitted.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-yellow-400 text-black px-6 py-2 rounded-md font-bold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
