import { useEffect, useMemo, useRef } from "react";
import { FaDocker, FaGithub, FaGitAlt, FaReact } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import {
  SiDotnet,
  SiJavascript,
} from "react-icons/si";
import { TbApi, TbBrandAzure, TbBrandCSharp, TbCloudComputing } from "react-icons/tb";
import "./backgroundSkills.css";

const DEFAULT_SKILLS = [
  { label: "C#", icon: TbBrandCSharp, tone: "violet" },
  { label: ".NET", icon: SiDotnet, tone: "purple" },
  { label: "ASP.NET Core", icon: SiDotnet, tone: "indigo" },
  { label: "Azure", icon: TbBrandAzure, tone: "azure" },
  { label: "SQL Server", icon: DiMsqlServer, tone: "rose" },
  { label: "Docker", icon: FaDocker, tone: "sky" },
  { label: "React", icon: FaReact, tone: "cyan" },
  { label: "JavaScript", icon: SiJavascript, tone: "amber" },
  { label: "Git", icon: FaGitAlt, tone: "orange" },
  { label: "GitHub", icon: FaGithub, tone: "neutral" },
  { label: "REST API", icon: TbApi, tone: "cyan" },
  { label: "Microservices", icon: TbCloudComputing, tone: "teal" },
];

const randomBetween = (min, max) => min + Math.random() * (max - min);

function createParticle(index, width, height, isMobile) {
  const depth = randomBetween(0.45, 1);
  const speed = randomBetween(isMobile ? 0.1 : 0.14, isMobile ? 0.22 : 0.34) * depth;
  const angle = randomBetween(0, Math.PI * 2);
  const tagWidth = isMobile ? 110 : 172;
  const tagHeight = isMobile ? 36 : 50;

  return {
    x: randomBetween(24, Math.max(48, width - tagWidth - 24)),
    y: randomBetween(24, Math.max(48, height - tagHeight - 24)),
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    ax: 0,
    ay: randomBetween(0.0008, 0.0022) * depth,
    width: tagWidth,
    height: tagHeight,
    depth,
    rotation: randomBetween(-8, 8),
    vr: randomBetween(-0.025, 0.025),
    driftPhase: randomBetween(0, Math.PI * 2),
    mass: randomBetween(0.75, 1.35),
    nextImpulse: 80 + index * 18 + Math.random() * 120,
  };
}

export default function BackgroundSkills({
  skills = DEFAULT_SKILLS,
  className = "",
  interaction = "repel",
}) {
  const layerRef = useRef(null);
  const badgeRefs = useRef([]);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999, px: -9999, py: -9999, speed: 0, active: false });
  const frameRef = useRef(null);
  const reducedMotionRef = useRef(false);

  const renderedSkills = useMemo(() => skills, [skills]);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return undefined;

    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const size = () => ({
      width: layer.offsetWidth || window.innerWidth,
      height: layer.offsetHeight || window.innerHeight,
      isMobile: window.innerWidth <= 768,
    });

    const initialize = () => {
      const bounds = size();
      particlesRef.current = renderedSkills.map((_, index) =>
        createParticle(index, bounds.width, bounds.height, bounds.isMobile)
      );
    };

    const handleResize = () => {
      const bounds = size();
      particlesRef.current.forEach((particle) => {
        particle.x = Math.min(Math.max(18, particle.x), bounds.width - particle.width - 18);
        particle.y = Math.min(Math.max(18, particle.y), bounds.height - particle.height - 18);
      });
    };

    const handlePointerMove = (event) => {
      const rect = layer.getBoundingClientRect();
      const nextX = event.clientX - rect.left;
      const nextY = event.clientY - rect.top;
      const mouse = mouseRef.current;
      const dx = nextX - mouse.x;
      const dy = nextY - mouse.y;

      mouse.px = mouse.x;
      mouse.py = mouse.y;
      mouse.x = nextX;
      mouse.y = nextY;
      mouse.speed = Math.min(36, Math.hypot(dx, dy));
      mouse.active = true;
    };

    const handlePointerLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
      mouseRef.current.speed = 0;
    };

    let lastTime = performance.now();

    const animate = (time) => {
      const bounds = size();
      const dt = Math.min(32, time - lastTime) / 16.67;
      lastTime = time;
      const mouse = mouseRef.current;

      particlesRef.current.forEach((particle, index) => {
        const element = badgeRefs.current[index];
        if (!element) return;

        const measuredWidth = element.offsetWidth;
        const measuredHeight = element.offsetHeight;
        if (measuredWidth > 0) particle.width = measuredWidth;
        if (measuredHeight > 0) particle.height = measuredHeight;

        if (!reducedMotionRef.current) {
          particle.driftPhase += 0.006 * particle.depth * dt;
          particle.nextImpulse -= dt;

          if (particle.nextImpulse <= 0) {
            particle.vx += randomBetween(-0.11, 0.11) * particle.depth;
            particle.vy += randomBetween(-0.09, 0.09) * particle.depth;
            particle.vr += randomBetween(-0.018, 0.018);
            particle.nextImpulse = randomBetween(110, 260);
          }

          particle.vx += Math.cos(particle.driftPhase) * 0.0035 * particle.depth * dt;
          particle.vy += (particle.ay + Math.sin(particle.driftPhase * 0.85) * 0.0025) * dt;

          if (mouse.active) {
            const cx = particle.x + particle.width / 2;
            const cy = particle.y + particle.height / 2;
            const dx = cx - mouse.x;
            const dy = cy - mouse.y;
            const distance = Math.max(1, Math.hypot(dx, dy));
            const radius = 190 + mouse.speed * 5;

            if (distance < radius) {
              const direction = interaction === "attract" ? -1 : 1;
              const force = ((1 - distance / radius) ** 2) * (0.48 + mouse.speed * 0.012);
              particle.vx += direction * (dx / distance) * force / particle.mass;
              particle.vy += direction * (dy / distance) * force / particle.mass;
              particle.vr += direction * (dx / distance) * 0.035;
            }
          }

          const maxSpeed = 1.18 * particle.depth + 0.42;
          const speed = Math.hypot(particle.vx, particle.vy);
          if (speed > maxSpeed) {
            particle.vx = (particle.vx / speed) * maxSpeed;
            particle.vy = (particle.vy / speed) * maxSpeed;
          }

          particle.x += particle.vx * dt;
          particle.y += particle.vy * dt;
          particle.rotation += particle.vr * dt;

          particle.vx *= 0.996;
          particle.vy *= 0.996;
          particle.vr *= 0.982;

          const pad = 10;
          const bounce = 0.78;
          if (particle.x <= pad) {
            particle.x = pad;
            particle.vx = Math.abs(particle.vx) * bounce;
          } else if (particle.x + particle.width >= bounds.width - pad) {
            particle.x = bounds.width - particle.width - pad;
            particle.vx = -Math.abs(particle.vx) * bounce;
          }

          if (particle.y <= pad) {
            particle.y = pad;
            particle.vy = Math.abs(particle.vy) * bounce;
          } else if (particle.y + particle.height >= bounds.height - pad) {
            particle.y = bounds.height - particle.height - pad;
            particle.vy = -Math.abs(particle.vy) * bounce;
          }
        }

        const isMobileViewport = bounds.isMobile;
        const scale = 0.78 + particle.depth * 0.28;
        element.style.opacity = isMobileViewport
          ? `${0.28 + particle.depth * 0.34}`
          : `${0.52 + particle.depth * 0.36}`;
        element.style.transform = `translate3d(${particle.x}px, ${particle.y}px, 0) rotate(${particle.rotation}deg) scale(${scale})`;
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    initialize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      cancelAnimationFrame(frameRef.current);
    };
  }, [interaction, renderedSkills]);

  return (
    <div className={`background-skills ${className}`} ref={layerRef} aria-hidden="true">
      <div className="background-skills__mist background-skills__mist--blue" />
      <div className="background-skills__mist background-skills__mist--purple" />
      {renderedSkills.map(({ label, icon, tone }, index) => {
        const SkillIcon = icon;

        return (
          <div
            className={`background-skill background-skill--${tone}`}
            key={label}
            ref={(element) => {
              badgeRefs.current[index] = element;
            }}
          >
            <SkillIcon aria-hidden="true" />
            <span>{label}</span>
          </div>
        );
      })}
    </div>
  );
}
