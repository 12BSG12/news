import React from 'react';
import { FullPost } from '../../components/FullPost';
import { MainLayout } from '../../layouts/MainLayout';

const News = () => {
  return (
    <MainLayout contentFullWidth>
      <FullPost/>
    </MainLayout>
  );
};

export default News;
