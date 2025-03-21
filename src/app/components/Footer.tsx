import Link from "next/link";
import styles from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Información */}
                <div className={styles.section}>
                    <h3>Acerca de Nosotros</h3>
                    <p>La tienda digital de ... con los mejores productos y precios</p>
                </div>

                {/* Navegación */}
                <div className={styles.section}>
                    <h3>Links</h3>
                    <ul>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/faq">FAQ</Link></li>
                    </ul>
                </div>

                {/* Redes Sociales */}
                <div className={styles.section}>
                    <h3>Seguinos en las redes</h3>
                    <div className={styles.socialIcons}>
                        <Link href="#"><FaFacebook size={24} /></Link>
                        <Link href="#"><FaInstagram size={24} /></Link>
                        <Link href="#"><FaTwitter size={24} /></Link>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className={styles.copyright}>
                <p>&copy; {new Date().getFullYear()} MyShop. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}
