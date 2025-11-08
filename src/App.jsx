import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./index.css";

const socialLinks = {
  facebook: "https://www.facebook.com/abid.hasan.akash.338359",
  linkedin: "https://www.linkedin.com/in/abid-hasan-b3169321b/",
  github: "https://github.com/Akash33383717",
  instagram: ""
};

export default function App() {
  const [showNav, setShowNav] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 50) {
        // Scrolling down
        setShowNav(false);
      } else {
        // Scrolling up
        setShowNav(true);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div className="min-h-screen bg-gray-50 transition-colors duration-300">
      {/* Navbar */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: showNav ? 0 : -120 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 w-full backdrop-blur-sm bg-white/60 shadow-sm z-30"
      >
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-lg font-semibold text-gray-800">Welcome — Akash Sheikh</h1>
              <p className="text-sm text-gray-600">Web Developer (Learning & building)</p>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main content with padding-top to avoid overlapping navbar */}
      <main className="max-w-5xl mx-auto px-6 py-12 pt-24">
        {/* HERO */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* left: bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-indigo-600 font-medium">Hi, I'm</p>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Akash Sheikh</h2>
            <h3 className="text-xl text-gray-700 mt-1">Web Developer</h3>

            <p className="mt-6 text-gray-700 leading-relaxed">
              I'm a practical, curious, and problem-solving focused developer from Bangladesh. I enjoy building web projects,
              improving my English and programming skills, and learning new technologies. I also love football, psychology,
              and action anime.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
              >Facebook</a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700 transition"
              >LinkedIn</a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-900 transition"
              >GitHub</a>

              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-md bg-pink-500 text-white hover:bg-pink-600 transition"
                >Instagram</a>
              )}

              <a
                href="/example_cv.pdf.htm"
                download
                className="px-4 py-2 rounded-md border border-gray-300 text-gray-800 hover:bg-gray-100 transition"
              >
                Download CV (PDF)
              </a>
            </div>

            <div className="mt-8">
              <p className="text-sm text-gray-500">Quick facts:</p>
              <ul className="mt-2 text-gray-700 list-disc list-inside">
                <li>Dream destination: Germany</li>
                <li>Favorite movie: Charlie</li>
                <li>From Borotona — loves village life & naru</li>
              </ul>
            </div>
          </motion.div>

          {/* right: photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition">
              <img src="/profile.jpg.png" alt="Akash" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </section>

        {/* Projects */}
        <section className="mt-16">
          <h4 className="text-xl font-semibold text-gray-900">Projects</h4>
          <p className="mt-3 text-gray-700">Add your projects here. You can show code links, live demos, and short descriptions.</p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-white shadow">
              <h5 className="font-semibold">Project One</h5>
              <p className="mt-2 text-sm text-gray-600">A short description of a web project.</p>
              <div className="mt-3 flex gap-2">
                <a href={socialLinks.github} className="text-sm underline">Source</a>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-white shadow">
              <h5 className="font-semibold">Project Two</h5>
              <p className="mt-2 text-sm text-gray-600">Another short project description.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-20 py-8 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Akash Sheikh — Built with ❤️
        </div>
      </footer>
    </div>
  );
}
