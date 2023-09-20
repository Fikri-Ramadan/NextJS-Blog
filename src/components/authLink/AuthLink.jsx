'use client';
import styles from './authLink.module.css';
import Link from 'next/link';
import { useState } from 'react';

const AuthLink = () => {
  // temporary
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      {!isAuth ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLink;
