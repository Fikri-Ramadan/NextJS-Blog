import styles from './pagination.module.css'

const Pagination = () => {
  return <div className={styles.container}>
    <button className={styles.button}>{"<"}</button>
    <button className={styles.button}>{">"}</button>
  </div>;
};

export default Pagination;
