import "../styles/header.css";
import "../styles/button.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


export default function Header() {
    const {user, logout } = useAuth();
    return (

        <header className="site-header">
            <div className="brand">
                <img src="/src/assets/brand/logo_mollidays.png" alt="Logo Molidays" />
                <h1 style={{fontFamily: "var(--font-title)", color: "var(--color-text)"}}>Mo'lidays</h1>
            </div>
            
            <Navbar />

            <div className="actions">
                {user ? (
                    <>
                        <Link to="/cart" className="btn">🛒</Link>
                        <button onClick={logout} className="btn-secondary">Déconnexion</button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="btn-secondary">Se connecter</Link>
                    </>
                )}
            </div>
        </header>
    );
}