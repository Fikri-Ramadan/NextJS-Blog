'use client';
import { signOut } from 'next-auth/react';
import styles from './authLink.module.css';
import Link from 'next/link';
import { useState } from 'react';

const AuthLink = () => {
  // temporary
  const [isAuth, setIsAuth] = useState(true);

  const [open, isOpen] = useState(false);

  return (
    <>
      {!isAuth ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link} onClick={signOut}>
            Logout
          </span>
        </>
      )}
      <div className={styles.hamburger} onClick={() => isOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          {!isAuth ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLink;
