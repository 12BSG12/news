import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './SideComments.module.scss';

interface CommentItemProps {
  user: {
    fullName: string;
    id: number;
    avatarUrl: string;
  };
  text: string;
  post: {
    title: string;
    id: number;
  };
}

export const CommentItem: React.FC<CommentItemProps> = ({ user, text, post }) => {
  return (
    <div className={styles.commentItem}>
      <div className={styles.userInfo}>
        <Image src={user.avatarUrl} width={24} height={24} alt="User Avatar" />
        <Link href={'/profile/' + 1}>
          <a>
            <b>{user.fullName}</b>
          </a>
        </Link>
      </div>
      <p className={styles.text}>{text}</p>
      <Link href={'/news/' + 1}>
        <a>
          <span className={styles.postTitle}>{post.title}</span>
        </a>
      </Link>
    </div>
  );
};
