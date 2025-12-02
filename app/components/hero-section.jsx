"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-white px-6 pt-[120px] overflow-hidden">

      {/* Soft white + sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#e8f6ff] to-white" />

      {/* Light grid */}
      <div className="absolute inset-0 opacity-[0.05] grid-pattern" />

      {/* Spotlight */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0,130,255,0.10), transparent 70%)`,
        }}
      />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
      >

        {/* Badge */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-5 py-2 mb-6 bg-blue-50 border border-blue-100 rounded-full"
        >
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-blue-700 text-sm font-medium">
            India’s Most Affordable Skill Training
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight"
        >
          Skill Training That Leads To  
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
            Real Employment
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          className="text-lg text-gray-600 max-w-2xl mx-auto mt-6 mb-10"
        >
          Y4U Ultimate trains youth in Industrial Skills, IT, Tourism, Digital Marketing,
          Real Estate, and Manpower development—taught by real industry professionals.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition"
          >
            Start Training
            <ArrowRight size={18} />
          </Link>

          <button className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-blue-200 bg-white hover:border-blue-400 transition">
            <span className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <Play size={16} className="text-blue-600" />
            </span>
            Watch Introduction
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 pt-10 border-t border-blue-100"
        >
          {[
            { value: "15+", label: "Years of Experience" },
            { value: "20,000+", label: "Students Trained" },
            { value: "35+", label: "Courses Offered" },
            { value: "97%", label: "Placement Success" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-bold text-blue-600">{s.value}</div>
              <div className="text-gray-600 text-sm">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
