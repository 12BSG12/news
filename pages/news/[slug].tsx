import React from 'react';
import { FullPost } from '../../components/FullPost';
import { PostComments } from '../../components/PostComments';
import { MainLayout } from '../../layouts/MainLayout';

const News = () => {
  return (
    <MainLayout contentFullWidth>
      <FullPost/>
      <PostComments/>
    </MainLayout>
  );
};

export default News;
