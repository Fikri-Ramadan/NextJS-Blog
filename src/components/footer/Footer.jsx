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
              src="/logo.png"
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />
          </div>
          <div className={styles.title}>Tech Talk</div>
        </div>
        <div className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          perspiciatis esse ratione totam exercitationem tenetur dicta
          laboriosam, iusto eveniet minima reiciendis optio quos ducimus maiores
          vero aliquam doloremque deleniti veniam.
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
