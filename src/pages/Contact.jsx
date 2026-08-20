import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaEnvelope, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show success state
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="contact-page">
      {/* ── Hero ── */}
      <section className="contact-hero section">
        <div className="contact-hero-glow" />
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <span className="section-label">Get In Touch</span>
            <h1 className="section-title">
              Let's Build Something <span className="gradient-text">Epic</span>
            </h1>
            <p className="section-subtitle">
              Ready to turn your content into a lead-generating machine?
              Drop us a message and let's make it happen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Content ── */}
      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            {/* ── Form ── */}
            <motion.div
              className="contact-form-wrapper glass"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
            >
              {submitted ? (
                <div className="form-success">
                  <div className="success-icon">✓</div>
                  <h3>Message Sent!</h3>
                  <p>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-name">Your Name</label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-email">Email Address</label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-service">Service Interested In</label>
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="video-editing">Cinematic Video Editing</option>
                        <option value="brand-strategy">Brand Strategy</option>
                        <option value="scriptwriting">Scriptwriting & Hooks</option>
                        <option value="social-media">Social Media Management</option>
                        <option value="content-systems">Content Systems</option>
                        <option value="launch-package">Launch Package</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-budget">Budget Range</label>
                      <select
                        id="contact-budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                      >
                        <option value="">Select budget</option>
                        <option value="500-1000">$500 – $1,000</option>
                        <option value="1000-3000">$1,000 – $3,000</option>
                        <option value="3000-5000">$3,000 – $5,000</option>
                        <option value="5000+">$5,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message">Your Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder="Tell us about your project, goals, and timeline..."
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="btn-primary submit-btn">
                    <FaPaperPlane /> Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* ── Info Cards ── */}
            <motion.div
              className="contact-info"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
              custom={1}
            >
              <div className="info-card glass">
                <div className="info-icon"><FaEnvelope /></div>
                <h4>Email Us</h4>
                <p>hello@castlymedia.com</p>
                <a href="mailto:hello@castlymedia.com" className="info-link">
                  Send an email →
                </a>
              </div>

              <div className="info-card glass">
                <div className="info-icon"><FaInstagram /></div>
                <h4>Follow Us</h4>
                <p>@castly.media</p>
                <a
                  href="https://instagram.com/castly.media"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-link"
                >
                  DM on Instagram →
                </a>
              </div>

              <div className="info-card glass">
                <div className="info-icon"><FaMapMarkerAlt /></div>
                <h4>Based In</h4>
                <p>Working Globally</p>
                <span className="info-link">Remote-first agency</span>
              </div>

              <div className="response-note">
                <p>⚡ Average response time: <strong>under 24 hours</strong></p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
