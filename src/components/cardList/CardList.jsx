import axios from 'axios';
import Card from '../card/Card';
import Pagination from '../pagination/Pagination';
import styles from './cardList.module.css';

const getPosts = async (page, cat) => {
  const res = await axios.get(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat}`
  );
  return res.data;
};

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getPosts(page, cat);

  const POST_PER_PAGE = 3;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((post) => {
          return <Card post={post} key={post.id} />;
        })}
      </div>
      <Pagination page={page} cat={cat} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
