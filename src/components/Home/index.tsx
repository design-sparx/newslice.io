import React from 'react';
import { Article } from '../../constants/articles';
import HeadlinesSection from './Headlines';

interface HomeProps {
  headlines: Article[];
}

const HomeSection = ({headlines }: HomeProps): JSX.Element => {
  return (
    <div>
      <HeadlinesSection articles={headlines} />
    </div>
  );
};

export default HomeSection;
