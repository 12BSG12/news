import { Button } from '@mui/material';
import React from 'react';
import FireIcon from '@mui/icons-material/WhatshotOutlined';
import MessageIcon from '@mui/icons-material/TextsmsOutlined';
import TrendingIcon from '@mui/icons-material/TrendingUpOutlined';
import ListIcon from '@mui/icons-material/FormatListBulletedOutlined';
import styles from './LeftMenu.module.scss';
import Link from 'next/link';
import {useRouter} from 'next/router'

const menu = [
  { text: 'Лента', icon: <FireIcon />, path: '/' },
  { text: 'Сообщения', icon: <MessageIcon />, path: '/messages' },
  { text: 'Рейтинг RJ', icon: <TrendingIcon />, path: '/rating' },
  { text: 'Подписки', icon: <ListIcon />, path: '/follows' },
];

export const LeftMenu = () => {
  const router = useRouter()
  console.log(router)
  return (
    <div className={styles.menu}>
      <ul>
        {menu.map((item) => (
          <li key={item.path}>
            <Link href={item.path}>
              <a>
                <Button variant={router.asPath === item.path ? 'contained' : 'text'}>
                  {item.icon}
                  {item.text}
                </Button>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
