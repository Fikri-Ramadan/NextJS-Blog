'use client';
import { signOut, useSession } from 'next-auth/react';
import { useState } from 'react';
import styles from './authLink.module.css';
import Link from 'next/link';

const AuthLink = () => {
  const [isOpen, setOpen] = useState(false);

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
      <div className={styles.hamburger} onClick={() => setOpen(!isOpen)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {isOpen && (
        <div className={styles.responsiveMenu} onClick={() => setOpen(!isOpen)}>
          <Link href="/">Homepage</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          {status === 'unauthenticated' ? (
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
