import React from 'react';
import Link from 'next/link';
import { Paper, Avatar, Typography, Button, Tabs, Tab, AvatarGroup } from '@mui/material';
import {
  SettingsOutlined as SettingsIcon,
  TextsmsOutlined as MessageIcon,
} from '@mui/icons-material';

import { Post } from '../../components/Post';
import { MainLayout } from '../../layouts/MainLayout';
import styles from './Profile.module.scss';

export default function Profile() {
  const [value, setValue] = React.useState('0');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <MainLayout contentFullWidth hideComments>
      <Paper sx={{ p: '20px 20px 0 20px', marginBottom: '30px' }} elevation={0}>
        <div className={styles.avatar}>
          <div>
            <Avatar
              sx={{ width: '120px', height: '120px', borderRadius: '6px' }}
              src="https://i.imgur.com/gf3TZMr.jpeg"
            />
            <Typography style={{ fontWeight: 'bold', marginTop: '10px' }} variant="h4">
              Amon Bower
            </Typography>
          </div>
          <div>
            <Link href="/profile/settings">
              <Button className={styles.settingBtn} variant="contained">
                <SettingsIcon color="inherit" />
              </Button>
            </Link>
            <Button sx={{ height: '42px' }} variant="contained" color="primary">
              <MessageIcon sx={{ marginRight: '10px' }} />
              Написать
            </Button>
          </div>
        </div>
        <div className={styles.newSubscribers}>
          <Typography sx={{ fontWeight: 'bold', color: '#35AB66', marginBottom: '15px' }}>
            +208
          </Typography>
          <Typography sx={{ marginLeft: '10px' }}>2 подписчика</Typography>
        </div>
        <Typography>На проекте с 15 сен 2016</Typography>
        <Tabs
          sx={{ marginTop: '20px' }}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary">
          <Tab value="0" label="Статьи" />
          <Tab value="1" label="Комментарии" />
          <Tab value="2" label="Закладки" />
        </Tabs>
      </Paper>
      <div className={styles.subscribersBody}>
        <div className={styles.subscribersPost}>
          <Post />
        </div>
        <Paper sx={{ width: '300px', p: '20px', marginBottom: '20px' }} elevation={0}>
          <b>Подписчики</b>
          <div className={styles.subscribersAvatar}>
            <AvatarGroup total={5}>
              <Avatar src="https://i.imgur.com/gf3TZMr.jpeg" />
              <Avatar src="https://i.imgur.com/gf3TZMr.jpeg" />
              <Avatar src="https://i.imgur.com/gf3TZMr.jpeg" />
              <Avatar src="https://i.imgur.com/gf3TZMr.jpeg" />
            </AvatarGroup>
          </div>
        </Paper>
      </div>
    </MainLayout>
  );
}
