import { useState } from 'react'
import './Contact.css'

// Contact form inbox (FormSubmit.co forwards to this email)
const CONTACT_EMAIL = 'Yanjun.Cai26@student.xjtlu.edu.cn'
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`

const socials = [
  { label: 'Email', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}`, icon: '✉️' },
  { label: 'WeChat', value: '@cute', href: 'https://weixin.qq.com', icon: '💬' },
  { label: 'Xiaohongshu', value: '@cute', href: 'https://www.xiaohongshu.com/user/profile/5b6505e6e8ac2b7220db5e40', icon: '📖' },
  { label: 'Weibo', value: '@shencaigongwei', href: 'https://weibo.com', icon: '🐦' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `A note from "${form.name}" - Jun's Journal`,
          _template: 'table',
        }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section className="contact" id="contact">
      <header className="section-head">
        <h2 className="section-title">Leave a Note</h2>
        <p className="section-subtitle">drop me a little note</p>
      </header>

      <div className="contact-grid">
        <aside className="paper contact-aside reveal">
          <h3 className="contact-aside-title">You can find me here</h3>
          <ul className="social-list">
            {socials.map((s) => (
              <li key={s.label} className="social-item">
                <span className="social-icon">{s.icon}</span>
                <div className="social-text">
                  <span className="social-label">{s.label}</span>
                  <a href={s.href} className="social-value" target="_blank" rel="noreferrer">
                    {s.value}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </aside>

        <form className="paper contact-form reveal" onSubmit={handleSubmit}>
          <h3 className="contact-form-title">Say a little something to me</h3>

          <label className="field">
            <span className="field-label">Your name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. A passing friend"
              required
            />
          </label>

          <label className="field">
            <span className="field-label">Reply-to address</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </label>
          <input type="hidden" name="_captcha" value="false" />

          <label className="field">
            <span className="field-label">What you want to say</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="The weather is lovely today — dropping a line as I pass by~"
              rows={4}
              required
            />
          </label>

          <button
            type="submit"
            className="btn btn--primary contact-submit"
            disabled={status === 'sending' || status === 'sent'}
          >
            {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent ✿' : 'Send ✿'}
          </button>

          {status === 'sent' && (
            <p className="contact-toast contact-toast--ok">
              Your note has been sent, thank you ✨
            </p>
          )}
          {status === 'error' && (
            <p className="contact-toast contact-toast--err">
              Oh, sending failed — please try again later, or email me directly ✿
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
