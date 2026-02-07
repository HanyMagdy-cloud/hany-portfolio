import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/logo.jpeg";
import "./nav.css";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutside = (e) => {
      if (open && navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [open]);

  // Scroll + close
  const goTo = (id) => (e) => {
    e.preventDefault();

    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setOpen(false);
  };

  return (
    <nav ref={navRef} className="navbar navbar-expand-lg custom-nav fixed-top">
      <div className="container-fluid px-4">
        {/* Logo */}
        <a
          className="navbar-brand d-flex align-items-center gap-3"
          href="#home"
          onClick={goTo("#home")}
        >
          <img
            src={Logo}
            alt="Logo"
            width="44"
            height="44"
            className="rounded-circle shadow-sm"
          />

          <div className="brand-wrap">
            <span className="brand-badge">ASP.NET</span>
            <span className="brand-text">Hany Magdy</span>
          </div>
        </a>

        {/* Hamburger */}
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open ? "true" : "false"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links (we control show/hide) */}
        <div
          className={`navbar-collapse ${open ? "show" : "collapse"} justify-content-end`}
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-lg-center gap-lg-2 text-center">
            <li className="nav-item">
              <a
                className="nav-link custom-link"
                href="#home"
                onClick={goTo("#home")}
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link custom-link"
                href="#skills"
                onClick={goTo("#skills")}
              >
                SKILLS
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link custom-link"
                href="#projects"
                onClick={goTo("#projects")}
              >
                PROJECTS
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link custom-link"
                href="#about"
                onClick={goTo("#about")}
              >
                ABOUT ME
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link custom-link"
                href="#contact"
                onClick={goTo("#contact")}
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
