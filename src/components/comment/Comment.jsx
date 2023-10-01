'use client';

import Image from 'next/image';
import styles from './comment.module.css';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import useSWR from 'swr';
import { useState } from 'react';
import customFetch from '@/utils/customFetch';

const getComments = async (url) => {
  try {
    const res = await customFetch.get(url);
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const Comment = ({ postSlug }) => {
  const { status } = useSession();
  const [desc, setDesc] = useState('');

  const { data, isLoading, mutate } = useSWR(
    `/api/comments?postSlug=${postSlug}`,
    getComments
  );

  const submitHandler = async () => {
    await customFetch.post('/api/comments', {
      desc,
      postSlug,
    });
    setDesc('');
    mutate();
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Comments</div>
      {status === 'authenticated' ? (
        <div className={styles.inputComment}>
          <textarea
            name="comment"
            placeholder="write your comment..."
            className={styles.input}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className={styles.button} onClick={submitHandler}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write comment</Link>
      )}

      <div className={styles.comments}>
        {isLoading
          ? 'loading'
          : data?.map((item) => {
              return (
                <div className={styles.comment} key={item.id}>
                  <div className={styles.userProfile}>
                    {item?.user?.image && (
                      <div className={styles.imageContainer}>
                        <Image
                          src={item.user.image}
                          alt=""
                          width={30}
                          height={30}
                          className={styles.image}
                        />
                      </div>
                    )}
                    <div className={styles.userDetail}>
                      <div className={styles.username}>{item.user.name}</div>
                      <div className={styles.date}>{item.createdAt}</div>
                    </div>
                  </div>
                  <div className={styles.commentMessage}>{item.desc}</div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Comment;
