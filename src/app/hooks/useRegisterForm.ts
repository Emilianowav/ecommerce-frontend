"use client"
import axios from "axios";
import React, { useState } from "react";

export default function useRegisterForm() {
    const [formData, setFormData] = useState({
        name: "",
        email:"",
        passwordHash:"",
        role:"customer"
    })

    
    const [checkpassword, setCheckPassword] = useState("");
    const [error, setError] = useState<{
        name?: string;
        email?: string;
        passwordHash?: string;
        checkpassword?: string;
    }>({});
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "checkpassword") {
            setCheckPassword(value);
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError({});

        const formErrors: { name?: string; email?: string; passwordHash?: string; checkpassword?: string } = {};

        if (!formData.name) formErrors.name = "El nombre es obligatorio";
        if (!formData.email) formErrors.email = "El correo electrónico es obligatorio";
        if (!formData.passwordHash) formErrors.passwordHash = "La contraseña es obligatoria";
        if (formData.passwordHash !== checkpassword) formErrors.checkpassword = "Las contraseñas no coinciden";


        if (Object.keys(formErrors).length > 0) {
            setError(formErrors);
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, formData)

            console.log("Usuario registrado:", response.data);
            setFormData({ name: "", email: "", passwordHash: "", role: "customer" });
            setError({});
        } catch (error) {
            if(axios.isAxiosError(error)){
                const serverError = error.response?.data
                if(serverError?.field && serverError?.message){
                    setError((prevError)=> ({
                        ...prevError,
                        [serverError.field] : serverError.message
                    }))
            }}
        }finally{
            setLoading(false)
        }
    }
    return{
        formData,
        error,
        loading,
        handleChange,
        checkpassword,
        handleSubmit
    }
}