import React, { useState } from "react";
import "../styles/auth.css";
import "../styles/button.css";
import FormInput from "../components/FormInput";

// Interface pour typer les données du formulaire
interface SignupFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const SignupPage: React.FC = () => {
    //Etat pour stocker les données du formulaire
    const [formData, setFormData] = useState<SignupFormData>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    //Etat pour stocker les erreurs de validation
    const [errors, setErrors] = useState<Partial<SignupFormData>>({});

    const [isLoading, setIsLoading] = useState(false);

    //Fonction pour gérer les changements dans les inputs
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Supprime l'erreur du champ modifié
        if (errors[name as keyof SignupFormData]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }) );
        }
    };

    // Validation du formulaire
    const validateForm = (): boolean => {
        const newErrors: Partial<SignupFormData> = {}
        if (!formData.firstName.trim()) {
            newErrors.firstName = "Le prénom est requis";
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = "Le nom est requis";
        }
        if (!formData.password.trim()) {
            newErrors.password = "Le mot de passe est requis";
        } else if (formData.password.length < 6) {
            newErrors.password = "Le mot de passe doit contenir au moins 6 caractères";
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
        }
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    //Soumission du formulaire
    const handleSubmit = async (e: React.FormEvent) => {
        // Empeche le rechargement de la page (comportement par defaut)
        e.preventDefault();

        console.log("Formulaire soumis!", e);

        //Valide le formulaire
        if (!validateForm()) {
            console.log("Erreurs de validation:", errors);
            return;
        }
        setIsLoading(true);

        try {

            //Ici appel API pour créer le compte
            console.log("Données à envoyer:", formData);

            //Simulation d'un délai de réponse API
            await new Promise(resolve => setTimeout(resolve, 2000));

            alert ("Inscription réussie!");
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
                            error={errors.email || ""}
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
                            error={errors.email || ""}
                        />

                        <FormInput
                            label="Confirmer le mot de passe"
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            placeholder="Répétez le mot de passe"
                            required
                            error={errors.email || ""}
                        />

                        <div className="form-actions">
                            <button 
                                type="submit"
                                disabled={isLoading} 
                                className={"btn-primary ${isLoading ? 'btn-disable' : ''}"}
                            >
                                {isLoading ? 'Creation en cours...' : 'Créer mon compte'}
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
    )

}

export default SignupPage;