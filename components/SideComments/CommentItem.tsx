import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import styles from './SideComments.module.scss'

export const CommentItem = () => {
  return (
    <div className={styles.commentItem}>
      <div className={styles.userInfo}>
        <Image src='https://i.imgur.com/gf3TZMr.jpeg' width={24} height={24} alt='User Avatar'/>
        <Link href={'/profile/' + 1}>
          <a>
            <b>Вася жОпа</b>
          </a>
        </Link>
      </div>
      <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ea officiis dolore dicta, quo at ut asperiores delectus maxime laborum explicabo adipisci non dolorem excepturi tempore incidunt aliquam doloribus enim!</p>
      <Link href={'/news/' + 1}>
        <a>
          <span className={styles.postTitle}>Lorem ipsum, dolor sit amet</span>
        </a>
      </Link>
    </div>
  );
};
