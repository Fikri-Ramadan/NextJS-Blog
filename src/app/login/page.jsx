'use client';
import { signIn, useSession } from 'next-auth/react';
import styles from './loginPage.module.css';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const LoginPage = () => {
  const { status } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/')
    }
  })

  if (status === 'loading') {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <button className={styles.button} onClick={() => signIn('google')}>
          Sign in with Google
        </button>
        <button className={styles.button}>Sign in with Github</button>
        <button className={styles.button}>Sign in with Facebook</button>
      </div>
    </div>
  );
};

export default LoginPage;
