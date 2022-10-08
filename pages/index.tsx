import { Paper, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Header } from '../components/Header';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>TJournal</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"></link>
      </Head>
      <Header />
      <div className="leftSide">left</div>
      <div className="content">
        <Paper elevation={0} sx={{ p: '20px' }}>
          <Typography variant="h5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quaerat molestiae vel
            sit, enim, in quisquam optio, perferendis eaque non dignissimos corrupti magnam. Rerum
            nihil optio laborum commodi recusandae repellendus?
          </Typography>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quaerat molestiae vel
            sit, enim, in quisquam optio, perferendis eaque non dignissimos corrupti magnam. Rerum
            nihil optio laborum commodi recusandae repellendus?
          </Typography>
          <Image src='https://via.placeholder.com/540x600' alt='' layout='fill'/>
        </Paper>
      </div>
      <div className="rightSide">right</div>
    </div>
  );
};

export default Home;
