import Image from 'next/image';
import styles from './cart.module.css';
import Link from 'next/link';

const Card = () => {
  return (
    <div className={styles.post}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.03.23</span>
          <span>-</span>
          <span className={styles.category}>Coding</span>
        </div>
        <Link href="/">
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur est
          provident molestiae fuga! Sunt fuga dolore molestias fugiat
          accusantium numquam obcaecati reiciendis est, quidem minus voluptate
          repudiandae praesentium nam a?
        </p>
        <Link href="/" className={styles.button}>
          Read More
        </Link>
      </div>
    </div>
  );
};
export default Card;
