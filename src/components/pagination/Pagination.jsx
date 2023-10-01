'use client';
import { useRouter } from 'next/navigation';
import styles from './pagination.module.css';

const Pagination = ({ page, cat, hasPrev, hasNext }) => {
  const router = useRouter();

  const prevParams = cat
    ? `?page=${page - 1}&cat=${cat}`
    : `?page=${page - 1}`;
  const nextParams = cat
    ? `?page=${page + 1}&cat=${cat}`
    : `?page=${page + 1}`;

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => router.push(prevParams)}
      >
        {'<'}
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => router.push(nextParams)}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
