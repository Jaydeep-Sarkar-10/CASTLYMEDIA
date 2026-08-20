import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPlay, FaArrowRight, FaInstagram, FaFilm, FaChartLine, FaRocket, FaMobileAlt, FaPenFancy, FaBullseye, FaPalette } from 'react-icons/fa';
import './Home.css';
import AccordionGallery from '../components/AccordionGallery';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const services = [
  {
    icon: <FaFilm />,
    title: 'Cinematic Editing',
    desc: 'High-retention video edits that keep viewers hooked from first frame to last.',
  },
  {
    icon: <FaChartLine />,
    title: 'Brand Strategy',
    desc: 'Strategic brand breakdowns that convert casual scrollers into loyal followers.',
  },
  {
    icon: <FaRocket />,
    title: 'Content Systems',
    desc: 'End-to-end content pipelines that consistently generate leads on autopilot.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Social Growth',
    desc: 'Data-driven social media strategies that amplify reach and engagement.',
  },
  {
    icon: <FaPenFancy />,
    title: 'Scriptwriting & Hooks',
    desc: 'Scroll-stopping hooks and scripts engineered for engagement and conversions.',
  },
  {
    icon: <FaBullseye />,
    title: 'Launch Packages',
    desc: 'Complete launch packages for brands and creators ready to go from 0 to viral.',
  },
  {
    icon: <FaPalette />,
    title: 'Creative Direction',
    desc: 'Overall visual and strategic direction to align your content with your brand identity.',
  },
];

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '10M+', label: 'Views Generated' },
  { value: '95%', label: 'Client Retention' },
  { value: '3x', label: 'Avg. Lead Increase' },
];

const reels = [
  { id: 1, title: 'Brand Breakdown', views: '1.2M', gradient: 'linear-gradient(135deg, #667eea, #764ba2)' },
  { id: 2, title: 'Cinematic Edit', views: '890K', gradient: 'linear-gradient(135deg, #f093fb, #f5576c)' },
  { id: 3, title: 'Growth Strategy', views: '2.1M', gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)' },
  { id: 4, title: 'Content System', views: '650K', gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)' },
  { id: 5, title: 'Viral Hook', views: '3.5M', gradient: 'linear-gradient(135deg, #fa709a, #fee140)' },
  { id: 6, title: 'Lead Funnel', views: '1.8M', gradient: 'linear-gradient(135deg, #a18cd1, #fbc2eb)' },
];

function Home() {
  return (
    <div className="home-page">
      {/* ── HERO ── */}
      <section className="hero-section">
        <div className="hero-bg">
          <div className="hero-gradient-1" />
          <div className="hero-gradient-2" />
          <div className="hero-grid-overlay" />
        </div>

        <div className="hero-content container">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge-dot" />
            Marketing Agency
          </motion.div>

          <motion.h1
            className="hero-title"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            We Turn <span className="gradient-text">Attention</span>
            <br />Into <span className="gradient-text">Leads</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
          >
            Cinematic, high-retention editing and strategic brand breakdown
            content that helps brands and creators dominate their space.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
          >
            <Link to="/contact" className="btn-primary">
              Start a Project <FaArrowRight />
            </Link>
            <Link to="/portfolio" className="btn-secondary">
              <FaPlay /> View Our Work
            </Link>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
          >
            {stats.map((stat, i) => (
              <div key={i} className="stat-item">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="hero-scroll-indicator">
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="services-preview section">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
          >
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Services Built for <span className="gradient-text">Growth</span></h2>
            <p className="section-subtitle">
              Everything you need to turn content into a lead-generating machine.
            </p>
          </motion.div>

          <motion.div 
            style={{ marginTop: '3rem' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUp}
            custom={1}
          >
            <AccordionGallery 
              items={services} 
              defaultIndex={1} 
              expandRatio={0.5} 
              height={500}
              accentColor="var(--primary)"
              overlayColor="#0a0a0f"
              textColor="#ffffff"
            />
          </motion.div>
        </div>
      </section>

      {/* ── REEL SHOWCASE ── */}
      <section className="reel-showcase section">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
          >
            <span className="section-label">Our Work</span>
            <h2 className="section-title">Content That <span className="gradient-text">Converts</span></h2>
            <p className="section-subtitle">
              A glimpse into the reels and edits driving millions of views.
            </p>
          </motion.div>

          <div className="reels-grid">
            {reels.map((reel, i) => (
              <motion.a
                key={reel.id}
                href="https://instagram.com/castly.media"
                target="_blank"
                rel="noopener noreferrer"
                className="reel-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                custom={i * 0.5}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <div className="reel-thumb" style={{ background: reel.gradient }}>
                  <div className="reel-play">
                    <FaPlay />
                  </div>
                  <div className="reel-views">{reel.views} views</div>
                </div>
                <div className="reel-info">
                  <h4>{reel.title}</h4>
                  <span className="reel-tag">
                    <FaInstagram /> @castly.media
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            className="reel-cta"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <a
              href="https://instagram.com/castly.media"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <FaInstagram /> See All on Instagram
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="cta-section section">
        <div className="cta-bg">
          <div className="cta-gradient" />
        </div>
        <div className="container">
          <motion.div
            className="cta-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
          >
            <h2>Ready to Turn Your Content Into a <span className="gradient-text">Lead Machine</span>?</h2>
            <p>Let's build a content system that works while you sleep.</p>
            <Link to="/contact" className="btn-primary">
              Get Started Today <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
