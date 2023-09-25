import Image from 'next/image';
import styles from './cart.module.css';
import Link from 'next/link';

const Card = ({ post, key }) => {
  return (
    <div className={styles.post} key={key}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.03.23</span>
          <span>-</span>
          <span className={styles.category}>{post.catSlug}</span>
        </div>
        <Link href="/">
          <h1 className={styles.title}>{post.title}</h1>
        </Link>
        <p className={styles.desc}>
          {post.desc}
        </p>
        <Link href="/" className={styles.button}>
          Read More
        </Link>
      </div>
    </div>
  );
};
export default Card;
