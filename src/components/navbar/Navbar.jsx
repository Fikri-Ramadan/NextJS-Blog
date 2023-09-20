import styles from './navbar.module.css';
import AuthLink from '../authLink/AuthLink';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../themeToggle/ThemeToggle';

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className={styles.logo}>Tech Talk</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <AuthLink className={styles.link} />
      </div>
    </nav>
  );
};

export default Navbar;
