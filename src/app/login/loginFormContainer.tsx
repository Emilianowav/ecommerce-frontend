"use client";
import useLoginForm from "../hooks/useLoginForm";
import LoginForm from "../components/LoginForm";
import styles from "./loginFormContainer.module.css"

export default function LoginFormContainer() {
    const { handleChange, handleLogin, loginData, error } = useLoginForm();

    return (
        <div  className={styles.container}>
            <LoginForm handleChange={handleChange} handleLogin={handleLogin} loginData={loginData} error={error} />;
        </div>
    )
}
