// Composants partagés — Shok-IS France
const NAV = `
<nav>
  <a href="https://fr.shok-intelligence.com/" class="nav-logo">
    <div class="nav-logo-mark"><svg viewBox="0 0 14 14"><path d="M2 2h4v4H2zM8 2h4v4H8zM2 8h4v4H2z"/></svg></div>
    Shok-IS
  </a>
  <div class="nav-links">
    <a href="https://fr.shok-intelligence.com/#fonctionnalites">Produit</a>
    <a href="https://fr.shok-intelligence.com/#developpeurs">Développeurs</a>
    <a href="https://fr.shok-intelligence.com/integrations/index.html">Intégrations</a>
    <a href="https://fr.shok-intelligence.com/#securite">Sécurité</a>
    <a href="https://fr.shok-intelligence.com/#tarifs">Tarifs</a>
    <a href="https://fr.shok-intelligence.com/docs/index.html">Documentation</a>
  </div>
  <a href="https://fr.shok-intelligence.com/inscription/index.html" class="nav-cta">Démarrer</a>
</nav>`;

const FOOTER = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="https://fr.shok-intelligence.com/" class="nav-logo">
          <div class="nav-logo-mark"><svg viewBox="0 0 14 14" fill="white"><path d="M2 2h4v4H2zM8 2h4v4H8zM2 8h4v4H2z"/></svg></div>
          Shok-IS
        </a>
        <p>Infrastructure d'Intelligence Prédictive. Conçue pour les secteurs régulés et les équipes d'ingénierie qui exigent fiabilité et performance.</p>
        <div class="footer-legal">
          SHOK INTELLIGENCE SYSTEMS LTD — filiale de AURA OPERATIONS LTD<br>
          Immatriculée en Angleterre &amp; au Pays de Galles · N° 17145809<br>
          128 City Road, London, EC1V 2NX, Royaume-Uni<br>
          Tél : +44 7782 256996 · <a href="mailto:contact@shok-intelligence.com" style="color:var(--indigo);">contact@shok-intelligence.com</a>
        </div>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Produit</div>
        <a href="https://fr.shok-intelligence.com/#fonctionnalites">Fonctionnalités</a>
        <a href="https://fr.shok-intelligence.com/docs/index.html">Référence API</a>
        <a href="https://fr.shok-intelligence.com/changelog.html">Journal des mises à jour</a>
        <a href="https://fr.shok-intelligence.com/roadmap.html">Feuille de route</a>
        <a href="https://fr.shok-intelligence.com/status.html">Statut des services</a>
        <a href="https://fr.shok-intelligence.com/inscription/index.html">Bac à sable</a>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Entreprise</div>
        <a href="https://fr.shok-intelligence.com/a-propos.html">À propos</a>
        <a href="https://fr.shok-intelligence.com/blog.html">Blog</a>
        <a href="https://fr.shok-intelligence.com/carrieres.html" class="hl">Carrières — On recrute →</a>
        <a href="https://fr.shok-intelligence.com/dossier-presse.html">Dossier de presse</a>
        <a href="https://fr.shok-intelligence.com/#securite">Sécurité</a>
        <a href="https://fr.shok-intelligence.com/contact.html">Contact</a>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Légal &amp; Conformité</div>
        <a href="https://fr.shok-intelligence.com/legal/confidentialite.html">Politique de confidentialité</a>
        <a href="https://fr.shok-intelligence.com/legal/conditions.html">Conditions d'utilisation</a>
        <a href="https://fr.shok-intelligence.com/legal/dpa.html">Accord de traitement des données</a>
        <a href="https://fr.shok-intelligence.com/legal/cookies.html">Politique de cookies</a>
        <a href="https://fr.shok-intelligence.com/legal/aup.html">Politique d'utilisation acceptable</a>
        <a href="https://fr.shok-intelligence.com/legal/rgpd.html">Déclaration RGPD</a>
        <a href="https://fr.shok-intelligence.com/legal/remboursement.html">Politique de remboursement</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© 2026 Shok Intelligence Systems Ltd. Shok-Intelligence est une marque commerciale de AURA OPERATIONS LTD, immatriculée en Angleterre et au Pays de Galles (N° 17145809). Siège social : 128 City Road, London, EC1V 2NX, Royaume-Uni.</span>
      <span class="footer-status">Tous les systèmes opérationnels</span>
      <div class="footer-badges">
        <span class="footer-badge">SOC2</span>
        <span class="footer-badge">RGPD</span>
        <span class="footer-badge">UK GDPR</span>
      </div>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('nav-placeholder');
  const footerEl = document.getElementById('footer-placeholder');
  if(navEl) navEl.innerHTML = NAV;
  if(footerEl) footerEl.innerHTML = FOOTER;
});
