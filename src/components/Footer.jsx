import { Link } from 'react-router-dom';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-glow" />
      <div className="footer-content container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              CASTLY<span>MEDIA</span>
            </Link>
            <p className="footer-tagline">
              Turning attention into leads through cinematic editing
              and strategic brand breakdown content.
            </p>
          </div>

          <div className="footer-links-group">
            <div className="footer-col">
              <h4>Navigate</h4>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/contact">Contact</Link>
            </div>

            <div className="footer-col">
              <h4>Services</h4>
              <Link to="/services">Video Editing</Link>
              <Link to="/services">Brand Strategy</Link>
              <Link to="/services">Content Creation</Link>
              <Link to="/services">Social Media</Link>
            </div>

            <div className="footer-col">
              <h4>Connect</h4>
              <a href="https://instagram.com/castly.media" target="_blank" rel="noopener noreferrer">
                <FaInstagram style={{ marginRight: '6px' }} /> Instagram
              </a>
              <a href="mailto:hello@castlymedia.com">
                <FaEnvelope style={{ marginRight: '6px' }} /> Email Us
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} CastlyMedia. All rights reserved.</p>
          <p className="footer-credit">Crafted with precision</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
