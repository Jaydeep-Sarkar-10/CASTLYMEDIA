import { motion } from 'framer-motion';
import { FaBullseye, FaLightbulb, FaUsers } from 'react-icons/fa';
import './About.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const values = [
  {
    icon: <FaBullseye />,
    title: 'Precision',
    desc: "Every frame, every cut, every strategy is intentional. We don't do generic—we do strategic.",
  },
  {
    icon: <FaLightbulb />,
    title: 'Innovation',
    desc: 'We stay ahead of trends, leveraging the latest techniques in editing and content strategy.',
  },
  {
    icon: <FaUsers />,
    title: 'Partnership',
    desc: "We're not just a service—we're an extension of your team, invested in your growth.",
  },
];

function About() {
  return (
    <div className="about-page">
      {/* ── Hero ── */}
      <section className="about-hero section">
        <div className="about-hero-bg">
          <div className="about-glow-1" />
          <div className="about-glow-2" />
        </div>
        <div className="container">
          <motion.div
            className="about-hero-content"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <span className="section-label">About Us</span>
            <h1>The Creative Force Behind <span className="gradient-text">CastlyMedia</span></h1>
            <p className="about-hero-desc">
              We're a team of editors, strategists, and creatives obsessed with one thing:
              turning attention into measurable results. Founded with the belief that great
              content isn't just about looking good—it's about driving action.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="about-story section">
        <div className="container">
          <div className="story-grid">
            <motion.div
              className="story-visual"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
            >
              <div className="story-image-wrapper glass">
                <div className="story-image-gradient" />
                <div className="story-stats-overlay">
                  <div className="story-stat">
                    <span className="story-stat-value">2+</span>
                    <span className="story-stat-label">Years</span>
                  </div>
                  <div className="story-stat">
                    <span className="story-stat-value">50+</span>
                    <span className="story-stat-label">Clients</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="story-text"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
              custom={1}
            >
              <span className="section-label">Our Story</span>
              <h2>From Passion to <span className="gradient-text">Performance</span></h2>
              <p>
                CastlyMedia was born from a simple observation: brands were spending thousands
                on content that nobody watched past the first 3 seconds. We knew there had to
                be a better way.
              </p>
              <p>
                By combining cinematic editing techniques with data-driven strategy, we created
                a formula that doesn't just capture attention—it converts it. Today, we help
                brands and creators across industries build content systems that generate leads
                on autopilot.
              </p>
              <p>
                Our approach is simple: every piece of content should have a purpose, every edit
                should serve the story, and every strategy should be backed by data.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="about-values section">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
          >
            <span className="section-label">Our Values</span>
            <h2 className="section-title">What Drives <span className="gradient-text">Us</span></h2>
          </motion.div>

          <div className="values-grid">
            {values.map((val, i) => (
              <motion.div
                key={i}
                className="value-card glass"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -6 }}
              >
                <div className="value-icon">{val.icon}</div>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
