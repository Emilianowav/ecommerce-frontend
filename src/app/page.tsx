import Header from "./components/Header";
import { ProductsContainer } from "./components/ProductsContainer";
import Footer from "./components/Footer";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
//assets
import { FaStore } from "react-icons/fa";

export default function Home() {
  return (
    <div className="">
      <Header/>
      <section className={styles.banner}>
          <div className={styles.textContainer}>
            <div className={styles.titleContainer}>
              <h5 className={styles.Pretitle}>Aprovecha ahora</h5>
              <h1 className={styles.title}>Oferta Especial 2x3 en prendas deportivas </h1>
            </div>
              <p className={styles.subtitle}>¡Solo por tiempo limitado! Equípate ahora y lleva tu rendimiento al siguiente nivel.</p>
              <Link href="/products" className={styles.ctaButton}>
                  Ver Tienda
                  <FaStore />
              </Link>
          </div>
          <div className={styles.imageContainer}>
              <Image
                  src="/images/bannerImg.jpg"
                  alt="Oferta especial en ropa deportiva"
                  fill
                  className={styles.bannerImage}
              />
          </div>
      </section>
      <ProductsContainer/>
      <Footer/>
    </div>
  );
}
