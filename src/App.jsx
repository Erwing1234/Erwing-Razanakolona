import axios from "axios";
import { useState } from "react";
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const IconHome = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
);
const IconGrad = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>
);
const IconLayers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>
);
const IconBriefcase = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
);
const IconGrid = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
);
const IconTarget = ({ size = 14 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);
const IconMail = ({ size = 14 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const IconGithub = ({ size = 14 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);
const IconStar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);
const IconFlame = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
);
const IconZap = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);
const IconUsers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
const IconClipboard = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>
);

const IconCode = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
);

/* Logos de langages / outils (devicon CDN) pour la section Compétences */
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const SKILL_CATEGORIES = [
  {
    label: "Frontend",
    skills: [
      { name: "HTML5", icon: `${DEVICON}/html5/html5-original.svg` },
      { name: "CSS3", icon: `${DEVICON}/css3/css3-original.svg` },
      { name: "Bootstrap", icon: `${DEVICON}/bootstrap/bootstrap-original.svg` },
      { name: "JavaScript", icon: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Vue.js", icon: `${DEVICON}/vuejs/vuejs-original.svg` },
      { name: "React.js", icon: `${DEVICON}/react/react-original.svg` },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "PHP", icon: `${DEVICON}/php/php-original.svg` },
      { name: "Java" , icon: `${DEVICON}/java/java-original.svg` },
      { name: "TypeScript", icon: `${DEVICON}/typescript/typescript-original.svg` },
    { name: "Express", icon: `${DEVICON}/express/express-original.svg` },
    { name: "Nest", icon: `${DEVICON}/nestjs/nestjs-original.svg` },
    ],
  },
  {
    label: "Mobile",
    skills: [
      { name: "Flutter", icon: `${DEVICON}/flutter/flutter-original.svg` },
      { name: "React Native", icon: `${DEVICON}/react/react-original.svg` },
    ],
  },
  {
    label: "Bases de données",
    skills: [
      { name: "MySQL", icon: `${DEVICON}/mysql/mysql-original.svg` },
      { name: "SQLite", icon: `${DEVICON}/sqlite/sqlite-original.svg` },
      { name: "PostgreSQL", icon: `${DEVICON}/postgresql/postgresql-original.svg` },
    ],
  },
  {
    label: "Outils & environnement",
    skills: [
      { name: "Git", icon: `${DEVICON}/git/git-original.svg` },
      { name: "GitHub", icon: `${DEVICON}/github/github-original.svg`, invert: true },
      { name: "VS Code", icon: `${DEVICON}/vscode/vscode-original.svg` },
      { name: "Android Studio", icon: `${DEVICON}/androidstudio/androidstudio-original.svg` },
      { name: "NetBeans", icon: null },
      { name: "Postman", icon: `${DEVICON}/postman/postman-original.svg` },
    ],
  },
  {
    label: "Systèmes",
    skills: [
      { name: "Windows", icon: `${DEVICON}/windows8/windows8-original.svg` },
      { name: "Linux", icon: `${DEVICON}/linux/linux-original.svg` },
    ],
  },
];

const OTHER_SKILLS = [
  "Gestion de projet",
  "Résolution de problèmes",
  "Discipline",
  "Autonomie",
  "Capacité d'adaptation",
  "Gestion du stress",
  "Bon relationnel",
];

function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [showAll, setShowAll] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("/api/send-email", {
        name,
        email,
        subject,
        message,
      });

      alert("Message envoyé !");
      setMessage("");
      setName("");
      setEmail("");
      setSubject("");
    } catch (error) {
      alert("Erreur lors de l'envoi !");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out',
    });
  }, []);

  const navLinks = [
    { id: "home", label: "Accueil", icon: <IconHome /> },
    { id: "about", label: "Parcours", icon: <IconGrad /> },
    { id: "experience", label: "Expérience", icon: <IconBriefcase /> }, 
    { id: "skills", label: "Compétences", icon: <IconLayers /> },
    { id: "projects", label: "Projets", icon: <IconGrid /> },
    { id: "goals", label: "Objectifs", icon: <IconTarget /> },
    { id: "contact", label: "Contact", icon: <IconMail /> },
  ];

  return (
    <div className="page">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="navbar-inner">
          <div className="logo">
            <span className="logo-dots">
              <i className="dot dot-red"></i>
              <i className="dot dot-yellow"></i>
              <i className="dot dot-green"></i>
            </span>
            Erwing RAZANAKOLONA<span className="logo-accent"></span>
          </div>

          <button
            className="nav-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span style={{ transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }}></span>
            <span style={{ opacity: menuOpen ? 0 : 1 }}></span>
            <span style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }}></span>
          </button>

          <nav className={menuOpen ? 'open' : ''}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={activeLink === link.id ? 'active' : ''}
                onClick={() => {
                  setActiveLink(link.id);
                  setMenuOpen(false);
                }}
              >
                <span className="nav-icon">{link.icon}</span>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero" data-aos="fade-up">
        <div className="hero-glow glow-green"></div>
        <div className="hero-glow glow-blue"></div>
        <div className="hero-glow glow-red"></div>

        <div className="hero-text">
          <h1 className="hero-hello">SALUT !</h1>
          <h2 className="hero-name">
            Je suis <span>RAZANAKOLONA Yves Erwing Navalona</span>
          </h2>

          <h3>Étudiant en Informatique & Développeur Passionné</h3>

          <p>
            Étudiant à l'École Nationale d'Informatique (ENI – Fianarantsoa),
            passionné par le développement web, logiciel, l'IA et les bases de
            données.
          </p>

          <div className="hero-cards">
            <a href="mailto:erwinrazanakolona8@gmail.com" className="hero-card">
              <span className="hero-card-icon"><IconMail size={16} /></span>
              <div>
                <strong>Email</strong>
                <span>erwinrazanakolona8@gmail.com</span>
              </div>
            </a>
            
            <a
              href="https://github.com/Erwing1234"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-card"
            >
              <span className="hero-card-icon"><IconGithub size={16} /></span>
              <div>
                <strong>GitHub</strong>
                <span>Erwing1234</span>
              </div>
            </a>
          </div>

          <div className="buttons">
            <a
              href="/CV RAZANAKOLONA.pdf"
              className="btn outline"
              download
            >
              Télécharger mon CV
            </a>
          </div>
        </div>

        <div className="hero-img">
          <img
            src="/4MzPVtqN.jpg"
            alt="Erwing"
          />
        </div>
      </section>

      {/* ABOUT / PARCOURS */}
      <section id="about" className="section about-section"  data-aos="fade-right">
        <div className="section-heading">
          <span className="section-heading-icon"><IconGrad /></span>
          <h2>Mon Parcours</h2>
        </div>

        <p className="center">
          Je construis des solutions utiles avec rigueur, passion et ambition.
        </p>

        <div className="timeline-grid">
          <div className="timeline-col">
            <h3 className="timeline-title">
              <span className="timeline-title-icon formation"><IconGrad /></span> Formation
            </h3>

            <div className="timeline-item">
              <span className="timeline-dot active"></span>
              <div className="timeline-content">
                <strong>École Nationale d'Informatique (ENI – Fianarantsoa)</strong>
                <p>Génie logiciel et bases de données</p>
                <span className="timeline-date">2023 — en cours</span>
                <strong></strong>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <div className="timeline-content">
                <strong>Lycée André Resampa Antsirabe</strong>
                <p>Baccalauréat Série S — Mention Assez Bien</p>
                <span className="timeline-date">2023</span>
              </div>
            </div>
          </div>

          <div className="timeline-col">
            <h3 className="timeline-title">
              <span className="timeline-title-icon passion"><IconStar /></span> Autres passions
            </h3>

            <div className="passion-card">
              <p>
                Basket-ball, esprit d'équipe, discipline et persévérance.
                Ces valeurs guident aussi bien mon jeu sur le terrain que ma
                façon de collaborer sur mes projets de développement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE PROFESSIONNELLE */}
<section id="experience" className="section experience-section"  data-aos="zoom-in">
  <div className="section-heading">
    <span className="section-heading-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    </span>
    <h2>Expérience Professionnelle</h2>
  </div>

  {/* STATISTIQUES */}
  <div className="stats-grid">
    <div className="stat-card">
      <span className="stat-number">3</span>
      <span className="stat-label">Années d'études</span>
      <span className="stat-desc">à l'ENI Fianarantsoa</span>
    </div>
    <div className="stat-card">
      <span className="stat-number">9+</span>
      <span className="stat-label">Projets réalisés</span>
      <span className="stat-desc">Académiques & personnels</span>
    </div>
    
    <div className="stat-card">
      <span className="stat-number">5+</span>
      <span className="stat-label">Technologies</span>
      <span className="stat-desc">Maîtrisées</span>
    </div>
  </div>

  {/* STAGE JIRAMA */}
  <div className="experience-timeline">
    <div className="experience-card">
      <div className="experience-header">
        
        <div className="experience-title">
          <h3>Stagiaire Développeur</h3>
          <h4>JIRAMA</h4>
          <span className="experience-date">2025</span>
        </div>
      </div>
      
      <div className="experience-body">
        <div className="experience-description">
          <p>
            Stage effectué au sein de la direction régionale de la JIRAMA Antsirabe.
            Développement d'une application web de gestion des paiements des factures.
          </p>
        </div>

        <div className="experience-missions">
          <h4>Missions réalisées :</h4>
          <ul>
            <li>
              <span className="mission-icon">✓</span>
              Conception et développement d'une application web de gestion des paiements
            </li>
            <li>
              <span className="mission-icon">✓</span>
              Consultation et paiement des factures en ligne
            </li>
            <li>
              <span className="mission-icon">✓</span>
              Création d'un espace utilisateur avec authentification
            </li>
            <li>
              <span className="mission-icon">✓</span>
              Mise en place d'un dashboard graphique pour le suivi des paiements
            </li>
            <li>
              <span className="mission-icon">✓</span>
              Gestion des données avec MySQL
            </li>
          </ul>
        </div>

        

        
      </div>
    </div>
  </div>
</section>

      {/* SKILLS */}
      <section id="skills" className="section dark">
        <div className="section-heading">
          <span className="section-heading-icon"><IconLayers /></span>
          <h2>Compétences</h2>
        </div>
        <p className="center">Frontend • Backend • Mobile • Base de données • Outils</p>

        <div className="skills-wrap">
          {SKILL_CATEGORIES.map((cat) => (
            <div className="skills-block" key={cat.label}>
              <span className="skills-category-label">{cat.label}</span>
              <div className="skills-pills">
                {cat.skills.map((s) => (
                  <span className="skill-pill" key={s.name}>
                    {s.icon ? (
                      <img
                        src={s.icon}
                        alt={s.name}
                        className={s.invert ? "skill-pill-icon invert" : "skill-pill-icon"}
                      />
                    ) : (
                      <span className="skill-pill-icon-generic"><IconCode /></span>
                    )}
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div className="skills-block">
            <span className="skills-category-label">Autres compétences</span>
            <div className="skills-pills">
              {OTHER_SKILLS.map((s) => (
                <span className="skill-pill skill-pill-plain" key={s}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="section-heading">
          <span className="section-heading-icon"><IconGrid /></span>
          <h2>Mes Projets</h2>
        </div>
        <p className="center">Quelques projets concrets réalisés durant mon parcours</p>

        <div className="projects-grid">
          <div className="project-card">
            <div className="project-icon-area">
              <img src="/jj.jpg" alt="JIRAMA" className="project-img" />
            </div>
            <div className="project-meta">
              <span className="project-category">Gestion</span>
              <span className="badge-stage">Stage</span>
              <span className="project-year">2025</span>
            </div>
            <div className="project-body">
              <h3>Gestion des paiements JIRAMA</h3>
              <p>Application web de gestion des factures : consultation, paiement des factures, espace utilisateur et dashboard graphique.</p>
              <div className="project-tags">
                <span>Vue.js</span><span>PHP</span><span>MySQL</span>
              </div>
              <div className="project-status">
                <span>⑂ Public</span>
                <span>✓ Terminé</span>
              </div>
              <div className="project-actions">
                <a href="https://github.com/Erwing1234/Stage-JIRAMA-Gestion-paiement-du-facture" target="_blank" rel="noopener noreferrer" className="btn-github">⊙ GitHub</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-icon-area">
              <img src="/Capture d’écran 2026-07-17 215334.jpg" alt="Gestion colis" className="project-img" />
            </div>
            <div className="project-meta">
              <span className="project-category">Logistique</span>
              <span className="badge-acad">Académique</span>
              <span className="project-year">2025</span>
            </div>
            <div className="project-body">
              <h3>Gestion des colis</h3>
              <p>Application web complète avec interface graphique, CRUD colis/clients, PostgreSQL.</p>
              <div className="project-tags">
                <span>PHP</span><span>PostgreSQL</span>
              </div>
              <div className="project-status">
                <span>⑂ Public</span>
                <span>✓ Terminé</span>
              </div>
              <div className="project-actions">
                <a href="https://github.com/Erwing1234/gestion_colis_web" target="_blank" rel="noopener noreferrer" className="btn-github">⊙ GitHub</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-icon-area">
              <img src="/Capture d’écran 2026-07-17 214937.jpg" alt="Gestion cité universitaire" className="project-img" />
            </div>
            <div className="project-meta">
              <span className="project-category">Gestion</span>
              <span className="badge-acad">Académique</span>
              <span className="project-year">2026</span>
            </div>
            <div className="project-body">
              <h3>Gestion du cité universitaire</h3>
              <p>Système de réservation d'une chambre dans un cité universitaire, gestion des étudiants, interface administrateur</p>
              <div className="project-tags">
                <span>React</span><span>Express.js</span><span>MySQL</span>
              </div>
              <div className="project-status">
                <span>⑂ Public</span>
                <span>✓ Terminé</span>
              </div>
              <div className="project-actions">
                <a href="https://github.com/Erwing1234/Gestion_logement" target="_blank" rel="noopener noreferrer" className="btn-github">⊙ GitHub</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-icon-area">
              <img src="/Capture d’écran 2026-07-20 143730.jpg" alt="Générateur de lettre" className="project-img" />
            </div>
            <div className="project-meta">
              <span className="project-category">Outil</span>
              <span className="badge-perso">Personnel</span>
              <span className="project-year">2025</span>
            </div>
            <div className="project-body">
              <h3>Générateur de lettre de motivation</h3>
              <p>Outil automatique de génération de lettres professionnelles.</p>
              <div className="project-tags">
                <span>TypeScript</span>
              </div>
              <div className="project-status">
                <span>⑂ Privé</span>
                <span>✓ Terminé</span>
              </div>
              <div className="project-actions">
                <a href="https://github.com/Erwing1234/generateur_LM" target="_blank" rel="noopener noreferrer" className="btn-github">⊙ GitHub</a>
              </div>
            </div>
          </div>

         

          <div className="project-card">
            <div className="project-icon-area">
              <img src="/jeued.jpeg" alt="Jeu éducatif" className="project-img" />
            </div>
            <div className="project-meta">
              <span className="project-category">Mobile</span>
              <span className="badge-acad">Academique</span>
              <span className="project-year">2026</span>
            </div>
            <div className="project-body">
              <h3>Application mobile d'un jeu éducatif</h3>
              <p>Jeu éducatif basé sur la reconnaissance d’objets réels : une application interactive qui utilise la caméra d’un smartphone pour identifier des objets physiques dans l’environnement réel.</p>
              <div className="project-tags">
                <span>Flutter</span><span>SQLite</span>
              </div>
              <div className="project-status">
                <span>⑂ Public</span>
                <span>✓ Terminé</span>
              </div>
              <div className="project-actions">
                <a href="https://github.com/Erwing1234/Ed_game" target="_blank" rel="noopener noreferrer" className="btn-github">⊙ GitHub</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-icon-area">
              <img src="/Capture d’écran 2026-07-17 214800.jpg" alt="E-commerce avions miniatures" className="project-img" />
            </div>
            <div className="project-meta">
              <span className="project-category">E-commerce</span>
              <span className="badge-perso">Personnel</span>
              <span className="project-year">2026</span>
            </div>
            <div className="project-body">
              <h3>Application web de vente des avions miniature</h3>
              <p>Validation de commande avec choix des adresses de livraison. Côté admin qui peuvent gérer les produits, les commandes des clients.</p>
              <div className="project-tags">
                <span>PHP</span><span>MySQL</span>
              </div>
              <div className="project-status">
                <span>⑂ Public</span>
                <span>✓ Terminé</span>
              </div>
              <div className="project-actions">
                <a href="https://github.com/Erwing1234/E_commerce_avion_miniature" target="_blank" rel="noopener noreferrer" className="btn-github">⊙ GitHub</a>
              </div>
            </div>
          </div>

          {/* ── 3 DERNIERS CACHÉS ── */}
    <div className={`project-card ${showAll ? "project-visible" : "project-hidden"}`}>
      <div className="project-icon-area">
        <img src="/gestioncli.jpeg" alt="Gestion des clients" className="project-img" />
      </div>
      <div className="project-meta">
        <span className="project-category">Mobile</span>
        <span className="badge-acad">Académique</span>
        <span className="project-year">2026</span>
      </div>
      <div className="project-body">
        <h3>Gestion des clients</h3>
        <p>Application mobile elle permet de gérer les informations des clients de manière simple et efficace.</p>
        <div className="project-tags"><span>Java</span><span>SQLite</span></div>
        <div className="project-status"><span>⑂ Public</span><span>✓ Terminé</span></div>
        <div className="project-actions">
          <a href="" target="_blank" rel="noopener noreferrer" className="btn-github">⊙ GitHub</a>
        </div>
      </div>
    </div>

    <div className={`project-card ${showAll ? "project-visible" : "project-hidden"}`}>
      <div className="project-icon-area">
        <img src="public/Capture d’écran 2026-09-05 160518.jpg" alt="Gestion transfert argent" className="project-img" />
      </div>
      <div className="project-meta">
        <span className="project-category">Web</span>
        <span className="badge-acad">Académique</span>
        <span className="project-year">2026</span>
      </div>
      <div className="project-body">
        <h3>Gestion de transfert d'argent</h3>
        <p>Application web gestion de transfert d'argent en ligne elle permet à un opérateur de gérer les transferts d'argent entre clients situés dans différents pays.</p>
        <div className="project-tags"><span>JSP</span><span>MySQL</span></div>
        <div className="project-status"><span>⑂ Public</span><span>✓ Terminé</span></div>
        <div className="project-actions">
          <a href="" target="_blank" rel="noopener noreferrer" className="btn-github">⊙ GitHub</a>
        </div>
      </div>
    </div>

    <div className={`project-card ${showAll ? "project-visible" : "project-hidden"}`}>
      <div className="project-icon-area">
        <img src="public/Capture d’écran 2026-07-20 145109.jpg" alt="Portfolio" className="project-img" />
      </div>
      <div className="project-meta">
        <span className="project-category">Web</span>
        <span className="badge-perso">Personnel</span>
        <span className="project-year">2026</span>
      </div>
      <div className="project-body">
        <h3>Portfolio personnel</h3>
        <p>Site vitrine moderne, responsive, avec formulaire de contact intégré pour présenter mes projets et compétences.</p>
        <div className="project-tags"><span>React</span><span>Netlify</span></div>
        <div className="project-status"><span>⑂ Public</span><span>✓ En cours</span></div>
        <div className="project-actions">
          <a href="https://github.com/Erwing1234/Erwing-Razanakolona" target="_blank" rel="noopener noreferrer" className="btn-github">⊙ GitHub</a>
        </div>
      </div>
    </div>

  </div>

  {/* BOUTON VOIR PLUS */}
  <div className="voir-plus-wrapper">
    <button className="btn-voir-plus" onClick={() => setShowAll(!showAll)}>
      {showAll ? "Voir moins ▲" : "Voir plus ▼"}
    </button>
  </div>


          
      </section>

      {/* GOALS */}
      <section id="goals" className="section dark goals-section">
        <div className="section-heading center-heading">
          <span className="section-heading-icon"><IconTarget size={18} /></span>
          <h2>Objectifs futurs</h2>
        </div>

        <div className="goals-card">
          <p>
            Approfondir mes compétences en développement logiciel, IA et
            systèmes complexes, intégrer une équipe ambitieuse et
            contribuer à des projets à fort impact.
          </p>
        </div>
      </section>

      {/* WHY ME */}
      <section className="section why-section">
        <div className="section-heading center-heading">
          <span className="section-heading-icon"><IconStar /></span>
          <h2>Pourquoi me choisir ?</h2>
        </div>

        <div className="why-badges">
          <span className="why-badge"><IconFlame /> Passionné et déterminé</span>
          <span className="why-badge"><IconZap /> Apprentissage rapide</span>
          <span className="why-badge"><IconUsers /> Esprit d'équipe</span>
          <span className="why-badge"><IconClipboard /> Sérieux et organisé</span>
          <span className="why-badge"><IconTarget /> Orienté solutions</span>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section dark" data-aos="fade-up">
        <div className="section-heading center-heading">
          <span className="section-heading-icon"><IconMail /></span>
          <h2>Contactez-moi</h2>
        </div>
        <p className="center">N'hésitez pas à me contacter pour discuter de vos projets</p>

        <div className="contact-wrapper">
          {/* FORMULAIRE */}
          <div className="contact-form-box" data-aos="fade-up">
            <form onSubmit={sendMessage}>
              <div className="form-group">
                <label>Nom complet</label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Sujet</label>
                <input
                  type="text"
                  placeholder="Sujet de votre message"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  placeholder="Votre message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  required
                />
              </div>

              <button className="btn-send" type="submit" disabled={loading}>
                {loading ? "Envoi en cours..." : "Envoyer le message"}
              </button>
            </form>
          </div>

          {/* INFOS */}
          <div className="contact-info-box" data-aos="fade-up">
            <h3>Informations</h3>
            <p>N'hésitez pas à me contacter pour discuter de vos projets</p>

            <div className="info-item">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div>
                <strong>Email</strong>
                <a href="mailto:erwinrazanakolona8@gmail.com">erwinrazanakolona8@gmail.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.42 2 2 0 0 1 3.06 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z"/></svg>
              </div>
              <div>
                <strong>Téléphone</strong>
                <a href="tel:+261387936055">+261 38 79 360 55</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <div>
                <strong>WhatsApp</strong>
                <a href="https://wa.me/261387936055" target="_blank" rel="noopener noreferrer">
                  +261 38 79 360 55
                </a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </div>
              <div>
                <strong>GitHub</strong>
                <a href="https://github.com/Erwing1234" target="_blank" rel="noopener noreferrer">
                  github.com/Erwing1234
                </a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <strong>Localisation</strong>
                <span>Fianarantsoa, Madagascar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 className="footer-logo">Erwing<span className="logo-accent">.razanakolona</span></h3>
            <p>
              Étudiant en informatique passionné par le développement web,
              logiciel et les nouvelles technologies.
            </p>
          </div>

          <div className="footer-col footer-links">
            <h4>Liens rapides</h4>
            <a href="#home">Accueil</a>
            <a href="#about">Parcours</a>
            <a href="#skills">Compétences</a>
            <a href="#projects">Projets</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-col footer-connect">
            <h4>Restons connectés</h4>
            <div className="footer-icons">
              <a href="https://github.com/Erwing1234" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <IconGithub size={18} />
              </a>
              <a href="mailto:erwinrazanakolona8@gmail.com" aria-label="Email">
                <IconMail size={18} />
              </a>
              <a href="https://wa.me/261387936055" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
           {new Date().getFullYear()} Erwing RAZANAKOLONA. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}

export default App;