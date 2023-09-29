import Image from 'next/image';
import styles from './singlePage.module.css';
import Menu from '@/components/menu/Menu';
import Comment from '@/components/comment/Comment';
import axios from 'axios';

const getSinglePage = async (slug) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/posts/${slug}`);
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const { post } = await getSinglePage(slug);

  return (
    <div className={styles.container}>
      <div className={styles.postHeader}>
        <div className={styles.textContainer}>
          <div className={styles.title}>{post.title}</div>
          <div className={styles.profileContainer}>
            {post.user.image && (
              <div className={styles.avatarContainer}>
                <Image
                  src={post.user.image}
                  alt=""
                  fill
                  className={styles.avatar}
                />
              </div>
            )}
            <div className={styles.profileInfo}>
              <div className={styles.username}>{post.user.name}</div>
              <div className={styles.date}>
                {post.createdAt.substring(0, 10)}
              </div>
            </div>
          </div>
        </div>
        {post.image && (
          <div className={styles.imageContainer}>
            <Image src={post.image} alt="" fill className={styles.image} />
          </div>
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.desc}
            dangerouslySetInnerHTML={{ __html: post?.desc }}
          />

          <Comment postSlug={slug} />
        </div>
        <div className={styles.menu}>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
