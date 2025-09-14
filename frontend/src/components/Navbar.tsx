import { Link } from "react-router-dom";
import "../styles/header.css";
import { useAuth } from "../contexts/AuthContext";

const Navbar: React.FC = () => {
    const { user } = useAuth();
    return (
        <nav className="nav">

            <details className="burger">
                <summary className="burger-btn">
                    <span className="burger-text">Menu</span>
                </summary>
            </details>

            <ul className="menu">
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/circuits">Circuits</Link></li>
                <li><Link to="/about">A propos</Link></li>
                
                {user ? (
                    <>
                        <li><Link to="/my-profil">Mon profil</Link></li>
                    </>
                    ) : (<li><Link to="/signup">Inscription</Link></li>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;