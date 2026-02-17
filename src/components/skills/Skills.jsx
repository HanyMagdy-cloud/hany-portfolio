import React from "react";
import "./skills.css";
import { 
  FaCode, 
  FaCloud, 
  FaDatabase, 
  FaCogs, 
  FaDocker, 
  FaServer 
} from "react-icons/fa";



const SKILLS = [
  {
    num: "1",
    icon: <FaCode />,
    title: "Proficiency in C#",
    text:
      "Strong knowledge of C# syntax, OOP principles, LINQ, async/await, and clean architecture."
  },
  {
    num: "2",
    icon: <FaServer />,
    title: "ASP.NET Core / Web API",
    text:
      "Building RESTful APIs with routing, middleware, dependency injection, and authentication."
  },
  {
    num: "3",
    icon: <FaDatabase />,
    title: "Database & EF Core",
    text:
      "SQL Server, query optimization, Entity Framework Core, migrations, and relationships."
  },
  {
    num: "4",
    icon: <FaCloud />,
    title: "Azure & Cloud Services",
    text:
      "Deploying applications to Azure App Service and managing cloud resources."
  },
  {
    num: "5",
    icon: <FaDocker />,
    title: "DevOps & Docker",
    text:
      "Working with CI/CD pipelines, containerization, and automated deployments."
  },
  {
    num: "6",
    icon: <FaCogs />,
    title: "Clean Architecture & SOLID",
    text:
      "Writing scalable, maintainable code following best practices and design principles."
  }
];


export default function Skills() {
  return (
    <section id="skills" className="skills-dark">
      <div className="skills-shell">
        <header className="skills-head">
          <h2>My Skills</h2>
          <p className="skills-subtitle">Core competencies and technical expertise</p>
          <p className="skills-note">
            Specialized in building scalable cloud applications with modern .NET technologies
          </p>
        </header>

        <div className="skills-grid">
          {SKILLS.map((s, i) => (
            <article
              className="skill-card"
              key={s.num}
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="skill-left">
                <div className="skill-icon">{s.icon}</div>
                <div className="skill-badge">{s.num}</div>
              </div>

              <div className="skill-body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
