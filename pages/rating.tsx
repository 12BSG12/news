import {
  Paper,
  Typography,
  Tabs,
  Tab,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import React from 'react';
import { FollowButton } from '../components/FollowButton';
import { MainLayout } from '../layouts/MainLayout';

const Rating = () => {
  const [value, setValue] = React.useState('0');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <MainLayout>
      <Paper sx={{ p: '20px 20px 0 20px', marginBottom: '20px' }} elevation={0}>
        <Typography variant="h5" sx={{ fontWeight: '700', fontSize: '30px', marginBottom: '6px' }}>
          Рейтинг сообществ и блогов
        </Typography>
        <Typography sx={{fontSize: '15px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, dolorem aut dolorum dignissimos magnam maxime alias perferendis aperiam eos atque assumenda soluta similique ad dolor provident numquam a consequatur vel.</Typography>
        <Tabs sx={{ marginTop: '10px' }} value={value} onChange={handleChange} indicatorColor="primary" textColor="primary">
          <Tab value="0" label="Октябрь" />
          <Tab value="1" label="За 3 месяца" />
          <Tab value="2" label="За всё время" />
        </Tabs>
      </Paper>
      <Paper elevation={0}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell/>
              <TableCell>Имя пользователя</TableCell>
              <TableCell align="right">Рейтинг</TableCell>
              <TableCell align="right"/>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                1
              </TableCell>
              <TableCell component="th" scope="row">
                Вася жОпа
              </TableCell>
              <TableCell align="right">540</TableCell>
              <TableCell align="right">
                <FollowButton />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </MainLayout>
  );
};

export default Rating;
