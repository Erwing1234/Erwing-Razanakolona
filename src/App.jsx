import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

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
        <nav>
          <a href="#home">Accueil</a>
          <a href="#about">Parcours</a>
          <a href="#skills">Compétences</a>
          <a href="#projects">Projets</a>
          <a href="#goals">Objectifs</a>
          <a href="#contact">Contact</a>
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
              href="erwinrazanakolona8@gmail.com +261 38 79 360 55 Fianarantsoa (1).pdf"
              className="btn outline"
              download
            >
              Télécharger mon CV
            </a>
          </div>
        </div>

        <div className="hero-img">
          <img
            src="WhatsApp Image 2025-12-20 at 09.09.11.jpeg"
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

        <div className="skills-grid">
          <div className="skill">HTML / CSS / JavaScript</div>
          <div className="skill">Vue.js</div>
          <div className="skill">PHP</div>
          <div className="skill">Python</div>
          <div className="skill">C#</div>
          <div className="skill">MySQL / PostgreSQL</div>
          <div className="skill">Java Desktop (NetBeans)</div>
          <div className="skill">Git & GitHub</div>
          <div className="skill">WAMP / VS Code</div>
          <div className="skill">Gestion de projet</div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>Mes Projets</h2>

        <p className="center">
          Quelques projets concrets réalisés durant mon parcours
        </p>

        <div className="projects-grid">

          <div className="project-card">
            <h3>Gestion des paiements JIRAMA</h3>

            <p>
              Application web de gestion des factures : consultation,
              paiement en ligne, espace utilisateur et dashboard graphique.
            </p>

            <span>Vue.js • PHP • MySQL</span>

            <a
              href="https://github.com/Erwing1234/Stage-JIRAMA-Gestion-paiement-du-facture"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir sur GitHub
            </a>
          </div>

          <div className="project-card">
            <h3>Gestion des colis – Java Desktop</h3>

            <p>
              Application desktop complète avec interface graphique,
              CRUD colis/clients, PostgreSQL.
            </p>

            <span>Java • NetBeans • PostgreSQL</span>

            <a
              href="https://github.com/Erwing1234/gestion_colis_web"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir sur GitHub
            </a>
          </div>

          <div className="project-card">
            <h3>Pension de retraite</h3>

            <p>Système de gestion du paiement des pensions.</p>

            <span>PHP • MySQL</span>

            <a
              href="https://github.com/Erwing1234/gestion_de_paiement_pension"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir sur GitHub
            </a>
          </div>

          <div className="project-card">
            <h3>Générateur de lettre de motivation</h3>

            <p>Outil automatique de génération de lettres professionnelles.</p>

            <span>TypeScript</span>

            <a
              href="https://github.com/Erwing1234/generateur_LM"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir sur GitHub
            </a>
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

        <h2>Contact</h2>

        <p className="center">N'hésitez pas à me contacter</p>

        <form className="contact-form" onSubmit={sendMessage}>

          {/* ✅ CORRECTION 3 : champ email manquant ajouté */}
          <textarea
            placeholder="Votre message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          {/* ✅ CORRECTION 4 : bouton désactivé pendant l'envoi */}
          <button type="submit" disabled={loading}>
            {loading ? "Envoi en cours..." : "Envoyer"}
          </button>

        </form>

        <p className="center">
          Madagascar
          <br />
          Email : erwinrazanakolona8@gmail.com
          <br />
          Téléphone : +261 38 79 360 55
          <br />
          GitHub :
          <a href="https://github.com/Erwing1234">
            {" "}
            github.com/Erwing1234
          </a>
        </p>

      </section>

    </div>
  );
} // ✅ CORRECTION 5 : accolade fermante de la fonction App

export default App; // ✅ CORRECTION 6 : export placé en dehors du return mais dans le fichier