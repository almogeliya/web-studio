import { useState } from 'react'
import './App.css'

const experiments = [
  { number: '01', category: 'SCROLL INTERACTION', name: 'The art of reveal', style: 'reveal' },
  { number: '02', category: 'HOVER EXPERIMENT', name: 'Shape shifting', style: 'shape' },
  { number: '03', category: 'TYPE IN MOTION', name: 'Words in space', style: 'type' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [pointer, setPointer] = useState({ x: 50, y: 50 })

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    setPointer({
      x: ((event.clientX - bounds.left) / bounds.width) * 100,
      y: ((event.clientY - bounds.top) / bounds.height) * 100,
    })
  }

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Motion Lab home">M<span className="wordmark-star">✳</span>TION LAB<span className="registered">®</span></a>
        <span className="header-center">AN INDEPENDENT CREATIVE PLAYGROUND</span>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>
          {menuOpen ? 'CLOSE' : 'MENU'} <span aria-hidden="true">{menuOpen ? '−' : '+'}</span>
        </button>
      </header>
      {menuOpen && <nav className="menu-panel" aria-label="Main navigation"><a href="#work" onClick={() => setMenuOpen(false)}>EXPERIMENTS ↗</a><a href="#about" onClick={() => setMenuOpen(false)}>ABOUT ↗</a></nav>}

      <section id="top" className="hero-section" onPointerMove={handlePointerMove} style={{ '--pointer-x': `${pointer.x}%`, '--pointer-y': `${pointer.y}%` } as React.CSSProperties}>
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-topline"><span>DESIGN / CODE / MOVEMENT</span><span>EST. 2026&nbsp; ↗</span></div>
        <div className="hero-content">
          <p className="eyebrow animate-up"><span className="status-dot" /> DIGITAL EXPERIENCES IN PROGRESS</p>
          <h1 className="hero-title">
            <span className="title-line animate-up">MAKE IT</span>
            <span className="title-line outline animate-up">MOVE<span className="period">.</span></span>
          </h1>
          <div className="hero-bottom animate-up">
            <p>Where bold ideas meet beautiful motion.<br />An experimental space for the unexpected.</p>
            <a className="circle-cta" href="#work" aria-label="Explore experiments"><span aria-hidden="true">↘</span></a>
          </div>
        </div>
        <div className="hero-footer"><span>SCROLL TO EXPLORE <span className="scroll-arrow">↓</span></span><span>001 — CREATIVE EXPLORATION</span></div>
      </section>

      <section id="work" className="work-section">
        <div className="section-heading"><span className="small-label">01 / THE PLAYGROUND</span><h2>Selected<br /><em>experiments.</em></h2><p>Small interactions. Big personality.<br />Hover, scroll, and explore.</p></div>
        <div className="experiment-grid">
          {experiments.map((item) => <article className={`experiment-card ${item.style}`} key={item.number} tabIndex={0}>
            <div className="card-visual" aria-hidden="true">
              {item.style === 'reveal' && <div className="visual-circle"><span>REVEAL</span></div>}
              {item.style === 'shape' && <div className="visual-shape"><span>✳</span></div>}
              {item.style === 'type' && <div className="visual-type">Aa</div>}
            </div>
            <div className="card-meta"><span>{item.number} / {item.category}</span><span className="card-arrow">↗</span></div>
            <h3>{item.name}</h3>
          </article>)}
        </div>
      </section>

      <section id="about" className="statement-section">
        <span className="small-label">02 / OUR PHILOSOPHY</span>
        <p>GOOD DESIGN <span>IS NOT</span><br />STILL DESIGN<span className="lime-dot">.</span></p>
        <div className="statement-foot"><span>A LITTLE MOTION CHANGES EVERYTHING.</span><a href="#top">BACK TO TOP ↑</a></div>
      </section>
      <footer className="site-footer"><span>MOTION LAB®</span><span>BUILT TO EXPLORE · 2026</span><span>MADE WITH CURIOSITY ✳</span></footer>
    </main>
  )
}

export default App
