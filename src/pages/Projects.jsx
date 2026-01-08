import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

// 🔥 Images import karo
import loginImg from "../assets/projects/login.png";
import portfolioImg from "../assets/projects/portfolio.jpg";

const PROJECTS = [
  {
    title: "Responsive Login Register form",
    desc: "Designed and developed a responsive login page using HTML, CSS, and JavaScript, focusing on clean UI, form validation, and cross-device compatibility.",
    ss: loginImg,
    tech: ["HTML", "CSS", "JavaScript"],
    live: "#",
    code: "https://github.com/AwadhnareshNayak",
  },
  {
    title: "💼 Portfolio Website",
    desc: "A modern and responsive portfolio built with React and Framer Motion, showcasing projects, skills, and achievements with smooth animations and interactive UI.",
    ss: portfolioImg,
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    live: "#",
    code: "https://github.com/AwadhnareshNayak",
  },
];

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div
        className="card"
        style={{ background: "rgba(255,255,255,0.03)", borderRadius: 16, padding: 30 }}
      >
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>

        <div
          className="projects-grid"
          style={{
            display: "grid",
            gap: 24,
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
        >
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              whileHover={{ scale: 1.03 }}
              style={{
                background:
                  "linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))",
                border: "1px solid rgba(0,255,255,0.1)",
                borderRadius: 16,
                padding: 16,
              }}
            >
              <img
                src={p.ss}
                alt={p.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: 12,
                }}
              />

              <h3 style={{ marginTop: 10, color: "#0ea5e9" }}>{p.title}</h3>
              <p style={{ color: "#bbb", fontSize: 14 }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
