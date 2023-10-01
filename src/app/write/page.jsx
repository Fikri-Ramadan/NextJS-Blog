'use client';

import 'react-quill/dist/quill.bubble.css';
import { useState, useEffect } from 'react';
import styles from './writePage.module.css';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { app } from '@/utils/firebase';
import customFetch from '@/utils/customFetch';
import dynamic from 'next/dynamic';

const storage = getStorage(app);

const WritePage = () => {
  const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

  const { status } = useSession();
  const router = useRouter();

  const [isOpen, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [catSlug, setCatSlug] = useState('');
  const [value, setValue] = useState('');
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState('');
  const [categories, setCategories] = useState('');

  useEffect(() => {
    // GET ALL CATEGORIES
    const getAllCategories = async () => {
      const { data } = await customFetch.get('/api/categories');
      return data;
    };

    getAllCategories().then((data) => {
      setCategories(data);
    });

    // For upload image to FIREBASE
    const upload = () => {
      const customFile = new Date().getTime + file.name;

      const storageRef = ref(storage, customFile);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  if (status === 'loading') {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === 'unauthenticated') {
    router.push('/');
  }

  const slugify = (str) => {
    return str
      .trim()
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const submitHandler = async () => {
    const res = await customFetch.post('/api/posts', {
      title: title,
      desc: value,
      catSlug: catSlug || 'other',
      slug: slugify(title),
      image: media,
    });

    if (res.status === 200) {
      const { data } = res;
      router.push(`/posts/${data.slug}`);
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        name="title"
        id="title"
        className={styles.titleInput}
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className={styles.editor}>
        <div className={styles.action}>
          <select
            className={styles.select}
            defaultValue={'other'}
            onChange={(e) => setCatSlug(e.target.value)}
          >
            <option value="other" className={styles.option} disabled hidden>
              Select an Category
            </option>
            {categories &&
              categories.map((category) => {
                return (
                  <>
                    <option
                      value={category.slug}
                      key={category.slug}
                      className={styles.option}
                    >
                      {category.slug}
                    </option>
                  </>
                );
              })}
          </select>
          <button className={styles.button} onClick={() => setOpen(!isOpen)}>
            <Image src="/plus.png" alt="" width={16} height={16} />
          </button>
        </div>
        {isOpen && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <label className={styles.label} htmlFor="image">
                <Image src="/image.png" alt="" width={16} height={16} />
              </label>
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
            <input
              type="file"
              name="image"
              id="image"
              className={styles.fileInput}
              onChange={(e) => setFile(e.target.files[0])}
            />
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
      <button className={styles.publish} onClick={submitHandler}>
        Publish
      </button>
    </div>
  );
};

export default WritePage;
