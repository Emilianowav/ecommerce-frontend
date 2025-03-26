"use client"
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import Logo from "../../../public/images/Logo.svg";
import { FaShoppingCart, FaUser, FaSearch, FaStore } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useAuthStore } from "../store/useAuthStore";

export default function Header() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const {user, logout, isAuthenticated} = useAuthStore();
    
    useEffect(() => {
        setIsLoading(true)
        setTimeout(()=> setIsLoading(false), 500)
    }, [isAuthenticated]);


    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* Logo + Buscador */}
                <div className={styles.logoSearch}>
                    <Link href="/" className={styles.logo}>
                        <Image src={Logo} alt="Logo" fill />
                    </Link>
                    <div className={styles.searchContainer}>
                        <input type="text" placeholder="Buscar Producto..." className={styles.searchInput} />
                        <button className={styles.searchButton}><FaSearch /></button>
                    </div>
                </div>

                <Link className={styles.storeLink} href="/store">
                Tienda
                    <div className={styles.storeIcon}>
                        <FaStore />
                    </div>
                </Link>

                {/* Íconos de usuario y carrito (o botón de inicio si no hay token) */}
                <div className={styles.icons}>
                    {isLoading ? ( // 🔥 Mostramos el loader mientras cargamos Zustand
                        <div className={styles.loader}></div>
                    ) : isAuthenticated ? (
                        <>
                            <Link href="/profile" className={styles.icon}>
                                <FaUser />
                            </Link>
                            <Link href="/cart" className={styles.icon}>
                                <FaShoppingCart />
                            </Link>
                        </>
                    ) : (
                        <Link href="/login" className={styles.loginButton}>
                            Iniciar sesión
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
}
