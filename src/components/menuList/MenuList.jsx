import Image from 'next/image';
import Link from 'next/link';
import styles from './menuList.module.css';
import axios from 'axios';

const getMostPopular = async () => {
  try {
    const { data } = await axios.get('http://localhost:3000/api/posts/popular');
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getEditorPick = async () => {
  try {
    const { data } = await axios.get('http://localhost:3000/api/posts/editor');
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const MenuList = async ({ mostPopular, editorPick }) => {
  let posts;

  if (mostPopular) {
    posts = await getMostPopular();
  }

  if (editorPick) {
    posts = await getEditorPick();
  }

  return (
    <>
      <div className={styles.items}>
        {posts.map((post) => {
          return (
            <div className={styles.item} key={post.slug}>
              {post.image && (
                <div className={styles.imageContainer}>
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    className={styles.image}
                  />
                </div>
              )}
              <div className={styles.textContainer}>
                <div className={`${styles.category} ${styles[post.catSlug]}`}>
                  {post.catSlug}
                </div>
                <Link href={`/posts/${post.slug}`}>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                </Link>
                <div className={styles.detail}>
                  <span className={styles.username}>{post.user.name}</span>
                  <span> - </span>
                  <span className={styles.date}>
                    {post.createdAt.substring(0, 10)}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MenuList;
