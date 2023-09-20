import styles from './homepage.module.css';
import Featured from '../components/featured/Featured';
import CategoryList from '../components/categoryList/CategoryList';
import Pagination from '../components/pagination/Pagination';
import CardList from '../components/cardList/CardList';
import Menu from '../components/menu/Menu';

export default function Home() {
  return (
    <div>
      <Featured />
      <CategoryList />
      <CardList />
      <Pagination />
      <Menu />
    </div>
  );
}
