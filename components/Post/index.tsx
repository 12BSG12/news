import React from 'react';
import { Paper, Typography } from '@mui/material';
import Image from 'next/image';
import styles from './Post.module.scss';
import { PostActions } from '../PostActions/PostActions';
import Link from 'next/link';

export const Post = () => {
  return (
    <Paper elevation={0} sx={{ p: '20px', borderRadius: '8px', marginBottom: '40px' }}>
      <Typography variant="h5" className={styles.title}>
        <Link href={`/news/` + '123'}>
          <a>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quaerat molestiae vel
            sit, enim, in quisquam optio, perferendis eaque non dignissimos corrupti magnam. Rerum
            nihil optio laborum commodi recusandae repellendus?
          </a>
        </Link>
      </Typography>
      <Typography sx={{ margin: '15px 0' }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quaerat molestiae vel sit,
        enim, in quisquam optio, perferendis eaque non dignissimos corrupti magnam. Rerum nihil
        optio laborum commodi recusandae repellendus?
      </Typography>
      <Image src="https://i.imgur.com/gf3TZMr.jpeg" alt="" width={600} height={400} />
      <PostActions />
    </Paper>
  );
};
