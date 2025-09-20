// src/hooks/useSignupForm.tsx
import { useState } from "react";

interface SignupFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const useSignupForm = () => {
    const [formData, setFormData] = useState<SignupFormData>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState<Partial<SignupFormData>>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (errors[name as keyof SignupFormData]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<SignupFormData> = {};
        if (!formData.firstName.trim()) { newErrors.firstName = "Le prénom est requis"; }
        if (!formData.lastName.trim()) { newErrors.lastName = "Le nom est requis"; }
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) { newErrors.email = "L'email est invalide"; }
        if (!formData.password.trim()) { newErrors.password = "Le mot de passe est requis"; }
        else if (formData.password.length < 6) { newErrors.password = "Le mot de passe doit contenir au moins 6 caractères"; }
        if (formData.password !== formData.confirmPassword) { newErrors.confirmPassword = "Les mots de passe ne correspondent pas"; }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return {
        formData,
        errors,
        handleInputChange,
        validateForm,
    };
};

export default useSignupForm;