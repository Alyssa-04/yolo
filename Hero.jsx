import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-decor">
        <span className="deco-star deco-star--1">✦</span>
        <span className="deco-star deco-star--2">✿</span>
        <span className="deco-star deco-star--3">✦</span>
        <span className="deco-star deco-star--4">✿</span>
      </div>

      <div className="hero-inner reveal">
        <div className="hero-avatar-wrap">
          <div className="hero-avatar">
            <img
              className="hero-avatar-img"
              src="/yc.jpg"
              alt="Jun's avatar"
            />
          </div>
          <span className="hero-tape hero-tape--tl" />
          <span className="hero-tape hero-tape--br" />
        </div>

        <p className="hero-greeting">Hi there ✨</p>
        <h1 className="hero-name">
          This is <span className="hero-name-highlight">Jun</span>
        </h1>
        <p className="hero-tagline">
          Someone who loves <em>gaming</em>, <em>singing</em>, and <em>traveling</em>.
          <br />
          Aiming for the goal in <strong>Valorant</strong>, humming along to <strong>Luo Sentao</strong>'s songs,
          <br />
          having traveled through <strong>half</strong> of the cities across the country — see you at the next stop.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn btn--primary">
            See my works
          </a>
          <a href="#contact" className="btn btn--ghost">
            Leave a note
          </a>
        </div>

        <div className="hero-scroll-hint">
          <span>Scroll down</span>
          <span className="hero-scroll-arrow">↓</span>
        </div>
      </div>
    </section>
  )
}
