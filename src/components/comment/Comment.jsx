import Image from 'next/image';
import styles from './comment.module.css';

const Comment = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Comments</div>
      <div className={styles.inputComment}>
        <textarea
          name="comment"
          placeholder="write your comment..."
          className={styles.input}
        />
        <button className={styles.button}>Send</button>
      </div>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.userProfile}>
            <div className={styles.imageContainer}>
              <Image
                src="/p1.jpeg"
                alt=""
                width={30}
                height={30}
                className={styles.image}
              />
            </div>
            <div className={styles.userDetail}>
              <div className={styles.username}>John Cena</div>
              <div className={styles.date}>23.03.23</div>
            </div>
          </div>
          <div className={styles.commentMessage}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </div>
        </div>

        <div className={styles.comment}>
          <div className={styles.userProfile}>
            <div className={styles.imageContainer}>
              <Image
                src="/p1.jpeg"
                alt=""
                width={30}
                height={30}
                className={styles.image}
              />
            </div>
            <div className={styles.userDetail}>
              <div className={styles.username}>John Cena</div>
              <div className={styles.date}>23.03.23</div>
            </div>
          </div>
          <div className={styles.commentMessage}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </div>
        </div>

        <div className={styles.comment}>
          <div className={styles.userProfile}>
            <div className={styles.imageContainer}>
              <Image
                src="/p1.jpeg"
                alt=""
                width={30}
                height={30}
                className={styles.image}
              />
            </div>
            <div className={styles.userDetail}>
              <div className={styles.username}>John Cena</div>
              <div className={styles.date}>23.03.23</div>
            </div>
          </div>
          <div className={styles.commentMessage}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Dolorem expedita
            accusantium, officiis, magni odio tenetur consequuntur aspernatur
            rerum pariatur veniam earum! Qui, eligendi tempore id placeat ab
            explicabo unde! Dolorum.
          </div>
        </div>

        <div className={styles.comment}>
          <div className={styles.userProfile}>
            <div className={styles.imageContainer}>
              <Image
                src="/p1.jpeg"
                alt=""
                width={30}
                height={30}
                className={styles.image}
              />
            </div>
            <div className={styles.userDetail}>
              <div className={styles.username}>John Cena</div>
              <div className={styles.date}>23.03.23</div>
            </div>
          </div>
          <div className={styles.commentMessage}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
