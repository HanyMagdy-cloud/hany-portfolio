import React from "react";
import "./skills.css";

const SKILLS = [
  {
    num: "1",
    title: "Proficiency in C#",
    text:
      "Strong knowledge of C# syntax, OOP principles, LINQ, async/await, and writing clean, maintainable code for real applications."
  },
  {
    num: "2",
    title: "ASP.NET Core / Web API",
    text:
      "Building RESTful APIs with controllers, routing, middleware, dependency injection, authentication/authorization, and best practices."
  },
  {
    num: "3",
    title: "Database & EF Core",
    text:
      "SQL Server fundamentals, query writing, data modeling, and Entity Framework Core for migrations, relationships, and efficient data access."
  },
  {
    num: "4",
    title: "Azure & DevOps",
    text:
      "Deploying apps to Azure (App Service), using cloud services, and working with CI/CD pipelines and Docker for scalable delivery."
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
          {SKILLS.map((s) => (
            <article className="skill-card" key={s.num}>
              <div className="skill-badge">{s.num}</div>

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
