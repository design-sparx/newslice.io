import React from 'react';
import HomeSection from '../components/Home';
import Wrapper from './Wrapper';
import GeneralArticles from '../data/BingNews/topicUsGeneral.json';

const Home = (): JSX.Element => {
  return (
    <div>
      <Wrapper showFeed showRight>
        <HomeSection headlines={GeneralArticles.value} />
      </Wrapper>
    </div>
  );
};

export default Home;
