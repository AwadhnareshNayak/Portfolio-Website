import React from 'react'
import { motion } from 'framer-motion'
import "../CSS/Home.css"
import "../index.css"

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

      <div className="home-top">

        {/* PHOTO */}
        <motion.div className="photo-container">
          <div className="photo-ring"></div>
          <div className="photo-frame">
            <img
              src="/photo.jpg"
              alt="Awadhnaresh Nayak"
              className="profile-photo"
            />
          </div>
        </motion.div>

        {/* INFO */}
        <div className="home-info">
          <h1 className="home-title">
            Hi, I’m <span className="home-name">Awadhnaresh Nayak</span>
          </h1>

          <p className="typing-effect">
            MERN Stack Developer | Frontend Developer | Tech Explorer
          </p>

          <div className="profession-tags">
            {professions.map((item, i) => (
              <div key={i} className="profession-tag">{item}</div>
            ))}
          </div>

          <div className="info-cards">
            <div className="info-card">
              📍 <b>Location</b><br />Indore, MP, India
            </div>
            <div className="info-card">
              💼 <b>Expertise</b><br />Developer, Security
            </div>
            <div className="info-card">
              📧 <b>Contact</b><br />awadhnaresh02@gmail.com
            </div>
          </div>
        </div>
      </div>

      {/* SOCIAL */}
      <div className="quick-links">
        <h2 className="quick-links-title">Connect with me</h2>
        <div className="quick-links-list">
          {quickLinks.map((item, i) => (
            <a key={i} href={item.link} target="_blank">
              <img src={item.img} alt={item.title} className="quick-link-img" />
            </a>
          ))}
        </div>
      </div>

    </section>
  )
}
