import Link from "next/link";
import styles from './menuCategories.module.css';

const MenuCategories = () => {
  return (
    <>
      <h2 className={styles.subtitle}>Dicover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categories}>
        <Link href="/" className={`${styles.link} ${styles.style}`}>
          style
        </Link>
        <Link href="/" className={`${styles.link} ${styles.fashion}`}>
          fashion
        </Link>
        <Link href="/" className={`${styles.link} ${styles.food}`}>
          food
        </Link>
        <Link href="/" className={`${styles.link} ${styles.travel}`}>
          travel
        </Link>
        <Link href="/" className={`${styles.link} ${styles.culture}`}>
          culture
        </Link>
        <Link href="/" className={`${styles.link} ${styles.coding}`}>
          coding
        </Link>
      </div>
    </>
  );
};

export default MenuCategories;
