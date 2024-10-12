import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Important Links Section */}
        <div className="footer-section">
          <h4>Important Links</h4>
          <ul className="footer-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/help">Help Center</a></li>
            <li><a href="/faqs">FAQs</a></li>
          </ul>
        </div>
        
        {/* Contact Information Section */}
        <div className="footer-section">
          <h4>Contact Information</h4>
          <p>EM,4/1,Sector V , Kolkata, West Bengal</p>
          <p>Email: <a href="chandantmsl@it2027">support@egram-panchayat.gov</a></p>
          <p>Phone: +91 9142813122</p>
        </div>
        
        {/* Social Media Section */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="footer-social">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Egram Panchayat. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
