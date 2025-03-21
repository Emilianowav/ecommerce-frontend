import fetchProducts from "@/lib/fetchProducts";
import styles from "./Products.module.css"
import Link from "next/link";
import Image from "next/image";


// HACER UN COMPONENTE CARD Y PASARLE PROPS (USECLIENT)

export default async function Products() {

    const products = await fetchProducts();

    return (
        <div>
             <ul className={styles.productList}>
            {products.map((product) => (
                <li key={product.id} className={styles.card}>
                    <div className={styles.imageWrapper}>
                        <Link href={`/products/${product.id}`}>
                            <Image
                                className={styles.imgContainer}
                                src={product.imageUrl}
                                alt={product.name}
                                fill
                            />
                        </Link>
                        <ul className={styles.categoryList}>
                            <li className={styles.categoryItem}>{product.category.name}</li>
                            <li className={styles.categoryItem}>Random</li>
                        </ul>
                    </div>
                    <div className={styles.sideBar}>
                        <h2 className={styles.productTitle}>{product.name}</h2>
                        <div className={styles.priceContainer}>
                            <p className={styles.priceValue}>${product.price}</p>
                            <button className={styles.addToCart}>Add to cart</button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>

        </div>
    )
}