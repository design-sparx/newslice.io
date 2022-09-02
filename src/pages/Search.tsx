import { Container, SimpleGrid, Text } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Wrapper from './Wrapper';
import GeneralArticles from '../data/BingNews/topicUsGeneral.json';
import BusinessArticles from '../data/BingNews/topicUsBusiness.json';
import EntertainmentArticles from '../data/BingNews/topicUsEntertainment.json';
import EntertainmentTvArticles from '../data/BingNews/topicUsEntertainment_MovieAndTV.json';
import EntertainmentMusicArticles from '../data/BingNews/topicUsEntertainment_Music.json';
import HealthArticles from '../data/BingNews/topicUsHealth.json';
import PoliticsArticles from '../data/BingNews/topicUsPolitics.json';
import ProductsArticles from '../data/BingNews/topicUsProducts.json';
import ScienceAndTechArticles from '../data/BingNews/topicUsScienceAndTechnology.json';
import TechnologyArticles from '../data/BingNews/topicUsTechnology.json';
import ScienceArticles from '../data/BingNews/topicUsScience.json';
import SportsArticles from '../data/BingNews/topicUsSports.json';
import GolfArticles from '../data/BingNews/topicUsSports_Golf.json';
import NbaArticles from '../data/BingNews/topicUsSports_NBA.json';
import CbbArticles from '../data/BingNews/topicUsSports_CBB.json';
import MlbArticles from '../data/BingNews/topicUsSports_MLB.json';
import CfbArticles from '../data/BingNews/topicUsSports_CFB.json';
import NflArticles from '../data/BingNews/topicUsSports_NFL.json';
import NhlArticles from '../data/BingNews/topicUsSports_NHL.json';
import SoccerArticles from '../data/BingNews/topicUsSports_Soccer.json';
import TennisArticles from '../data/BingNews/topicUsSports_Tennis.json';
import WorldArticles from '../data/BingNews/topicUsWorld.json';
import AfricaArticles from '../data/BingNews/topicUsWorld_Africa.json';
import AmericaArticles from '../data/BingNews/topicUsWorld_Americas.json';
import AsiaArticles from '../data/BingNews/topicUsWorld_Asia.json';
import EuropeArticles from '../data/BingNews/topicUsWorld_Europe.json';
import UsArticles from '../data/BingNews/topicUs_US.json';
import UsNorthEastArticles from '../data/BingNews/topicUs_US_Northeast.json';
import UsSouthArticles from '../data/BingNews/topicUs_US_South.json';
import MidwestArticles from '../data/BingNews/topicUs_US_Midwest.json';
import WestArticles from '../data/BingNews/topicUs_US_West.json';
import _ from 'lodash';
import { Article } from '../constants/articles';
import { HorizontalCard } from '../components/ArticleCards';
import { Size } from '../constants/cardSizes';

const Search = (): JSX.Element => {
  const { query } = useParams();
  const [contextData, setContextData] = useState<Article[]>([]);

  useEffect(() => {
    const data = _.concat(
      GeneralArticles.value,
      BusinessArticles.value,
      EntertainmentArticles.value,
      // @ts-expect-error
      EntertainmentTvArticles.value,
      EntertainmentMusicArticles.value,
      HealthArticles.value,
      PoliticsArticles.value,
      ProductsArticles.value,
      TechnologyArticles.value,
      ScienceArticles.value,
      ScienceAndTechArticles.value,
      SportsArticles.value,
      GolfArticles.value,
      NbaArticles.value,
      CbbArticles.value,
      MlbArticles.value,
      CfbArticles.value,
      NflArticles.value,
      NhlArticles.value,
      SoccerArticles.value,
      TennisArticles.value,
      WorldArticles.value,
      AfricaArticles.value,
      AsiaArticles.value,
      EuropeArticles.value,
      AmericaArticles.value,
      UsArticles.value,
      UsNorthEastArticles.value,
      UsSouthArticles.value,
      MidwestArticles.value,
      WestArticles.value,
    );

    if (query != null) {
      setContextData(
        _.filter(data, (d => d.name.toLowerCase().includes(query.toLowerCase()) ||
          d.name.toLowerCase() === query.toLowerCase())),
      );
    }
  }, [query]);

  return (
    <Wrapper>
      <Container fluid style={{ minHeight: '70vh' }}>
        {contextData?.length > 0 ?
          <SimpleGrid spacing='sm'>
            {contextData?.map(d => <HorizontalCard key={d.url} article={d} className='Card-Bg' size={Size.lg} />)}
          </SimpleGrid>
          : <Text>No results found</Text>
        }
      </Container>
    </Wrapper>
  );
};

export default Search;
