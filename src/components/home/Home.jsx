import React from "react";
import "./home.css";
import Me from "../../assets/me.png";
import CV from "../../assets/Cv.pdf";

export default function Home() {
  return (
    <section id="home" className="home-dark">
      <div className="hero">
        <img className="profile-image" src={Me} alt="Hany Magdy" />

        <div className="content">
          <h1>Welcome to My Portfolio</h1>
          <p className="subtitle">Cloud Developer with .NET & Azure</p>

          <p className="description">
            I build scalable APIs and cloud solutions using C#, ASP.NET Core, SQL
            Server, and Azure services. I enjoy solving real-world problems and
            delivering clean, maintainable code.
          </p>

          <div className="buttons">
            <a href={CV} className="btn btn-primary" download>
              Download my CV
            </a>

            <a href="#contact" className="btn btn-secondary">
              Let&apos;s talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
