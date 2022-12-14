import { Paper, Button, IconButton, Avatar } from '@mui/material';
import { FC, useState } from 'react';
import styles from './Header.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import CreateIcon from '@mui/icons-material/CreateOutlined';
import MessageIcon from '@mui/icons-material/TextsmsOutlined';
import NotificationIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandIcon from '@mui/icons-material/ExpandMoreOutlined';
import UserIcon from '@mui/icons-material/AccountCircleOutlined';
import Link from 'next/link';
import { Auth } from '../Auth';
import { useAppSelector } from '../../redux/hooks';
import { selectUserData } from '../../redux/slices/user';

export const Header: FC = () => {
  const userData = useAppSelector(selectUserData)

  const [value, setValue] = useState<string>('');
  const [auth, setAuth] = useState<boolean>(false);

  const openAuthDialog = () => {
    setAuth(true);
  };

  const closeAuthDialog = () => {
    setAuth(false);
  };

  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className={styles.headerLeft}>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Link href="/">
          <a>
            <svg className={styles.logo} id="site_logo" viewBox="0 0 512 512">
              <path d="M509.238,199.07c-3.6-10.085-10.8-18.84-14.945-28.8   c-7.18-17.26-13.859-34.78-19.585-52.57c-4.979-15.455-6.614-32.15-12.84-46.995c-8.965-21.38-28.439-24.195-44.145-6.955   c-7.905,8.685-13.2,19.77-19.575,29.825c-7.24,11.44-13.12,24.02-21.84,34.17c-13.91,16.185-29.95,12.47-37.351-7.505   c-1.869-5.055-2.55-10.56-3.729-15.865c-4.72-21.18-7.63-42.965-14.53-63.405c-10.797-32-34.457-46.67-60.265-38.945   c-19.945,5.97-39.265,14.03-61.155,21.995c2.493,4.79,5.732,10.07,8.028,15.74c1.688,4.175,3.002,8.855,2.985,13.305   c-0.07,16.03-0.047,32.12-1.49,48.06c-0.965,10.675-0.882,25.705-7.425,30.665c-10.837,8.215-18.728-5.81-25.81-13.2   c-7.86-8.195-14.235-17.8-21.427-26.655c-4.788-5.89-9.353-12.105-14.913-17.2c-30.96-28.345-64.113-20.01-80.49,20.285   c-17.68,43.505-24.117,91.455-54.647,130c-10.43,13.17,2.788,30.85,20.828,30.315c8.66-0.265,17.328-2.825,25.902-2.42   c4.337,0.205,11.92,4.396,12.167,7.285c2.723,31.785,26.212,41.29,51.167,49.72c23.548,7.96,47.935,14.62,62.042,40.521   c18.125-38.075,12.303-75.641,10.485-112.95c9.417,26.689,10.827,54.055,5.537,81.16c-3.16,16.194-6.853,34.81-17.012,46.524   c-15.533,17.915-17.415,35.455-14.833,57.101c2.605,21.805,1.268,44.055,2.328,66.08c0.33,6.885,0.71,17.185,4.827,19.66   c6.26,3.755,18.835,5.72,23.38,1.97c13.925-11.49,27.21-24.79,37.215-39.745c14.507-21.695,33.227-33.67,58.797-35.811   c6.505-0.545,13.018-1.01,19.522-1.56c36.905-3.12,53.945-16.63,59.16-52.815c5.8-40.229,8.365-80.925,12.455-121.404   c1.85-18.335,3.22-36.765,6.2-54.925c2.755-16.765,9.395-24.92,20.26-29.175c-35.38,55.335-10.96,119.16-28.68,177   c1.779,0.625,3.564,1.25,5.34,1.88c4.46-2.864,8.66-6.329,13.46-8.435c4.899-2.155,10.319-3.36,15.64-4.32   c25.41-4.6,27.99-7.114,26.385-32.984c-0.755-12.07,2.45-20.09,14.535-23.601c15.04-4.364,21.085-15.245,18.976-29.895   c-2.495-17.32,1.854-25.94,21.415-26.84C509.639,226.525,515.344,216.17,509.238,199.07z M252.354,82.055   c-2.663,10.295-18.578,5.925-15.91-4.385c1.13-4.38,3.16-9,2.175-13.57c-0.948-4.395,1.247-8.91,5.762-10.15   c4.147-1.14,9.2,1.365,10.147,5.765C256.231,67.6,254.321,74.455,252.354,82.055z M302.311,128.86   c-1.827,5.19-4.59,9.435-9.447,12.285c-3.893,2.28-8.484,3.17-12.938,2.62l-0.072,0.105c-0.025-0.04-0.05-0.08-0.075-0.12   c-0.928-0.12-1.85-0.285-2.755-0.535c-6.482-1.78-11.993-7.21-14.226-13.64c-0.917-1.565-1.68-3.255-2.31-5.065   c-0.508-1.47-1.123-2.89-1.63-4.36c-1.673-4.825-0.643-10.78,1.755-15.225c0.92-3.405,2.63-6.595,5.162-9.125   c8.131-8.13,20.878-7.63,29.073,0C303.631,103.98,306.241,117.69,302.311,128.86z M305.136,75.53   c-3.147,10.125-19.077,5.8-15.91-4.39c0.743-2.395,1.073-4.095,1.118-6.21c0.027-1.32,0.047-2.655-0.115-3.97   c0.17,1.375-0.96-2.64-0.173-0.875c-1.835-4.11-1.229-8.835,2.96-11.29c3.561-2.085,9.453-1.145,11.288,2.96   C307.621,59.175,307.533,67.81,305.136,75.53z" />
            </svg>
          </a>
        </Link>
        <div className={styles.searchBlock}>
          <SearchIcon />
          <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="??????????" />
        </div>
        <Link href="/write">
          <a>
            <Button className={styles.penBtn} variant="contained">
              ?????????? ????????????
              <CreateIcon color="inherit" />
            </Button>
          </a>
        </Link>
      </div>
      <div className={styles.headerRight}>
        {userData ? (
          <>
            <IconButton aria-label="message">
              <MessageIcon />
            </IconButton>
            <IconButton aria-label="notification">
              <NotificationIcon />
            </IconButton>
            <Link href="/profile/1">
              <a className={styles.profLink}>
                <Avatar className={styles.avatar} variant="rounded" src="" />
                <ExpandIcon />
              </a>
            </Link>
          </>
        ) : (
          <div className={styles.loginButton} onClick={openAuthDialog}>
            <UserIcon />
            ??????????
          </div>
        )}
      </div>
      <Auth onClose={closeAuthDialog} visible={auth} />
    </Paper>
  );
};
