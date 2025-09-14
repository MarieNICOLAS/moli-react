import React from "react";
import "../styles/form.css";

interface FormInputProps {
    label: string;
    type?: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>)=> void;
    placeholder?: string;
    required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
    label,
    type = "text",
    name,
    value,
    onChange,
    placeholder = "",
    required = false
}) => {
    return (
        <div className="form-group">
            <label htmlFor={name} className="form-label">{label}</label>
            <input
                id={name}   
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="form-input"
            />
        </div>
    );
};

export default FormInput;
