import React from 'react';
import { Article } from '../../constants/articles';
import HeadlinesSection from './Headlines';
import CategoriesSection from './Categories';

interface HomeProps {
  headlines: Article[];
  totalResults: number;
  categories: Array<{
    title: string
    articles: Article[]
  }>;
}

const HomeSection = ({headlines, totalResults, categories }: HomeProps): JSX.Element => {

  return (
    <div>
      <HeadlinesSection articles={headlines} />
      <CategoriesSection categories={categories} />
    </div>
  );
};

export default HomeSection;
