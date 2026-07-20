import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
const [subject, setSubject] = useState("");
const [email, setEmail] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("/.netlify/functions/send-email", {
        message,
      });

      alert("Message envoyé !");
      setMessage("");
    } catch (error) {
      alert("Erreur lors de l'envoi !");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>

     {/* NAVBAR */}
<header className="navbar">
  <h2 className="logo">Erwing RAZANAKOLONA</h2>

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
    <a href="#home" onClick={() => setMenuOpen(false)}>Accueil</a>
    <a href="#about" onClick={() => setMenuOpen(false)}>Parcours</a>
    <a href="#skills" onClick={() => setMenuOpen(false)}>Compétences</a>
    <a href="#projects" onClick={() => setMenuOpen(false)}>Projets</a>
    <a href="#goals" onClick={() => setMenuOpen(false)}>Objectifs</a>
    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
  </nav>
</header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-text">
          <h1>
            Salut, je suis{" "}
            <span>RAZANAKOLONA Yves Erwing Navalona</span>
          </h1>

          <h3>Étudiant en Informatique & Développeur Passionné</h3>

          <p>
            Étudiant à l'École Nationale d'Informatique (ENI – Fianarantsoa),
            passionné par le développement web, logiciel, l'IA et les bases de
            données.
          </p>

          <br />
          <br />

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

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>Mon Parcours</h2>

        <p className="center">
          Je construis des solutions utiles avec rigueur, passion et ambition.
        </p>

        <div className="about-grid">
          <div>
            <h3>Formation</h3>

            <p>
              Baccalauréat Série S – Lycée André Resampa Antsirabe (2023).
              <br />
              Mention Assez Bien.
            </p>

            <br />

            <p>
              Étudiant à l'École Nationale d'Informatique (ENI –
              Fianarantsoa).
              <br />
              Spécialisé en développement logiciel, web et bases de
              données (Génie logiciel et bases de données).
            </p>
          </div>

          <div>
            <h3>Autres passions</h3>
            <p>
              Basket-ball, esprit d'équipe, discipline et persévérance.
            </p>
          </div>
        </div>
      </section>

     {/* SKILLS */}
<section id="skills" className="section dark">
  <h2>Compétences</h2>
  <p className="center">Frontend • Backend • Base de données • Outils</p>

  <div className="skills-categories">

    <div className="skill-card">
      <div className="skill-card-header frontend">
        <span>⟨/⟩ Frontend</span>
      </div>
      <div className="skill-item"><span>HTML / CSS / JS</span><span className="badge avance">Avancé</span></div>
      <div className="skill-item"><span>React.js</span><span className="badge inter">Intermédiaire</span></div>
      <div className="skill-item"><span>Vue.js</span><span className="badge inter">Intermédiaire</span></div>
    </div>

    <div className="skill-card">
      <div className="skill-card-header backend">
        <span>⚙ Backend</span>
      </div>
      <div className="skill-item"><span>PHP</span><span className="badge inter">Avancé</span></div>
      <div className="skill-item"><span>Node.js</span><span className="badge inter">Intermédiaire</span></div>
      
      <div className="skill-item"><span>Java (NetBeans)</span><span className="badge inter">Intermédiaire</span></div>
      <div className="skill-item"><span>Python</span><span className="badge inter">Intermédiaire</span></div>
    </div>

    <div className="skill-card">
      <div className="skill-card-header database">
        <span>🗄 Base de données</span>
      </div>
      <div className="skill-item"><span>MySQL</span><span className="badge avance">Avancé</span></div>
      <div className="skill-item"><span>PostgreSQL</span><span className="badge inter">Intermédiaire</span></div>
    </div>

    <div className="skill-card">
      <div className="skill-card-header tools">
        <span> Outils</span>
      </div>
      <div className="skill-item"><span>Git & GitHub</span><span className="badge avance">Avancé</span></div>
      <div className="skill-item"><span>WAMP / VS Code</span><span className="badge inter">Avancé</span></div>
      <div className="skill-item"><span>Gestion de projet</span><span className="badge inter">Intermédiaire</span></div>
    </div>

  </div>
</section>

      
      {/* PROJECTS */}
<section id="projects" className="section">
  <h2>Mes Projets</h2>
  <p className="center">Quelques projets concrets réalisés durant mon parcours</p>

  <div className="projects-grid">

    <div className="project-card">
    <div className="project-icon-area">
  <img src="/jj.jpg" alt="JIRAMA" className="project-img" />
</div>
      <div className="project-meta">
        <span className="project-category">Gestion</span>
        <span className="badge-acad">Stage</span>
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
  <img src="/Capture d’écran 2026-07-17 215334.jpg" alt="" className="project-img" />
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
  <img src="public/Capture d’écran 2026-07-17 214937.jpg" alt="" className="project-img" />
</div>
      <div className="project-meta">
        <span className="project-category">Gestion</span>
        <span className="badge-acad">Académique</span>
        <span className="project-year">2026</span>
      </div>
      <div className="project-body">
        <h3>Gestion du cité universitaire</h3>
        <p>Système de réservation d'un chamnbre dans un cité universitaire ,gestion des Étudiant ,interface administrateur</p>
        <div className="project-tags">
          <span>React</span><span>Node.js</span><span>MySQL</span>
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
  <img src="/Capture d’écran 2026-07-20 143730.jpg" alt="" className="project-img" />
</div>
      <div className="project-meta">
        <span className="project-category">Outil</span>
        <span className="badge-acad">Personnel</span>
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
  <img src="/Capture d’écran 2026-07-17 214800.jpg" alt="" className="project-img" />
</div>
      <div className="project-meta">
        <span className="project-category">E-commerce</span>
        <span className="badge-acad">Personnel</span>
        <span className="project-year">2026</span>
      </div>
      <div className="project-body">
        <h3>Appication web de vente des avions miniature</h3>
        <p>Validation de commande avec choix des
adresses de livraison.Côté admin qui peuvent
gérer les produits,les commandes des clients.</p>
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

    <div className="project-card">
    <div className="project-icon-area">
  <img src="/Capture d’écran 2026-07-20 145109.jpg" alt="" className="project-img" />
</div>
      <div className="project-meta">
        <span className="project-category">Web</span>
        <span className="badge-perso">Personnel</span>
        <span className="project-year">2026</span>
      </div>
      <div className="project-body">
        <h3>Portfolio personnel</h3>
        <p>Site vitrine moderne, responsive, avec formulaire de contact intégré pour présenter mes projets et compétences.</p>
        <div className="project-tags">
          <span>React</span><span>Netlify</span>
        </div>
        <div className="project-status">
          <span>⑂ Public</span>
          <span>✓ En cours</span>
        </div>
        <div className="project-actions">
        
          <a href="https://github.com/Erwing1234/Erwing-Razanakolona" target="_blank" rel="noopener noreferrer" className="btn-github">⊙ GitHub</a>
        </div>
      </div>
    </div>

  </div>
</section>
      {/* GOALS */}
      <section id="goals" className="section dark">
        <h2>Objectifs futurs</h2>

        <p className="center">
          Approfondir mes compétences en développement logiciel, IA et
          systèmes complexes, intégrer une équipe ambitieuse et
          contribuer à des projets à fort impact.
        </p>
      </section>

      {/* WHY ME */}
      <section className="section">
        <h2>Pourquoi me choisir ?</h2>

        <ul className="why">
          <li>Passionné et déterminé</li>
          <li>Apprentissage rapide</li>
          <li>Esprit d'équipe</li>
          <li>Sérieux et organisé</li>
          <li>Orienté solutions</li>
        </ul>
      </section>

     {/* CONTACT */}
<section id="contact" className="section dark">

<h2 className="contact-title">Contactez-moi</h2>
<p className="center">N'hésitez pas à me contacter pour discuter de vos projets</p>

<div className="contact-wrapper">

  {/* FORMULAIRE */}
  <div className="contact-form-box">

    <div className="form-group">
      <label>Nom complet</label>
      <input
        type="text"
        placeholder="Votre nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>

    <div className="form-group">
      <label>Email</label>
      <input
        type="email"
        placeholder="votre@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>

    <div className="form-group">
      <label>Sujet</label>
      <input
        type="text"
        placeholder="Sujet de votre message"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
    </div>

    <div className="form-group">
      <label>Message</label>
      <textarea
        placeholder="Votre message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={5}
      />
    </div>

    <button className="btn-send" type="button" onClick={sendMessage} disabled={loading}>
      {loading ? "Envoi en cours..." : "Envoyer le message"}
    </button>

  </div>

  {/* INFOS */}
  <div className="contact-info-box">
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
    </div>
  );
} 

export default App; 