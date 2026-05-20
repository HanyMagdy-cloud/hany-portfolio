import React from "react";
import { motion } from "framer-motion";
import { 
  FaGlobe, 
  FaLock, 
  FaCloud, 
  FaCogs, 
  FaCheckCircle, 
  FaRocket, 
  FaGitAlt, 
  FaGithub, 
  FaDocker 
} from "react-icons/fa";
import "./skills.css";

const SKILLS = [
  {
    num: "01",
    badgeColor: "#8b5cf6",
    title: "C# Development",
    text: "Strong knowledge of C# syntax, OOP principles, LINQ, async/await, and clean architecture.",
    renderArtwork: () => (
      <div className="card-artwork csharp-art">
        <div className="artwork-bg-grid" />
        <div className="artwork-bg-code">
          <div>{`using System;`}</div>
          <div>{`using System.Threading.Tasks;`}</div>
          <div>{`public async Task<ServiceResult>`}</div>
          <div>{`  ExecuteAsync(Request req) {`}</div>
          <div>{`  var data = await _repo.GetAsync();`}</div>
          <div>{`  return ServiceResult.Ok(data);`}</div>
          <div>{`}`}</div>
        </div>
        <div className="glow-radial purple-glow" />
        <div className="scanner-line purple-scanner" />
        <div className="logo-box">
          <svg className="csharp-svg" viewBox="0 0 100 100" width="85" height="85">
            <polygon points="50,5 90,28 90,72 50,95 10,72 10,28" fill="url(#purpleGrad)" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="1.5" />
            <polygon points="50,11 84,31 84,69 50,89 16,69 16,31" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
            <text x="31" y="64" fill="#fff" fontFamily="Poppins, sans-serif" fontWeight="900" fontSize="30" filter="drop-shadow(0 2px 5px rgba(0,0,0,0.5))">C</text>
            <text x="56" y="55" fill="#d8b4fe" fontFamily="Poppins, sans-serif" fontWeight="900" fontSize="22" filter="drop-shadow(0 2px 5px rgba(0,0,0,0.5))">#</text>
            <defs>
              <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="50%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#4f46e5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="artwork-floating-tag purple-tag">OOP / LINQ</div>
      </div>
    )
  },
  {
    num: "02",
    badgeColor: "#3b82f6",
    title: "ASP.NET Core / Web API",
    text: "Building RESTful APIs with routing, middleware, dependency injection, and authentication.",
    renderArtwork: () => (
      <div className="card-artwork dotnet-art">
        <div className="artwork-bg-grid" />
        <div className="glow-radial blue-glow" />
        <div className="api-dashboard">
          <div className="api-panel">
            <span className="api-verb get">GET</span>
            <span className="api-path">/api/v1/users</span>
            <span className="api-status s200">200 OK</span>
          </div>
          <div className="api-panel">
            <span className="api-verb post">POST</span>
            <span className="api-path">/api/v1/auth</span>
            <span className="api-status s201">201</span>
          </div>
        </div>
        <div className="network-web">
          <div className="node globe-node" title="REST Endpoints"><FaGlobe /></div>
          <div className="node lock-node" title="Security & Auth"><FaLock /></div>
          <div className="node code-node" title="Middleware">{"{}"}</div>
          <svg viewBox="0 0 200 120" className="connector-svg">
            <path d="M 45 40 Q 100 20 155 40" fill="none" stroke="rgba(96,165,250,0.3)" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="45" y1="40" x2="100" y2="70" stroke="rgba(59,130,246,0.35)" strokeWidth="1.5" />
            <line x1="155" y1="40" x2="100" y2="70" stroke="rgba(59,130,246,0.35)" strokeWidth="1.5" />
            <line x1="100" y1="100" x2="100" y2="70" stroke="rgba(59,130,246,0.35)" strokeWidth="1.5" />
          </svg>
          <div className="net-core-pill">
            <span className="net-pill-text">.NET</span>
            <span className="net-pill-sub">CORE</span>
          </div>
        </div>
      </div>
    )
  },
  {
    num: "03",
    badgeColor: "#10b981",
    title: "Database & EF Core",
    text: "SQL Server, query optimization, Entity Framework Core, migrations, and relationships.",
    renderArtwork: () => (
      <div className="card-artwork database-art">
        <div className="artwork-bg-grid" />
        <div className="glow-radial green-glow" />
        <div className="db-layout">
          <div className="db-cylinder-stack">
            <div className="db-cylinder">
              <span className="db-light" />
            </div>
            <div className="db-cylinder">
              <span className="db-light" />
            </div>
            <div className="db-cylinder">
              <span className="db-light" />
            </div>
          </div>
          <div className="db-relation-visual">
            <div className="db-relation-box box-users">
              <span className="box-title">Users</span>
              <span className="box-field">ID (PK)</span>
            </div>
            <svg viewBox="0 0 60 40" className="relation-line-svg">
              <path d="M 5 20 Q 30 10 55 20" fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 2" />
              <circle cx="5" cy="20" r="3" fill="#10b981" />
              <circle cx="55" cy="20" r="3" fill="#10b981" />
            </svg>
            <div className="db-relation-box box-orders">
              <span className="box-title">Orders</span>
              <span className="box-field">UserID (FK)</span>
            </div>
          </div>
        </div>
        <div className="artwork-floating-tag green-tag">SQL / EF Core</div>
      </div>
    )
  },
  {
    num: "04",
    badgeColor: "#06b6d4",
    title: "Azure Cloud Services",
    text: "Deploying applications to Azure App Service and managing cloud resources.",
    renderArtwork: () => (
      <div className="card-artwork azure-art">
        <div className="artwork-bg-grid-azure" />
        <div className="glow-radial cyan-glow" />
        <div className="azure-illustration">
          <div className="cloud cloud-left"><FaCloud /></div>
          <div className="azure-badge-container">
            <svg className="azure-svg" viewBox="0 0 100 100" width="80" height="80">
              <polygon points="50,15 90,80 10,80" fill="none" stroke="#22d3ee" strokeWidth="2" filter="drop-shadow(0 0 5px rgba(6,182,212,0.4))" />
              <polygon points="50,27 82,75 18,75" fill="url(#azureGrad)" />
              <defs>
                <linearGradient id="azureGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="50%" stopColor="#0891b2" />
                  <stop offset="100%" stopColor="#0284c7" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="cloud cloud-right"><FaCloud /></div>
        </div>
        <div className="azure-status-panel">
          <div className="status-dot-pulse" />
          <span className="status-text">AZURE APP SERVICE • ACTIVE</span>
        </div>
      </div>
    )
  },
  {
    num: "05",
    badgeColor: "#38bdf8",
    title: "DevOps / Docker / CI-CD",
    text: "Working with CI/CD pipelines, containerization, and automated deployments.",
    renderArtwork: () => (
      <div className="card-artwork docker-art">
        <div className="artwork-bg-grid" />
        <div className="glow-radial blue-glow" />
        <div className="docker-ship">
          <div className="docker-whale-container">
            <FaDocker className="docker-whale-icon" />
            <div className="docker-cargo">
              <span className="cargo-box" />
              <span className="cargo-box" />
              <span className="cargo-box" />
            </div>
          </div>
          <div className="docker-timeline">
            <div className="time-node active-node">
              <span className="time-icon">{"</>"}</span>
              <span className="time-label">CODE</span>
            </div>
            <div className="time-node active-node">
              <span className="time-icon"><FaCogs /></span>
              <span className="time-label">BUILD</span>
            </div>
            <div className="time-node active-node">
              <span className="time-icon"><FaCheckCircle /></span>
              <span className="time-label">TEST</span>
            </div>
            <div className="time-node active-node">
              <span className="time-icon"><FaRocket /></span>
              <span className="time-label">DEPLOY</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    num: "06",
    badgeColor: "#a78bfa",
    title: "Git / GitHub / Clean Architecture",
    text: "Writing scalable, maintainable code following best practices and modern design principles.",
    renderArtwork: () => (
      <div className="card-artwork git-art">
        <div className="artwork-bg-grid" />
        <div className="glow-radial orange-glow" />
        <div className="git-layout">
          <div className="git-visual-tree">
            <svg viewBox="0 0 160 80" className="git-branch-svg" width="100%" height="60">
              <path d="M 10 40 L 150 40" fill="none" stroke="#475569" strokeWidth="3" />
              <path d="M 40 40 Q 60 15 80 15 L 120 15 Q 140 40 150 40" fill="none" stroke="#f97316" strokeWidth="2.5" />
              <path d="M 60 40 Q 80 65 100 65 L 130 65 Q 145 40 150 40" fill="none" stroke="#a78bfa" strokeWidth="2" />
              <circle cx="20" cy="40" r="5" fill="#cbd5e1" className="git-node" />
              <circle cx="50" cy="40" r="5" fill="#cbd5e1" className="git-node" />
              <circle cx="90" cy="15" r="4.5" fill="#f97316" className="git-node pulse-node" />
              <circle cx="110" cy="65" r="4" fill="#a78bfa" className="git-node" />
              <circle cx="140" cy="40" r="5" fill="#34d399" className="git-node" />
            </svg>
            <div className="git-brand-overlay">
              <FaGitAlt className="git-branch-icon" />
              <span className="brand-divider">/</span>
              <FaGithub className="github-cat-icon" />
            </div>
          </div>
          <div className="solid-layers">
            <div className="solid-layer ring-4">Presentation</div>
            <div className="solid-layer ring-3">Infrastructure</div>
            <div className="solid-layer ring-2">Application</div>
            <div className="solid-layer ring-1">Domain Model</div>
          </div>
        </div>
      </div>
    )
  }
];

export default function Skills() {
  const headerVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.93 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <section id="skills" className="skills-dark">
      <div className="skills-shell">
        <motion.header 
          className="skills-head"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2>My <span className="skills-gradient">Skills</span></h2>
          <div className="skills-underline" />
          <p className="skills-subtitle">Core competencies and technical expertise</p>
          <p className="skills-note">
            Specialized in building scalable cloud applications with modern .NET technologies
          </p>
        </motion.header>

        <motion.div 
          className="skills-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SKILLS.map((s) => (
            <motion.article
              className="skill-card-v2"
              key={s.num}
              variants={cardVariants}
            >
              <div className="card-top-half">
                {s.renderArtwork()}
              </div>

              <div className="card-bottom-half">
                <div className="card-title-row">
                  <span className="card-badge-num" style={{ backgroundColor: s.badgeColor }}>
                    {s.num}
                  </span>
                  <h3 className="card-badge-title">{s.title}</h3>
                </div>
                <p className="card-badge-desc">{s.text}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
