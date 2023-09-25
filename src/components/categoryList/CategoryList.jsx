import Link from 'next/link';
import styles from './categoryList.module.css';
import Image from 'next/image';
import axios from 'axios';

const getCategories = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/categories');
    return res.data;
  } catch (error) {
    throw new Error('Failed');
  }
};

const CategoryList = async () => {
  const categories = await getCategories();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categories?.map((category) => {
          return (
            <Link
              href={`/blog?cat=${category.slug}`}
              className={`${styles.category} ${styles[category.slug]}`}
              key={category._id}
            >
              {category.image && <Image
                src={`${category.image}`}
                alt=""
                width={24}
                height={24}
                className={styles.image}
              />}
              {category.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
