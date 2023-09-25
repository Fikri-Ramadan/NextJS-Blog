'use client';
import { signOut, useSession } from 'next-auth/react';
import { useState } from 'react';
import styles from './authLink.module.css';
import Link from 'next/link';

const AuthLink = () => {
  const [open, isOpen] = useState(false);

  const { status } = useSession();

  if (status === 'loading') {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <>
      {status === 'unauthenticated' ? (
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
              <span onClick={signOut}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLink;
