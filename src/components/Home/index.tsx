import React from 'react';
import { Article } from '../../constants/articles';
import HeadlinesSection from './Headlines';
import CategoriesSection from './Categories';

interface HomeProps {
  headlines: Article[];
  categories: Array<{
    title: string
    articles: Article[]
  }> | any;
}

const HomeSection = ({headlines, categories }: HomeProps): JSX.Element => {

  console.log(headlines);

  return (
    <div>
      <HeadlinesSection articles={headlines} />
      <CategoriesSection categories={categories} />
    </div>
  );
};

export default HomeSection;
