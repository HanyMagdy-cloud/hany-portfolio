import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import "./footer.css";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Footer() {
  const form = useRef();
  const [fromName, setFromName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [validationError, setValidationError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidationError("");

    if (!fromName.trim()) {
      setValidationError("Please enter your name.");
      return;
    }
    if (!fromEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fromEmail)) {
      setValidationError("Please enter a valid email address.");
      return;
    }
    if (!message.trim()) {
      setValidationError("Please write a message.");
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm(
        "service_dheff74",
        "template_bxdux09",
        form.current,
        "QEgRmqrcKj5ckBl-2",
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("success");
          setFromName("");
          setFromEmail("");
          setMessage("");
          setIsSending(false);
          form.current.reset();
          
          // Clear status after 5 seconds
          setTimeout(() => setStatus(null), 5000);
        },
        (err) => {
          console.error("FAILED...", err);
          setStatus("error");
          setIsSending(false);
        },
      );
  };

  const shellVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="contact" className="footer-dark">
      <motion.div 
        className="footer-shell"
        variants={shellVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.header className="footer-head" variants={itemVariants}>
          <h2>Contact Me</h2>
          <p className="footer-subtitle">
            Let’s build something great together
          </p>
        </motion.header>

        {/* Social icons */}
        <motion.nav className="footer-socials" aria-label="Social links" variants={itemVariants}>
          <motion.a
            className="social-btn"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            title="Facebook"
            whileHover={{ scale: 1.22, y: -6, rotate: 6 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <FaFacebook />
          </motion.a>

          <motion.a
            className="social-btn"
            href="https://github.com/HanyMagdy-cloud"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
            whileHover={{ scale: 1.22, y: -6, rotate: -6 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <FaGithub />
          </motion.a>

          <motion.a
            className="social-btn"
            href="https://www.linkedin.com/in/hany-magdy-40ba97271/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            whileHover={{ scale: 1.22, y: -6, rotate: 6 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <FaLinkedin />
          </motion.a>
        </motion.nav>

        {/* Contact form */}
        <motion.form 
          className="footer-form" 
          onSubmit={handleSubmit} 
          ref={form}
          variants={itemVariants}
        >
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

          <motion.button 
            className="send-btn" 
            type="submit" 
            disabled={isSending}
            whileHover={{ scale: 1.025, translateY: -2 }}
            whileTap={{ scale: 0.985 }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
          >
            {isSending ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>

        {/* Status Messages */}
        <div className="footer-status-container">
          {status === "success" && (
            <div className="status-message success">
              <i className="bi bi-check-circle-fill"></i>
              Thank you! Your message has been sent.
            </div>
          )}
          {status === "error" && (
            <div className="status-message error">
              <i className="bi bi-exclamation-triangle-fill"></i>
              Oops! Something went wrong. Please try again.
            </div>
          )}
          {validationError && (
            <div className="status-message error">
              <i className="bi bi-exclamation-triangle-fill"></i>
              {validationError}
            </div>
          )}
        </div>

        {/* Contact info */}
        <motion.div className="footer-meta" variants={itemVariants}>
          <p>
            Email:{" "}
            <a href="mailto:honamagdy2@yahoo.com">honamagdy2@yahoo.com</a>
          </p>
          <p>
            Phone: <a href="tel:+46790148754">+46 0790148754</a>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
