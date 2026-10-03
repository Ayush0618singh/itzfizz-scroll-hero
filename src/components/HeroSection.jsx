import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import HeroVisual from "./HeroVisual";
import { heroStats } from "../data/stats";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const welcomeLetters = "WELCOME".split("");
const brandLetters = "ITZFIZZ".split("");

function HeroSection() {
  const sectionRef = useRef(null);
  const visualRef = useRef(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const visual = visualRef.current;

      if (!section || !visual) return;

      const select = gsap.utils.selector(section);

      /* =====================================================
         ELEMENT REFERENCES
         ===================================================== */

      const letters = select("[data-hero-letter]");
      const statCards = select("[data-stat-card]");
      const wheels = select("[data-car-wheel]");

      const topbar = select(".hero-topbar");
      const eyebrow = select(".hero-eyebrow");
      const description = select(".hero-description");
      const techStack = select(".hero-tech-stack");
      const scrollCue = select(".scroll-cue");

      const heroCopy = select(".hero-copy");

      const orbitOne = select(".visual-orbit-one");
      const orbitTwo = select(".visual-orbit-two");

      const chipLeft = select(".visual-chip-left");
      const chipRight = select(".visual-chip-right");

      const progressFill =
        select(".scroll-progress-fill")[0];

      const progressNumber =
        select(".scroll-progress-number")[0];

      const prefersReducedMotion =
        window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;

      /* =====================================================
         REDUCED MOTION ACCESSIBILITY
         ===================================================== */

      if (prefersReducedMotion) {
        gsap.set(
          [
            ...letters,
            ...statCards,
            visual,
            ...topbar,
            ...eyebrow,
            ...description,
            ...techStack,
            ...scrollCue,
          ],
          {
            clearProps: "all",
          },
        );

        if (progressFill) {
          gsap.set(progressFill, {
            scaleY: 0,
          });
        }

        if (progressNumber) {
          progressNumber.textContent = "00";
        }

        return;
      }

      /* =====================================================
         INITIAL STATES
         ===================================================== */

      gsap.set(topbar, {
        y: -16,
        opacity: 0,
      });

      gsap.set(eyebrow, {
        y: 14,
        opacity: 0,
      });

      gsap.set(letters, {
        yPercent: 110,
        opacity: 0,
        rotateX: -20,
        transformOrigin: "50% 100%",
      });

      gsap.set(description, {
        y: 18,
        opacity: 0,
      });

      gsap.set(techStack, {
        y: 18,
        opacity: 0,
      });

      gsap.set(visual, {
        xPercent: -10,
        y: 28,
        scale: 0.92,
        opacity: 0,
      });

      gsap.set(statCards, {
        y: 26,
        opacity: 0,
      });

      gsap.set(scrollCue, {
        y: 14,
        opacity: 0,
      });

      gsap.set(progressFill, {
        scaleY: 0,
        transformOrigin: "top",
      });

      /* =====================================================
         INTRO ANIMATION
         ===================================================== */

      const introTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      introTimeline
        .to(topbar, {
          y: 0,
          opacity: 1,
          duration: 0.55,
        })

        .to(
          eyebrow,
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
          },
          "-=0.28",
        )

        .to(
          letters,
          {
            yPercent: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.72,
            stagger: 0.035,
          },
          "-=0.18",
        )

        .to(
          description,
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
          },
          "-=0.43",
        )

        .to(
          techStack,
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
          },
          "-=0.48",
        )

        .to(
          visual,
          {
            xPercent: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
          },
          "-=0.5",
        )

        .to(
          statCards,
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            stagger: 0.1,
          },
          "-=0.58",
        )

        .to(
          scrollCue,
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
          },
          "-=0.12",
        );

      /* =====================================================
         SCROLL-DRIVEN TIMELINE
         ===================================================== */

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,

          start: "top top",

          end: () => {
            const distance = Math.max(
              window.innerHeight * 1.8,
              1500,
            );

            return `+=${distance}`;
          },

          pin: true,

          scrub: 0.9,

          anticipatePin: 1,

          invalidateOnRefresh: true,

          onUpdate: (self) => {
            const progress = Math.round(
              self.progress * 100,
            );

            if (progressFill) {
              gsap.set(progressFill, {
                scaleY: self.progress,
              });
            }

            if (progressNumber) {
              progressNumber.textContent =
                String(progress).padStart(2, "0");
            }
          },
        },
      });

      /* =====================================================
         PHASE A
         Vehicle moves toward right
         ===================================================== */

      scrollTimeline.to(
        visual,
        {
          xPercent: () =>
            window.innerWidth <= 760
              ? 13
              : 27,

          yPercent: () =>
            window.innerWidth <= 760
              ? -2
              : -6,

          scale: 1.06,

          rotate: 1.4,

          ease: "none",

          duration: 0.44,
        },
        0,
      );

      /* Wheels rotate with scroll */

      scrollTimeline.to(
        wheels,
        {
          rotation: 540,

          transformOrigin: "50% 50%",

          ease: "none",

          duration: 0.44,
        },
        0,
      );

      /* Orbit movement */

      scrollTimeline.to(
        orbitOne,
        {
          rotate: 110,

          scale: 1.06,

          ease: "none",

          duration: 0.44,
        },
        0,
      );

      scrollTimeline.to(
        orbitTwo,
        {
          rotate: -80,

          scale: 0.95,

          ease: "none",

          duration: 0.44,
        },
        0,
      );

      /* Heading subtle parallax */

      scrollTimeline.to(
        heroCopy,
        {
          yPercent: -7,

          opacity: 0.78,

          ease: "none",

          duration: 0.44,
        },
        0,
      );

      /* HUD depth movement */

      scrollTimeline.to(
        chipLeft,
        {
          x: -36,

          y: -18,

          ease: "none",

          duration: 0.44,
        },
        0,
      );

      scrollTimeline.to(
        chipRight,
        {
          x: 38,

          y: 18,

          ease: "none",

          duration: 0.44,
        },
        0,
      );

      /* =====================================================
         PHASE B
         Vehicle moves back toward left
         ===================================================== */

      scrollTimeline.to(
        visual,
        {
          xPercent: () =>
            window.innerWidth <= 760
              ? -8
              : -18,

          yPercent: () =>
            window.innerWidth <= 760
              ? 4
              : 8,

          scale: 0.94,

          rotate: -1.25,

          ease: "none",

          duration: 0.56,
        },
        0.44,
      );

      scrollTimeline.to(
        wheels,
        {
          rotation: 1080,

          transformOrigin: "50% 50%",

          ease: "none",

          duration: 0.56,
        },
        0.44,
      );

      scrollTimeline.to(
        orbitOne,
        {
          rotate: 190,

          scale: 0.95,

          ease: "none",

          duration: 0.56,
        },
        0.44,
      );

      scrollTimeline.to(
        orbitTwo,
        {
          rotate: -150,

          scale: 1.05,

          ease: "none",

          duration: 0.56,
        },
        0.44,
      );

      scrollTimeline.to(
        heroCopy,
        {
          yPercent: -13,

          opacity: 0.47,

          ease: "none",

          duration: 0.56,
        },
        0.44,
      );

      /* =====================================================
         STATISTICS MOTION
         ===================================================== */

      scrollTimeline.to(
        statCards,
        {
          y: (index) =>
            index % 2 === 0
              ? -8
              : 8,

          ease: "none",

          stagger: 0.025,

          duration: 0.3,
        },
        0.52,
      );

      /* =====================================================
         SCROLL CUE EXIT
         ===================================================== */

      scrollTimeline.to(
        scrollCue,
        {
          y: 18,

          opacity: 0,

          ease: "none",

          duration: 0.12,
        },
        0,
      );

      /* =====================================================
         REFRESH AFTER INITIAL LAYOUT
         ===================================================== */

      const refreshId =
        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });

      return () => {
        cancelAnimationFrame(refreshId);
      };
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="hero-shell relative isolate min-h-[100svh] overflow-hidden"
    >
      {/* ===================================================
          BACKGROUND LAYERS
          =================================================== */}

      <div className="hero-grid-pattern" />

      <div
        className="scroll-progress"
        aria-hidden="true"
      >
        <span className="scroll-progress-label">
          SCROLL
        </span>

        <div className="scroll-progress-track">
          <span className="scroll-progress-fill" />
        </div>

        <span className="scroll-progress-number">
          00
        </span>
      </div>

      <div className="hero-ambient hero-ambient-left" />

      <div className="hero-ambient hero-ambient-right" />

      <div className="hero-inner">
        {/* ===================================================
            TOP BAR
            =================================================== */}

        <header className="hero-topbar">
          <a
            href="#hero"
            className="brand-mark"
            aria-label="Itzfizz home"
          >
            <span className="brand-symbol">
              I
            </span>

            <span className="brand-name">
              ITZ<span>FIZZ</span>
            </span>
          </a>

          <div className="hero-topbar-meta">
            <span className="status-dot" />

            <span>
              SCROLL EXPERIENCE
            </span>

            <span className="meta-divider" />

            <span>
              2026
            </span>
          </div>
        </header>

        {/* ===================================================
            MAIN HERO CONTENT
            =================================================== */}

        <div className="hero-main">
          <div className="hero-copy">
            <div className="hero-eyebrow">
              <span>
                INTERACTIVE WEB EXPERIENCE
              </span>

              <span className="eyebrow-line" />

              <span>
                01 / HERO
              </span>
            </div>

            <h1
              className="hero-title"
              aria-label="Welcome Itzfizz"
            >
              <span className="hero-title-word">
                {welcomeLetters.map(
                  (letter, index) => (
                    <span
                      className="hero-letter"
                      key={`welcome-${index}`}
                      data-hero-letter
                    >
                      {letter}
                    </span>
                  ),
                )}
              </span>

              <span
                className="hero-title-word hero-title-word-accent"
                aria-hidden="true"
              >
                {brandLetters.map(
                  (letter, index) => (
                    <span
                      className="hero-letter"
                      key={`itzfizz-${index}`}
                      data-hero-letter
                    >
                      {letter}
                    </span>
                  ),
                )}
              </span>
            </h1>

            <div className="hero-description-row">
              <p className="hero-description">
                A premium scroll-driven digital
                experience built around motion,
                precision and responsive interaction.
              </p>

              <div className="hero-tech-stack">
                <span>REACT</span>

                <span>GSAP</span>

                <span>TAILWIND</span>
              </div>
            </div>
          </div>

          {/* =================================================
              MAIN SCROLL VISUAL
              ================================================= */}

          <div className="hero-stage">
            <HeroVisual
              visualRef={visualRef}
            />
          </div>
        </div>

        {/* ===================================================
            IMPACT STATISTICS
            =================================================== */}

        <div className="hero-bottom">
          <div className="stats-grid">
            {heroStats.map((stat) => (
              <article
                className="stat-card"
                key={stat.id}
                data-stat-card
              >
                <div className="stat-top">
                  <span className="stat-index">
                    {stat.id}
                  </span>

                  <span className="stat-arrow">
                    ↗
                  </span>
                </div>

                <strong className="stat-value">
                  {stat.value}
                </strong>

                <p className="stat-label">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>

          {/* =================================================
              SCROLL INDICATOR
              ================================================= */}

          <div className="scroll-cue">
            <div className="scroll-cue-line">
              <span />
            </div>

            <span>
              SCROLL TO EXPLORE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;