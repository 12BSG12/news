import { Button } from '@mui/material';
import React from 'react';
import WhatshotIcon from '@mui/icons-material/WhatshotOutlined';
import TimeIcon from '@mui/icons-material/AccessTimeOutlined';
import MessageIcon from '@mui/icons-material/TextsmsOutlined';
import TrendingIcon from '@mui/icons-material/TrendingUpOutlined';
import ListIcon from '@mui/icons-material/FormatListBulletedOutlined';
import styles from "./LeftMenu.module.scss";

export const LeftMenu = () => {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <Button>
            <WhatshotIcon/>
            Лента
            <TimeIcon/>
          </Button>
        </li>
        <li>
          <Button>
            <MessageIcon />
            Сообщения
          </Button>
        </li>
        <li>
          <Button>
            <TrendingIcon />
            Рейтинг BN
          </Button>
        </li>
        <li>
          <Button>
            <ListIcon />
            Подписки
          </Button>
        </li>
      </ul>
    </div>
  );
};
