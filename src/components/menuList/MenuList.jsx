import Image from 'next/image';
import Link from 'next/link';
import styles from './menuList.module.css';

const MenuList = async ({ posts }) => {
  return (
    <>
      <div className={styles.items}>
        {posts &&
          posts.map((post) => {
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
