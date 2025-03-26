"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Carousel.module.css";

interface Props {
    images: ImageData[];
}

interface ImageData {
    title: string;
    url: string;
}

const Carousel: React.FC<Props> = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleThumbnailClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className={styles.carousel}>

            {/* Miniaturas */}
            <div className={styles.thumbnailContainer}>
                {images.map((image, index) => (
                    <div key={index} className={styles.thumbnailWrapper} onClick={() => handleThumbnailClick(index)}>
                        <Image
                            src={image.url}
                            alt={image.title}
                            width={80}
                            height={60}
                            className={`${styles.thumbnail} ${index === activeIndex ? styles.activeThumbnail : ""}`}
                        />
                    </div>
                ))}
            </div>



            {/* Imagen principal */}
            <div className={styles.mainImageContainer}>
                <Link href={images[activeIndex].url} className={styles.mainImageLink}>
                    <div className={styles.imageWrapper}>
                        <Image 
                            src={images[activeIndex].url} 
                            alt={images[activeIndex].title} 
                            width={800}
                            height={800}
                            className={styles.mainImage}
                        />
                    </div>
                </Link>
            </div>

            
        </div>
    );
};

export default Carousel;
