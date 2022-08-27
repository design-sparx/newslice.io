import React from 'react';
import HomeSection from '../components/Home';
import Wrapper from './Wrapper';
import GeneralArticles from '../data/BingNews/topicUsGeneral.json';

const Home = (): JSX.Element => {
  return (
    <div>
      <Wrapper showFeed>
        <HomeSection
          headlines={GeneralArticles.value}
          categories={[]}
        />
      </Wrapper>
    </div>
  );
};

export default Home;
