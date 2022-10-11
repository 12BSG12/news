import React from 'react';
import CachedIcon from '@mui/icons-material/CachedOutlined';
import BookmarkIcon from '@mui/icons-material/BookmarkBorder';
import ShareIcon from '@mui/icons-material/Share';
import ModeCommentIcon from '@mui/icons-material/ModeCommentOutlined';
import styles from './PostActions.module.scss';
import { IconButton } from '@mui/material';

export const PostActions = () => {
  return (
    <ul className={styles.actions}>
      <li>
        <IconButton>
          <ModeCommentIcon />
        </IconButton>
        4
      </li>
      <li>
        <IconButton>
          <CachedIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <BookmarkIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </li>
    </ul>
  );
};
