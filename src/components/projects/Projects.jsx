import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaShieldAlt,
  FaCar,
  FaUsers,
  FaDesktop,
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
    name: "Bank Web API",
    repo: "https://github.com/HanyMagdy-cloud/Bank",
    desc: "Secure RESTful API for banking operations with authentication & authorization.",
    glowClass: "bank-glow",
    illustration: () => (
      <div className="project-artwork bank-art">
        <div className="art-grid" />
        <div className="art-glow cyan-radial" />
        <div className="bank-dashboard-mock">
          <div className="mock-hud">
            <FaShieldAlt className="shield-pulse" />
            <div className="hud-metric">
              <span className="metric-lbl">API LEDGER</span>
              <span className="metric-val text-cyan">$142,850</span>
            </div>
          </div>
          <div className="api-logs">
            <div className="log-row">
              <span className="tag-get">GET</span>{" "}
              <span className="path">/api/v1/ledger</span>
            </div>
            <div className="log-row">
              <span className="tag-post">POST</span>{" "}
              <span className="path">/api/v1/transfer</span>
            </div>
          </div>
        </div>
        <div className="floating-badge cyan-badge">REST API / Secure</div>
      </div>
    ),
  },
  {
    name: "Car wash booking system",
    repo: "https://github.com/HanyMagdy-cloud/CarWashStation.git",
    desc: "Online booking platform for car wash services with payment integration.",
    glowClass: "car-glow",
    illustration: () => (
      <div className="project-artwork car-art">
        <div className="art-grid" />
        <div className="art-glow purple-radial" />
        <div className="car-hud-mock">
          <div className="terminal-header">
            <FaCar className="car-icon-slide" />
            <span className="terminal-title">WASH BOOKING</span>
          </div>
          <div className="booking-grid">
            <div className="slot booked">09:00</div>
            <div className="slot active-slot">10:30</div>
            <div className="slot">12:00</div>
            <div className="slot booked">13:30</div>
          </div>
        </div>
        <div className="floating-badge purple-badge">MVC / Booking</div>
      </div>
    ),
  },
  {
    name: "Community Web API",
    repo: "https://github.com/HanyMagdy-cloud/community",
    desc: "Community management API for users, interaction, and member connectivity.",
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
            <line
              x1="100"
              y1="60"
              x2="45"
              y2="30"
              stroke="rgba(52, 211, 153, 0.4)"
              strokeWidth="1.5"
            />
            <line
              x1="100"
              y1="60"
              x2="155"
              y2="30"
              stroke="rgba(52, 211, 153, 0.4)"
              strokeWidth="1.5"
            />
            <line
              x1="100"
              y1="60"
              x2="100"
              y2="95"
              stroke="rgba(52, 211, 153, 0.4)"
              strokeWidth="1.5"
            />
            <circle cx="45" cy="30" r="6" fill="#10b981" />
            <circle cx="155" cy="30" r="6" fill="#10b981" />
            <circle cx="100" cy="95" r="6" fill="#10b981" />
          </svg>
        </div>
        <div className="floating-badge emerald-badge">Web API / Clean</div>
      </div>
    ),
  },
  {
    name: "Restaurant International Desktop App",
    repo: "https://github.com/HanyMagdy-cloud/Restaurant01",
    desc: "Desktop application for restaurant management and operations.",
    glowClass: "restaurant-glow",
    illustration: () => (
      <div className="project-artwork restaurant-art">
        <div className="art-grid" />
        <div className="art-glow pink-radial" />
        <div className="pos-terminal-mock">
          <div className="terminal-bar">
            <FaDesktop />
            <span className="terminal-title">POS DESKTOP</span>
          </div>
          <div className="terminal-body">
            <div className="order-item">
              <span>Burger x2</span> <span className="text-pink">$18.00</span>
            </div>
            <div className="order-item">
              <span>Pizza x1</span> <span className="text-pink">$14.50</span>
            </div>
            <div className="order-item total">
              <span>TOTAL</span> <span className="text-white">$32.50</span>
            </div>
          </div>
        </div>
        <div className="floating-badge pink-badge">WinForms / OOP</div>
      </div>
    ),
  },
  {
    name: "Auction Web API",
    repo: "https://github.com/HanyMagdy-cloud/auction",
    desc: "Auction system API for managing bids, users, and real-time updates.",
    glowClass: "auction-glow",
    illustration: () => (
      <div className="project-artwork auction-art">
        <div className="art-grid" />
        <div className="art-glow amber-radial" />
        <div className="bidding-hud-mock">
          <div className="gavel-box">
            <FaGavel className="gavel-swing" />
          </div>
          <div className="bid-board">
            <div className="active-bid">CURRENT: $1,450</div>
            <div className="bid-badge-item">SOLD</div>
          </div>
        </div>
        <div className="floating-badge amber-badge">JWT / Bidding</div>
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
    name: "Weather App",
    repo: "https://github.com/HanyMagdy-cloud/Weather",
    desc: "Weather application providing real-time forecasts and location-based data.",
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
        <div className="floating-badge sky-badge">REST / Weather</div>
      </div>
    ),
  },
  {
    name: "Student-Solution-CRUD",
    repo: "https://github.com/HanyMagdy-cloud/Student-Solution-CRUD",
    desc: "CRUD operations for student solutions with clean architecture and best practices.",
    glowClass: "student-glow",
    illustration: () => (
      <div className="project-artwork student-art">
        <div className="art-grid" />
        <div className="art-glow green-radial" />
        <div className="crud-dashboard-mock">
          <div className="db-hud-header">
            <FaDatabase />
            <span>STUDENT_DB</span>
          </div>
          <div className="crud-table-mock">
            <div className="table-row head">
              <span>NAME</span> <span>STATUS</span>
            </div>
            <div className="table-row">
              <span>Hany M.</span> <span className="status-ok">GRADUATED</span>
            </div>
            <div className="table-row">
              <span>Alice S.</span>{" "}
              <span className="status-pending">ACTIVE</span>
            </div>
          </div>
        </div>
        <div className="floating-badge green-badge">CRUD / Clean Arch</div>
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
    name: "ImageStore Application using cloud storage",
    repo: "https://github.com/HanyMagdy-cloud/ImageStoreApplication",
    desc: "Image storage application using Azure Cloud Storage with secure access.",
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
              <span>AzureUpload.jpg</span> <span>100%</span>
            </div>
            <div className="progress-bar-container">
              <div className="progress-fill-glow" />
            </div>
          </div>
        </div>
        <div className="floating-badge azure-badge">Azure / Storage</div>
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
  {
    name: "Auction Website- fullstack app - JWT ",
    repo: "https://github.com/HanyMagdy-cloud/JensenAuctionGroupAssignment",
    desc: "Full stack auction website with JWT authentication and secure APIs.",
    glowClass: "jwt-glow",
    illustration: () => (
      <div className="project-artwork jwt-art">
        <div className="art-grid" />
        <div className="art-glow magenta-radial" />
        <div className="jwt-exchange-mock">
          <div className="jwt-header-box">
            <span className="jwt-tag-lbl">JWT SECURED</span>
          </div>
          <div className="jwt-auth-panel">
            <div className="jwt-token">
              eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
            </div>
            <div className="jwt-shield">
              <FaKey className="pulse-key-sec" />
            </div>
          </div>
        </div>
        <div className="floating-badge magenta-badge">JWT / Fullstack</div>
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
            Click on GitHub icon to open each repository.
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

                <a
                  className="project-github-btn"
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${p.name} repository on GitHub`}
                  title="Open GitHub repo"
                >
                  <FaGithub />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
