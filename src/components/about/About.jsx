import React from "react";
import "./about.css";
import Me from "../../assets/me.png";

export default function About() {
  return (
    <section id="about" className="about-wrap">
      <div className="about">
        {/* Sidebar */}
        <aside className="sidebar">
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
        </aside>

        {/* Main Content */}
        <div className="main-content">
          <h2>About Me</h2>
          <p className="subtitle">Cloud Developer · .NET · Azure</p>

          <p className="description">
            I&apos;m Hany Magdy, a Cloud / .NET Developer focused on building scalable
            APIs and cloud-ready applications. I enjoy clean architecture, writing
            maintainable code, and delivering practical solutions using C#, ASP.NET Core,
            SQL Server, and Azure.
          </p>

          {/* Skill Tags */}
          <div className="skills">
            <span className="skill-tag">C# / .NET</span>
            <span className="skill-tag">ASP.NET Core / Web API</span>
            <span className="skill-tag">SQL Server</span>
            <span className="skill-tag">Entity Framework</span>
            <span className="skill-tag">Azure App Service</span>
            <span className="skill-tag">CI/CD</span>
            <span className="skill-tag">Docker</span>
            <span className="skill-tag">React</span>
          </div>

          {/* Structured Boxes */}
          <div className="sections">
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
          </div>

          {/* Buttons */}
          <div className="buttons">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn-secondary" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
