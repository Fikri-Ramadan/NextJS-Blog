import styles from './menu.module.css';
import MenuList from '../menuList/MenuList';
import MenuCategories from '../menuCategories/MenuCategories';
import customFetch from '@/utils/customFetch';

const getTrendingPosts = async () => {
  const { data } = await customFetch.get('/api/posts/trending');
  return data;
}

const Menu = async () => {
  const {populars, byEditors } = await getTrendingPosts();

  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's Hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuList posts={populars} />

      <h2 className={styles.subtitle}>Dicover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />

      <h2 className={styles.subtitle}>Chosen by editor</h2>
      <h1 className={styles.title}>Editor Picks</h1>
      <MenuList posts={byEditors} />
    </div>
  );
};

export default Menu;
