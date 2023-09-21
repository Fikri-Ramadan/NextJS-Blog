import Image from 'next/image';
import Link from 'next/link';
import styles from './menuList.module.css';

const MenuList = ({ withImage = false }) => {
  return (
    <>
      <h2 className={styles.subtitle}>Chosen by editor</h2>
      <h1 className={styles.title}>Editor Picks</h1>
      <div className={styles.items}>
        <div className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <div className={`${styles.category} ${styles.food}`}>food</div>
            <Link href="/">
              <h3 className={styles.postTitle}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
            </Link>
            <div className={styles.detail}>
              <span className={styles.username}>John Cena</span>
              <span> - </span>
              <span className={styles.date}>11.03.23</span>
            </div>
          </div>
        </div>

        <div className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <div className={`${styles.category} ${styles.travel}`}>travel</div>
            <Link href="/">
              <h3 className={styles.postTitle}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
            </Link>
            <div className={styles.detail}>
              <span className={styles.username}>John Cena</span>
              <span> - </span>
              <span className={styles.date}>11.03.23</span>
            </div>
          </div>
        </div>

        <div className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <div className={`${styles.category} ${styles.style}`}>style</div>
            <Link href="/">
              <h3 className={styles.postTitle}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
            </Link>
            <div className={styles.detail}>
              <span className={styles.username}>John Cena</span>
              <span> - </span>
              <span className={styles.date}>11.03.23</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuList;
