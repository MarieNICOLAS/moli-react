import React, { useState } from "react";
import FormInput from "../components/FormInput";
import "../styles/auth.css";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email: ", email, "Password: ", password);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-title"><h1>Connexion</h1></div>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="exemple@mail.com"
            required
            error=""
          />

          <FormInput
            label="Mot de passe"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="**********"
            required
            error=""
          />

          <div className="form-actions">
            <button type="submit" className="btn-primary">
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;