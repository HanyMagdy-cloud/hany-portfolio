import React, { useState } from "react";
import "./footer.css";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fromEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fromEmail)) {
      alert("Please enter a valid email.");
      return;
    }
    if (!message.trim()) {
      alert("Please write a message.");
      return;
    }

    const subject = `Portfolio contact from ${fromEmail}`;
    const body = `${message}\n\nFrom: ${fromEmail}`;

    window.location.href =
      `mailto:honamagdy2@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // optional: clear fields after opening mail app
    setFromEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="footer-dark">
      <div className="footer-shell">
        <header className="footer-head">
          <h2>Contact Me</h2>
          <p className="footer-subtitle">Let’s build something great together</p>
        </header>

        {/* Social icons */}
        <nav className="footer-socials" aria-label="Social links">
          <a
            className="social-btn"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            title="Facebook"
          >
            <FaFacebook />
          </a>

          <a
            className="social-btn"
            href="https://github.com/HanyMagdy-cloud"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub />
          </a>

          <a
            className="social-btn"
            href="https://www.linkedin.com/in/hany-magdy-40ba97271/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </nav>

        {/* Contact form */}
        <form className="footer-form" onSubmit={handleSubmit}>
          <label className="field">
            <span>Your Email</span>
            <input
              type="email"
              placeholder="you@example.com"
              value={fromEmail}
              onChange={(e) => setFromEmail(e.target.value)}
              required
            />
          </label>

          <label className="field">
            <span>Your Message</span>
            <textarea
              rows={5}
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>

          <button className="send-btn" type="submit">
            Send Message
          </button>
        </form>

        {/* Contact info */}
        <div className="footer-meta">
          <p>
            Email:{" "}
            <a href="mailto:honamagdy2@yahoo.com">honamagdy2@yahoo.com</a>
          </p>
          <p>
            Phone: <a href="tel:+46790148754">+46 0790148754</a>
          </p>
        </div>
      </div>
    </section>
  );
}
