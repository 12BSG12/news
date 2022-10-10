import { Paper, Button, IconButton, Avatar } from '@mui/material';
import { FC, useState } from 'react';
import styles from './Header.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import CreateIcon from '@mui/icons-material/CreateOutlined';
import MessageIcon from '@mui/icons-material/TextsmsOutlined';
import NotificationIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandIcon from '@mui/icons-material/ExpandMoreOutlined';
import Link from 'next/link';
export const Header: FC = () => {
  const [value, setValue] = useState<string>('')
  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className={styles.headerLeft}>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <svg className={styles.logo} viewBox=" 0 0 24 25" id="site_logo">
          <path fill="#e8a427" d="M0 19h8.5v6H0v-6z"></path>
          <path d="M0 7h8.5v18l6.5-6V7h9V0H0v7z"></path>
          <path fill="rgba(0,0,0,0.15)" d="M7.5 19h1v6l-1-6z"></path>
        </svg>
        <div className={styles.searchBlock}>
          <SearchIcon />
          <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Поиск" />
        </div>
        <Button className={styles.penBtn} variant="contained">
          Новая запись
          <CreateIcon color='inherit'/>
        </Button>
      </div>
      <div className={styles.headerRight}>
        <IconButton aria-label="message">
          <MessageIcon />
        </IconButton>
        <IconButton aria-label="notification">
          <NotificationIcon />
        </IconButton>
        <a href='/profile/1'>
          <Avatar className={styles.avatar} variant="rounded" src="" />
        </a>
        <ExpandIcon/>
      </div>
    </Paper>
  );
};
