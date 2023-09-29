import Image from 'next/image';
import styles from './card.module.css';
import Link from 'next/link';

const Card = ({ post }) => {
  return (
    <div className={styles.post}>
      {post.image && (
        <div className={styles.imageContainer}>
          <Image src={post.image} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{post.createdAt.substring(0, 10)}</span>
          <span>-</span>
          <span className={styles.category}>{post.catSlug}</span>
        </div>
        <h1 className={styles.title}>
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </h1>
        <p className={styles.desc}>
          {post.desc.length > 100
            ? post.desc.substring(0, 100) + '...'
            : post.desc}
        </p>
        <Link href={`/posts/${post.slug}`} className={styles.button}>
          Read More
        </Link>
      </div>
    </div>
  );
};
export default Card;
