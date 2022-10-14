import React from 'react';
import { IconButton, Menu, MenuItem, Paper, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import styles from './CommentPost.module.scss';

interface CommentPostProps {
  user: {
    fullName: string;
  };
  post: {
    title: string;
  };
  text: string;
}

export const CommentPost: React.FC<CommentPostProps> = ({ user, post, text }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
      <Typography variant="h6" className={styles.title}>
        <a href="#">{post.title}</a>
        <IconButton onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
      </Typography>
      <Typography sx={{ marginTop: '10px', marginBottom: '15px' }}>{text}</Typography>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        elevation={3}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <MenuItem onClick={handleClose}>Удалить</MenuItem>
        <MenuItem onClick={handleClose}>Редактировать</MenuItem>
      </Menu>
    </Paper>
  );
};
