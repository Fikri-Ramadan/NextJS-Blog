import CardList from '@/components/cardList/CardList';
import styles from './blog.module.css';
import Menu from '@/components/menu/Menu';

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.title} ${styles.style}`}>Style Blog</div>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
