import './Projects.css'

// All the little things Jun has made. Add a new object to this list
// to publish another project card on the page.
const projects = []

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <header className="section-head">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">little things I&apos;ve made</p>
      </header>

      <div className="projects-grid">
        <div className="projects-embed reveal">
          <div className="projects-embed-head">
            <span className="projects-embed-emoji">📋</span>
            <div>
              <h3 className="projects-card-title">Cozy To-Do Keeper</h3>
              <p className="projects-blurb">
                A live little task keeper — pick a date on the calendar, drop a task on it, toggle dark mode. It&apos;s the real thing, give it a try below ✿
              </p>
            </div>
          </div>
          <div className="projects-frame">
            <iframe src="/todo.html" title="Cozy To-Do Keeper — live demo" loading="lazy" />
          </div>
        </div>

        {projects.map((p, i) => (
          <article
            key={p.title}
            className={`paper projects-card reveal projects-card--${p.accent}`}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="projects-emoji">{p.emoji}</div>
            <h3 className="projects-card-title">{p.title}</h3>
            <p className="projects-blurb">{p.blurb}</p>

            {p.highlights && (
              <ul className="projects-highlights">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}

            <ul className="projects-tags">
              {p.tags.map((t) => (
                <li key={t} className="projects-tag">
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
