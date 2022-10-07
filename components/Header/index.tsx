import { Paper, Button, IconButton, Avatar } from '@mui/material';
import { FC } from 'react';
import styles from './Header.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import CreateIcon from '@mui/icons-material/Create';
import MessageIcon from '@mui/icons-material/TextsmsOutlined';
import NotificationIcon from '@mui/icons-material/NotificationsNoneOutlined';

export const Header: FC = () => {
  return (
    <Paper>
      <div>
        <svg viewBox=" 0 0 24 25" id="site_logo">
          <path fill="#e8a427" d="M0 19h8.5v6H0v-6z"></path>
          <path d="M0 7h8.5v18l6.5-6V7h9V0H0v7z"></path>
          <path fill="rgba(0,0,0,0.15)" d="M7.5 19h1v6l-1-6z"></path>
        </svg>
        <div className={styles.searchBlock}>
          <SearchIcon />
          <input type="search" placeholder="Поиск" />
        </div>
        <Button>
          <CreateIcon />
        </Button>
      </div>
      <div>
        <IconButton aria-label="message">
          <MessageIcon />
        </IconButton>
        <IconButton aria-label="notification">
          <NotificationIcon />
        </IconButton>
        <Avatar variant="rounded" src='' />
      </div>
    </Paper>
  );
};
