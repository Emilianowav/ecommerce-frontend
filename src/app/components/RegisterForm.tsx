import styles from "./RegisterForm.module.css";
import Link from "next/link";
import Image from "next/image";
import registerImg from "../../../public/images/registerImg.jpg";
import  { RegisterFormProps}  from '../types/RegisterForm'; 

const RegisterForm: React.FC<RegisterFormProps> = ({ formData,checkpassword, error, loading, handleChange, handleSubmit }) => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.containerDividerImg}>
                    <h4 className={styles.tittle2}>Libera tu energia <br /> Alcanza tu potencial</h4>
                    <Image className={styles.img} layout="cover" src={registerImg} alt="running" />
                </div>
                <div className={styles.containerDividerForm}>
                    <h3 className={styles.title}>Registrate</h3>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formDivider}>
                            <div className={styles.inputContainer}>
                                <label className={styles.label} htmlFor="name">Nombre</label>
                                <input
                                    className={styles.input}
                                    type="text"
                                    name="name"
                                    id="name"
                                    onChange={handleChange}
                                    value={formData.name}
                                    placeholder="Nombre de usuario"
                                />
                                {error?.name && <p className={styles.errorMessage}>{error?.name}</p>}
                            </div>

                            <div className={styles.inputContainer}>
                                <label className={styles.label} htmlFor="email">Correo Electrónico</label>
                                <input
                                    className={styles.input}
                                    type="email"
                                    name="email"
                                    id="email"
                                    onChange={handleChange}
                                    value={formData.email}
                                    placeholder="ejemplo@mail.com"
                                />
                                {error?.email && <p className={styles.errorMessage}>{error?.email}</p>}
                            </div>
                        </div>

                        <div className={styles.formDivider}>
                            <div className={styles.inputContainer}>
                                <label className={styles.label} htmlFor="contraseña">Contraseña</label>
                                <input
                                    className={styles.input}
                                    type="password"
                                    name="passwordHash"
                                    id="passwordHash"
                                    onChange={handleChange}
                                    value={formData.passwordHash}
                                    placeholder="******"
                                />
                                {error?.checkpassword && <p className={styles.errorMessage}>{error?.checkpassword}</p>}
                                {error?.passwordHash && <p className={styles.errorMessage}>{error?.passwordHash}</p>}
                            </div>

                            <div className={styles.inputContainer}>
                                <label className={styles.label} htmlFor="confirmar contraseña">Confirmar Contraseña</label>
                                <input
                                    className={styles.input}
                                    type="password"
                                    name="checkpassword"
                                    id="checkpassword"
                                    onChange={handleChange}
                                    value={checkpassword}
                                    placeholder="******"
                                />
                                {error?.checkpassword && <p className={styles.errorMessage}>{error?.checkpassword}</p>}
                                {error?.passwordHash && <p className={styles.errorMessage}>{error?.passwordHash}</p>}
                            </div>
                        </div>

                        <button className={styles.button} type="submit" disabled={loading}>
                            {loading ? "Registrando" : "Enviar"}
                        </button>
                    </form>
                    <p className={styles.p}>
                        Ya tienes cuenta?{" "}
                        <Link className={styles.link} href="/login">
                            <strong>Inicia sesión aquí</strong>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
