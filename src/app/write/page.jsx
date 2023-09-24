'use client';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { useState } from 'react';
import styles from './writePage.module.css';
import Image from 'next/image';

const WritePage = () => {
  const [value, setValue] = useState('');
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <input
        type="text"
        name="title"
        id="title"
        className={styles.titleInput}
        placeholder="Title"
      />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!isOpen)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {isOpen && (
          <div className={styles.add}>
            <button className={styles.addButton} >
              <Image src="/image.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton} >
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton} >
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Write your idea..."
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default WritePage;
