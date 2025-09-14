import React from "react";
import "../styles/footer.css"; // on garde ton ancien CSS

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* Colonne logo + description */}
        <div className="footer-col footer-brand">
          <img src="../../public/logo_mo.png" alt="Logo Mo'lidays" className="footer-logo" />
          <p className="footer-desc">
            Mo'lidays est une plateforme de réservation de circuits inoubliables à vivre en duo parent-enfant.
          </p>
        </div>

        {/* Colonne conditions */}
        <div className="footer-col">
          <h3 className="footer-title">Conditions & Paramètres</h3>
          <ul>
            <li><a href="#">Mentions légales</a></li>
            <li><a href="#">CGU</a></li>
            <li><a href="#">CGV</a></li>
            <li><a href="#">Politique de confidentialité</a></li>
            <li><a href="#">Politique de cookies</a></li>
            <li><a href="#">Paramétrer mes cookies</a></li>
            <li><a href="#">Droit de rétractation</a></li>
          </ul>
        </div>

        {/* Colonne liens rapides */}
        <div className="footer-col">
          <h3 className="footer-title">Liens rapides</h3>
          <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Nos Circuits</a></li>
            <li><a href="#">À propos</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Colonne contact + réseaux sociaux */}
        <div>
          <h3 className="footer-title">Contactez-nous</h3>
          <div className="footer-row">
            <ul className="footer-icons">
              <li><a href="#"><img src="/src/assets/icon/social-media/logo-linkelin.png" alt="Logo LinkedIn" /></a></li>
              <li><a href="#"><img src="/src/assets/icon/mail.png" alt="Logo Mail" /></a></li>
              <li><a href="#"><img src="/src/assets/icon/phone.png" alt="Logo Téléphone" /></a></li>
            </ul>
          </div>

          <h3 className="footer-title">Suivez-nous !</h3>
          <div className="footer-row">
            <ul className="footer-icons">
              <li><a href="#"><img src="/src/assets/icon/social-media/icon-instagram.png" alt="Instagram" /></a></li>
              <li><a href="#"><img src="/src/assets/icon/social-media/icon-youtube.png" alt="YouTube" /></a></li>
              <li><a href="#"><img src="/src/assets/icon/social-media/icon-tiktok.png" alt="TikTok" /></a></li>
              <li><a href="#"><img src="/src/assets/icon/social-media/icon-facebook.png" alt="Facebook" /></a></li>
            </ul>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 - Mo'lidays. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
