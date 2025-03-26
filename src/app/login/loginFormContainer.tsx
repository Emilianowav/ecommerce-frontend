"use client";

import useLoginForm from "../hooks/useLoginForm";
import LoginForm from "../components/LoginForm";
import { useAuthStore } from "../store/useAuthStore";
import { useRouter } from "next/navigation";

export default function LoginFormContainer() {
    const { handleChange, handleLogin, loginData, error } = useLoginForm();

    return <LoginForm handleChange={handleChange} handleLogin={handleLogin} loginData={loginData} error={error} />;
}
