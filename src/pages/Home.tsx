import React from 'react';
import HomeSection from '../components/Home';
import Wrapper from './Wrapper';
import GeneralArticles from '../data/BingNews/topicUsGeneral.json';
import { Helmet } from 'react-helmet';

const Home = (): JSX.Element => {
  return (
    <div>
      <Wrapper showFeed showRight>
        <Helmet>
          <title>Newslice</title>
        </Helmet>
        <HomeSection headlines={GeneralArticles.value} />
      </Wrapper>
    </div>
  );
};

export default Home;
