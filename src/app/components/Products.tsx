import fetchProducts from "@/lib/fetchProducts";
import styles from "./Products.module.css"
import Link from "next/link";
import Image from "next/image";
import { IoBagHandleOutline  } from "react-icons/io5";



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
                                src={product.images?.[0]?.url}
                                alt={product.name}
                                fill
                            />
                            
                        </Link>
                        <button className={styles.addToCart}><IoBagHandleOutline/></button>
                    </div>
                    <div className={styles.sideBar}>
                        <h2 className={styles.productTitle}>{product.name}</h2>
                        <p className={styles.priceValue}>${product.price}</p>
                    </div>
                </li>
            ))}
        </ul>

        </div>
    )
}