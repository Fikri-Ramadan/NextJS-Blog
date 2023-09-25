import axios from 'axios';
import Card from '../card/Card';
import Pagination from '../pagination/Pagination';
import styles from './cardList.module.css';

const getPosts = async (page) => {
  const res = await axios.get(`http://localhost:3000/api/posts?page=${page}`);
  return res.data;
};

const CardList = async ({ page }) => {
  const { posts, count } = await getPosts(page);
  
  const POST_PER_PAGE = 3;
  
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((post) => {
          return <Card post={post} key={post._id} />;
        })}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
