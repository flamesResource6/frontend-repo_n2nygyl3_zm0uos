import { useState, useMemo } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail, Cpu, Bot, Sparkles, Code2, Rocket, Globe2 } from 'lucide-react'

function App() {
  const [open, setOpen] = useState(false)

  const nav = useMemo(() => (
    [
      { label: 'About', href: '#about' },
      { label: 'Projects', href: '#projects' },
      { label: 'Stack', href: '#stack' },
      { label: 'Contact', href: '#contact' },
    ]
  ), [])

  return (
    <div className="min-h-screen bg-black text-zinc-200 selection:bg-fuchsia-500/30 selection:text-fuchsia-200">
      {/* Cosmic background layers */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* starfield */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.5) 50%, transparent 51%),
            radial-gradient(1px 1px at 80% 20%, rgba(255,255,255,0.4) 50%, transparent 51%),
            radial-gradient(1px 1px at 60% 70%, rgba(255,255,255,0.35) 50%, transparent 51%),
            radial-gradient(1px 1px at 30% 80%, rgba(255,255,255,0.4) 50%, transparent 51%)
          `,
          backgroundRepeat: 'repeat',
          backgroundSize: '300px 300px',
          opacity: 0.6,
        }} />
        {/* nebula glow */}
        <div className="absolute -top-1/3 -left-1/4 h-[80vh] w-[80vh] rounded-full blur-3xl opacity-30" style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(99,102,241,0.6), transparent 60%)'
        }} />
        <div className="absolute -bottom-1/3 -right-1/4 h-[80vh] w-[80vh] rounded-full blur-3xl opacity-30" style={{
          background: 'radial-gradient(circle at 70% 70%, rgba(168,85,247,0.6), transparent 60%)'
        }} />
        {/* subtle scanlines */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: 'linear-gradient(transparent 95%, rgba(255,255,255,0.4) 96%, transparent 97%)',
          backgroundSize: '100% 3px',
        }} />
      </div>

      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-900/60 px-4 py-3 backdrop-blur-md">
            <a href="#home" className="flex items-center gap-2 text-white font-semibold tracking-tight">
              <span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
              <span>your.name</span>
            </a>
            <nav className="hidden md:flex items-center gap-6">
              {nav.map((i) => (
                <a key={i.href} href={i.href} className="text-sm text-zinc-300 hover:text-white transition-colors">
                  {i.label}
                </a>
              ))}
              <div className="h-5 w-px bg-white/10" />
              <div className="flex items-center gap-2">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#contact" className="p-2 rounded-lg bg-gradient-to-r from-indigo-600/30 to-fuchsia-600/30 text-indigo-200 hover:from-indigo-600/40 hover:to-fuchsia-600/40 transition-colors">
                  <Mail size={18} />
                </a>
              </div>
            </nav>
            <button className="md:hidden p-2 rounded-lg bg-white/5" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden mx-4 mt-2 rounded-2xl border border-white/10 bg-zinc-900/70 p-4 backdrop-blur-md">
            <div className="flex flex-col gap-3">
              {nav.map((i) => (
                <a key={i.href} href={i.href} onClick={() => setOpen(false)} className="text-sm text-zinc-300 hover:text-white transition-colors">
                  {i.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/xXD1hOqciVNtJX50/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Space tint & vignette */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        <div className="pointer-events-none absolute inset-0" style={{
          background: 'radial-gradient(60% 40% at 50% 0%, rgba(99,102,241,0.25), transparent 60%)'
        }} />

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-6 pt-28 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs text-zinc-300">
            <Sparkles size={14} className="text-fuchsia-400" />
            <span>Space‑loving AI Engineer</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.9 }} className="mt-6 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl">
            Clean, cosmic, and very tech
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.9 }} className="mx-auto mt-6 max-w-2xl text-zinc-300">
            I build futuristic sites and AI products inspired by space: planets, orbits, and neon nebulae. Retro‑tech details, modern performance.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.9 }} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white transition hover:from-indigo-400 hover:to-fuchsia-400">
              <Rocket size={18} className="transition-transform group-hover:-translate-y-0.5" />
              See projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              <Mail size={18} />
              Get in touch
            </a>
          </motion.div>

          {/* orbiting accents */}
          <div className="pointer-events-none absolute left-1/2 top-[70%] -translate-x-1/2 -translate-y-1/2">
            <div className="relative h-40 w-40 opacity-50">
              <div className="absolute inset-0 rounded-full border border-indigo-400/30" />
              <div className="absolute inset-4 rounded-full border border-fuchsia-400/30" />
              <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_12px_2px_rgba(34,211,238,0.6)]" />
            </div>
          </div>

          {/* stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.9 }} className="mt-12 grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { k: 'Years', v: '5+' },
              { k: 'Projects', v: '30+' },
              { k: 'Theme', v: 'Cosmic' },
              { k: 'Style', v: 'Retro‑tech' },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl border border-white/10 bg-black/40 p-4 text-center">
                <div className="text-xl font-bold text-white">{s.v}</div>
                <div className="text-[11px] uppercase tracking-wider text-zinc-400">{s.k}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(99,102,241,0.15),rgba(0,0,0,0))]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-white">Hi, I’m your.name</h2>
              <p className="mt-4 text-zinc-300">
                I craft clean, tech‑cool experiences with a love for space aesthetics. Subtle motion, crisp type, and cosmic color.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Cosmic UI</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">AI products</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Retro tech</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Motion design</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Globe2, t: 'Space vibes', d: 'Nebula gradients, starfields, orbital motifs.' },
                { icon: Cpu, t: 'Systems', d: 'From prototype to production‑ready.' },
                { icon: Bot, t: 'AI apps', d: 'LLM flows with solid evals and guardrails.' },
                { icon: Code2, t: 'Product', d: 'Fast iterations with a design‑first approach.' },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="rounded-2xl border border-white/10 bg-black/50 p-5">
                  <Icon className="text-indigo-400" />
                  <div className="mt-3 text-white font-semibold">{t}</div>
                  <p className="mt-1 text-sm text-zinc-400">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative">
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-3xl font-bold text-white">Selected work</h2>
            <a href="#contact" className="text-sm text-fuchsia-300 hover:text-fuchsia-200">Open for collaborations →</a>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'Orbital Research Assistant',
                desc: 'Agent that plans tasks, synthesizes sources, and drafts reports with citations.',
                tags: ['Agents', 'Tool use', 'Evals'],
              },
              {
                title: 'Realtime Voice Tutor',
                desc: 'Streaming TTS/STT with turn‑taking and memory for natural language lessons.',
                tags: ['Realtime', 'RAG', 'Voice'],
              },
              {
                title: 'Copilot for Docs',
                desc: 'Embeddings + retrieval over large docs with safety filters.',
                tags: ['RAG', 'LLMs', 'Guardrails'],
              },
              {
                title: 'Vision Workflow Studio',
                desc: 'Composable CV + LLM blocks for prototyping and demos.',
                tags: ['Vision', 'UX', 'Prototyping'],
              },
            ].map((p) => (
              <article key={p.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-6">
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px 80px at 50% 0%, rgba(99,102,241,0.18), transparent)' }} />
                <h3 className="relative text-xl font-semibold text-white">{p.title}</h3>
                <p className="relative mt-2 text-zinc-400">{p.desc}</p>
                <div className="relative mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-zinc-300">{t}</span>
                  ))}
                </div>
                <div className="relative mt-5 text-sm text-indigo-300">Read more →</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="relative">
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-3xl font-bold text-white">Current stack</h2>
          <p className="mt-2 text-zinc-400">Tools I love for speed and reliability.</p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {['Python', 'FastAPI', 'Node', 'React', 'Tailwind', 'Postgres', 'Mongo', 'Docker', 'Vercel', 'AWS', 'OpenAI', 'LangChain'].map((t) => (
              <div key={t} className="rounded-xl border border-white/10 bg-black/50 p-4 text-center text-sm text-zinc-300">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative">
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-white">Let’s talk</h2>
              <p className="mt-2 text-zinc-400">Got an idea or a problem to solve? I’m available for select collaborations and advisory.</p>
              <div className="mt-6 flex items-center gap-3">
                <a href="mailto:you@example.com" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10">
                  <Mail size={18} /> you@example.com
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10">
                  <Github size={18} /> GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-6">
              <div className="grid gap-4">
                <input placeholder="Your name" className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:ring-2 focus:ring-indigo-500/30" />
                <input placeholder="Email" type="email" className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:ring-2 focus:ring-indigo-500/30" />
                <textarea placeholder="What are we building?" rows={5} className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:ring-2 focus:ring-fuchsia-500/30" />
                <button className="rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white transition hover:from-indigo-400 hover:to-fuchsia-400">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-10 text-sm text-zinc-400">
          <p>© {new Date().getFullYear()} your.name</p>
          <p>Built among the stars • Cosmic system</p>
        </div>
      </footer>
    </div>
  )
}

export default App
