import {
  ArrowDownRight,
  ArrowRight,
  Blocks,
  Check,
  ChevronDown,
  Command,
  Component,
  Layers3,
  Search,
  Settings2,
  Sparkles,
  SwatchBook,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const navigation = [
  { label: "Overview", icon: Layers3, active: true },
  { label: "Components", icon: Component },
  { label: "Foundations", icon: SwatchBook },
];

const colors = [
  { name: "Ink", value: "#172126", color: "#172126" },
  { name: "Mist", value: "#E8EEF0", color: "#E8EEF0" },
  { name: "Tide", value: "#0E9FAD", color: "#0E9FAD" },
  { name: "Lagoon", value: "#BDE9E8", color: "#BDE9E8" },
];

export default function Home() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="#top" aria-label="Forme home">
          <span className="brand-mark"><Blocks size={18} strokeWidth={2.3} /></span>
          <span>forme<span className="brand-period">.</span></span>
        </a>

        <div className="workspace-picker">
          <span className="workspace-avatar">F</span>
          <span className="workspace-copy"><strong>Forma Studio</strong><small>Free workspace</small></span>
          <ChevronDown size={15} />
        </div>

        <div className="nav-label">WORKSPACE</div>
        <nav className="primary-nav" aria-label="Primary navigation">
          {navigation.map(({ label, icon: Icon, active }) => (
            <a className={`nav-link${active ? " active" : ""}`} href={`#${label.toLowerCase()}`} key={label}>
              <Icon size={17} strokeWidth={1.8} />
              <span>{label}</span>
              {label === "Components" && <span className="nav-count">12</span>}
            </a>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-note"><Sparkles size={16} /><span>Thoughtful tools for<br />beautiful products.</span></div>
          <a className="nav-link" href="#settings"><Settings2 size={17} /><span>Settings</span></a>
          <div className="profile-row"><div className="profile-avatar">JM</div><div><strong>Jamie Morgan</strong><small>Design team</small></div><MoreIcon /></div>
        </div>
      </aside>

      <main className="main-area" id="top">
        <header className="topbar">
          <div className="breadcrumbs"><span>Workspace</span><span className="crumb-slash">/</span><strong>Overview</strong></div>
          <div className="topbar-actions"><span className="shortcut"><Command size={12} /> K</span><button className="icon-button" aria-label="Search"><Search size={17} /></button><div className="mini-avatar">JM</div></div>
        </header>

        <div className="page-content">
          <section className="welcome-row">
            <div>
              <div className="eyebrow"><span className="status-dot" /> YOUR DESIGN SYSTEM</div>
              <h1>A good place to<br className="mobile-break" /> <span>start.</span></h1>
              <p className="welcome-copy">A considered collection of the pieces that make<br className="desktop-break" /> your product feel like yours.</p>
            </div>
            <div className="welcome-art" aria-hidden="true"><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-core"><Sparkles size={25} /></div><span className="art-spark spark-one">✳</span><span className="art-spark spark-two">✳</span></div>
          </section>

          <div className="section-heading"><div><h2>Component playground</h2><p>Small details, working together.</p></div><Button variant="secondary" size="small">View all <ArrowRight size={14} /></Button></div>

          <div className="showcase-grid">
            <Card className="button-card">
              <CardHeader><div><span className="component-kicker">01 / ACTION</span><h3>Buttons</h3></div><span className="demo-tag">3 variants</span></CardHeader>
              <CardContent><div className="button-stack"><Button>Get started <ArrowRight size={15} /></Button><Button variant="secondary">Learn more</Button><Button variant="ghost">Maybe later <ArrowDownRight size={14} /></Button></div><div className="component-caption">Clear actions, with room to breathe.</div></CardContent>
            </Card>

            <Card className="input-card">
              <CardHeader><div><span className="component-kicker">02 / INPUT</span><h3>Text fields</h3></div><span className="demo-tag">Default</span></CardHeader>
              <CardContent><label className="field-label" htmlFor="email">Work email</label><Input id="email" type="email" placeholder="you@company.com" /><div className="field-hint"><span className="hint-check"><Check size={11} /></span> Your details stay private.</div><div className="component-caption">A little guidance goes a long way.</div></CardContent>
            </Card>

            <Card className="color-card">
              <CardHeader><div><span className="component-kicker">03 / FOUNDATION</span><h3>Color palette</h3></div><button className="more-button" aria-label="More color options">···</button></CardHeader>
              <CardContent><div className="swatches">{colors.map((color) => <div className="swatch" key={color.name}><span className="swatch-color" style={{ backgroundColor: color.color }} /><span className="swatch-copy"><strong>{color.name}</strong><small>{color.value}</small></span></div>)}</div><div className="component-caption">Quiet neutrals, one bright idea.</div></CardContent>
            </Card>

            <Card className="note-card">
              <CardContent><div className="note-icon"><Sparkles size={17} /></div><div className="note-copy"><span className="component-kicker">A NOTE ON FORM</span><h3>Less, but considered.</h3><p>Good design systems make the everyday feel effortless. Start with the essentials, then make them yours.</p><a href="#foundations">Explore the foundations <ArrowRight size={13} /></a></div></CardContent>
            </Card>
          </div>

          <footer className="page-footer"><span>Made for the details.</span><span><span className="footer-dot" /> All systems looking good</span></footer>
        </div>
      </main>
    </div>
  );
}

function MoreIcon() {
  return <span className="more-icon" aria-hidden="true">···</span>;
}
