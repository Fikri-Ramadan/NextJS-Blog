import styles from './menu.module.css';
import Link from 'next/link';
import MenuList from '../menuList/MenuList';
import MenuCategories from '../menuCategories/MenuCategories';

const Menu = () => {
  return (
    <div className={styles.container}>
      <MenuList />
      <MenuCategories />
      <MenuList withImage={true} />
    </div>
  );
};

export default Menu;
