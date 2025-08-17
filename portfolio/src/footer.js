import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './footer.css'
const Footer = () => {
  return (
    <div>
          <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>JivinKS</h3>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-icons">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:youremail@example.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer;
