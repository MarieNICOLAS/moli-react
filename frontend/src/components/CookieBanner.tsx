import React, {useState, useEffect} from "react";
import "../styles/cookiesBanner.css";

const CookieBanner: React.FC = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            setVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "accepted");
        setVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookieConsent", "declined");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="cookie-banner">
            <div className="cookie-content">
                <div className="cookie-text">
                    <h2>Gérer les paramètres relatifs aux cookies</h2>
                    <p>
                        Sur ce site Internet, nous, Mo’lidays.com et nos partenaires, utilisons les catégories suivantes de cookies
                        (et technologies similaires) qui nécessitent votre accord : les cookies analytiques et les cookies marketing.
                    </p>

                    <h3>Cookies analytiques</h3>
                    <p>
                        Nous utilisons des cookies analytiques pour obtenir des informations sur votre utilisation du site et améliorer nos services.
                    </p>

                    <h3>Cookies marketing</h3>
                    <p>
                        Nous utilisons des cookies marketing pour afficher du contenu et des publicités personnalisés sur notre plateforme et ailleurs.
                    </p>

                    <p>
                        Vous trouverez plus d'informations sur les cookies que nous utilisons et sur le traitement des données personnelles
                        dans notre Charte de confidentialité et informations sur les cookies.
                    </p>
                </div>

                <div className="cookie-actions">
                    <button onClick={handleAccept} className="btn-accept">Accepter</button>
                    <button onClick={handleDecline} className="btn-decline">Refuser</button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;