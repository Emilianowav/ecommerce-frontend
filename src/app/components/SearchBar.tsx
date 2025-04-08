import { useEffect, useState } from "react";
import styles from "./SearchBar.module.css"
import Image from "next/image";
// interfaces
import { Products } from "../types/Products";
// components
import { useDebounce } from "../hooks/useDebounce";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

export default function SearchBar () {

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [products, setProducts] = useState<Products[]>([]);
    const debounceSearch = useDebounce(searchTerm, 800);

    useEffect(()=> {

        if(debounceSearch === ""){
            setProducts([]);
        }
        if(debounceSearch){
            fetchProducts(debounceSearch)
        }
    }, [debounceSearch]);

    const fetchProducts = async (query: string) => {
        try {
            const response = await fetch(`http://localhost:4001/api/products/search?query=${query}`)
            const data = await response.json();
            setProducts(data);
            console.log(data)
        } catch (error) {
            console.error("Error al obtener los productos:", error);
        }
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    return(
        <div className={styles.searchContainer}>
            <input 
                value={searchTerm} 
                onChange={handleOnChange} 
                name="searcher" type="text" 
                placeholder="Buscar Producto..." 
                className={styles.searchInput} 
            />
            <button className={styles.searchButton}><FaSearch /></button>
            
            <ul className={styles.searchedUl}>
                {products.map((product) => (
                    <Link href="/shop" key={product.id}>
                        <li className={styles.searchedLi} >
                            <h4 className={styles.objectName}>
                                {product.name}
                            </h4>
                            <p className={styles.objectCategory}>
                                {product.categories.map(cat => cat.name)}
                            </p>
                            <h4 className={styles.objectName}>
                                ${product.price}
                            </h4>
                            <Image className={styles.objectImage} src={product.images[0].url} alt={product.name} width={50} height={50}>
                            </Image>

                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}