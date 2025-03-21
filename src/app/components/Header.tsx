import Link from "next/link";
import styles from "./Header.module.css";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa"; // Iconos de FontAwesome

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>MyShop</Link>

                {/* Barra de búsqueda */}
                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        placeholder="Buscar Productos..."
                        className={styles.searchInput}
                    />
                    <button className={styles.searchButton}><FaSearch/></button>
                </div>

                {/* Navegación */}
                <nav className={styles.nav}>
                    <Link href="/products" className={styles.navLink}>Tienda</Link>
                    <Link href="/categories" className={styles.navLink}>Categorias</Link>
                    <Link href="/about" className={styles.navLink}>Acerca de nosotros</Link>
                </nav>

                {/* Íconos de usuario y carrito */}
                <div className={styles.icons}>
                    <Link href="/profile" className={styles.icon}>
                        <FaUser size={20} />
                    </Link>
                    <Link href="/cart" className={styles.icon}>
                        <FaShoppingCart size={20} />
                    </Link>
                </div>
            </div>
        </header>
    );
}
