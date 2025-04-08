import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import fetchProducts from "@/lib/fetchProducts";
import Sidebar from "@/app/components/SideBar";
// import { Products } from "@/app/types/Products";
import { FaShoppingCart} from "react-icons/fa";

interface Props {
    params: {
        category: string,
    };
}

export default async function Category ({params}: Props) {

    const products = await fetchProducts();
    
    const {category} = await params;

    const paramsCategory = category.toLocaleLowerCase().trim();

    const filtered = products.filter((product) =>
        product.categories.some(
        (cat) =>
            cat.name.toLowerCase().trim() ===
            paramsCategory
        )
    );

    return (
        <div className={styles.shopContainer}>
            <Sidebar/>
            {/* Contenido Principal (Productos) */}
            <main className={styles.products}>
                <h2 className={styles.productsTitle}>Todos los productos</h2>
                <ul className={styles.productList}>
            {filtered.map((product) => (
                <li key={product.id} className={styles.card}>
                    <div className={styles.imageWrapper}>
                        <Link className={styles.link} href={`/products/${product.id}`}>
                            <Image
                                className={styles.imgContainer}
                                src={product.images?.[0]?.url}
                                alt={product.name}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </Link>
                    </div>
                    <div className={styles.sideBar}>
                        <h2 className={styles.productTitle}>{product.name}</h2>
                        <div className={styles.priceContainer}>
                            <p className={styles.priceValue}>${product.price}</p>
                            <button className={styles.addToCart}>Agregar <FaShoppingCart/></button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
            </main>
        </div>
    );
}
