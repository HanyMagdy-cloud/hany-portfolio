import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaUsers,
  FaGavel,
  FaAd,
  FaCloudSun,
  FaDatabase,
  FaListUl,
  FaCloudDownloadAlt,
  FaKey,
  FaAddressCard,
  FaUtensils,
  FaGlobe,
  FaUserCheck,
} from "react-icons/fa";
import "./projects.css";

const PROJECTS = [
  {
    name: "SaaS Applicant Tracking System",
    repo: "https://github.com/HanyMagdy-cloud/ATS.project.git",
    desc: "Multi-tenant SaaS architecture built with ASP.NET Core, Entity Framework Core, ASP.NET Identity, role-based access, Azure SQL, Azure App Service, Azure DevOps CI/CD, and a Kanban recruitment workflow.",
    glowClass: "community-glow",
    illustration: () => (
      <div className="project-artwork community-art">
        <div className="art-grid" />
        <div className="art-glow emerald-radial" />
        <div className="community-mesh-mock">
          <div className="terminal-header">
            <FaUserCheck />
            <span className="terminal-title">APPLICANT PIPELINE</span>
          </div>
          <div className="booking-grid">
            <div className="slot">APPLIED</div>
            <div className="slot active-slot">INTERVIEW</div>
            <div className="slot">OFFER</div>
            <div className="slot booked">HIRED</div>
          </div>
        </div>
        <div className="floating-badge cyan-badge">SaaS / Azure / Kanban</div>
      </div>
    ),
  },
  {
    name: "ZoPlanner – Scheduling Platform",
    desc: "Professional internship project at ZoCom. Contributed to a real scheduling platform during my internship at ZoCom. Developed ASP.NET Core Web API functionality, supported integrations with Java, JavaScript, and SQL, and worked on search and filtering features in an agile Scrum team.",
    glowClass: "car-glow",
    illustration: () => (
      <div className="project-artwork car-art">
        <div className="art-grid" />
        <div className="art-glow purple-radial" />
        <div className="car-hud-mock">
          <div className="terminal-header">
            <FaUsers />
            <span className="terminal-title">TEAM SCHEDULE</span>
          </div>
          <div className="booking-grid">
            <div className="slot booked">MON</div>
            <div className="slot active-slot">TUE</div>
            <div className="slot">WED</div>
            <div className="slot booked">THU</div>
          </div>
        </div>
        <div className="floating-badge purple-badge">ZoCom / Scrum / API</div>
      </div>
    ),
  },
  {
    name: "Cloud-Native Student Management Platform",
    repo: "https://github.com/HanyMagdy-cloud/Student-Solution-CRUD.git",
    desc: "A containerized student management platform combining an ASP.NET Core Web API with an MVC frontend and SQL Server. Features complete CRUD and search workflows, Docker Compose orchestration, secure Azure Key Vault configuration, and Azure DevOps CI/CD deployment through ACR and Azure Container Instances.",
    glowClass: "student-glow",
    illustration: () => (
      <div className="project-artwork student-art">
        <div className="art-grid" />
        <div className="art-glow green-radial" />
        <div className="crud-dashboard-mock">
          <div className="db-hud-header">
            <FaDatabase />
            <span>STUDENT PLATFORM</span>
          </div>
          <div className="crud-table-mock">
            <div className="table-row head">
              <span>SERVICE</span> <span>STATUS</span>
            </div>
            <div className="table-row">
              <span>WEB API</span> <span className="status-ok">RUNNING</span>
            </div>
            <div className="table-row">
              <span>MVC + SQL</span> <span className="status-pending">CONTAINERIZED</span>
            </div>
          </div>
        </div>
        <div className="floating-badge green-badge">Docker / Azure / CI/CD</div>
      </div>
    ),
  },
  {
    name: "Cloud-Based HR Management System",
    repo: "https://github.com/HanyMagdy-cloud/HR-matching-application.git",
    liveUrl: "https://hr-lia1.azurewebsites.net/",
    desc: "Superior Skills internship project: an ASP.NET MVC HR management system featuring role-based authentication and permission management, with Azure DevOps CI/CD deployment to Azure App Service using Azure SQL, Azure Key Vault, and Managed Identity.",
    glowClass: "bank-glow",
    illustration: () => (
      <div className="project-artwork bank-art">
        <div className="art-grid" />
        <div className="art-glow cyan-radial" />
        <div className="bank-dashboard-mock">
          <div className="terminal-header">
            <FaKey />
            <span className="terminal-title">HR ACCESS CONTROL</span>
          </div>
          <div className="api-logs">
            <div className="log-row">
              <span className="tag-get">ROLE</span>{" "}
              <span className="path">Permission Management</span>
            </div>
            <div className="log-row">
              <span className="tag-post">AZURE</span>{" "}
              <span className="path">Managed Identity / Key Vault</span>
            </div>
          </div>
        </div>
        <div className="floating-badge cyan-badge">MVC / Azure / CI/CD</div>
      </div>
    ),
  },
  {
    name: "Full-Stack Auction Platform – React and ASP.NET Core",
    repo: "https://github.com/HanyMagdy-cloud/JensenAuctionGroupAssignment.git",
    desc: "Full-stack auction platform built with React, JavaScript, and an ASP.NET Core Web API. Uses Dapper, SQL Server, stored procedures, JWT authentication, Swagger, and unit testing to support secure end-to-end bidding workflows.",
    glowClass: "jwt-glow",
    illustration: () => (
      <div className="project-artwork jwt-art">
        <div className="art-grid" />
        <div className="art-glow magenta-radial" />
        <div className="jwt-exchange-mock">
          <div className="jwt-header-box">
            <span className="jwt-tag-lbl">LIVE BIDDING / JWT SECURED</span>
          </div>
          <div className="jwt-auth-panel">
            <div className="jwt-token">React → Web API → Dapper → SQL</div>
            <div className="jwt-shield">
              <FaGavel className="pulse-key-sec" />
            </div>
          </div>
        </div>
        <div className="floating-badge magenta-badge">React / ASP.NET Core</div>
      </div>
    ),
  },
  {
    name: "Azure Image Management Application",
    repo: "https://github.com/HanyMagdy-cloud/ImageStoreApplication",
    desc: "ASP.NET Core MVC application deployed to Azure App Service, using Azure Blob Storage for file upload and retrieval and Azure SQL for structured metadata. Its architecture keeps binary image files separate from relational data for scalable cloud storage.",
    glowClass: "imagestore-glow",
    illustration: () => (
      <div className="project-artwork imagestore-art">
        <div className="art-grid" />
        <div className="art-glow azure-radial" />
        <div className="cloud-storage-mock">
          <div className="cloud-icon-box">
            <FaCloudDownloadAlt className="cloud-float-icon" />
          </div>
          <div className="upload-progress-hud">
            <div className="hud-title-row">
              <span>Blob: image.jpg</span> <span>100%</span>
            </div>
            <div className="progress-bar-container">
              <div className="progress-fill-glow" />
            </div>
          </div>
        </div>
        <div className="floating-badge azure-badge">Blob Storage / Azure SQL</div>
      </div>
    ),
  },
  {
    name: "Secure Hotel Operations and Search Platform",
    repo: "https://github.com/HanyMagdy-cloud/StockholmInnBlacklist.git",
    desc: "A secure cloud-based hotel application with search, pagination, operational dashboards, and passwordless Azure SQL authentication using Managed Identity. Built with ASP.NET Core MVC, C#, Entity Framework Core, Azure SQL, and Azure App Service.",
    glowClass: "hr-glow",
    illustration: () => (
      <div className="project-artwork hr-art">
        <div className="art-grid" />
        <div className="art-glow indigo-radial" />
        <div className="hr-match-mock">
          <div className="hr-header-box">
            <FaUserCheck />
            <span>HOTEL OPERATIONS</span>
          </div>
          <div className="matcher-results">
            <div className="result-row">
              <span>SEARCH &amp; FILTER</span>
              <span className="match-ok">READY</span>
            </div>
            <div className="result-row">
              <span>AZURE SQL</span>
              <span className="match-ok">IDENTITY</span>
            </div>
            <div className="match-bar-container">
              <div className="match-fill" />
            </div>
          </div>
        </div>
        <div className="floating-badge indigo-badge">MVC / Azure / Managed Identity</div>
      </div>
    ),
  },
  {
    name: "Community Content Management API",
    repo: "https://github.com/HanyMagdy-cloud/Community.git",
    desc: "A RESTful community platform built with ASP.NET Core, Dapper, and SQL Server for managing users, blog posts, categories, and comments. Implements ownership-based authorization, permission-aware user actions, repository pattern, dependency injection, stored procedures, search, and Swagger documentation.",
    glowClass: "community-glow",
    illustration: () => (
      <div className="project-artwork community-art">
        <div className="art-grid" />
        <div className="art-glow emerald-radial" />
        <div className="community-mesh-mock">
          <div className="node-center">
            <FaUsers />
          </div>
          <div className="node-orbital orb-1" />
          <div className="node-orbital orb-2" />
          <div className="node-orbital orb-3" />
          <svg viewBox="0 0 200 120" className="mesh-lines">
            <line x1="100" y1="60" x2="45" y2="30" stroke="rgba(52, 211, 153, 0.4)" strokeWidth="1.5" />
            <line x1="100" y1="60" x2="155" y2="30" stroke="rgba(52, 211, 153, 0.4)" strokeWidth="1.5" />
            <line x1="100" y1="60" x2="100" y2="95" stroke="rgba(52, 211, 153, 0.4)" strokeWidth="1.5" />
            <circle cx="45" cy="30" r="6" fill="#10b981" />
            <circle cx="155" cy="30" r="6" fill="#10b981" />
            <circle cx="100" cy="95" r="6" fill="#10b981" />
          </svg>
        </div>
        <div className="floating-badge emerald-badge">Dapper / SQL / Swagger</div>
      </div>
    ),
  },
  {
    name: "Secure Banking Management API",
    repo: "https://github.com/HanyMagdy-cloud/Bank.git",
    desc: "A secure RESTful banking API built with ASP.NET Core and SQL Server for managing customers, accounts, cards, loans, fund transfers, and transaction histories. Implements JWT authentication and authorization to protect financial operations and account data.",
    glowClass: "bank-glow",
    illustration: () => (
      <div className="project-artwork bank-art">
        <div className="art-grid" />
        <div className="art-glow cyan-radial" />
        <div className="bank-dashboard-mock">
          <div className="mock-hud">
            <FaKey className="shield-pulse" />
            <div className="hud-metric">
              <span className="metric-lbl">SECURE BANKING API</span>
              <span className="metric-val text-cyan">JWT AUTHORIZED</span>
            </div>
          </div>
          <div className="api-logs">
            <div className="log-row">
              <span className="tag-get">GET</span>{" "}
              <span className="path">/api/accounts/transactions</span>
            </div>
            <div className="log-row">
              <span className="tag-post">POST</span>{" "}
              <span className="path">/api/transfers</span>
            </div>
          </div>
        </div>
        <div className="floating-badge cyan-badge">ASP.NET Core / SQL / JWT</div>
      </div>
    ),
  },
  {
    name: "Real-Time Weather Forecast Application",
    repo: "https://github.com/HanyMagdy-cloud/Weather.git",
    desc: "A responsive React weather application that integrates with the OpenWeatherMap API to provide real-time conditions and five-day forecasts for cities worldwide. Features city search, temperature and weather details, wind speed and direction, and dynamic weather icons.",
    glowClass: "weather-glow",
    illustration: () => (
      <div className="project-artwork weather-art">
        <div className="art-grid" />
        <div className="art-glow sky-radial" />
        <div className="weather-hud-mock">
          <div className="weather-header">
            <FaCloudSun className="weather-icon-pulse" />
            <div className="temp-info">
              <span className="temp-val">24°C</span>
              <span className="temp-city">Stockholm</span>
            </div>
          </div>
          <div className="forecast-pills">
            <div className="pill-day">Mon 21°</div>
            <div className="pill-day">Tue 23°</div>
            <div className="pill-day active-day">Wed 24°</div>
          </div>
        </div>
        <div className="floating-badge sky-badge">React / OpenWeatherMap</div>
      </div>
    ),
  },
  {
    name: "Web API Advertisement App",
    repo: "https://github.com/HanyMagdy-cloud/Category",
    desc: "Advertisement management API with targeting and campaign controls.",
    glowClass: "ad-glow",
    illustration: () => (
      <div className="project-artwork ad-art">
        <div className="art-grid" />
        <div className="art-glow rose-radial" />
        <div className="campaign-hud-mock">
          <div className="chart-header">
            <FaAd />
            <span>CAMPAIGN CTR</span>
          </div>
          <div className="bar-chart-visual">
            <div className="chart-bar bar-1" style={{ height: "40%" }} />
            <div className="chart-bar bar-2" style={{ height: "75%" }} />
            <div className="chart-bar bar-3" style={{ height: "60%" }} />
            <div className="chart-bar bar-4" style={{ height: "90%" }} />
          </div>
        </div>
        <div className="floating-badge rose-badge">Web API / AdTech</div>
      </div>
    ),
  },
  {
    name: "ToDoList – Full Stack MVC + API (.NET 9)",
    repo: "https://github.com/HanyMagdy-cloud/To-Do-Iist-App",
    desc: "Full stack ToDo application with MVC, Web API, and modern UI.",
    glowClass: "todo-glow",
    illustration: () => (
      <div className="project-artwork todo-art">
        <div className="art-grid" />
        <div className="art-glow violet-radial" />
        <div className="todo-panel-mock">
          <div className="todo-header-bar">
            <FaListUl />
            <span>MY WORKFLOW</span>
          </div>
          <div className="todo-list-rows">
            <div className="todo-item-row done">
              <span className="checkbox checked" />
              <span className="todo-text line-through">
                Configure .NET 9 API
              </span>
            </div>
            <div className="todo-item-row">
              <span className="checkbox" />
              <span className="todo-text">Deploy Docker Container</span>
            </div>
          </div>
        </div>
        <div className="floating-badge violet-badge">.NET 9 / MVC</div>
      </div>
    ),
  },
  {
    name: "User Identity.EF",
    repo: "https://github.com/HanyMagdy-cloud/IdentityUser",
    desc: "Identity management application using Entity Framework for user authentication.",
    glowClass: "identity-glow",
    illustration: () => (
      <div className="project-artwork identity-art">
        <div className="art-grid" />
        <div className="art-glow red-radial" />
        <div className="auth-shield-mock">
          <div className="auth-shield-box">
            <FaKey className="key-spin" />
          </div>
          <div className="auth-status-box">
            <div className="auth-status active-auth">AUTHENTICATED</div>
            <div className="auth-user">user@hany-portfolio.cloud</div>
          </div>
        </div>
        <div className="floating-badge red-badge">EF Core / Auth</div>
      </div>
    ),
  },
  {
    name: "Address Book windows Application",
    repo: "https://github.com/HanyMagdy-cloud/Address-book",
    desc: "Windows desktop application for managing contacts and addresses.",
    glowClass: "address-glow",
    illustration: () => (
      <div className="project-artwork address-art">
        <div className="art-grid" />
        <div className="art-glow teal-radial" />
        <div className="address-gui-mock">
          <div className="gui-bar">
            <FaAddressCard />
            <span>CONTACTS DIRECTORY</span>
          </div>
          <div className="gui-body">
            <div className="gui-search">
              <span className="search-text">Search...</span>
            </div>
            <div className="contact-strip">
              <span className="dot-avatar" />
              <span className="contact-name">Hany Magdy (Dev)</span>
            </div>
          </div>
        </div>
        <div className="floating-badge teal-badge">Windows / Desktop</div>
      </div>
    ),
  },
  {
    name: "Group Project – Recipe Application- windows application",
    repo: "https://github.com/HanyMagdy-cloud/International-Food-AB",
    desc: "Recipe management application developed as a group project using Windows Forms.",
    glowClass: "recipe-glow",
    illustration: () => (
      <div className="project-artwork recipe-art">
        <div className="art-grid" />
        <div className="art-glow orange-radial" />
        <div className="recipe-hud-mock">
          <div className="recipe-bar">
            <FaUtensils />
            <span>RECIPE CATALOG</span>
          </div>
          <div className="recipe-body">
            <div className="recipe-card-mini">
              <div className="recipe-title">Swedish Meatballs</div>
              <div className="recipe-rating">★★★★★ 5.0</div>
            </div>
          </div>
        </div>
        <div className="floating-badge orange-badge">Group / WinForms</div>
      </div>
    ),
  },
  ];

export default function Projects() {
  const headerVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.94 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section id="projects" className="projects-dark">
      <div className="projects-shell">
        <motion.header
          className="projects-head"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2>
            My <span className="projects-gradient">Projects</span>
          </h2>
          <div className="projects-underline" />
          <p className="projects-subtitle">
            Selected work and GitHub repositories
          </p>
          <p className="projects-note">
            Click a GitHub icon to open the repository or a globe icon to visit a live project.
          </p>
        </motion.header>

        <motion.div
          className="projects-list"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {PROJECTS.map((p) => (
            <motion.article
              className={`project-item ${p.glowClass}`}
              key={p.name}
              variants={itemVariants}
            >
              <div className="project-top-visual">{p.illustration()}</div>

              <div className="project-bottom-content">
                <div className="project-text-block">
                  <h3 className="project-title">{p.name}</h3>
                  <p className="project-desc">{p.desc}</p>
                </div>

                {(p.repo || p.liveUrl) && (
                  <div className="project-actions">
                    {p.liveUrl && (
                      <a
                        className="project-action-btn project-live-btn"
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit the live ${p.name} project`}
                        title="Visit live project"
                      >
                        <FaGlobe />
                      </a>
                    )}

                    {p.repo && (
                      <a
                        className="project-action-btn project-github-btn"
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${p.name} repository on GitHub`}
                        title="Open GitHub repo"
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
