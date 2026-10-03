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

      if (!section || !visual) {
        return;
      }

      const select = gsap.utils.selector(section);

      const letters = select("[data-hero-letter]");
      const statCards = select("[data-stat-card]");

      const frontWheel =
        select("[data-wheel-front]")[0];

      const rearWheel =
        select("[data-wheel-rear]")[0];

      const topbar =
        select(".hero-topbar");

      const eyebrow =
        select(".hero-eyebrow");

      const description =
        select(".hero-description");

      const techStack =
        select(".hero-tech-stack");

      const scrollCue =
        select(".scroll-cue");

      const heroCopy =
        select(".hero-copy");

      const orbitOne =
        select(".visual-orbit-one");

      const orbitTwo =
        select(".visual-orbit-two");

      const progressFill =
        select(".scroll-progress-fill")[0];

      const progressNumber =
        select(".scroll-progress-number")[0];

      const prefersReducedMotion =
        window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;

      /*
       * Accessibility:
       * Skip animated entrance/scroll transforms
       * when reduced motion is requested.
       */
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
          progressNumber.textContent =
            "00";
        }

        return;
      }

      /*
       * Initial animation states
       */
      gsap.set(topbar, {
        y: -14,
        opacity: 0,
      });

      gsap.set(eyebrow, {
        y: 12,
        opacity: 0,
      });

      gsap.set(letters, {
        yPercent: 115,
        opacity: 0,
        rotateX: -18,
        transformOrigin: "50% 100%",
      });

      gsap.set(description, {
        y: 16,
        opacity: 0,
      });

      gsap.set(techStack, {
        y: 16,
        opacity: 0,
      });

      gsap.set(visual, {
        xPercent: -6,
        y: 20,
        scale: 0.96,
        opacity: 0,
      });

      gsap.set(statCards, {
        y: 18,
        opacity: 0,
      });

      gsap.set(scrollCue, {
        y: 12,
        opacity: 0,
      });

      if (progressFill) {
        gsap.set(progressFill, {
          scaleY: 0,
          transformOrigin: "top",
        });
      }

      /*
       * Initial page-load animation
       */
      const intro = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      intro
        .to(topbar, {
          y: 0,
          opacity: 1,
          duration: 0.45,
        })

        .to(
          eyebrow,
          {
            y: 0,
            opacity: 1,
            duration: 0.42,
          },
          "-=0.22",
        )

        .to(
          letters,
          {
            yPercent: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.68,
            stagger: 0.032,
          },
          "-=0.12",
        )

        .to(
          [description, techStack],
          {
            y: 0,
            opacity: 1,
            duration: 0.46,
            stagger: 0.06,
          },
          "-=0.36",
        )

        .to(
          visual,
          {
            xPercent: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.82,
          },
          "-=0.38",
        )

        .to(
          statCards,
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
          },
          "-=0.46",
        )

        .to(
          scrollCue,
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
          },
          "-=0.1",
        );

      /*
       * Main scroll-driven timeline
       */
      const scrollTimeline =
        gsap.timeline({
          scrollTrigger: {
            trigger: section,

            start: "top top",

            end: () =>
              `+=${Math.max(
                window.innerHeight *
                  1.65,
                1350,
              )}`,

            pin: true,

            scrub: 0.8,

            anticipatePin: 1,

            invalidateOnRefresh: true,

            onUpdate: (self) => {
              const percentage =
                Math.round(
                  self.progress * 100,
                );

              if (progressFill) {
                gsap.set(
                  progressFill,
                  {
                    scaleY:
                      self.progress,
                  },
                );
              }

              if (progressNumber) {
                progressNumber.textContent =
                  String(
                    percentage,
                  ).padStart(
                    2,
                    "0",
                  );
              }
            },
          },
        });

      /*
       * Phase 1
       */
      scrollTimeline.to(
        visual,
        {
          xPercent: () =>
            window.innerWidth <= 760
              ? 7
              : 15,

          yPercent: -1,

          scale: 1.025,

          rotate: 0.45,

          ease: "none",

          duration: 0.48,
        },
        0,
      );

      if (frontWheel) {
        scrollTimeline.to(
          frontWheel,
          {
            rotation: 420,

            svgOrigin:
              "236 328",

            ease: "none",

            duration: 0.48,
          },
          0,
        );
      }

      if (rearWheel) {
        scrollTimeline.to(
          rearWheel,
          {
            rotation: 420,

            svgOrigin:
              "650 328",

            ease: "none",

            duration: 0.48,
          },
          0,
        );
      }

      scrollTimeline.to(
        orbitOne,
        {
          rotate: 90,

          scale: 1.025,

          ease: "none",

          duration: 0.48,
        },
        0,
      );

      scrollTimeline.to(
        orbitTwo,
        {
          rotate: -65,

          scale: 0.98,

          ease: "none",

          duration: 0.48,
        },
        0,
      );

      scrollTimeline.to(
        heroCopy,
        {
          yPercent: -2,

          opacity: 0.94,

          ease: "none",

          duration: 0.48,
        },
        0,
      );

      /*
       * Phase 2
       */
      scrollTimeline.to(
        visual,
        {
          xPercent: () =>
            window.innerWidth <= 760
              ? -4
              : -8,

          yPercent: 1,

          scale: 0.99,

          rotate: -0.35,

          ease: "none",

          duration: 0.52,
        },
        0.48,
      );

      if (frontWheel) {
        scrollTimeline.to(
          frontWheel,
          {
            rotation: 840,

            svgOrigin:
              "236 328",

            ease: "none",

            duration: 0.52,
          },
          0.48,
        );
      }

      if (rearWheel) {
        scrollTimeline.to(
          rearWheel,
          {
            rotation: 840,

            svgOrigin:
              "650 328",

            ease: "none",

            duration: 0.52,
          },
          0.48,
        );
      }

      scrollTimeline.to(
        orbitOne,
        {
          rotate: 170,

          scale: 0.985,

          ease: "none",

          duration: 0.52,
        },
        0.48,
      );

      scrollTimeline.to(
        orbitTwo,
        {
          rotate: -135,

          scale: 1.02,

          ease: "none",

          duration: 0.52,
        },
        0.48,
      );

      scrollTimeline.to(
        heroCopy,
        {
          yPercent: -4,

          opacity: 0.88,

          ease: "none",

          duration: 0.52,
        },
        0.48,
      );

      /*
       * Subtle alternating card motion.
       * 1 & 3 move slightly upward.
       * 2 & 4 move slightly downward.
       */
      scrollTimeline.to(
        statCards,
        {
          y: (index) =>
            index % 2 === 0
              ? -3
              : 3,

          ease: "none",

          stagger: 0.018,

          duration: 0.25,
        },
        0.55,
      );

      /*
       * Keep the bottom-right scroll cue
       * visible through most of the experience.
       */
      scrollTimeline.to(
        scrollCue,
        {
          y: 10,

          opacity: 0,

          ease: "none",

          duration: 0.18,
        },
        0.72,
      );

      const refreshId =
        requestAnimationFrame(
          () => {
            ScrollTrigger.refresh();
          },
        );

      return () => {
        cancelAnimationFrame(
          refreshId,
        );
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
      className="hero-shell"
    >
      <div className="hero-grid-pattern" />

      {/* Scroll progress indicator */}

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

      {/* Background ambient lights */}

      <div className="hero-ambient hero-ambient-left" />

      <div className="hero-ambient hero-ambient-right" />

      <div className="hero-inner">
        {/* Top navigation / branding */}

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
          </div>
        </header>

        {/* Hero copy */}

        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span>
              INTERACTIVE WEB EXPERIENCE
            </span>

            <span className="eyebrow-line" />
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
              A premium scroll-driven
              hero experience designed
              to showcase smooth motion,
              polished interaction, and
              modern frontend execution.
            </p>

            <div className="hero-tech-stack">
              <span>REACT</span>
              <span>GSAP</span>
              <span>TAILWIND</span>
            </div>
          </div>
        </div>

        {/* Main scroll visual */}

        <div className="hero-stage">
          <HeroVisual
            visualRef={visualRef}
          />
        </div>

        {/* Statistics + scroll cue */}

        <div className="hero-bottom">
          <div className="stats-grid">
            {heroStats.map(
              (stat) => (
                <article
                  className="stat-card"
                  key={stat.id}
                  data-stat-card
                >
                  <div className="stat-top">
                    <span>
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
              ),
            )}
          </div>

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