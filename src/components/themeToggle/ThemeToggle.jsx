'use client';

import Image from 'next/image';
import styles from './themeToggle.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggle}>
      <Image src="/sun.png" alt="sun" width={14} height={14} />
      <div
        className={styles.ball}
        style={theme === 'light' ? { left: 2 } : { right: 2 }}
      ></div>
      <Image src="/moon.png" alt="moon" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
