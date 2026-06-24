import React, { useEffect, useRef } from "react";
import { 
  FaDocker, 
  FaReact, 
  FaGithub 
} from "react-icons/fa";
import { 
  DiMsqlServer 
} from "react-icons/di";
import { 
  TbBrandCSharp, 
  TbBrandAzure 
} from "react-icons/tb";
import { 
  SiDotnet 
} from "react-icons/si";
import "./floatingSkills.css";

const BADGES_DATA = [
  { name: "C#", icon: TbBrandCSharp, className: "floating-badge-csharp" },
  { name: "Azure", icon: TbBrandAzure, className: "floating-badge-azure" },
  { name: "ASP.NET Core", icon: SiDotnet, className: "floating-badge-dotnet" },
  { name: "Docker", icon: FaDocker, className: "floating-badge-docker" },
  { name: "SQL Server", icon: DiMsqlServer, className: "floating-badge-sql" },
  { name: "React", icon: FaReact, className: "floating-badge-react" },
  { name: "GitHub", icon: FaGithub, className: "floating-badge-github" }
];

export default function FloatingSkillsBackground() {
  const containerRef = useRef(null);
  const badgesRef = useRef([]);
  const particles = useRef([]);
  const mouse = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const container = containerRef.current;
    
    // Safe fallbacks to window size if container measures 0 initially
    let containerWidth = container ? container.offsetWidth : 0;
    let containerHeight = container ? container.offsetHeight : 0;
    if (containerWidth <= 0) containerWidth = window.innerWidth;
    if (containerHeight <= 0) containerHeight = window.innerHeight;

    const handleResize = () => {
      let w = container ? container.offsetWidth : 0;
      let h = container ? container.offsetHeight : 0;
      containerWidth = w > 0 ? w : window.innerWidth;
      containerHeight = h > 0 ? h : window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
      mouse.current.active = true;
    };

    const handleMouseLeave = () => {
      mouse.current.x = -1000;
      mouse.current.y = -1000;
      mouse.current.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Initialize particles immediately with safe defaults
    particles.current = BADGES_DATA.map(() => {
      const width = 140;
      const height = 45;
      // Place randomly with breathing room
      const x = Math.random() * (containerWidth - width - 100) + 50;
      const y = Math.random() * (containerHeight - height - 100) + 50;

      const angleDir = Math.random() * Math.PI * 2;
      const speed = Math.random() * 0.15 + 0.15; // slow drift (0.15 to 0.3 px/frame)
      const baseVx = Math.cos(angleDir) * speed;
      const baseVy = Math.sin(angleDir) * speed;

      return {
        element: null,
        x,
        y,
        vx: baseVx,
        vy: baseVy,
        baseVx,
        baseVy,
        width,
        height,
        angle: Math.random() * 10 - 5,
        va: (Math.random() - 0.5) * 0.05,
      };
    });

    // Physics update variables
    let animationFrameId;
    const REPEL_RADIUS = 220; // mouse repel range
    const FORCE_STRENGTH = 0.45; // force of the mouse push
    const BOUNCE_DAMPING = 0.88; // bounce soft dampening
    const RECOVERY_RATE = 0.025; // rate at which particles return to baseline speed

    const updatePhysics = () => {
      let currentWidth = container ? container.offsetWidth : 0;
      let currentHeight = container ? container.offsetHeight : 0;
      if (currentWidth <= 0) currentWidth = window.innerWidth;
      if (currentHeight <= 0) currentHeight = window.innerHeight;

      particles.current.forEach((p, idx) => {
        // Dynamically bind the DOM element if not yet set
        if (!p.element) {
          p.element = badgesRef.current[idx];
        }
        if (!p.element) return;

        // Dynamically measure its actual bounds once rendered
        if (p.element.offsetWidth > 0 && p.width === 140) {
          p.width = p.element.offsetWidth;
        }
        if (p.element.offsetHeight > 0 && p.height === 45) {
          p.height = p.element.offsetHeight;
        }

        // 1. Core drift and return force to base velocity
        p.vx += (p.baseVx - p.vx) * RECOVERY_RATE;
        p.vy += (p.baseVy - p.vy) * RECOVERY_RATE;

        // 2. Mouse Repelling Force
        if (mouse.current.active && mouse.current.x !== -1000) {
          const badgeCenterX = p.x + p.width / 2;
          const badgeCenterY = p.y + p.height / 2;
          const dx = badgeCenterX - mouse.current.x;
          const dy = badgeCenterY - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < REPEL_RADIUS && dist > 10) {
            const force = (1 - dist / REPEL_RADIUS) * FORCE_STRENGTH;
            const pushX = (dx / dist) * force;
            const pushY = (dy / dist) * force;

            p.vx += pushX;
            p.vy += pushY;
            p.va += pushX * 0.01;
          }
        }

        // Apply velocities
        p.x += p.vx;
        p.y += p.vy;

        // Subtle rotation update
        p.angle += p.va;
        p.va *= 0.98;

        if (p.angle > 15) { p.angle = 15; p.va = -Math.abs(p.va); }
        if (p.angle < -15) { p.angle = -15; p.va = Math.abs(p.va); }

        // 3. Edge bouncing & constraint
        if (p.x < 0) {
          p.x = 0;
          p.vx = Math.abs(p.vx) * BOUNCE_DAMPING;
          p.baseVx = Math.abs(p.baseVx);
        } else if (p.x + p.width > currentWidth) {
          p.x = currentWidth - p.width;
          p.vx = -Math.abs(p.vx) * BOUNCE_DAMPING;
          p.baseVx = -Math.abs(p.baseVx);
        }

        if (p.y < 0) {
          p.y = 0;
          p.vy = Math.abs(p.vy) * BOUNCE_DAMPING;
          p.baseVy = Math.abs(p.baseVy);
        } else if (p.y + p.height > currentHeight) {
          p.y = currentHeight - p.height;
          p.vy = -Math.abs(p.vy) * BOUNCE_DAMPING;
          p.baseVy = -Math.abs(p.baseVy);
        }

        // 4. Directly update DOM style
        p.element.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) rotate(${p.angle}deg)`;
      });

      animationFrameId = requestAnimationFrame(updatePhysics);
    };

    animationFrameId = requestAnimationFrame(updatePhysics);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="floating-skills-container" ref={containerRef}>
      {BADGES_DATA.map((badge, idx) => {
        const IconComponent = badge.icon;
        return (
          <div
            key={badge.name}
            className={`floating-badge ${badge.className}`}
            ref={(el) => (badgesRef.current[idx] = el)}
            style={{
              left: 0,
              top: 0,
              // Starting style, updated immediately by requestAnimationFrame
              transform: `translate3d(0px, 0px, 0) rotate(0deg)`,
            }}
          >
            <IconComponent />
            <span>{badge.name}</span>
          </div>
        );
      })}
    </div>
  );
}
