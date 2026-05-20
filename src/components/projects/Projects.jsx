import React from "react";
import { motion } from "framer-motion";
import "./projects.css";
import { FaGithub } from "react-icons/fa";

const PROJECTS = [
  { name: "Bank Web API", repo: "https://github.com/HanyMagdy-cloud/Bank" },
  {
    name: "Car wash booking system",
    repo: "https://github.com/HanyMagdy-cloud/CarWashStation.git",
  },
  {
    name: "Community Web API",
    repo: "https://github.com/HanyMagdy-cloud/community",
  },
  {
    name: "Restaurant International Desktop App",
    repo: "https://github.com/HanyMagdy-cloud/Restaurant01",
  },
  {
    name: "Auction Web API",
    repo: "https://github.com/HanyMagdy-cloud/auction",
  },
  {
    name: "Web API Advertisement App",
    repo: "https://github.com/HanyMagdy-cloud/Category",
  },
  { name: "Weather App", repo: "https://github.com/HanyMagdy-cloud/Weather" },
  {
    name: "Student-Solution-CRUD",
    repo: "https://github.com/HanyMagdy-cloud/Student-Solution-CRUD",
  },
  {
    name: "ToDoList – Full Stack MVC + API (.NET 9)",
    repo: "https://github.com/HanyMagdy-cloud/To-Do-Iist-App",
  },
  {
    name: "ImageStore Application using cloud storage",
    repo: "https://github.com/HanyMagdy-cloud/ImageStoreApplication",
  },
  {
    name: "User Identity.EF",
    repo: "https://github.com/HanyMagdy-cloud/IdentityUser",
  },
  {
    name: "Address Book windows Application",
    repo: "https://github.com/HanyMagdy-cloud/Address-book",
  },
  {
    name: "Group Project – Recipe Application- windows application",
    repo: "https://github.com/HanyMagdy-cloud/International-Food-AB",
  },
  {
    name: "Auction Website- fullstack app - JWT ",
    repo: "https://github.com/HanyMagdy-cloud/JensenAuctionGroupAssignment",
  },
  {
    name: "HR Matching Application",
    repo: "https://github.com/HanyMagdy-cloud/HR-matching-application/blob/master/README.md",
  },
];

export default function Projects() {
  const headerVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }
    }
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
          <h2>My Projects</h2>
          <p className="projects-subtitle">
            Selected work and GitHub repositories
          </p>
          <p className="projects-note">
            Click the GitHub icon to open each repository.
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
              className="project-item" 
              key={p.name}
              variants={itemVariants}
            >
              {/* Premium graphical glow backdrop for interactive zooms */}
              <div className="project-backdrop-glow" />

              <div className="project-left">
                <h3 className="project-title">{p.name}</h3>
                <p className="project-desc">Repository available on GitHub.</p>
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
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
