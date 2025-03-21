"use client"
import { Category } from "@/app/types/Categories";
import { useState, useEffect } from "react";
import styles from "./Categories.module.css"

const Categories = () => {
    const [categories, setCategories] = useState<Category[]>([])
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    

    useEffect( () => {
       const loadCategories = async () => {
        try {
            const res = await fetch("http://localhost:4001/api/category");
            const data: Category[] = await res.json()
            setCategories(data)
            
        } catch (error) {
            console.error("Error al obtener categorias:", error)
        }
       }
       loadCategories();
    }, [])


    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <div className={styles.container}>
            <select 
                value={selectedCategory || ""}
                onChange={handleSelectChange}
                className={styles.select}
            >
                {categories.map((category) => (
                    <option className={styles.option} key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Categories;






    
