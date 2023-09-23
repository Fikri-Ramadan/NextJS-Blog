import styles from './loginPage.module.css';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <button className={styles.button}>
          Sign in with Google
        </button>
        <button className={styles.button}>
          Sign in with Github
        </button>
        <button className={styles.button}>
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
