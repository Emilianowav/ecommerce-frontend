import Product from "./Products"
import styles from "./ProductsContainer.module.css"

export const ProductsContainer = () => {
    return(
        <div className={styles.container}>
            <h2  className={styles.title}>Ultimos Agregados</h2>
            <Product/>
        </div>
    )
}