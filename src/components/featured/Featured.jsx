import Image from 'next/image';
import styled from './featured.module.css';
import Link from 'next/link';
import axios from 'axios';

const getPopularPost = async () => {
  try {
    const { data } = await axios.get('http://localhost:3000/api/posts/popular');
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const Featured = async () => {
  const posts = await getPopularPost();
  const post = posts[0];

  return (
    <div className={styled.container}>
      <h1 className={styled.title}>
        <b>Hello, everyone!</b> Discover your innovation and creative ideas.
      </h1>
      <div className={styled.post}>
        {post.image && (
          <div className={styled.imageContainer}>
            <Image
              src="/p1.jpeg"
              alt="main image"
              fill
              className={styled.image}
            />
          </div>
        )}
        <div className={styled.postInfo}>
          <div className={styled.postTitle}>{post.title}</div>
          <div
            className={styled.postDesc}
            dangerouslySetInnerHTML={{
              __html:
                post.desc.length > 300
                  ? post.desc.substring(0, 300) + '<>...</>'
                  : post.desc,
            }}
          />
          <button className={styled.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
