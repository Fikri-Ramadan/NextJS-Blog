import styles from './navbar.module.css';
import AuthLink from '../authLink/AuthLink';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../themeToggle/ThemeToggle';

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.social}>
        <Link href="https://www.instagram.com/_fikri_ramadan_">
          <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        </Link>
        <Link href="https://www.github.com/Fikri-Ramadan">
          <Image src="/github.png" alt="github" width={24} height={24} />
        </Link>
      </div>
      <div className={styles.logo}>Tech Info</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link href="mailto:fikrinr.tech@gmail.com" className={styles.link}>
          Contact
        </Link>
        <AuthLink className={styles.link} />
      </div>
    </nav>
  );
};

export default Navbar;
