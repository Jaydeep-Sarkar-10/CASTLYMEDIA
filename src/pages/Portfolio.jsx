import { motion } from 'framer-motion';
import { FaPlay, FaInstagram, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const projects = [
  {
    id: 1,
    title: 'Brand Breakdown Series',
    category: 'Content Strategy',
    views: '1.2M+',
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
    desc: 'A viral series breaking down top brand strategies.',
  },
  {
    id: 2,
    title: 'Cinematic Product Reel',
    category: 'Video Editing',
    views: '890K+',
    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
    desc: 'High-end product showcase with cinematic transitions.',
  },
  {
    id: 3,
    title: 'Growth Hacking Campaign',
    category: 'Social Media',
    views: '2.1M+',
    gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    desc: 'Multi-platform campaign that tripled follower count.',
  },
  {
    id: 4,
    title: 'Creator Rebrand Package',
    category: 'Brand Strategy',
    views: '650K+',
    gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
    desc: 'Complete visual identity overhaul for a top creator.',
  },
  {
    id: 5,
    title: 'Viral Hook Masterclass',
    category: 'Scriptwriting',
    views: '3.5M+',
    gradient: 'linear-gradient(135deg, #fa709a, #fee140)',
    desc: 'Educational content that broke engagement records.',
  },
  {
    id: 6,
    title: 'Lead Funnel System',
    category: 'Content Systems',
    views: '1.8M+',
    gradient: 'linear-gradient(135deg, #a18cd1, #fbc2eb)',
    desc: 'Automated content-to-lead pipeline for an agency.',
  },
  {
    id: 7,
    title: 'Podcast Launch Package',
    category: 'Video Editing',
    views: '420K+',
    gradient: 'linear-gradient(135deg, #ffecd2, #fcb69f)',
    desc: 'Full podcast branding, clips, and social distribution.',
  },
  {
    id: 8,
    title: 'E-commerce Ad Creatives',
    category: 'Content Strategy',
    views: '5.2M+',
    gradient: 'linear-gradient(135deg, #89f7fe, #66a6ff)',
    desc: 'High-converting ad creatives that drove 4x ROAS.',
  },
  {
    id: 9,
    title: 'Personal Brand Build',
    category: 'Brand Strategy',
    views: '1.1M+',
    gradient: 'linear-gradient(135deg, #fdcbf1, #e6dee9)',
    desc: 'Took a founder from 0 to 100K followers in 90 days.',
  },
];

function Portfolio() {
  return (
    <div className="portfolio-page">
      {/* ── Hero ── */}
      <section className="portfolio-hero section">
        <div className="portfolio-hero-glow" />
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <span className="section-label">Portfolio</span>
            <h1 className="section-title">
              Work That <span className="gradient-text">Speaks</span>
            </h1>
            <p className="section-subtitle">
              Real projects. Real results. Here's a look at how we've helped brands
              and creators dominate their space.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Projects Grid ── */}
      <section className="portfolio-grid-section section">
        <div className="container">
          <div className="portfolio-grid">
            {projects.map((project, i) => (
              <motion.a
                key={project.id}
                href="https://instagram.com/castly.media"
                target="_blank"
                rel="noopener noreferrer"
                className={`portfolio-card ${i === 0 || i === 4 ? 'featured' : ''}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                custom={i * 0.4}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="pc-thumb" style={{ background: project.gradient }}>
                  <div className="pc-overlay">
                    <div className="pc-play">
                      <FaPlay />
                    </div>
                  </div>
                  <div className="pc-category">{project.category}</div>
                  <div className="pc-views">{project.views} views</div>
                </div>
                <div className="pc-info">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <span className="pc-tag">
                    <FaInstagram /> @castly.media
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="portfolio-cta section">
        <div className="container">
          <motion.div
            className="cta-content glass"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2>Want Results Like These?</h2>
            <p>Let's create content that converts for your brand.</p>
            <div className="portfolio-cta-buttons">
              <Link to="/contact" className="btn-primary">
                Start Your Project <FaArrowRight />
              </Link>
              <a
                href="https://instagram.com/castly.media"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <FaInstagram /> Follow Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
