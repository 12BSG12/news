import React from 'react';
import { Divider, Paper, Tab, Tabs, Typography } from '@mui/material';
import { Comment } from '../Comment';
import { AddCommentForm } from '../AddCommentForm';
import data from '../../data';

export const PostComments: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const comments = data.comments[activeTab === 0 ? 'popular' : 'new'];

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
        {comments.map((item) => (
          <Comment key={item.id} user={item.user} text={item.text} createdAt={item.createdAt} />
        ))}
      </div>
    </Paper>
  );
};
