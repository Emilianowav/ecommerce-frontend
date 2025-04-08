'use client';
import Link from 'next/link';
import styles from './SideBar.module.css'; 
import SearchBar from './SearchBar';
const categories = ['Ropa', 'Calzado', 'Accesorios', 'Equipamiento'];

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      {/* Categorías */}
      <nav className={styles.categories}>
        <h3 className={styles.categoryTitle}>Categorías</h3>
        <ul className={styles.categoryList}>
          {categories.map((cat) => (
            <li key={cat} className={styles.categoryItem}>
              <Link href={`/shop/${cat.toLowerCase()}`}>
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Filtros Extra */}
      <div className={styles.filters}>
        <h3 className={styles.filterTitle}>Filtros</h3>
        <label className={styles.filterOption}>
          <input type="checkbox" className={styles.filterCheckbox}/> En oferta
        </label>
        <label className={styles.filterOption}>
          <input type="checkbox" className={styles.filterCheckbox}/> Envío gratis
        </label>
      </div>
    </aside>
  );
}
