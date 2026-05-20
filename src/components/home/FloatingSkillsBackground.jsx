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
    if (!container) return;

    // Get current container dimensions
    let containerWidth = container.offsetWidth;
    let containerHeight = container.offsetHeight;

    // Setup resize listener to dynamically adapt boundaries
    const handleResize = () => {
      if (container) {
        containerWidth = container.offsetWidth;
        containerHeight = container.offsetHeight;
      }
    };
    window.addEventListener("resize", handleResize);

    // Track mouse movements relative to the home section container
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      // Mouse coordinates relative to this container
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
      mouse.current.active = true;
    };

    const handleMouseLeave = () => {
      mouse.current.x = -1000;
      mouse.current.y = -1000;
      mouse.current.active = false;
    };

    // Attach listeners globally to window for full-page hover repulsion
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Initialize particles once badges are mounted
    const initParticles = () => {
      particles.current = BADGES_DATA.map((badge, idx) => {
        const el = badgesRef.current[idx];
        const width = el ? el.offsetWidth : 140;
        const height = el ? el.offsetHeight : 45;

        // Place them randomly in the container, leaving a margin
        const x = Math.random() * (containerWidth - width - 100) + 50;
        const y = Math.random() * (containerHeight - height - 100) + 50;

        // Base drift speed
        const angleDir = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.15 + 0.15; // slow drift (0.15 to 0.3 px/frame)
        const baseVx = Math.cos(angleDir) * speed;
        const baseVy = Math.sin(angleDir) * speed;

        return {
          element: el,
          x,
          y,
          vx: baseVx,
          vy: baseVy,
          baseVx,
          baseVy,
          width,
          height,
          angle: Math.random() * 10 - 5, // starting angle
          va: (Math.random() - 0.5) * 0.05, // angular velocity
        };
      });
    };

    // Small delay to ensure the DOM elements are rendered and their widths can be measured
    const timeoutId = setTimeout(() => {
      initParticles();
    }, 100);

    // Animation variables
    let animationFrameId;
    const REPEL_RADIUS = 220; // mouse repel range
    const FORCE_STRENGTH = 0.45; // force of the mouse push
    const BOUNCE_DAMPING = 0.88; // bounce soft dampening
    const RECOVERY_RATE = 0.025; // rate at which particles return to baseline speed

    // Physics update loop
    const updatePhysics = () => {
      particles.current.forEach((p) => {
        if (!p.element) return;

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
            // Stronger push the closer the cursor is
            const force = (1 - dist / REPEL_RADIUS) * FORCE_STRENGTH;
            const pushX = (dx / dist) * force;
            const pushY = (dy / dist) * force;

            p.vx += pushX;
            p.vy += pushY;

            // Add subtle spin when pushed
            p.va += pushX * 0.01;
          }
        }

        // Apply velocities
        p.x += p.vx;
        p.y += p.vy;

        // Subtle rotation update
        p.angle += p.va;
        p.va *= 0.98; // slow down rotation drift back to normal

        // Limit angle to prevent infinite spinning (keep it between -15 and 15 degrees)
        if (p.angle > 15) { p.angle = 15; p.va = -Math.abs(p.va); }
        if (p.angle < -15) { p.angle = -15; p.va = Math.abs(p.va); }

        // 3. Edge bouncing & constraint
        // Width bounce
        if (p.x < 0) {
          p.x = 0;
          p.vx = Math.abs(p.vx) * BOUNCE_DAMPING;
          p.baseVx = Math.abs(p.baseVx); // invert base drift direction
        } else if (p.x + p.width > containerWidth) {
          p.x = containerWidth - p.width;
          p.vx = -Math.abs(p.vx) * BOUNCE_DAMPING;
          p.baseVx = -Math.abs(p.baseVx);
        }

        // Height bounce
        if (p.y < 0) {
          p.y = 0;
          p.vy = Math.abs(p.vy) * BOUNCE_DAMPING;
          p.baseVy = Math.abs(p.baseVy);
        } else if (p.y + p.height > containerHeight) {
          p.y = containerHeight - p.height;
          p.vy = -Math.abs(p.vy) * BOUNCE_DAMPING;
          p.baseVy = -Math.abs(p.baseVy);
        }

        // 4. Directly update DOM style for 60 FPS buttery smoothness
        p.element.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) rotate(${p.angle}deg)`;
      });

      animationFrameId = requestAnimationFrame(updatePhysics);
    };

    // Start loop once particles are initialized
    const startTimeout = setTimeout(() => {
      animationFrameId = requestAnimationFrame(updatePhysics);
    }, 200);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(startTimeout);
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
