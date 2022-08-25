import React from 'react';
import { Article } from '../../constants/articles';
import HeadlinesSection from './Headlines';
import FeedSection from './Feeds';
import { Grid } from '@mantine/core';
import PopularSection from './Popular';
import TrendingSection from './Trending';
import RecentSection from './Recent';
import CategoriesSection from './Categories';

interface HomeProps {
  feed: Article[];
  headlines: Article[];
  popular: Article[];
  recent: Article[];
  trending: Article[];
  totalResults: number;
  categories: Array<{
    title: string
    articles: Article[]
  }>;
}

const HomeSection = ({
                       feed,
                       headlines,
                       popular,
                       recent,
                       trending,
                       totalResults,
                       categories,
                     }: HomeProps): JSX.Element => {

  return (
    <div>
      <FeedSection articles={feed} />
      <Grid gutter='xl'>
        <Grid.Col lg={8}>
          <HeadlinesSection articles={headlines} />
          <CategoriesSection categories={categories} />
        </Grid.Col>
        <Grid.Col lg={4}>
          <PopularSection articles={popular} />
          <TrendingSection articles={trending} />
          <RecentSection articles={recent} />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default HomeSection;
