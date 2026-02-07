import React from "react";
import "./projects.css";
import { FaGithub } from "react-icons/fa";

const PROJECTS = [
  { name: "Bank Web API", repo: "https://github.com/HanyMagdy-cloud/Bank" },
  { name: "Community Web API", repo: "https://github.com/HanyMagdy-cloud/community" },
  { name: "Restaurant International Desktop App", repo: "https://github.com/HanyMagdy-cloud/restaurant-international-desktop" },
  { name: "Auction Web API", repo: "https://github.com/HanyMagdy-cloud/auction" },
  { name: "Web API Advertisement App", repo: "https://github.com/HanyMagdy-cloud/ads-app" },
  { name: "Shotgun Windows Forms App", repo: "https://github.com/HanyMagdy-cloud/shotgun-winform" },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-dark">
      <div className="projects-shell">
        <header className="projects-head">
          <h2>My Projects</h2>
          <p className="projects-subtitle">Selected work and GitHub repositories</p>
          <p className="projects-note">
            Click the GitHub icon to open each repository.
          </p>
        </header>

        <div className="projects-list">
          {PROJECTS.map((p) => (
            <article className="project-item" key={p.name}>
              <div className="project-left">
                <h3 className="project-title">{p.name}</h3>
                <p className="project-desc">
                  Repository available on GitHub.
                </p>
              </div>

              <a
                className="project-github"
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${p.name} repository on GitHub`}
                title="Open GitHub repo"
              >
                <FaGithub />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
