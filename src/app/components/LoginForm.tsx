import {Login} from "../types/Login";
import styles from "./LoginForm.module.css"
import Link from "next/link";

const LoginForm: React.FC<Login> = ({handleLogin,handleChange,loginData,error}) => {
    return(
        <div>
            <div className={styles.container}>
                <h4 className={styles.title}>Ingresar</h4>
                <p className={styles.errorMessage}>{error}</p>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor="">Usuario</label>
                    <input 
                        className={styles.input}
                        type="text" 
                        name="username"
                        placeholder="Nombre de usuario" 
                        onChange={handleChange}
                        value={loginData.username}
                    />


                    <label className={styles.label} htmlFor="">Contraseña</label>
                    <input 
                        className={styles.input}
                        name="password"
                        type="password" 
                        placeholder="******" 
                        onChange={handleChange}
                        value={loginData.password}
                    />
                    <p className={styles.pPassword}><strong><Link className={styles.link} href="#">Olvidaste tu contraseña?</Link></strong></p>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.button} onClick={handleLogin}>Ingresar</button>
                    <p className={styles.p}>Usuario nuevo?<strong><Link className={styles.link} href="/register">Registrate</Link></strong></p>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;