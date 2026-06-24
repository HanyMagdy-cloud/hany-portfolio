import React from "react";
import { motion } from "framer-motion";
import { FaFilePdf, FaDownload } from "react-icons/fa";
import CV from "../../assets/Hany_Magdy_CV.pdf";
import CoverLetter from "../../assets/Hany_Magdy_Cover_Letter.pdf";
import "./documents.css";

export default function Documents() {
  const headerVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <section id="documents" className="documents-dark">
      <div className="documents-shell">
        <motion.header 
          className="documents-head"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2>My Documents</h2>
          <p className="documents-subtitle">Downloadable professional credentials</p>
          <p className="documents-note">
            Access my comprehensive curriculum vitae and cover letter below.
          </p>
        </motion.header>

        <motion.div 
          className="documents-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Card 1: CV */}
          <motion.article 
            className="doc-card"
            variants={cardVariants}
          >
            <div className="doc-backdrop-glow" />
            <div className="doc-content">
              <div className="doc-icon-box">
                <FaFilePdf />
              </div>
              <h3>Curriculum Vitae</h3>
              <p className="doc-desc">
                My complete professional history, including full-stack development expertise, 
                cloud integrations with Azure, database architectures, and core project achievements.
              </p>
              <a 
                href={CV} 
                download="Hany_Magdy_CV.pdf"
                className="doc-btn"
                title="Download Hany Magdy CV"
              >
                <span>Download CV</span>
                <FaDownload className="btn-dl-icon" />
              </a>
            </div>
          </motion.article>

          {/* Card 2: Cover Letter */}
          <motion.article 
            className="doc-card"
            variants={cardVariants}
          >
            <div className="doc-backdrop-glow" />
            <div className="doc-content">
              <div className="doc-icon-box">
                <FaFilePdf />
              </div>
              <h3>Cover Letter</h3>
              <p className="doc-desc">
                A professional introduction explaining my engineering philosophies, passion for 
                building robust digital solutions, and alignment with target cloud developer positions.
              </p>
              <a 
                href={CoverLetter} 
                download="Hany_Magdy_Cover_Letter.pdf"
                className="doc-btn"
                title="Download Cover Letter"
              >
                <span>Download Letter</span>
                <FaDownload className="btn-dl-icon" />
              </a>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
