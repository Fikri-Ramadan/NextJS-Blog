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
          <div className={styles.title}>Tech Info</div>
        </div>
        <div className={styles.desc}>
          <span className={styles.webTitle}>Tech Info</span>, your go-to
          destination for all things tech-related! Our mission is to keep you
          informed, inspired, and engaged in the ever-evolving world of
          technology. Whether you&apos;re a tech enthusiast, a curious novice,
          or a seasoned professional,{' '}
          <span className={styles.webTitle}>Tech Info</span> offers a diverse
          range of articles, tutorials, and insights to cater to your interests.
        </div>
        <div className={styles.social}>
          <Link href="https://www.instagram.com/_fikri_ramadan_">
            <Image src="/instagram.png" alt="" width={18} height={18} />
          </Link>
          <Link href="https://www.github.com/Fikri-Ramadan">
            <Image src="/github.png" alt="" width={18} height={18} />
          </Link>
        </div>
      </div>

      <div className={styles.linkContainer}>
        <div className={styles.links}>
          <div className={styles.linkTitle}>Links</div>
          <Link href="/" className={styles.link}>
            Homepage
          </Link>
          <Link href="#post" className={styles.link}>
            Blog
          </Link>
          <Link href="mailto:fikrinr.tech@gmail.com" className={styles.link}>
            Contact
          </Link>
        </div>
        <div className={styles.links}>
          <div className={styles.linkTitle}>Tags</div>
          <Link href="/blog?cat=backend" className={styles.link}>
            backend
          </Link>
          <Link href="/blog?cat=frontend" className={styles.link}>
            frontend
          </Link>
          <Link href="/blog?cat=fullstack" className={styles.link}>
            fullstack
          </Link>
          <Link href="/blog?cat=devops" className={styles.link}>
            devops
          </Link>
        </div>
        <div className={styles.links}>
          <div className={styles.linkTitle}>Socials</div>
          <Link
            href="https://www.instagram.com/_fikri_ramadan_"
            className={styles.link}
          >
            Instagram
          </Link>
          <Link
            href="https://www.github.com/Fikri-Ramadan"
            className={styles.link}
          >
            Github
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
