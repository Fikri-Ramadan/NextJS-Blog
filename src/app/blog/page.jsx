import CardList from '@/components/cardList/CardList';
import styles from './blogPage.module.css';
import Menu from '@/components/menu/Menu';

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const cat = searchParams.cat;

  return (
    <div className={styles.container}>
      <div className={`${styles.title} ${styles[cat]}`}>{cat} Blog</div>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
