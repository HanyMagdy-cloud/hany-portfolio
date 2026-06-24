import React from "react";
import { motion } from "framer-motion";
import "./about.css";
import Me from "../../assets/me.png";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <section id="about" className="about-wrap">
      <div className="about">
        {/* Sidebar - Slides in smoothly from the right */}
        <motion.aside 
          className="sidebar"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <img className="profile-image" src={Me} alt="Hany Magdy" />

          <h3>Contact</h3>
          <div className="sidebar-links">
            <a
              className="sidebar-link"
              href="https://www.linkedin.com/in/hany-magdy-40ba97271/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn: hany-magdy
            </a>

            <a
              className="sidebar-link"
              href="https://github.com/HanyMagdy-cloud"
              target="_blank"
              rel="noreferrer"
            >
              GitHub: HanyMagdy-cloud
            </a>

            <a className="sidebar-link" href="mailto:honamagdy2@yahoo.com">
              honamagdy2@yahoo.com
            </a>
          </div>
        </motion.aside>

        {/* Main Content - Slides in smoothly from the left with staggered text reveals */}
        <motion.div 
          className="main-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2 variants={itemVariants}>About Me</motion.h2>
          <motion.p className="subtitle" variants={itemVariants}>
            Cloud Developer · .NET · Azure
          </motion.p>

          <motion.p className="description" variants={itemVariants}>
            I&apos;m Hany Magdy, a Cloud / .NET Developer focused on building scalable
            APIs and cloud-ready applications. I enjoy clean architecture, writing
            maintainable code, and delivering practical solutions using C#, ASP.NET Core,
            SQL Server, and Azure.
          </motion.p>

          {/* Skill Tags */}
          <motion.div className="skills" variants={itemVariants}>
            <span className="skill-tag">C# / .NET</span>
            <span className="skill-tag">ASP.NET Core / Web API</span>
            <span className="skill-tag">SQL Server</span>
            <span className="skill-tag">Entity Framework</span>
            <span className="skill-tag">Azure App Service</span>
            <span className="skill-tag">CI/CD</span>
            <span className="skill-tag">Docker</span>
            <span className="skill-tag">React</span>
          </motion.div>

          {/* Structured Boxes */}
          <motion.div className="sections" variants={itemVariants}>
            <div className="section-box">
              <h3>What I do</h3>
              <ul>
                <li>Build REST APIs and backend services</li>
                <li>Design databases and optimize queries</li>
                <li>Deploy apps to Azure and automate CI/CD</li>
              </ul>
            </div>

            <div className="section-box">
              <h3>Expertise</h3>
              <ul>
                <li>Backend development with C# and ASP.NET Core</li>
                <li>Database design and SQL Server optimization</li>
                <li>Cloud architecture with Azure services</li>
                <li>API design and scalable application patterns</li>
              </ul>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div className="buttons" variants={itemVariants}>
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn-secondary" href="#contact">
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
