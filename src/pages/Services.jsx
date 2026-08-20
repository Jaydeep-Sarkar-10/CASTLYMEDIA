import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFilm, FaChartLine, FaPenFancy, FaBullhorn, FaCogs, FaRocket, FaArrowRight } from 'react-icons/fa';
import './Services.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const services = [
  {
    icon: <FaFilm />,
    title: 'Cinematic Video Editing',
    desc: 'High-retention edits with cinematic transitions, motion graphics, and pacing that keeps viewers glued. From reels to long-form — we make every second count.',
    features: ['Short-form Reels/TikToks', 'Long-form YouTube edits', 'Motion graphics & VFX', 'Color grading'],
  },
  {
    icon: <FaChartLine />,
    title: 'Brand Strategy & Breakdown',
    desc: 'Strategic content planning that positions your brand as the go-to authority. We break down what works and build a roadmap for domination.',
    features: ['Competitor analysis', 'Content calendars', 'Brand positioning', 'Audience research'],
  },
  {
    icon: <FaPenFancy />,
    title: 'Scriptwriting & Hooks',
    desc: 'Scroll-stopping hooks and scripts engineered for engagement. We craft narratives that convert viewers into followers and followers into customers.',
    features: ['Hook frameworks', 'Story-driven scripts', 'CTA optimization', 'A/B testing copy'],
  },
  {
    icon: <FaBullhorn />,
    title: 'Social Media Management',
    desc: 'End-to-end social media management — from strategy to posting to engagement. We handle the grind so you can focus on your craft.',
    features: ['Content scheduling', 'Community management', 'Analytics & reporting', 'Growth hacking'],
  },
  {
    icon: <FaCogs />,
    title: 'Content Systems',
    desc: 'We build repeatable content systems that generate leads on autopilot. No more guesswork — just a machine that runs.',
    features: ['Content SOPs', 'Team workflows', 'Repurposing pipelines', 'Quality assurance'],
  },
  {
    icon: <FaRocket />,
    title: 'Launch & Growth Packages',
    desc: 'Complete launch packages for brands and creators ready to go from 0 to viral. Everything you need in one place.',
    features: ['Brand identity setup', 'Launch content suite', 'Paid ad creatives', 'Performance tracking'],
  },
];

function Services() {
  return (
    <div className="services-page">
      {/* ── Hero ── */}
      <section className="services-hero section">
        <div className="services-hero-glow" />
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <span className="section-label">Our Services</span>
            <h1 className="section-title">
              Everything You Need to <span className="gradient-text">Dominate</span>
            </h1>
            <p className="section-subtitle">
              From cinematic edits to full brand strategy — we've got the tools and talent to
              make your content convert.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="services-list section">
        <div className="container">
          <div className="services-detailed-grid">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="service-detail-card glass"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <div className="sdc-header">
                  <div className="sdc-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                </div>
                <p className="sdc-desc">{service.desc}</p>
                <ul className="sdc-features">
                  {service.features.map((f, j) => (
                    <li key={j}>
                      <span className="feature-dot" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="sdc-shine" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="services-cta section">
        <div className="container">
          <motion.div
            className="cta-content glass"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2>Not Sure What You Need?</h2>
            <p>Book a free strategy call and we'll build a custom plan for your brand.</p>
            <Link to="/contact" className="btn-primary">
              Book a Call <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Services;
