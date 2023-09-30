import Link from 'next/link';
import styles from './menuCategories.module.css';

const MenuCategories = () => {
  return (
    <>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=backend"
          className={`${styles.link} ${styles.backend}`}
        >
          backend
        </Link>
        <Link href="/blog?cat=frontend" className={`${styles.link} ${styles.frontend}`}>
          frontend
        </Link>
        <Link href="/blog?cat=devops" className={`${styles.link} ${styles.devops}`}>
          devops
        </Link>
        <Link href="/blog?cat=fullstack" className={`${styles.link} ${styles.fullstack}`}>
          fullstack
        </Link>
        <Link href="/blog?cat=uiux" className={`${styles.link} ${styles.uiux}`}>
          uiux
        </Link>
        <Link href="/blog?cat=other" className={`${styles.link} ${styles.other}`}>
          other
        </Link>
      </div>
    </>
  );
};

export default MenuCategories;
