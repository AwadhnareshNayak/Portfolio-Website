import React from 'react'
import { motion } from 'framer-motion'
import "../CSS/Home.css"
import '../index.css'

export default function Home() {

  const professions = [
    'Git',
    'MongoDB',
    'MySQL',
    'Socket Programming',
    'MERN Stack Developer',
  ]

  const quickLinks = [
    { img: '/github.png', title: 'GitHub', link: 'https://github.com/AwadhnareshNayak' },
    { img: '/linkedin.png', title: 'LinkedIn', link: 'https://www.linkedin.com/in/awadhnaresh-nayak-5a5977237/' },
    { img: '/gmail.png', title: 'Email', link: 'mailto:awadhnaresh02@gmail.com' },
    { img: '/whatsapp.png', title: 'WhatsApp', link: 'https://wa.me/+916260419871' },
    { img: '/insta.png', title: 'Instagram', link: 'https://www.instagram.com/awadh_02' },
    { img: '/facebook.png', title: 'Facebook', link: 'https://www.facebook.com/share/1D1HYc7qC2/' },
  ]

  return (
    <section className="home-section">

      {/* Typing animation */}
      <style>
        {`
          @keyframes typing { from { width: 0; } to { width: 100%; } }
          @keyframes blink { 50% { border-color: transparent; } }
        `}
      </style>

      {/* ===== TOP SECTION ===== */}
      <div className="home-top">

        {/* LEFT PHOTO */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="photo-container"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="photo-ring"
          />

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="photo-frame"
          >
            <motion.img
              src="/photo.jpg"
              alt="Awadhnaresh Nayak"
              className="profile-photo"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        </motion.div>

        {/* RIGHT INFO */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="home-info"
        >
          <h1 className="home-title">
            Hi, I’m{' '}
            <motion.span
              animate={{ backgroundPositionX: ['0%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="home-name"
            >
              Awadhnaresh Nayak
            </motion.span>
          </h1>

          <p className="typing-effect">
            MERN Stack Developer | Frontend Developer | Tech Explorer
          </p>

          {/* SKILLS TAGS */}
          <motion.div className="profession-tags">
            {professions.map((role, i) => (
              <motion.div
                key={i}
                className="profession-tag"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                {role}
              </motion.div>
            ))}
          </motion.div>

          {/* INFO CARDS */}
          <motion.div className="info-cards">
            {[
              { label: '📍 Location', value: 'Indore, Madhya Pradesh, India' },
              { label: '💼 Expertise', value: 'Developer, Security' },
              { label: '📧 Contact', value: 'awadhnaresh02@gmail.com' },
            ].map((info, i) => (
              <motion.div
                key={i}
                className="info-card"
                whileHover={{ y: -4, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 250 }}
              >
                <strong>{info.label}</strong>
                <p>{info.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ===== SOCIAL LINKS ===== */}
      <motion.div className="quick-links">
        <h2 className="quick-links-title">Connect with me</h2>
        <div className="quick-links-list">
          {quickLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              title={item.title}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 250 }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                className="quick-link-img"
              />
            </motion.a>
          ))}
        </div>
      </motion.div>

    </section>
  )
}

