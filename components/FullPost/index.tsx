import React from 'react';
import { Button, IconButton, Paper, Typography } from '@mui/material';
import styles from './FullPost.module.scss';
import { PostActions } from '../PostActions/PostActions';
import Image from 'next/image';
import Link from 'next/link';
import MessageIcon from '@mui/icons-material/TextsmsOutlined';
import PersonAddIcon from '@mui/icons-material/PersonAddAlt1Outlined';
export const FullPost = () => {
  return (
    <Paper elevation={0} className={styles.paper}>
      <div className={styles.body}>
        <Typography variant="h4" className={styles.title}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae molestiae eius dolor
          dignissimos voluptates quos quidem accusamus sed atque blanditiis asperiores temporibus,
          itaque ratione quod magnam debitis recusandae culpa beatae.
        </Typography>
        <div>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae molestiae eius dolor
            dignissimos voluptates quos quidem accusamus sed atque blanditiis asperiores temporibus,
            itaque ratione quod magnam debitis recusandae culpa beatae. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Dolorem in omnis error provident quidem ipsa recusandae
            cumque dolore est quam ratione distinctio accusantium ipsum, vitae illum magnam harum,
            quaerat nemo.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae molestiae eius dolor
            dignissimos voluptates quos quidem accusamus sed atque blanditiis asperiores temporibus,
            itaque ratione quod magnam debitis recusandae culpa beatae. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Dolorem in omnis error provident quidem ipsa recusandae
            cumque dolore est quam ratione distinctio accusantium ipsum, vitae illum magnam harum,
            quaerat nemo.
          </Typography>
          <PostActions />
        </div>
        <div className={styles.user}>
          <div className={styles.userInfo}>
            <Link href={`/profile/` + 1}>
              <a> 
                <Image src='https://i.imgur.com/gf3TZMr.jpeg' width='40px' height='40px' alt='user_photo'/>
                <b>Вася жОпа</b>
              </a>
            </Link>
            <span>+1685</span>
          </div>
          <div className={styles.blockBtn}>
            <Button className={styles.msgBtn} variant='contained'>
              <MessageIcon/>
            </Button>
            <Button className={styles.addBtn} variant='contained'>
              <PersonAddIcon/>
              Подписаться
            </Button>
          </div>
        </div>
      </div>
    </Paper>
  );
};
