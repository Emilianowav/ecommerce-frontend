import styles from "./page.module.css";
import Products from "../components/Products";
import Sidebar from "../components/SideBar";

export default function Shop() {
    return (
        <div className={styles.shopContainer}>
            <Sidebar/>

            {/* Contenido Principal (Productos) */}
            <main className={styles.products}>
                <h2 className={styles.productsTitle}>Todos los productos</h2>
                    <Products />
            </main>
        </div>
    );
}
