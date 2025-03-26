import Product from "./Products"
import styles from "./ProductsContainer.module.css"

export const ProductsContainer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h2  className={styles.title}>Nuevos Productos 🛒</h2>
            </div>
            <Product/>
        </div>
    )
}