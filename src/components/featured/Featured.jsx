import Image from 'next/image';
import styles from './featured.module.css';
import Link from 'next/link';
import customFetch from '@/utils/customFetch';

const getPopularPost = async () => {
  try {
    const { data } = await customFetch.get('/api/posts/trending');
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const Featured = async () => {
  const { populars } = await getPopularPost();
  const post = populars[0];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hello, everyone!</b> Discover your innovation and creative ideas.
      </h1>
      <div className={styles.post}>
        {post.image && (
          <div className={styles.imageContainer}>
            <Image
              src={post.image}
              alt="main image"
              fill
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.postInfo}>
          <div className={styles.postTitle}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </div>
          <div
            className={styles.postDesc}
            dangerouslySetInnerHTML={{
              __html:
                post.desc.length > 300
                  ? post.desc.substring(0, 300) + '<span>...</span>'
                  : post.desc,
            }}
          />
          <Link href={`/posts/${post.slug}`}>
            <button className={styles.button}>Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
