import React from 'react';
import { Divider, Paper, Tab, Tabs, Typography } from '@mui/material';
import { Comment } from '../Comment';
import { AddCommentForm } from '../AddCommentForm';

export const PostComments: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <Paper elevation={0} sx={{ marginTop: '40px', p: '30px' }}>
      <div className="container">
        <Typography variant="h6" sx={{ marginBottom: '20px' }}>
          42 комментария
        </Typography>
        <Tabs
          onChange={(_, newValue) => setActiveTab(newValue)}
          sx={{ marginTop: '20px' }}
          value={activeTab}
          indicatorColor="primary"
          textColor="primary">
          <Tab label="Популярные" />
          <Tab label="По порядку" />
        </Tabs>
        <Divider />
        <AddCommentForm />
        <Comment
          user={{ fullname: 'Вася жОпа', avatarUrl: 'https://i.imgur.com/gf3TZMr.jpeg' }}
          text={`123`}
          createdAt={`5 часов`}
        />
      </div>
    </Paper>
  );
};
