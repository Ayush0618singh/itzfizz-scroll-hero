import HeroVisual from "./HeroVisual";
import { heroStats } from "../data/stats";

const welcomeLetters = "WELCOME".split("");
const brandLetters = "ITZFIZZ".split("");

function HeroSection() {
  return (
    <section
      id="hero"
      className="hero-shell relative isolate min-h-[100svh] overflow-hidden"
    >
      <div className="hero-grid-pattern" />
      <div className="hero-ambient hero-ambient-left" />
      <div className="hero-ambient hero-ambient-right" />

      <div className="hero-inner">
        {/* Top navigation / brand bar */}
        <header className="hero-topbar">
          <a href="#hero" className="brand-mark" aria-label="Itzfizz home">
            <span className="brand-symbol">I</span>

            <span className="brand-name">
              ITZ<span>FIZZ</span>
            </span>
          </a>

          <div className="hero-topbar-meta">
            <span className="status-dot" />

            <span>SCROLL EXPERIENCE</span>

            <span className="meta-divider" />

            <span>2026</span>
          </div>
        </header>

        {/* Main hero */}
        <div className="hero-main">
          <div className="hero-copy">
            <div className="hero-eyebrow">
              <span>INTERACTIVE WEB EXPERIENCE</span>

              <span className="eyebrow-line" />

              <span>01 / HERO</span>
            </div>

            <h1 className="hero-title" aria-label="Welcome Itzfizz">
              <span className="hero-title-word">
                {welcomeLetters.map((letter, index) => (
                  <span
                    className="hero-letter"
                    key={`welcome-${index}`}
                    data-hero-letter
                  >
                    {letter}
                  </span>
                ))}
              </span>

              <span
                className="hero-title-word hero-title-word-accent"
                aria-hidden="true"
              >
                {brandLetters.map((letter, index) => (
                  <span
                    className="hero-letter"
                    key={`itzfizz-${index}`}
                    data-hero-letter
                  >
                    {letter}
                  </span>
                ))}
              </span>
            </h1>

            <div className="hero-description-row">
              <p className="hero-description">
                A premium scroll-driven digital experience built around motion,
                precision and responsive interaction.
              </p>

              <div className="hero-tech-stack">
                <span>REACT</span>
                <span>GSAP</span>
                <span>TAILWIND</span>
              </div>
            </div>
          </div>

          <div className="hero-stage">
            <HeroVisual />
          </div>
        </div>

        {/* Statistics */}
        <div className="hero-bottom">
          <div className="stats-grid">
            {heroStats.map((stat) => (
              <article
                className="stat-card"
                key={stat.id}
                data-stat-card
              >
                <div className="stat-top">
                  <span className="stat-index">{stat.id}</span>
                  <span className="stat-arrow">↗</span>
                </div>

                <strong className="stat-value">{stat.value}</strong>

                <p className="stat-label">{stat.label}</p>
              </article>
            ))}
          </div>

          <div className="scroll-cue">
            <div className="scroll-cue-line">
              <span />
            </div>

            <span>SCROLL TO EXPLORE</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;