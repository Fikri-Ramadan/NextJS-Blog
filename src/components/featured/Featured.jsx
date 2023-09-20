import Image from 'next/image';
import styled from './featured.module.css';

const Featured = () => {
  return (
    <div className={styled.container}>
      <h1 className={styled.title}>
        <b>Hello, everyone!</b> Discover your innovation and creative ideas.
      </h1>
      <div className={styled.post}>
        <div className={styled.imageContainer}>
          <Image
            src="/p1.jpeg"
            alt="main image"
            fill
            className={styled.image}
          />
        </div>
        <div className={styled.postInfo}>
          <div className={styled.postTitle}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className={styled.postDesc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
            aliquid id voluptate natus, exercitationem unde soluta odit
            explicabo impedit itaque ab debitis, cumque tempore? Ipsam officiis
            assumenda aliquid repellendus molestiae.
          </div>
					<button className={styled.postBtn}>
						Read More
					</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
