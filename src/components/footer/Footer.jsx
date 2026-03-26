import React, { useState, useRef } from "react";
import "./footer.css";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Footer() {
  const form = useRef();
  const [fromName, setFromName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fromName.trim()) {
      alert("Please enter your name.");
      return;
    }
    if (!fromEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fromEmail)) {
      alert("Please enter a valid email.");
      return;
    }
    if (!message.trim()) {
      alert("Please write a message.");
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm(
        "service_nlemyzd",
        "template_bxdux09",
        form.current,
        "QEgRmqrcKj5ckBl-2",
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          setFromName("");
          setFromEmail("");
          setMessage("");
          setIsSending(false);
          form.current.reset();
        },
        (err) => {
          console.log("FAILED...", err);
          alert(`Failed to send message: ${err.text || "Unknown error"}`);
          setIsSending(false);
        },
      );
  };

  return (
    <section id="contact" className="footer-dark">
      <div className="footer-shell">
        <header className="footer-head">
          <h2>Contact Me</h2>
          <p className="footer-subtitle">
            Let’s build something great together
          </p>
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
        <form className="footer-form" onSubmit={handleSubmit} ref={form}>
          <label className="field">
            <span>Your Name</span>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={fromName}
              onChange={(e) => setFromName(e.target.value)}
              required
            />
          </label>

          <label className="field">
            <span>Your Email</span>
            <input
              type="email"
              name="email"
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
              name="message"
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>

          <button className="send-btn" type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
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
