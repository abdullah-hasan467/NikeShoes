// Footer.jsx
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../../Styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo and Description */}
        <div>
          <h2>FlyRider</h2>
          <p>
            Connecting riders and drivers seamlessly. Safe, reliable, and quick deliveries at your fingertips.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3>Follow Us</h3>
          <div className="footer-social-icons">
            <a href="#"><FaFacebook size={24} /></a>
            <a href="#"><FaTwitter size={24} /></a>
            <a href="#"><FaInstagram size={24} /></a>
            <a href="#"><FaLinkedin size={24} /></a>
          </div>
        </div>
        
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        © 2025 FlyRider. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
