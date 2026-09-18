import './About.css'

const skills = [
  { label: 'Gaming', level: '⭐⭐⭐⭐⭐', note: 'Valorant · main player', img: '/game.jpg' },
  { label: 'Singing', level: '⭐⭐⭐⭐', note: 'Fan of Luo Sentao', img: '/sing.jpg' },
  { label: 'Traveling', level: '⭐⭐⭐⭐⭐', note: '50% of cities across the country', img: '/travel.jpg' },
]

const timeline = [
  { year: 'Childhood', title: 'First time singing', desc: 'Touched singing for the first time and fell in love with it right away — the seed of music was planted.' },
  { year: 'Teen years', title: 'Singing competitions', desc: 'Took part in various singing contests during adolescence, honing the craft on every little stage.' },
  { year: 'Recent years', title: 'University singing contest', desc: 'Joined a singing competition at university — sadly did not place, but the stage still felt worth it.' },
  { year: 'Now', title: 'PSE closing ceremony', desc: 'Received a singing certificate at the PSE closing ceremony — a small milestone that keeps the song going.' },
]

export default function About() {
  return (
    <section className="about" id="about">
      <header className="section-head">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">a little story about me</p>
      </header>

      <div className="about-grid">
        <article className="paper about-card reveal">
          <h3 className="about-card-title">Self-intro</h3>
          <p>
            Hi everyone, I'm <strong>Junjun</strong>, you can also call me <strong>Alyssa</strong>.
            I'm from <strong>Hami, Xinjiang</strong>—a city famous for its delicious fruits.
            I'm so glad you've come to my little space and that you're here.
            If you'd like to get to know me better, keep reading on!
          </p>
        </article>

        <article className="paper about-card reveal" style={{ animationDelay: '0.1s' }}>
          <h3 className="about-card-title">Skill stickers</h3>
          <ul className="skill-list">
            {skills.map((s) => (
              <li key={s.label} className="skill-item">
                {s.img && (
                  <img className="skill-thumb" src={s.img} alt={s.label} loading="lazy" />
                )}
                <span className="skill-label">{s.label}</span>
                <span className="skill-level">{s.level}</span>
                <span className="skill-note">{s.note}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="about-timeline reveal">
        <h3 className="about-timeline-title">A little timeline</h3>
        <ol className="timeline">
          {timeline.map((t, i) => (
            <li key={t.year} className="timeline-item">
              <span className="timeline-dot" />
              <div className="timeline-content">
                <span className="timeline-year">{t.year}</span>
                <h4 className="timeline-title">{t.title}</h4>
                <p className="timeline-desc">{t.desc}</p>
              </div>
              {i < timeline.length - 1 && <span className="timeline-line" />}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
