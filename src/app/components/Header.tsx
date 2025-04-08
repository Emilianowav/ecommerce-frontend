"use client"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
// styles
import styles from "./Header.module.css";
// assets
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { IoBagHandleOutline,IoSearch  } from "react-icons/io5";
import Logo from "../../../public/images/Logo.svg";

export default function Header() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const {isAuthenticated} = useAuthStore();
    
    useEffect(() => {
        setIsLoading(true)
        setTimeout(()=> setIsLoading(false), 500)
    }, [isAuthenticated]);


    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logoSearch}>
                    <Link href="/" className={styles.logo}>
                        <Image src={Logo} alt="Logo" fill />
                    </Link>
                </div>
                <nav className={styles.nav}>
                    <Link className={styles.storeLink} href="/">Inicio</Link>
                    <div className={styles.dropdown}>
                            <span className={styles.storeLink}>Productos <MdKeyboardArrowDown className={styles.arrow}/></span>
                            <div className={styles.dropdownMenu}>
                            {/* Columna Mujer */}
                            <div className={styles.column}>
                                <h4 className={styles.columnTitle}>Mujer</h4>
                                <Link href="/shop/ropa/mujer/remera" className={styles.dropdownItem}>Remera</Link>
                                <Link href="/shop/ropa/mujer/musculosa" className={styles.dropdownItem}>Musculosa</Link>
                                <Link href="/shop/ropa/mujer/campera" className={styles.dropdownItem}>Campera</Link>
                            </div>

                            {/* Columna Hombre */}
                            <div className={styles.column}>
                                <h4 className={styles.columnTitle}>Hombre</h4>
                                <Link href="/shop/ropa/hombre/remera" className={styles.dropdownItem}>Remera</Link>
                                <Link href="/shop/ropa/hombre/musculosa" className={styles.dropdownItem}>Musculosa</Link>
                                <Link href="/shop/ropa/hombre/campera" className={styles.dropdownItem}>Campera</Link>
                            </div>

                            {/* Columna Accesorios */}
                            <div className={styles.column}>
                                <h4 className={styles.columnTitle}>Accesorios</h4>
                                <Link href="/shop/accesorios/gorra" className={styles.dropdownItem}>Gorra</Link>
                                <Link href="/shop/accesorios/mochila" className={styles.dropdownItem}>Mochila</Link>
                                <Link href="/shop/accesorios/botella" className={styles.dropdownItem}>Botella</Link>
                            </div>
                            </div>
                    </div>
                    <Link className={styles.storeLink} href="/contact">Contacto</Link>
                </nav>
                {/* Íconos de usuario y carrito (o botón de inicio si no hay token) */}
                <div className={styles.icons}>
                {/* <SearchBar/> */}
                    {isLoading ? ( // 🔥 Mostramos el loader mientras cargamos Zustand
                        <div className={styles.loader}></div>
                    ) : isAuthenticated ? (
                        <>
                            <IoSearch className={styles.searchButton}/>
                            <Link href="/profile">
                                <FiUser />
                            </Link>
                            <Link href="/cart" className={styles.icon}>
                                <IoBagHandleOutline />
                            </Link>
                        </>
                    ) : (
                        <>
                            <IoSearch className={styles.searchButton}/>
                            <Link href="/login" className={styles.icon}>
                                <FiUser />
                            </Link>
                            <Link href="/cart" className={styles.icon}>
                                <IoBagHandleOutline />
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
