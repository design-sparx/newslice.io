import React from 'react';
import { Article } from '../../constants/articles';
import HeadlinesSection from './Headlines';
import FeedSection from './Feeds';
import { Grid } from '@mantine/core';
import PopularSection from './Popular';
import TrendingSection from './Trending';
import RecentSection from './Recent';

interface HomeProps {
  articles: Article[];
  totalResults: number;
  categories: Array<{
    title: string
    articles: Article[]
  }>;
}

const HomeSection = ({ articles, totalResults, categories }: HomeProps): JSX.Element => {
  return (
    <div>
      <FeedSection articles={articles} />
      <Grid gutter="xl">
        <Grid.Col lg={8}>
          <HeadlinesSection articles={articles} />
          <RecentSection articles={articles} />
          {/* {categories.map(category =>
            <div key={category.title}>
              <CategoriesSection category={category.title} articles={category.articles} />
            </div>,
          )} */}
        </Grid.Col>
        <Grid.Col lg={4}>
          <PopularSection articles={articles} />
          <TrendingSection articles={articles} />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default HomeSection;
