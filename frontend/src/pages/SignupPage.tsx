// src/pages/SignupPage.tsx
import React, { useState } from "react";
import "../styles/auth.css";
import "../styles/button.css";
import FormInput from "../components/FormInput";
import useSignupForm from "../hooks/useSignupForm"; // Import du nouveau hook

// Interface pour le user (peut être partagée dans un fichier de types)
interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

const SignupPage: React.FC = () => {
    const { formData, errors, handleInputChange, validateForm } = useSignupForm();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }
        setIsLoading(true);

        const newUser: User = {
            id: Date.now().toString(),
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
        };

        let users = [];
        const existingUsers = localStorage.getItem("users");
        if (existingUsers) {
            users = JSON.parse(existingUsers);
        }
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        console.log("Données à enregistrer:", newUser);

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            alert("Inscription réussie!");
        } catch (error) {
            console.error("Erreur lors de l'inscription:", error);
            alert("Une erreur est survenue. Veuillez réessayer.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                <div className="auth-title"><h1>Inscription à Mo'lidays 🛫</h1></div>
                <form onSubmit={handleSubmit} className="auth-form">
                    <FormInput
                        label="Prénom"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Votre prénom"
                        required
                        error={errors.firstName || ""}
                    />
                    <FormInput
                        label="Nom"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Votre nom"
                        required
                        error={errors.lastName || ""}
                    />
                    <FormInput
                        label="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="votre.email@exemple.com"
                        required
                        error={errors.email || ""}
                    />
                    <FormInput
                        label="Mot de passe"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Minimum 6 caractères"
                        required
                        error={errors.password || ""}
                    />
                    <FormInput
                        label="Confirmer le mot de passe"
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Répétez le mot de passe"
                        required
                        error={errors.confirmPassword || ""}
                    />
                    <div className="form-actions">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`btn-primary ${isLoading ? 'btn-disable' : ''}`}
                        >
                            {isLoading ? 'Création en cours...' : 'Créer mon compte'}
                        </button>
                    </div>
                </form>
                <div className="form-redirect">
                    <p>
                        Déjà un compte ?{' '}
                        <a href="/login" className="link">
                            Se connecter
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;