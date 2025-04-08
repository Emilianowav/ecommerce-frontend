import { ProductsContainer } from "./components/ProductsContainer";
import Carousel from "./components/Carousel";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
//assets
import { FaStore } from "react-icons/fa";


const imagesData = [
  { title: "Imagen 1", url: "https://i.pinimg.com/736x/79/d7/49/79d74928818e3027daa70296ace11876.jpg" },
  { title: "Imagen 2", url: "https://i.pinimg.com/736x/20/d4/9a/20d49acf2a64f903fdaa20e060398d72.jpg" },
  { title: "Imagen 3", url: "https://i.pinimg.com/736x/9b/a2/8c/9ba28c34e74fedec17363b4896d52242.jpg" },
  { title: "Imagen 4", url: "https://i.pinimg.com/736x/5e/33/0c/5e330c5df2317ef5c681be94f7e7aeee.jpg" },
];



export default function Home() {
  return (
    <div className="">
      <div className={styles.contentContainer}>
        <section className={styles.banner}>
            <div className={styles.textContainer}>
              <div className={styles.titleContainer}>
                <h5 className={styles.Pretitle}>Aprovecha ahora</h5>
                <h1 className={styles.title}>Oferta Especial 3x2 en prendas deportivas </h1>
              </div>
                <p className={styles.subtitle}>¡Solo por tiempo limitado! Equípate ahora y lleva tu rendimiento al siguiente nivel.</p>
                <Link href="/shop" className={styles.ctaButton}>
                    Ver Tienda
                    <FaStore />
                </Link>
            </div>
            <div className={styles.imageContainer}>
                <Image
                    src="/images/bannerImg.png"
                    alt="Oferta especial en ropa deportiva"
                    fill
                    className={styles.bannerImage}
                />
            </div>
        </section>
        <ProductsContainer/>
      </div>
      <Carousel images={imagesData}/>
    </div>
  );
}
