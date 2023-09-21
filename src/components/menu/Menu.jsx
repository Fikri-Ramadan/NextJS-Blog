import Image from 'next/image';
import styles from './menu.module.css';
import Link from 'next/link';

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <div className={styles.item}>
          <div className={styles.textContainer}>
            <div className={`${styles.category} ${styles.culture}`}>culture</div>
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
          <div className={styles.textContainer}>
            <div className={`${styles.category} ${styles.fashion}`}>fashion</div>
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
          <div className={styles.textContainer}>
            <div className={`${styles.category} ${styles.coding}`}>Coding</div>
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


{/* break */}

      <h2 className={styles.subtitle}>Dicover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categories}>
        <Link href="/" className={`${styles.link} ${styles.culture}`}>culture</Link>
        <Link href="/" className={`${styles.link} ${styles.culture}`}>culture</Link>
        <Link href="/" className={`${styles.link} ${styles.culture}`}>culture</Link>
        <Link href="/" className={`${styles.link} ${styles.culture}`}>culture</Link>
        <Link href="/" className={`${styles.link} ${styles.culture}`}>culture</Link>
      </div>
        

{/* break */}


      <h2 className={styles.subtitle}>Chosen by editor</h2>
      <h1 className={styles.title}>Editor Picks</h1>
      <div className={styles.items}>
        <div className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
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
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
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
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
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
    </div>
  );
};

export default Menu;
