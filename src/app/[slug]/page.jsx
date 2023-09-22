import Image from 'next/image';
import styles from './singlePage.module.css';
import Menu from '@/components/menu/Menu';
import Comment from '@/components/comment/Comment';

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.postHeader}>
        <div className={styles.textContainer}>
          <div className={styles.title}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </div>
          <div className={styles.profileContainer}>
            <div className={styles.avatarContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.profileInfo}>
              <div className={styles.username}>John Cenax</div>
              <div className={styles.date}>23.03.23</div>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              quidem labore repudiandae quas recusandae eveniet vitae harum
              assumenda, molestias facilis nostrum explicabo fugiat culpa
              suscipit nam porro, quaerat sunt! Repudiandae.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              quidem labore repudiandae quas recusandae eveniet vitae harum
              assumenda, molestias facilis nostrum explicabo fugiat culpa
              suscipit nam porro, quaerat sunt! Repudiandae. Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Voluptate, amet
              consequuntur. Dignissimos facilis numquam optio voluptas saepe,
              alias at. Nulla fugit eligendi cum. Sequi suscipit, cumque rerum
              eius accusamus quasi?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              dolorum natus vero molestiae sit quam in iste consequuntur, qui
              aliquam tempore inventore dolorem. Ducimus doloribus, nulla
              exercitationem itaque optio aliquid.
            </p>
          </div>

          <Comment />
        </div>
        <div className={styles.menu}>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
