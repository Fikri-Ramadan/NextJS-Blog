import Image from 'next/image';
import styles from './footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.profileContainer}>
          <div className={styles.imageContainer}>
            <Image
              src="/favicon.png"
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />
          </div>
          <div className={styles.title}>Tech Talk</div>
        </div>
        <div className={styles.desc}>
          <span className={styles.webTitle}>Tech Info</span>, your go-to
          destination for all things tech-related! Our mission is to keep you
          informed, inspired, and engaged in the ever-evolving world of
          technology. Whether you&apos;re a tech enthusiast, a curious novice, or
          a seasoned professional,{' '}
          <span className={styles.webTitle}>Tech Info</span> offers a diverse
          range of articles, tutorials, and insights to cater to your interests.
        </div>
        <div className={styles.social}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>

      <div className={styles.linkContainer}>
        <div className={styles.links}>
          <div className={styles.linkTitle}>Links</div>
          <Link href="/" className={styles.link}>
            Homepage
          </Link>
          <Link href="/" className={styles.link}>
            Blog
          </Link>
          <Link href="/" className={styles.link}>
            About
          </Link>
          <Link href="/" className={styles.link}>
            Contact
          </Link>
        </div>
        <div className={styles.links}>
          <div className={styles.linkTitle}>Tags</div>
          <Link href="/" className={styles.link}>
            Style
          </Link>
          <Link href="/" className={styles.link}>
            Fashion
          </Link>
          <Link href="/" className={styles.link}>
            Coding
          </Link>
          <Link href="/" className={styles.link}>
            Travel
          </Link>
        </div>
        <div className={styles.links}>
          <div className={styles.linkTitle}>Socials</div>
          <Link href="/" className={styles.link}>
            Facebook
          </Link>
          <Link href="/" className={styles.link}>
            Instagram
          </Link>
          <Link href="/" className={styles.link}>
            Tiktok
          </Link>
          <Link href="/" className={styles.link}>
            Youtube
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
